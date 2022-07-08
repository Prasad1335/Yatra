import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterNavbarComponent } from './master-navbar/master-navbar.component';
import { AirlineComponent } from './airline/airline.component';
import { AirportComponent } from './airport/airport.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { CityComponent } from './city/city.component';
import { CountryComponentComponent } from './country/country-component.component';
import { CustomerComponent } from './customer/customer.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightCustomerDetailComponent } from './flight-customer-detail/flight-customer-detail.component';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { FlightComponent } from './flight/flight.component';
import { HotelAmenitiesLinkComponent } from './hotel-amenities-link/hotel-amenities-link.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelCustomerDetailComponent } from './hotel-customer-detail/hotel-customer-detail.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'master-navbar', component: MasterNavbarComponent},

  { path: 'customer', component: CustomerComponent },
  { path: 'country-component', component: CountryComponentComponent },
  { path: 'city', component: CityComponent },

  { path: 'hotel', component: HotelComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'hotel-amenities-link', component: HotelAmenitiesLinkComponent },
  { path: 'hotel-booking', component: HotelBookingComponent },
  { path: 'hotel-customer-detail', component: HotelCustomerDetailComponent },

  { path: 'airline', component: AirlineComponent },
  { path: 'airport', component: AirportComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'flight-schedule', component: FlightScheduleComponent },
  { path: 'flight-booiking', component: FlightBookingComponent },
  { path: 'flight-customer-detail', component: FlightCustomerDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
