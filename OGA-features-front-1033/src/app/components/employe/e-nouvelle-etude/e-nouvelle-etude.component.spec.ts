import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENouvelleEtudeComponent } from './e-nouvelle-etude.component';

describe('ENouvelleEtudeComponent', () => {
  let component: ENouvelleEtudeComponent;
  let fixture: ComponentFixture<ENouvelleEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENouvelleEtudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENouvelleEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
