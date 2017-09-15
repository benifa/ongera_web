import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumOperationsComponent } from './premium-operations.component';

describe('PremiumOperationsComponent', () => {
  let component: PremiumOperationsComponent;
  let fixture: ComponentFixture<PremiumOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
