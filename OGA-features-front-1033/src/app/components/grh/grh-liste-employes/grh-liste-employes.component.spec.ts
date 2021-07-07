import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrhListeEmployesComponent } from './grh-liste-employes.component';

describe('GrhListeEmployesComponent', () => {
  let component: GrhListeEmployesComponent;
  let fixture: ComponentFixture<GrhListeEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrhListeEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrhListeEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
