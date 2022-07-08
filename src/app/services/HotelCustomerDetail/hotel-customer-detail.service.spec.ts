import { TestBed } from '@angular/core/testing';

import { HotelCustomerDetailService } from './hotel-customer-detail.service';

describe('HotelCustomerDetailService', () => {
  let service: HotelCustomerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelCustomerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
