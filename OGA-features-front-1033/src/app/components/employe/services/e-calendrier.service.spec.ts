import { TestBed } from '@angular/core/testing';

import { ECalendrierService } from './e-calendrier.service';

describe('ECalendrierService', () => {
  let service: ECalendrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ECalendrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
