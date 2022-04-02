import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-by-string',
  templateUrl: './filter-by-string.component.html',
  styleUrls: ['./filter-by-string.component.scss']
})
export class FilterByStringComponent {
  @Output() changeSearchParam = new EventEmitter<any>();

  searchText: string = '';

  public filterBySearch(): void {
    this.changeSearchParam.emit(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.filterBySearch();
  }

}
