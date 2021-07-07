import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAppelOffreComponent } from './e-appel-offre.component';

describe('EAppelOffreComponent', () => {
  let component: EAppelOffreComponent;
  let fixture: ComponentFixture<EAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAppelOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
