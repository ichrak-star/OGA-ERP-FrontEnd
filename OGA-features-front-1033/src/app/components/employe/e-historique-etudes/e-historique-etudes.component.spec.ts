import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHistoriqueEtudesComponent } from './e-historique-etudes.component';

describe('EHistoriqueEtudesComponent', () => {
  let component: EHistoriqueEtudesComponent;
  let fixture: ComponentFixture<EHistoriqueEtudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EHistoriqueEtudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EHistoriqueEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
