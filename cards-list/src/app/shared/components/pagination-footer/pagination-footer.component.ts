import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.scss']
})
export class PaginationFooterComponent implements OnInit {

  @Input() lineCount: number = 0;
  @Input() total: number = 0;

  queryParams$!: Observable<Params>;

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private paginationService: PaginationService
  ) { }

  setQueryParams() {
    return {
      Skip: 0,
      Take: 10
    }
  }

  ngOnInit(): void {
    this.queryParams$ = this.route.queryParams.pipe(
      map(params => {
        if ( !this.paginationService.hasPagination(params)) {
          this.navigationService.navigate(this.route, this.setQueryParams());
        }
        return params;
      })
    );
  }

}
