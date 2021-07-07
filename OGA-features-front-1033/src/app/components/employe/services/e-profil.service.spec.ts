import { TestBed } from '@angular/core/testing';

import { EProfilService } from './e-profil.service';

describe('EProfilService', () => {
  let service: EProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
