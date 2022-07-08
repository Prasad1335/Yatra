import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AirportService } from '../../services/Airport/airport.service';
import { AirportModel } from '../../services/Airport/AirportModel';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {


  formValue !: FormGroup
  Airportdata: any;
  FormId: any = 0;
  citydata: any;
  AirportModelobj: AirportModel = new AirportModel();

  constructor(private formbuilder: FormBuilder, private api: AirportService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      airportId: [''],
      airportCode: [''],
      airportName: [''],
      airportAddress: [''],
      cityRefId: [''],
      airportPinCode:[''], 
      airportTelephone1: [''],
      airportTelephone2: [''],
      airportEmail1: [''],
      airportEmail2: ['']
    })
    this.api.getAirports().subscribe((res: any) => {
      this.Airportdata = res;
      console.log(this.Airportdata);
    })

    this.api.getCityName().subscribe((res: any) => {
      this.citydata = res;
      console.log(this.citydata);
    })

  }






  // this.api.getAirports().subscribe
  // (data => { this.Airportdata = data })
  // Add Country Record ******************************************************************************************

  postAirportDetails() {
    //this.AirportModelobj.airportId = this.formValue.value.airportId;
    this.AirportModelobj.airportCode = this.formValue.value.airportCode;
    this.AirportModelobj.airportName = this.formValue.value.airportName;
    this.AirportModelobj.airportAddress = this.formValue.value.airportAddress;
    this.AirportModelobj.cityRefId = this.formValue.value.cityRefId.cityId;
    this.AirportModelobj.airportPinCode = this.formValue.value.airportPinCode;
    this.AirportModelobj.airportTelephone1 = this.formValue.value.airportTelephone1;
    this.AirportModelobj.airportTelephone2 = this.formValue.value.airportTelephone2;
    this.AirportModelobj.airportEmail1 = this.formValue.value.airportEmail1;
    this.AirportModelobj.airportEmail2 = this.formValue.value.airportEmail2;
  


    this.api.postAirport(this.AirportModelobj)
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

  updateAirportDetails() {
   
    this.AirportModelobj.airportId = this.FormId;
    this.AirportModelobj.airportCode = this.formValue.value.airportCode;
    this.AirportModelobj.airportName = this.formValue.value.airportName;
    this.AirportModelobj.airportAddress = this.formValue.value.airportAddress;
    this.AirportModelobj.cityRefId = this.formValue.value.cityRefId.cityId;
    this.AirportModelobj.airportPinCode = this.formValue.value.airportPinCode;
    this.AirportModelobj.airportTelephone1 = this.formValue.value.airportTelephone1;
    this.AirportModelobj.airportTelephone2 = this.formValue.value.airportTelephone2;
    this.AirportModelobj.airportEmail1 = this.formValue.value.airportEmail1;
    this.AirportModelobj.airportEmail2 = this.formValue.value.airportEmail2;

    alert("Update Record : " + this.FormId);
    this.api.updateAirport(this.AirportModelobj, this.FormId)
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

  deleteAirportDetails(row: any) {
    alert("Delete Record : " + row.airportId);
    this.api.deleteAirport(row.airportId)
      .subscribe(res => {
        alert(' Airport record delete successfully');
        this.ngOnInit();
      })
  }



  GetByAirportID(row: AirportModel) {
    this.FormId = row.airportId;
    this.formValue.controls['airportCode'].setValue(row.airportCode);
    this.formValue.controls['airportName'].setValue(row.airportName);
    this.formValue.controls['airportAddress'].setValue(row.airportAddress);
    this.formValue.controls['cityRefId'].setValue(row.cityRefId);
    this.formValue.controls['airportPinCode'].setValue(row.airportPinCode);
    this.formValue.controls['airportTelephone1'].setValue(row.airportTelephone1);
    this.formValue.controls['airportTelephone2'].setValue(row.airportTelephone2);
    this.formValue.controls['airportEmail1'].setValue(row.airportEmail1);
    this.formValue.controls['airportEmail2'].setValue(row.airportEmail2);
  }

}
