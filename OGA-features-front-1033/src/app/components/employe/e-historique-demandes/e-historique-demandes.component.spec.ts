import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHistoriqueDemandesComponent } from './e-historique-demandes.component';

describe('EHistoriqueDemandesComponent', () => {
  let component: EHistoriqueDemandesComponent;
  let fixture: ComponentFixture<EHistoriqueDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EHistoriqueDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EHistoriqueDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
