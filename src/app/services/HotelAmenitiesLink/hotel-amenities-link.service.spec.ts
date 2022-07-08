import { TestBed } from '@angular/core/testing';

import { HotelAmenitiesLinkService } from './hotel-amenities-link.service';

describe('HotelAmenitiesLinkService', () => {
  let service: HotelAmenitiesLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelAmenitiesLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
