import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pagination } from '../../data-models/pagination.models';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss']
})
export class PageSizeComponent {

  @Input() default = 10;

  pagination$: Observable<Pagination>;
  pagination: Pagination = {
    PageSize: 10
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.pagination$ = this.route.queryParams.pipe(
      map( (params: Params) => {

        this.pagination =  {
          PageSize: params['Take'] ? params['Take'] : this.pagination.PageSize
        };
        return this.pagination;
      })
    );
  }

  changePageSize(value: number) {
    const queryParams = {
      Skip: 0,
      ...this.pagination,
      Take: value
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
      replaceUrl: true
    });
  }

}
