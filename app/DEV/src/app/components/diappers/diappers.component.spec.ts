import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiappersComponent } from './diappers.component';

describe('DiappersComponent', () => {
  let component: DiappersComponent;
  let fixture: ComponentFixture<DiappersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiappersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiappersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
