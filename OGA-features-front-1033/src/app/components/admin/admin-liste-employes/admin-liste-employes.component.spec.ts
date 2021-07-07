import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeEmployesComponent } from './admin-liste-employes.component';

describe('AdminListeEmployesComponent', () => {
  let component: AdminListeEmployesComponent;
  let fixture: ComponentFixture<AdminListeEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListeEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
