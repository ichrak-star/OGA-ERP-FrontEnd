import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudesComponent } from './admin-etudes.component';

describe('AdminEtudesComponent', () => {
  let component: AdminEtudesComponent;
  let fixture: ComponentFixture<AdminEtudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEtudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
