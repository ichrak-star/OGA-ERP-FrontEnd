import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProfilComponent } from './e-profil.component';

describe('EProfilComponent', () => {
  let component: EProfilComponent;
  let fixture: ComponentFixture<EProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
