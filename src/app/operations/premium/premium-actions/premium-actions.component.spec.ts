import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumActionsComponent } from './premium-actions.component';

describe('PremiumActionsComponent', () => {
  let component: PremiumActionsComponent;
  let fixture: ComponentFixture<PremiumActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
