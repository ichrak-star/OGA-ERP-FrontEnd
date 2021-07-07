import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleDemandeAttestationComponent } from './e-nouvelle-demande-attestation.component';

describe('ENouvelleDemandeAttestationComponent', () => {
  let component: ENouvelleDemandeAttestationComponent;
  let fixture: ComponentFixture<ENouvelleDemandeAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleDemandeAttestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleDemandeAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
