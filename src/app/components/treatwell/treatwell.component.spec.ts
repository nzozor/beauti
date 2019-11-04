import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatwellComponent } from './treatwell.component';

describe('TreatwellComponent', () => {
  let component: TreatwellComponent;
  let fixture: ComponentFixture<TreatwellComponent>;

  beforeEach(async(() => {
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
