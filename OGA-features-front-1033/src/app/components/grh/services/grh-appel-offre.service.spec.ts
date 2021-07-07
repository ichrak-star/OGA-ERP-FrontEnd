import { TestBed } from '@angular/core/testing';

import { GrhAppelOffreService } from './grh-appel-offre.service';

describe('GrhAppelOffreService', () => {
  let service: GrhAppelOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhAppelOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
