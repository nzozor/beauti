import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueSummaryComponent } from './boutique-summary.component';

describe('BoutiqueSummaryComponent', () => {
  let component: BoutiqueSummaryComponent;
  let fixture: ComponentFixture<BoutiqueSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiqueSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
