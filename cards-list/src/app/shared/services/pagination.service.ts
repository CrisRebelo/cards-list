import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { RequestCounters } from 'src/app/shared/data-models/minified-count.models';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  setPagination(data: RequestCounters) {
    return {
      total: data.total,
      total_pages: data.total_pages,
      page: data.page,
      per_page: data.per_page
    }
  }

  paginate(array: unknown[], page_size: number, skip: number) {
    const page_number = +skip / page_size;
    return array.slice(page_number * page_size, page_number * page_size + page_size);
  };

  hasPagination(params: Params) {
    if (!params['Skip'] || !params['Take']) {
      return false;
    }
    return true;
  }
}