import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreatwellComponent } from './treatwell.component';

describe('TreatwellComponent', () => {
  let component: TreatwellComponent;
  let fixture: ComponentFixture<TreatwellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatwellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
