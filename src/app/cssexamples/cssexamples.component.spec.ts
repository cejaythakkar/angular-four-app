import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssexamplesComponent } from './cssexamples.component';

describe('CssexamplesComponent', () => {
  let component: CssexamplesComponent;
  let fixture: ComponentFixture<CssexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
