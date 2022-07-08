import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AmenitiesService } from 'src/app/services/Amenities/amenities.service';
import { AmenitiesModel } from 'src/app/services/Amenities/amenitiesModel';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {

  formValue !: FormGroup
  AmenitiesData: any;
  FormId: any = 0;
  AmenitiesModelobj: AmenitiesModel = new AmenitiesModel();

  constructor(private formbuilder: FormBuilder, private api: AmenitiesService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      amenitiesId: [''],
      amenitiesName: [''],
      amenitiesDescription: [],
    })
    this.api.getAmenities().subscribe((res: any) => {
      this.AmenitiesData = res;
      console.log(this.AmenitiesData);
    })
  }
  // Add Amenities Record ******************************************************************************************

  postAmenitiesDetails() {

    this.AmenitiesModelobj.amenitiesName = this.formValue.value.amenitiesName;
    this.AmenitiesModelobj.amenitiesDescription = this.formValue.value.amenitiesDescription;

    this.api.postAmenities(this.AmenitiesModelobj)
      .subscribe(res => {
        console.log(res);
        alert("New Amenities added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      },
        err => {
          alert("something went wrong")
        })
  }
  // Update Amenities Record ***************************************************************************************

  updateAmenitiesDetails() {
    this.AmenitiesModelobj.amenitiesId = this.FormId;
    this.AmenitiesModelobj.amenitiesName = this.formValue.value.amenitiesName;
    this.AmenitiesModelobj.amenitiesDescription = this.formValue.value.amenitiesDescription;

    alert("Update Record : " + this.FormId);
    this.api.updateAmenities(this.AmenitiesModelobj, this.FormId)
      .subscribe(res => {
        console.log(res);
        alert("Amenities update successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      }
      )
  }

  // Delete Amenities Record ***************************************************************************************

  deleteAmenitiesDeatils(row: any) {
    alert("Delete Record : "+row.amenitiesId);
    this.api.deleteAmenities(row.amenitiesId)
      .subscribe(res => {
        alert('Amenities record delete successfully');
        this.ngOnInit();
      })
  }


  GetByAmenitiesID(row: AmenitiesModel) {
    this.FormId = row.amenitiesId;
    this.formValue.controls['amenitiesName'].setValue(row.amenitiesName);
    this.formValue.controls['amenitiesDescription'].setValue(row.amenitiesDescription);

  }

}
