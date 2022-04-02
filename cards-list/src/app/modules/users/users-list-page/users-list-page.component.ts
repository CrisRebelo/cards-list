import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, finalize, map, Observable, of, switchMap } from 'rxjs';
import { RequestCounters } from 'src/app/shared/data-models/minified-count.models';
import { PaginationService } from 'src/app/shared/services/pagination.service';
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
    private route: ActivatedRoute,
    private paginationService: PaginationService,
  ) { }

  getUsers(pagination: Params) {
    this.isLoading = true;
    this.usersList$ = this.usersService.getUsers().pipe(
      switchMap((usersListData) => {
        return of(usersListData).pipe(
          map((usersListData) => {
            this.requestCounters = this.paginationService.setPagination(usersListData);
            const pageSize = +pagination['Take'];
            const skip = +pagination['Skip'];
            const paginatedData = this.paginationService.paginate(usersListData.data, pageSize, skip);
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

  ngOnInit() {
    this.queryParams$ = this.route.queryParams.pipe(
      map(params => {
        if ( !this.paginationService.hasPagination(params)) return params;
        this.getUsers(params);
        return params;
      })
    );
  }

}