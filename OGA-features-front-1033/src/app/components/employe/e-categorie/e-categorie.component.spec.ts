import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECategorieComponent } from './e-categorie.component';

describe('ECategorieComponent', () => {
  let component: ECategorieComponent;
  let fixture: ComponentFixture<ECategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
