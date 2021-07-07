import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECategoriesComponent } from './e-categories.component';

describe('ECategoriesComponent', () => {
  let component: ECategoriesComponent;
  let fixture: ComponentFixture<ECategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
