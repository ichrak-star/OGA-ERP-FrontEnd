import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECalendrierComponent } from './e-calendrier.component';

describe('ECalendrierComponent', () => {
  let component: ECalendrierComponent;
  let fixture: ComponentFixture<ECalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECalendrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
