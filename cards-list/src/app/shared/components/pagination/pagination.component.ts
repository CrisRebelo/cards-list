import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pagination } from '../../data-models/pagination.models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0;

  pagination$!: Observable<Pagination>;

  public pagination: Pagination = {
    Page: 1,
    CollectionSize: 0,
    Take: 10
  };

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) { }

  changePage(page: number) {
    const pagination: Pagination = {
      ...this.pagination,
      Page: page
    };

    const setSkip = pagination.Page ? pagination.Page - 1 : 1;
    const queryParams = {
      Take: pagination.Take,
      ...this.route.snapshot.queryParams,
      Skip: Math.round(setSkip) * pagination.Take,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
      replaceUrl: true
    });
  }

  ngOnInit() {
    this.pagination$ = this.route.queryParams.pipe(
      map( (params: Params) => {

        const take = params['Take'] ? params['Take'] : this.pagination.Take;
        this.pagination =  {
          Page:  params['Skip'] && params['Take'] ? +params['Skip'] / params['Take'] + 1 : this.pagination.Page,
          Take: take
        };
        return this.pagination;
      })
    );
  }

}
