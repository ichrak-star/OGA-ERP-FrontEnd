import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleDemandeFichePaieComponent } from './e-nouvelle-demande-fiche-paie.component';

describe('ENouvelleDemandeFichePaieComponent', () => {
  let component: ENouvelleDemandeFichePaieComponent;
  let fixture: ComponentFixture<ENouvelleDemandeFichePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleDemandeFichePaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleDemandeFichePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
