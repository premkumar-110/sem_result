import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocopyComponent } from './photocopy.component';

describe('PhotocopyComponent', () => {
  let component: PhotocopyComponent;
  let fixture: ComponentFixture<PhotocopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
