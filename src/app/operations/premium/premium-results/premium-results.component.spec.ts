import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumResultsComponent } from './premium-results.component';

describe('PremiumResultsComponent', () => {
  let component: PremiumResultsComponent;
  let fixture: ComponentFixture<PremiumResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
