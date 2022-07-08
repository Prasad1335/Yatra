import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCustomerDetailComponent } from './hotel-customer-detail.component';

describe('HotelCustomerDetailComponent', () => {
  let component: HotelCustomerDetailComponent;
  let fixture: ComponentFixture<HotelCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCustomerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
