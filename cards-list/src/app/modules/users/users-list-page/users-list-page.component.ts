import { Component } from '@angular/core';
import { catchError, finalize, map, Observable, of, switchMap } from 'rxjs';
import { Entity } from '../../../shared/data-models/entity.models';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss']
})
export class UsersListPageComponent {

  usersList$!: Observable<Entity[]>;
  isLoading = false;

  constructor(
    private usersService: UsersService
  ) {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.usersList$ = this.usersService.getUsers().pipe(
      switchMap((users) => {
        return of(users).pipe(
          map((users) => {
            return users.data;
          }),
          catchError((error) => {
            return of(error);
          }),
          finalize(() => {
            this.isLoading = false;
          })
        )
      }),
    );
  }

}