import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AirlineService } from 'src/app/services/Airline/airline.service';
import { AirlineModel } from 'src/app/services/Airline/AirlineModel';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {

  formValue !: FormGroup
  CityData: any;
  FormId: any = 0;
  Airlinedata: any;
  AirlineModelobj: AirlineModel = new AirlineModel();

  constructor(private formbuilder: FormBuilder, private api: AirlineService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      airlineId: [''],
      airlineName: [''],
      airlineShortName:[''],
      airlineLogo: [''],
      airlineAddress: [''],
      cityRefId: [''],
      airlinePinCode:[''],
      airlineTelephone1: [''],
      airlineTelephone2: [''],
      airlineEmail1: [''],
      airlineEmail2: ['']
    })
    this.api.getAirlines().subscribe((res: any) => {
      this.Airlinedata = res;
      console.log(this.Airlinedata);
    })

    this.api.getByCityName().subscribe((res: any) => {
      this.CityData = res;
      console.log(this.CityData);
    })

  }

url="";

onSelectFile(e:any){
  if(e.target.files){
    var reader = new  FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result
    }
  }

}


  // Add Airlines Record ******************************************************************************************

  postAirlinesDetails() {
    this.AirlineModelobj.airlineName = this.formValue.value.airlineName;
    this.AirlineModelobj.airlineShortName = this.formValue.value.airlineShortName;
    this.AirlineModelobj.airlineLogo = this.formValue.value.airlineLogo;
    this.AirlineModelobj.airlineAddress = this.formValue.value.airlineAddress;
    this.AirlineModelobj.cityRefId = this.formValue.value.cityRefId.cityId;
    this.AirlineModelobj.airlinePinCode = this.formValue.value.airlinePinCode;
    this.AirlineModelobj.airlineTelephone1 = this.formValue.value.airlineTelephone1;
    this.AirlineModelobj.airlineTelephone2 = this.formValue.value.airlineTelephone2;
    this.AirlineModelobj.airlineEmail1 = this.formValue.value.airlineEmail1;
    this.AirlineModelobj.airlineEmail2 = this.formValue.value.airlineEmail2;

    this.api.postAirlines(this.AirlineModelobj)
      .subscribe(res => {
        console.log(res);
        alert("New Airlines added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      },
        err => {
          alert("something went wrong")
        })
  }




  // Update Airlines Record ***************************************************************************************

  updateAirlinesDetails() {
    this.AirlineModelobj.airlineId = this.FormId;
    this.AirlineModelobj.airlineName = this.formValue.value.airlineName;
    this.AirlineModelobj.airlineShortName = this.formValue.value.airlineShortName;
    this.AirlineModelobj.airlineLogo = this.formValue.value.airlineLogo;
    this.AirlineModelobj.airlineAddress = this.formValue.value.airlineAddress;
    this.AirlineModelobj.cityRefId = this.formValue.value.cityRefId.cityId;
    this.AirlineModelobj.airlinePinCode = this.formValue.value.airlinePinCode;
    this.AirlineModelobj.airlineTelephone1 = this.formValue.value.airlineTelephone1;
    this.AirlineModelobj.airlineTelephone2 = this.formValue.value.airlineTelephone2;
    this.AirlineModelobj.airlineEmail1 = this.formValue.value.airlineEmail1;
    this.AirlineModelobj.airlineEmail2 = this.formValue.value.airlineEmail2;

    alert("Update Record : " + this.FormId);
    this.api.updateAirlines(this.AirlineModelobj, this.FormId)
      .subscribe(res => {
        console.log(res);
        alert("Airlines update successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      }
      )
  }

  // Delete Airlines Record ***************************************************************************************

  deleteAirlinesDeatils(row: any) {
    alert("Delete Record : " + row.airlinesId);
    this.api.deleteAirlines(row.airlinesId)
      .subscribe(res => {
        alert(' Airlines record delete successfully');
        this.ngOnInit();
      })
  }



  GetByAirlinesID(row: AirlineModel) {
    this.FormId = row.airlineId;
    this.formValue.controls['airlineName'].setValue(row.airlineName);
    this.formValue.controls['airlineShortName'].setValue(row.airlineShortName);
    this.formValue.controls['airlineLogo'].setValue(row.airlineLogo);
    this.formValue.controls['airlineAddress'].setValue(row.airlineAddress);
    this.formValue.controls['cityRefId'].setValue(row.cityRefId);
    this.formValue.controls['airlinePinCode'].setValue(row.airlinePinCode);
    this.formValue.controls['airlineTelephone1'].setValue(row.airlineTelephone1);
    this.formValue.controls['airlineTelephone2'].setValue(row.airlineTelephone2);
    this.formValue.controls['airlineEmail1'].setValue(row.airlineEmail1);
    this.formValue.controls['airlineEmail2'].setValue(row.airlineEmail2);



  }

}
