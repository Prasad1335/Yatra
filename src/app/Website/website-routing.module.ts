import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WesitebNavigationBarComponent } from './wesite-navigation-bar/wesiteb-navigation-bar.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelWebPageComponent } from './hotel-web-page/hotel-web-page.component';
import { WebFlightPageComponent } from './web-flight-page/web-flight-page.component';
import { VilaComponent } from './vila/vila.component';
import { BusComponent } from './bus/bus.component';
import { HolidayComponent } from './holiday/holiday.component';
import { VisaComponent } from './visa/visa.component';

const routes: Routes = [
  { path: '', component: WesitebNavigationBarComponent },
  { path: 'web-flight-page', component: WebFlightPageComponent },
  { path: 'flight-search', component: FlightSearchComponent },

  { path: 'hotel-web-page', component: HotelWebPageComponent },
  { path: 'hotel-search', component: HotelSearchComponent },
  { path: 'villa', component: VilaComponent },
  { path: 'bus', component: BusComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'visa', component: VisaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
