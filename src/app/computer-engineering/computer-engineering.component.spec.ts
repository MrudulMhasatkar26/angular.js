import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerEngineeringComponent } from './computer-engineering.component';

describe('ComputerEngineeringComponent', () => {
  let component: ComputerEngineeringComponent;
  let fixture: ComponentFixture<ComputerEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerEngineeringComponent]
    });
    fixture = TestBed.createComponent(ComputerEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
