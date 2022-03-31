import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDetailsCardComponent } from './components/entity-details-card/entity-details-card.component';
import { PaginationFooterComponent } from './components/pagination-footer/pagination-footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PageSizeComponent } from './components/page-size/page-size.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    EntityDetailsCardComponent,
    PaginationFooterComponent,
    PaginationComponent,
    PageSizeComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    EntityDetailsCardComponent,
    PaginationFooterComponent
  ]
})
export class SharedModule { }
