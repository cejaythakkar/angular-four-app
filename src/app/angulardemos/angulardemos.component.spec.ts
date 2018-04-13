import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardemosComponent } from './angulardemos.component';

describe('AngulardemosComponent', () => {
  let component: AngulardemosComponent;
  let fixture: ComponentFixture<AngulardemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
