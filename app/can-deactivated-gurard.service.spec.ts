import { TestBed } from '@angular/core/testing';

import { CanDeactivatedGurardService } from './can-deactivated-gurard.service';

describe('CanDeactivatedGurardService', () => {
  let service: CanDeactivatedGurardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivatedGurardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
