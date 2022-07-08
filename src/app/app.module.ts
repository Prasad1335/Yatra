import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterNavbarComponent } from './Admin/master-navbar/master-navbar.component';
import { AirportComponent } from './Admin/airport/airport.component';
import { FlightBookingComponent } from './Admin/flight-booking/flight-booking.component';
import { WesitebNavigationBarComponent } from './Website/wesite-navigation-bar/wesiteb-navigation-bar.component';
import { WebFlightPageComponent } from './Website/web-flight-page/web-flight-page.component';
import { FlightSearchComponent } from './Website/flight-search/flight-search.component';
import { HotelWebPageComponent } from './Website/hotel-web-page/hotel-web-page.component';
import { HotelSearchComponent } from './Website/hotel-search/hotel-search.component';
import { CountryComponentComponent } from './Admin/country/country-component.component';
import { CityComponent } from './Admin/city/city.component';
import { AmenitiesComponent } from './Admin/amenities/amenities.component';
import { HotelAmenitiesLinkComponent } from './Admin/hotel-amenities-link/hotel-amenities-link.component';
import { AirlineComponent } from './Admin/airline/airline.component';
import { HotelComponent } from './Admin/hotel/hotel.component';
import { HotelCustomerDetailComponent } from './Admin/hotel-customer-detail/hotel-customer-detail.component';
import { HotelBookingComponent } from './Admin/hotel-booking/hotel-booking.component';
import { FlightCustomerDetailComponent } from './Admin/flight-customer-detail/flight-customer-detail.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { FlightScheduleComponent } from './Admin/flight-schedule/flight-schedule.component';
import { FlightComponent } from './Admin/flight/flight.component';
import { VisaComponent } from './Website/visa/visa.component';
import { VilaComponent } from './Website/vila/vila.component';
import { BusComponent } from './Website/bus/bus.component';
import { HolidayComponent } from './Website/holiday/holiday.component';
import { LoginComponent } from './Admin/login/login.component';
// LoginComponent,

@NgModule({
  declarations: [
    AppComponent,
    CountryComponentComponent,
    CityComponent,
    HotelComponent,
    MasterNavbarComponent,
    AmenitiesComponent,
    HotelAmenitiesLinkComponent,
    AirportComponent,
    AirlineComponent,
    FlightComponent,
    FlightScheduleComponent,
    FlightBookingComponent,
    CustomerComponent,
    FlightCustomerDetailComponent,
    HotelBookingComponent,
    HotelCustomerDetailComponent,
    WesitebNavigationBarComponent,
    WebFlightPageComponent,
    FlightSearchComponent,
    HotelWebPageComponent,
    HotelSearchComponent,
    VisaComponent,
    VilaComponent,
    BusComponent,HolidayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
