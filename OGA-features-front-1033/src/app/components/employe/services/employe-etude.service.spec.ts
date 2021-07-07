import { TestBed } from '@angular/core/testing';

import { EmployeEtudeService } from './employe-etude.service';

describe('EmployeEtudeService', () => {
  let service: EmployeEtudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeEtudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
