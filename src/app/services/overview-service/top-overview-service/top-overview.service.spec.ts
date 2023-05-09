import { TestBed } from '@angular/core/testing';

import { TopOverviewService } from './top-overview.service';

describe('TopOverviewService', () => {
  let service: TopOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
