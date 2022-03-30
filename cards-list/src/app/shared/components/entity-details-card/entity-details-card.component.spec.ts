import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDetailsCardComponent } from './entity-details-card.component';

describe('EntityDetailsCardComponent', () => {
  let component: EntityDetailsCardComponent;
  let fixture: ComponentFixture<EntityDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
