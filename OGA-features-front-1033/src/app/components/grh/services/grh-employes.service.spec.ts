import { TestBed } from '@angular/core/testing';

import { GrhEmployesService } from './grh-employes.service';

describe('GrhEmployesService', () => {
  let service: GrhEmployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhEmployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
