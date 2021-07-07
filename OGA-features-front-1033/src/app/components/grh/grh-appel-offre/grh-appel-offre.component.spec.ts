import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrhAppelOffreComponent } from './grh-appel-offre.component';

describe('GrhAppelOffreComponent', () => {
  let component: GrhAppelOffreComponent;
  let fixture: ComponentFixture<GrhAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrhAppelOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrhAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
