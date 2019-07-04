import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautiLogoComponent } from './beauti-logo.component';

describe('BeautiLogoComponent', () => {
  let component: BeautiLogoComponent;
  let fixture: ComponentFixture<BeautiLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautiLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
