import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsulterEmployeComponent } from './admin-consulter-employe.component';

describe('AdminConsulterEmployeComponent', () => {
  let component: AdminConsulterEmployeComponent;
  let fixture: ComponentFixture<AdminConsulterEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsulterEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsulterEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
