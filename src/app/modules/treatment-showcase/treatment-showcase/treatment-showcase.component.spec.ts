import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreatmentShowcaseComponent } from './treatment-showcase.component';

describe('TreatmentShowcaseComponent', () => {
  let component: TreatmentShowcaseComponent;
  let fixture: ComponentFixture<TreatmentShowcaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
