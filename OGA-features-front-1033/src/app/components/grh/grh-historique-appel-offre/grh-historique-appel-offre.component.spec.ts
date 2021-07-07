import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrhHistoriqueAppelOffreComponent } from './grh-historique-appel-offre.component';

describe('GrhHistoriqueAppelOffreComponent', () => {
  let component: GrhHistoriqueAppelOffreComponent;
  let fixture: ComponentFixture<GrhHistoriqueAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrhHistoriqueAppelOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrhHistoriqueAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
