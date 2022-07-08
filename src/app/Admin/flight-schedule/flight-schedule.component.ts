import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightScheduleService } from 'src/app/services/FlightSchedule/flight-schedule.service';
import { FlightScheduleModel } from 'src/app/services/FlightSchedule/FlightScheduleModel';


@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.scss']
})
export class FlightScheduleComponent implements OnInit {
  formValue !: FormGroup
  flightScheduledata: any;
  FormId: any = 0;
  flightData: any;
  flightScheduleModelobj: FlightScheduleModel = new FlightScheduleModel();

  constructor(private formbuilder: FormBuilder, private api: FlightScheduleService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      flightScheduleId: [''],
      flightRefId: [''],
      departureDateTime: [''],
      arrivalDateTime: [''],
      
    })
    this.api.getFlightSchedules().subscribe((res: any) => {
      this.flightScheduledata = res;
      console.log(this.flightScheduledata);
    })

    this.api.getFlights().subscribe((res: any) => {
      this.flightData = res;
      console.log(this.flightData);
    })

  }






  // this.api.getFlights().subscribe
  // (data => { this.Flightdata = data })
  // Add Country Record ******************************************************************************************

  postFlightScheduleDetails() {
    this.flightScheduleModelobj.flightRefId = this.formValue.value.flightRefId.flightId;
    this.flightScheduleModelobj.departureDateTime = this.formValue.value.departureDateTime;
    this.flightScheduleModelobj.arrivalDateTime = this.formValue.value.arrivalDateTime;

   
    // this.flightScheduleModelobj.countryRefId = this.formValue.value.countryRefId.countryId;


    this.api.postFlightSchedule(this.flightScheduleModelobj)
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

  updateFlightScheduleDetails() {
    this.flightScheduleModelobj.flightScheduleId = this.FormId;
    this.flightScheduleModelobj.flightRefId = this.formValue.value.flightRefId.flightId;
    this.flightScheduleModelobj.departureDateTime = this.formValue.value.departureDateTime;
    this.flightScheduleModelobj.arrivalDateTime = this.formValue.value.arrivalDateTime;
   

    alert("Update Record : " + this.FormId);
    this.api.updateFlightSchedule(this.flightScheduleModelobj, this.FormId)
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

  deleteFlightScheduleDeatils(row: any) {
    alert("Delete Record : " + row.flightScheduleId);
    this.api.deleteFlightSchedule(row.flightScheduleId)
      .subscribe(res => {
        alert(' Flight record delete successfully');
        this.ngOnInit();
      })
  }



  GetByFlightScheduleId(row: FlightScheduleModel) {
    this.FormId = row.flightScheduleId;
    this.formValue.controls['flightRefId'].setValue(row.flightRefId);
    this.formValue.controls['departureDateTime'].setValue(row.departureDateTime);
    this.formValue.controls['arrivalDateTime'].setValue(row.arrivalDateTime);

  }

}

