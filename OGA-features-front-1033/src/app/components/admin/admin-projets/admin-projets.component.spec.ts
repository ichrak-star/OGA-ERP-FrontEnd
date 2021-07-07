import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjetsComponent } from './admin-projets.component';

describe('AdminProjetsComponent', () => {
  let component: AdminProjetsComponent;
  let fixture: ComponentFixture<AdminProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
