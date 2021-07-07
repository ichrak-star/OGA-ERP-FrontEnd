import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleDemandeComponent } from './e-nouvelle-demande.component';

describe('ENouvelleDemandeComponent', () => {
  let component: ENouvelleDemandeComponent;
  let fixture: ComponentFixture<ENouvelleDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
