import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/services/City/city.service';
import { HotelService } from 'src/app/services/Hotel/hotel.service';
import { HotelAmenitiesLinkService } from 'src/app/services/HotelAmenitiesLink/hotel-amenities-link.service';
import { HotelAmenitiesLinkModel } from 'src/app/services/HotelAmenitiesLink/hotelAmenitiesLinkModel';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {

hotelImage: string = '';
hotelSerch: any;
amenitiesdata: any;
formValue !: FormGroup;
HotelAmenitiesLinkData: any;
FormID: any = 0;
HotelAmenitiesLinkModelobj: HotelAmenitiesLinkModel = new HotelAmenitiesLinkModel();
cities: any;


constructor(private formbuilder: FormBuilder, private api: HotelAmenitiesLinkService, private cityName:CityService) { }

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
    this.hotelSerch = res;
    console.log(this.hotelSerch);
  })

  this.api.GetByAmenitiesLinkName().subscribe((res: any) => {
    this.amenitiesdata = res;
    console.log(this.amenitiesdata);
  })
}


hotels = [
  { hotelImage: '/assets/images/h4.webp' },
  { hotelImage: '/assets/images/h8.jfif' },
  { hotelImage: '/assets/images/h5.jfif' },
  { hotelImage: '/assets/images/h10.jfif' },
  { hotelImage: '/assets/images/h6.jfif' },
  { hotelImage: '/assets/images/h9.jfif' },
  { hotelImage: '/assets/images/h8.png' },
  { hotelImage: '/assets/images/h9.jfif' },
  { hotelImage: '/assets/images/h2.jfif' },
  { hotelImage: '/assets/images/h1.jfif' },
  { hotelImage: '/assets/images/h3.jfif' },
  { hotelImage: '/assets/images/h4.jfif' }
];
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


GetByHotelSerch(row: HotelAmenitiesLinkModel) {
  // alert(this.FormID);
  this.FormID = row.amenitiesRefId;
  this.formValue.controls['hotelRefId'].setValue(row.hotelRefId);
  this.formValue.controls['amenitiesRefId'].setValue(row.amenitiesRefId);

}
}