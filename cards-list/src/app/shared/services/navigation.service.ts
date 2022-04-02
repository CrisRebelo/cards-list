import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
      private router: Router
  ) { }

  navigate(route: ActivatedRoute, queryParams: Params) {
    this.router.navigate([], {
      relativeTo: route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
      replaceUrl: true
    });
  }
}