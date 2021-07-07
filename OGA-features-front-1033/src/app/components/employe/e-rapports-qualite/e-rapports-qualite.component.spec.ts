import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERapportsQualiteComponent } from './e-rapports-qualite.component';

describe('ERapportsQualiteComponent', () => {
  let component: ERapportsQualiteComponent;
  let fixture: ComponentFixture<ERapportsQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERapportsQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERapportsQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
