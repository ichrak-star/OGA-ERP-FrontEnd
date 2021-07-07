import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProduitComponent } from './e-produit.component';

describe('EProduitComponent', () => {
  let component: EProduitComponent;
  let fixture: ComponentFixture<EProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
