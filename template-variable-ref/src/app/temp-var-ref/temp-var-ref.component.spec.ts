import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempVarRefComponent } from './temp-var-ref.component';

describe('TempVarRefComponent', () => {
  let component: TempVarRefComponent;
  let fixture: ComponentFixture<TempVarRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempVarRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempVarRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
