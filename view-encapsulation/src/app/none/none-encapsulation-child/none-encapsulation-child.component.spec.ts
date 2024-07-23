import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneEncapsulationChildComponent } from './none-encapsulation-child.component';

describe('NoneEncapsulationChildComponent', () => {
  let component: NoneEncapsulationChildComponent;
  let fixture: ComponentFixture<NoneEncapsulationChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneEncapsulationChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneEncapsulationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
