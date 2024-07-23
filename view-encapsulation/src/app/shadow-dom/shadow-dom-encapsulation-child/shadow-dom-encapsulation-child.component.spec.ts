import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomEncapsulationChildComponent } from './shadow-dom-encapsulation-child.component';

describe('ShadowDomEncapsulationChildComponent', () => {
  let component: ShadowDomEncapsulationChildComponent;
  let fixture: ComponentFixture<ShadowDomEncapsulationChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDomEncapsulationChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomEncapsulationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
