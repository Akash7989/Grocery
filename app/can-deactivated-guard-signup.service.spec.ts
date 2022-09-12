import { TestBed } from '@angular/core/testing';

import { CanDeactivatedGuardSignupService } from './can-deactivated-guard-signup.service';

describe('CanDeactivatedGuardSignupService', () => {
  let service: CanDeactivatedGuardSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivatedGuardSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
