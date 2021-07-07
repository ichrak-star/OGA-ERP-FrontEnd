import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleDemandeAutreComponent } from './e-nouvelle-demande-autre.component';

describe('ENouvelleDemandeAutreComponent', () => {
  let component: ENouvelleDemandeAutreComponent;
  let fixture: ComponentFixture<ENouvelleDemandeAutreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleDemandeAutreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleDemandeAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
