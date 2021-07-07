import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleDemandeAvanceComponent } from './e-nouvelle-demande-avance.component';

describe('ENouvelleDemandeAvanceComponent', () => {
  let component: ENouvelleDemandeAvanceComponent;
  let fixture: ComponentFixture<ENouvelleDemandeAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleDemandeAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleDemandeAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
