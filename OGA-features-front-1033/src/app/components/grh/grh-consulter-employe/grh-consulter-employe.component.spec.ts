import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrhConsulterEmployeComponent } from './grh-consulter-employe.component';

describe('GrhConsulterEmployeComponent', () => {
  let component: GrhConsulterEmployeComponent;
  let fixture: ComponentFixture<GrhConsulterEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrhConsulterEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrhConsulterEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
