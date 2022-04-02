import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, finalize, map, Observable, of, switchMap } from 'rxjs';
import { MinifiedCount, RequestCounters } from 'src/app/shared/data-models/minified-count.models';
import { Entity } from '../../../shared/data-models/entity.models';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})
export class UsersListPageComponent implements OnInit {

  usersList$!: Observable<Entity[]>;
  isLoading = false;

  queryParams$!: Observable<Params>;

  requestCounters: RequestCounters = {
    total: 0,
    total_pages: 1,
    page: 1,
    per_page: 0
  };
  searchParam = '';

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  setPagination(data: MinifiedCount<Entity>) {
    this.requestCounters = {
      total: data.total,
      total_pages: data.total_pages,
      page: data.page,
      per_page: data.per_page
    }
  }

  paginate = (array: Entity[], page_size: number, page_number: number) => {
    return array.slice(page_number * page_size, page_number * page_size + page_size);
  };

  getUsers(pagination: Params) {
    this.isLoading = true;
    this.usersList$ = this.usersService.getUsers().pipe(
      switchMap((usersListData) => {
        return of(usersListData).pipe(
          map((usersListData) => {
            this.setPagination(usersListData);
            const page = +pagination['Skip'] / pagination['Take'];
            const paginatedData = this.paginate(usersListData.data, +pagination['Take'], page);
            return paginatedData;
          }),
          catchError((error) => {
            return of(error);
          }),
          finalize(() => {
            this.isLoading = false;
          })
        )
      }),
    );
  }

  filterUserList(serachParam: string) {
    this.searchParam = serachParam;
  }

  hasQueryParams(params: Params) {
    if (!params['Skip'] || !params['Take']) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.queryParams$ = this.route.queryParams.pipe(
      map(params => {
        if ( !this.hasQueryParams(params)) return params;
        this.getUsers(params);
        return params;
      })
    );
  }

}