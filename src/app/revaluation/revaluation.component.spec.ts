import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevaluationComponent } from './revaluation.component';

describe('RevaluationComponent', () => {
  let component: RevaluationComponent;
  let fixture: ComponentFixture<RevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
