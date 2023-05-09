import { TestBed } from '@angular/core/testing';

import { ProfilingDataListService } from './profiling-data-list.service';

describe('ProfilingDataListService', () => {
  let service: ProfilingDataListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilingDataListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
