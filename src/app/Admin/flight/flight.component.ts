import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightService } from 'src/app/services/Flight/flight.service';
import { FlightModel } from 'src/app/services/Flight/FlightModel';
// import { FlightService } from '../services/Flight/flight.service';
// import { FlightModel } from '../services/Flight/FlightModel';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  
    formValue !: FormGroup
    Flightdata: any;
    FormId: any = 0;
    AirlineData: any;
    CityData:any;
    FlightModelobj: FlightModel = new FlightModel();
  
    constructor(private formbuilder: FormBuilder, private api: FlightService) { }
  
    ngOnInit(): void {
  
      this.formValue = this.formbuilder.group({
  
        flightId: [''],
        // flightName: [''],
        flightCode: [''],
        airlineRefId: [''],
        fromAirportRefId: [''],
        toAirportRefId:['']
        
      })
      this.api.getFlight().subscribe((res: any) => {
        this.Flightdata = res;
        console.log(this.Flightdata);
      })
  
      this.api.getAirlines().subscribe((res: any) => {
        this.AirlineData = res;
        console.log(this.AirlineData);
      })

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
      this.FlightModelobj.flightCode = this.formValue.value.flightCode;
      this.FlightModelobj.airlineRefId = this.formValue.value.airlineRefId.airlineId;
      this.FlightModelobj.fromAirportRefId = this.formValue.value.fromAirportRefId.cityId;
      this.FlightModelobj.toAirportRefId = this.formValue.value.toAirportRefId.cityId;
     
      // this.FlightModelobj.countryRefId = this.formValue.value.countryRefId.countryId;
  
  
      this.api.postFlight(this.FlightModelobj)
        .subscribe(res => {
          console.log(res);
          alert("New Country added successfully");
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.ngOnInit();
        },
          err => {
            alert("something went wrong")
          })
    }
  
    // Update Country Record ***************************************************************************************
  
    updateFlightDetails() {
     
      this.FlightModelobj.flightId = this.FormId;
      // this.FlightModelobj.flightId = this.formValue.value.flightId;
      this.FlightModelobj.flightCode = this.formValue.value.flightCode;
      this.FlightModelobj.airlineRefId = this.formValue.value.airlineRefId.airlineId;
      this.FlightModelobj.fromAirportRefId = this.formValue.value.fromAirportRefId.cityId;
      this.FlightModelobj.toAirportRefId = this.formValue.value.toAirportRefId.cityId;
     
  
      alert("Update Record : " + this.FormId);
      this.api.updateFlight(this.FlightModelobj, this.FormId)
        .subscribe(res => {
          console.log(res);
          alert("Country update successfully");
          let ref = document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.ngOnInit();
        }
        )
    }
  
    // Delete Country Record ***************************************************************************************
  
    deleteCountryDeatils(row: any) {
      alert("Delete Record : " + row.FlightId);
      this.api.deleteFlight(row.FlightId)
        .subscribe(res => {
          alert(' Flight record delete successfully');
          this.ngOnInit();
        })
    }
  
  
  
    GetByFlightID(row: FlightModel) {
      this.FormId = row.flightId;
      this.formValue.controls['flightCode'].setValue(row.flightCode);
      this.formValue.controls['airlineRefId'].setValue(row.airlineRefId);
      this.formValue.controls['fromAirportRefId'].setValue(row.fromAirportRefId);
      this.formValue.controls['toAirportRefId'].setValue(row.toAirportRefId);
    }
  
  }
  