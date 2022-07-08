import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlightService } from 'src/app/services/Flight/flight.service';
import { FlightModel } from 'src/app/services/Flight/FlightModel';

@Component({
  selector: 'app-hotel-web-page',
  templateUrl: './hotel-web-page.component.html',
  styleUrls: ['./hotel-web-page.component.scss']
})
export class HotelWebPageComponent implements OnInit {

  CityData: any;
  Flightdata: any;
   FlightModelobj: FlightModel = new FlightModel();

  constructor(private formbuilder: FormBuilder, private api: FlightService) { }

  ngOnInit(): void {

    // this.formValue = this.formbuilder.group({

    //   flightId: [''],
    //   // flightName: [''],
    //   flightCode: [''],
    //   airlineRefId: [''],
    //   fromAirportRefId: [''],
    //   toAirportRefId: ['']

    // })
    // this.api.getFlight().subscribe((res: any) => {
    //   this.Flightdata = res;
    //   console.log(this.Flightdata);
    // })

    // this.api.getAirlines().subscribe((res: any) => {
    //   this.AirlineData = res;
    //   console.log(this.AirlineData);
    // })

    this.api.getCities().subscribe((res: any) => {
      this.CityData = res;
      console.log(this.CityData);
    })

  }






  // this.api.getFlights().subscribe
  // (data => { this.Flightdata = data })
  // Add Country Record ******************************************************************************************

  postFlightDetails() {

    // this.FlightModelobj.FlightId = this.formValue.value.FlightId;
    // this.FlightModelobj.flightCode = this.formValue.value.flightCode;
    // this.FlightModelobj.airlineRefId = this.formValue.value.airlineRefId.airlineId;
    // this.FlightModelobj.fromAirportRefId = this.formValue.value.fromAirportRefId.cityId;
    // this.FlightModelobj.toAirportRefId = this.formValue.value.toAirportRefId.cityId;

    // this.FlightModelobj.countryRefId = this.formValue.value.countryRefId.countryId;


    //   this.api.postFlight(this.FlightModelobj)
    //     .subscribe(res => {
    //       console.log(res);
    //       alert("New Country added successfully");
    //       let ref = document.getElementById('cancel');
    //       ref?.click();
    //       this.formValue.reset();
    //       this.ngOnInit();
    //     },
    //       err => {
    //         alert("something went wrong")
    //       })
    // }
  }
}