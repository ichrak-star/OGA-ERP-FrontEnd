import { TestBed } from '@angular/core/testing';

import { EmployeStockService } from './employe-stock.service';

describe('EmployeStockService', () => {
  let service: EmployeStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
