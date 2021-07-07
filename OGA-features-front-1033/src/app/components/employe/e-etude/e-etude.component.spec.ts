import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEtudeComponent } from './e-etude.component';

describe('EEtudeComponent', () => {
  let component: EEtudeComponent;
  let fixture: ComponentFixture<EEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEtudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
