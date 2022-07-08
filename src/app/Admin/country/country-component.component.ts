import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryServiceService } from 'src/app/services/Country/country-service.service';
import { CountryModel } from 'src/app/services/Country/CountryModel';


@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.scss']
})
export class CountryComponentComponent implements OnInit {

  formValue !: FormGroup
  CountryData: any;
  CountryId: any = 0;

  CountryModelobj: CountryModel = new CountryModel();

  constructor(private formbuilder: FormBuilder, private api: CountryServiceService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      countryId: [''],
      countryCode: [''],
      countryName: [''],
      countryShortName: [''],
    })
    this.api.getCountries().subscribe((res: any) => {
      this.CountryData = res;
    })
  }

  // Add Country Record ******************************************************************************************

  postCountriesDetails() {

    this.CountryModelobj.countryCode = this.formValue.value.countryCode;
    this.CountryModelobj.countryName = this.formValue.value.countryName;
    this.CountryModelobj.countryShortName = this.formValue.value.countryShortName;

    this.api.postCountry(this.CountryModelobj)
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

  updateCountryDetails() {
    this.CountryModelobj.countryId = this.CountryId;
    this.CountryModelobj.countryCode = this.formValue.value.countryCode;
    this.CountryModelobj.countryName = this.formValue.value.countryName;
    this.CountryModelobj.countryShortName = this.formValue.value.countryShortName;
    alert("country id : " + this.CountryId);
    this.api.updateCountry(this.CountryModelobj, this.CountryId)
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
    alert(row.countryId);
    this.api.deleteCountry(row.countryId)
      .subscribe(res => {
        alert('Country record delete successfully');
        this.ngOnInit();
      })
  }

  GetByCountryID(row: CountryModel) {
    this.CountryId = row.countryId;
    this.formValue.controls['countryCode'].setValue(row.countryCode);
    this.formValue.controls['countryName'].setValue(row.countryName);
    this.formValue.controls['countryShortName'].setValue(row.countryShortName);
  }

}
