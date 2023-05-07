import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocopyPaymentComponent } from './photocopy-payment.component';

describe('PhotocopyPaymentComponent', () => {
  let component: PhotocopyPaymentComponent;
  let fixture: ComponentFixture<PhotocopyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocopyPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocopyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
