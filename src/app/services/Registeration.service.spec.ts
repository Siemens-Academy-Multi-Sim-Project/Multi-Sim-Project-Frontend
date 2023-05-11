/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterationService } from './Registeration.service';

describe('Service: Registeration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterationService]
    });
  });

  it('should ...', inject([RegisterationService], (service: RegisterationService) => {
    expect(service).toBeTruthy();
  }));
});
