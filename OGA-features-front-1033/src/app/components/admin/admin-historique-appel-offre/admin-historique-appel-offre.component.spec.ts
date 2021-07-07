import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoriqueAppelOffreComponent } from './admin-historique-appel-offre.component';

describe('AdminHistoriqueAppelOffreComponent', () => {
  let component: AdminHistoriqueAppelOffreComponent;
  let fixture: ComponentFixture<AdminHistoriqueAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHistoriqueAppelOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHistoriqueAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
