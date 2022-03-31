import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

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
    private router: Router,
  ) { }

  hasQueryParams(params: Params) {
    if (!params['Skip'] || !params['Take']) {
      return false;
    }
    return true;
  }

  setQueryParams() {
    return {
      Skip: 0,
      Take: 10
    }
  }

  navigate() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.setQueryParams(),
      queryParamsHandling: 'merge',
      skipLocationChange: false,
      replaceUrl: true
    });
  }

  ngOnInit(): void {
    this.queryParams$ = this.route.queryParams.pipe(
      map(params => {
        if ( !this.hasQueryParams(params)) {
          this.navigate();
        }
        return params;
      })
    );
  }

}
