import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewrecordComponent } from './addnewrecord.component';

describe('AddnewrecordComponent', () => {
  let component: AddnewrecordComponent;
  let fixture: ComponentFixture<AddnewrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
