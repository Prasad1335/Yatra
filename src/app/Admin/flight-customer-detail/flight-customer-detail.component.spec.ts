import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCustomerDetailComponent } from './flight-customer-detail.component';

describe('FlightCustomerDetailComponent', () => {
  let component: FlightCustomerDetailComponent;
  let fixture: ComponentFixture<FlightCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCustomerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
