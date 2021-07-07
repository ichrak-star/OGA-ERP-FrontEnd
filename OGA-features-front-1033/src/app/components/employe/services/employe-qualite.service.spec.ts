import { TestBed } from '@angular/core/testing';

import { EmployeQualiteService } from './employe-qualite.service';

describe('EmployeQualiteService', () => {
  let service: EmployeQualiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeQualiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
