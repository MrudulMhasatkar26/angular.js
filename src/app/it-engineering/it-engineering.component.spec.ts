import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITEngineeringComponent } from './it-engineering.component';

describe('ITEngineeringComponent', () => {
  let component: ITEngineeringComponent;
  let fixture: ComponentFixture<ITEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITEngineeringComponent]
    });
    fixture = TestBed.createComponent(ITEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
