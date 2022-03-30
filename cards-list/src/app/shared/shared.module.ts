import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDetailsCardComponent } from './components/entity-details-card/entity-details-card.component';


@NgModule({
  declarations: [
    EntityDetailsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntityDetailsCardComponent
  ]
})
export class SharedModule { }
