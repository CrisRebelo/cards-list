import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../../../shared/data-models/entity.models';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent implements OnInit {
  @Input() userList: Entity[] | null = [];

  ngOnInit(): void { }

}
