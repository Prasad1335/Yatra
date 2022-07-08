import { TestBed } from '@angular/core/testing';

import { FlightCustomerDetailService } from './flight-customer-detail.service';

describe('FlightCustomerDetailService', () => {
  let service: FlightCustomerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightCustomerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
