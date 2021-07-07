import { TestBed } from '@angular/core/testing';

import { EmployeAppelOffreService } from './employe-appel-offre.service';

describe('EmployeAppelOffreService', () => {
  let service: EmployeAppelOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeAppelOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
