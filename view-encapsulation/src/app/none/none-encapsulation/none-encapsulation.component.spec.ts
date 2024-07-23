import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneEncapsulationComponent } from './none-encapsulation.component';

describe('NoneEncapsulationComponent', () => {
  let component: NoneEncapsulationComponent;
  let fixture: ComponentFixture<NoneEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneEncapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
