import { TestBed } from '@angular/core/testing';

import { EmployeDemandesService } from './employe-demandes.service';

describe('EmployeDemandesService', () => {
  let service: EmployeDemandesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeDemandesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
