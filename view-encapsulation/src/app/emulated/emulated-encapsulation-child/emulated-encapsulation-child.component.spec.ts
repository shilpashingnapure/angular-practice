import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedEncapsulationChildComponent } from './emulated-encapsulation-child.component';

describe('EmulatedEncapsulationChildComponent', () => {
  let component: EmulatedEncapsulationChildComponent;
  let fixture: ComponentFixture<EmulatedEncapsulationChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmulatedEncapsulationChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedEncapsulationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
