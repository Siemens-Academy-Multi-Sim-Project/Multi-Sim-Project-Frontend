import { TestBed } from '@angular/core/testing';

import { UsageProfileService } from './usage-profile.service';

describe('UsageProfileService', () => {
  let service: UsageProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsageProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
