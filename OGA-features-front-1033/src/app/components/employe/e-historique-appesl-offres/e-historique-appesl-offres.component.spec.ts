import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHistoriqueAppeslOffresComponent } from './e-historique-appesl-offres.component';

describe('EHistoriqueAppeslOffresComponent', () => {
  let component: EHistoriqueAppeslOffresComponent;
  let fixture: ComponentFixture<EHistoriqueAppeslOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EHistoriqueAppeslOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EHistoriqueAppeslOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
