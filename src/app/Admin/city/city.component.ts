import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/services/City/city.service';
import { CityModel } from 'src/app/services/City/CityModel';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  formValue !: FormGroup
  CityData: any;
  CitysId: any = 0;
  countrydata: any;
  CityModelobj: CityModel = new CityModel();

  constructor(private formbuilder: FormBuilder, private api: CityService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      cityId: [''],
      cityName: [''],
      countryRefId: [],
    })
    this.api.getCities().subscribe((res: any) => {
      this.CityData = res;
      console.log(this.CityData);
    })

    this.api.getCountries().subscribe((res: any) => {
      this.countrydata = res;
      console.log(this.countrydata);
    })

  }


  // Add Country Record ******************************************************************************************

  postCityDetails() {
    this.CityModelobj.cityName = this.formValue.value.cityName;
    this.CityModelobj.countryRefId = this.formValue.value.countryRefId.countryId;


    this.api.postCity(this.CityModelobj)
      .subscribe(res => {
        console.log(res);
        alert("New City added successfully");
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

  updateCityDetails() {
    this.CityModelobj.cityId = this.CitysId;
    this.CityModelobj.cityName = this.formValue.value.cityName;
    this.CityModelobj.countryRefId = this.formValue.value.countryRefId;

    alert("Update Record : " + this.CitysId);
    this.api.updateCity(this.CityModelobj, this.CitysId)
      .subscribe(res => {
        console.log(res);
        alert("City update successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      }
      )
  }

  // Delete Country Record ***************************************************************************************

  deleteCityDeatils(row: any) {
    alert("Delete Record : " + row.cityId);
    this.api.deleteCity(row.cityId)
      .subscribe(res => {
        alert('City record delete successfully');
        this.ngOnInit();
      })
  }



  GetByCityId(row: CityModel) {
    this.CitysId = row.cityId;
    this.formValue.controls['cityName'].setValue(row.cityName);
    this.formValue.controls['countryRefId'].setValue(row.countryRefId);

  }

}
