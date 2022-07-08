import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelAmenitiesLinkService } from 'src/app/services/HotelAmenitiesLink/hotel-amenities-link.service';
import { HotelAmenitiesLinkModel } from 'src/app/services/HotelAmenitiesLink/hotelAmenitiesLinkModel';


@Component({
  selector: 'app-hotel-amenities-link',
  templateUrl: './hotel-amenities-link.component.html',
  styleUrls: ['./hotel-amenities-link.component.scss']
})
export class HotelAmenitiesLinkComponent implements OnInit {
  hoteldata:any;
  amenitiesdata:any;
  formValue !: FormGroup;
  HotelAmenitiesLinkData: any;
  FormId: any = 0;
  HotelAmenitiesLinkModelobj: HotelAmenitiesLinkModel = new HotelAmenitiesLinkModel();

  constructor(private formbuilder: FormBuilder, private api: HotelAmenitiesLinkService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      hotelAmenitiesLinkId: [''],
      hotelRefId: [''],
      amenitiesRefId: [''],
    })
    this.api.getHotelAmenitiesLink().subscribe((res: any) => {
      this.HotelAmenitiesLinkData = res;
      console.log(this.HotelAmenitiesLinkData);
    })

    this.api.getByHotelName().subscribe((res: any) => {
      this.hoteldata = res;
      console.log(this.hoteldata);
    })

    this.api.GetByAmenitiesLinkName().subscribe((res: any) => {
      this.amenitiesdata = res;
      console.log(this.amenitiesdata);
    })
  }
  // Add HotelAmenitiesLink Record ******************************************************************************************

  postHotelAmenitiesLinkDetails() {

    this.HotelAmenitiesLinkModelobj.hotelRefId = this.formValue.value.hotelRefId.hotelId;
    this.HotelAmenitiesLinkModelobj.amenitiesRefId = this.formValue.value.amenitiesRefId.amenitiesId;

    this.api.postHotelAmenitiesLink(this.HotelAmenitiesLinkModelobj)
      .subscribe(res => {
        console.log(res);
        alert("New HotelAmenitiesLink added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      },
        err => {
          alert("something went wrong")
        })
  }
  // Update HotelAmenitiesLink Record ***************************************************************************************

  updateHotelAmenitiesLinkDetails() {
    this.HotelAmenitiesLinkModelobj.hotelAmenitiesLinkId = this.FormId;
    this.HotelAmenitiesLinkModelobj.hotelRefId = this.formValue.value.hotelRefId.hotelId;
    this.HotelAmenitiesLinkModelobj.amenitiesRefId = this.formValue.value.amenitiesRefId.amenitiesId;


    alert("Update Record : " + this.FormId);
    this.api.updateHotelAmenitiesLink(this.HotelAmenitiesLinkModelobj, this.FormId)
      .subscribe(res => {
        console.log(res);
        alert("HotelAmenitiesLink update successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      }
      )
  }

  // Delete HotelAmenitiesLink Record ***************************************************************************************

  deleteHotelAmenitiesLinkDeatils(row: any) {
    alert("Delete Record : "+row.hotelAmenitiesLinkId);
    this.api.deleteHotelAmenitiesLink(row.hotelAmenitiesLinkId)
      .subscribe(res => {
        alert('HotelAmenitiesLink record delete successfully');
        this.ngOnInit();
      })
  }


  GetByHotelAmenitiesLinkId(row: HotelAmenitiesLinkModel) {
    this.FormId = row.amenitiesRefId;
    this.formValue.controls['hotelRefId'].setValue(row.hotelRefId);
    this.formValue.controls['amenitiesRefId'].setValue(row.amenitiesRefId);

  }

}
