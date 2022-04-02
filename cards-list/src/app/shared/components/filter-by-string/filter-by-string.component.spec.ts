import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByStringComponent } from './filter-by-string.component';

describe('FilterByStringComponent', () => {
  let component: FilterByStringComponent;
  let fixture: ComponentFixture<FilterByStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
