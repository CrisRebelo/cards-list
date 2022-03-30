import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListPageComponent } from './users-list-page/users-list-page.component';


@NgModule({
  declarations: [
    UsersCardListComponent,
    UsersListPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
