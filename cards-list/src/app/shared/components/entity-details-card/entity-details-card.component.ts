import { Component, Input, OnInit } from '@angular/core';
import { Entity } from 'src/app/shared/data-models/entity.models';

@Component({
  selector: 'app-entity-details-card',
  templateUrl: './entity-details-card.component.html',
  styleUrls: ['./entity-details-card.component.scss']
})
export class EntityDetailsCardComponent implements OnInit {
  @Input() entity!: Entity;

  constructor() { }

  ngOnInit(): void {
  }

}
