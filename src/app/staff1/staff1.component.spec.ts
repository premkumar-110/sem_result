import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff1Component } from './staff1.component';

describe('Staff1Component', () => {
  let component: Staff1Component;
  let fixture: ComponentFixture<Staff1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staff1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staff1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
