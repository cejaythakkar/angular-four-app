import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularexamplesComponent } from './angularexamples.component';

describe('AngularexamplesComponent', () => {
  let component: AngularexamplesComponent;
  let fixture: ComponentFixture<AngularexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
