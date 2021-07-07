import { TestBed } from '@angular/core/testing';

import { GrhDemandesService } from './grh-demandes.service';

describe('GrhDemandesService', () => {
  let service: GrhDemandesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrhDemandesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
