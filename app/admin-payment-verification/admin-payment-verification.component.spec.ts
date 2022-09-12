import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentVerificationComponent } from './admin-payment-verification.component';

describe('AdminPaymentVerificationComponent', () => {
  let component: AdminPaymentVerificationComponent;
  let fixture: ComponentFixture<AdminPaymentVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPaymentVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPaymentVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
