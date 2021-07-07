import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleDemandeCongeComponent } from './e-nouvelle-demande-conge.component';

describe('ENouvelleDemandeCongeComponent', () => {
  let component: ENouvelleDemandeCongeComponent;
  let fixture: ComponentFixture<ENouvelleDemandeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleDemandeCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleDemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
