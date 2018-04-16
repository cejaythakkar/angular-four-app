import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacedesignComponent } from './marketplacedesign.component';

describe('MarketplacedesignComponent', () => {
  let component: MarketplacedesignComponent;
  let fixture: ComponentFixture<MarketplacedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplacedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
