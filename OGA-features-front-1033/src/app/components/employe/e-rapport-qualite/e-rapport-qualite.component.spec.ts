import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERapportQualiteComponent } from './e-rapport-qualite.component';

describe('ERapportQualiteComponent', () => {
  let component: ERapportQualiteComponent;
  let fixture: ComponentFixture<ERapportQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERapportQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERapportQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
