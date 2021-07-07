import { TestBed } from '@angular/core/testing';

import { AdminProjetsService } from './admin-projets.service';

describe('AdminProjetsService', () => {
  let service: AdminProjetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProjetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
