import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrhDemandesComponent } from './grh-demandes.component';

describe('GrhDemandesComponent', () => {
  let component: GrhDemandesComponent;
  let fixture: ComponentFixture<GrhDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrhDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrhDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
