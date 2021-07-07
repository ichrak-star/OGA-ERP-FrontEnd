import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleAppelOffreComponent } from './e-nouvelle-appel-offre.component';

describe('ENouvelleAppelOffreComponent', () => {
  let component: ENouvelleAppelOffreComponent;
  let fixture: ComponentFixture<ENouvelleAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleAppelOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
