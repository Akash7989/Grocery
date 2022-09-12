import { TestBed } from '@angular/core/testing';

import { CanDeactivatedGuradAdminService } from './can-deactivated-gurad-admin.service';

describe('CanDeactivatedGuradAdminService', () => {
  let service: CanDeactivatedGuradAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivatedGuradAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
