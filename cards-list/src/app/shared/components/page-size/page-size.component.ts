import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Pagination } from '../../data-models/pagination.models';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss']
})
export class PageSizeComponent {

  @Input() default = 10;

  pagination$: Observable<Pagination>;
  pagination: Pagination = {
    Take: 10
  }

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {

    this.pagination$ = this.route.queryParams.pipe(
      map( (params: Params) => {

        this.pagination =  {
          Take: params['Take'] ? params['Take'] : this.pagination.Take
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
    this.navigationService.navigate(this.route, queryParams);
  }

}
