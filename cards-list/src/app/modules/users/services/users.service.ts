import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { MinifiedCount } from 'src/app/shared/data-models/minified-count.models';
import { Entity } from '../../../shared/data-models/entity.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = 'https://reqres.in/api/users'
    return this.http.get<MinifiedCount<Entity>>(url);
  }
}