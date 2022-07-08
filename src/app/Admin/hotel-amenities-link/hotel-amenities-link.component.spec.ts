import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAmenitiesLinkComponent } from './hotel-amenities-link.component';

describe('HotelAmenitiesLinkComponent', () => {
  let component: HotelAmenitiesLinkComponent;
  let fixture: ComponentFixture<HotelAmenitiesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAmenitiesLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAmenitiesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
