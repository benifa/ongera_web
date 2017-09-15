import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDomainComponent } from './client-domain.component';

describe('ClientDomainComponentComponent', () => {
  let component: ClientDomainComponent;
  let fixture: ComponentFixture<ClientDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
