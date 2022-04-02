import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Entity } from '../../../shared/data-models/entity.models';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent implements OnInit, OnChanges {
  @Input() userList: Entity[] | undefined = [];
  @Input() searchParam = '';

  queryParams$!: Observable<Params>;
  userFilter: string = '';
  unchangedUserList: Entity[] | undefined = [];

  constructor() { }

  filterUsers = (searchParam: string) => {
    const userList = this.unchangedUserList?.filter(user => user.first_name.includes(searchParam) || user.last_name.includes(searchParam) || user.email.includes(searchParam));
    return userList;
  }

  ngOnInit() {
    this.unchangedUserList = this.userList;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchParam']?.firstChange === false) {
      this.userList = this.filterUsers(changes['searchParam'].currentValue);
    }
  }

}
