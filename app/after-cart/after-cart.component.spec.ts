import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterCartComponent } from './after-cart.component';

describe('AfterCartComponent', () => {
  let component: AfterCartComponent;
  let fixture: ComponentFixture<AfterCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
