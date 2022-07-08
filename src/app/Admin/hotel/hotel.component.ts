import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelService } from 'src/app/services/Hotel/hotel.service';
import { HotelModel } from 'src/app/services/Hotel/HotelModel';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

 
  formValue !: FormGroup
  CityData: any;
  FormID: any = 0;
  hotelName='';
  Hoteldata:any;
  HotelModelobj: HotelModel = new HotelModel();

  constructor(private formbuilder: FormBuilder, private api: HotelService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      hotelId: [''],
      hotelName: [''],
      hotelStar: [''],
      cityRefId: [''],
    })
    this.api.getHotel().subscribe((res: any) => {
      this.Hoteldata = res;
      console.log(this.Hoteldata);
    })

    this.api.getCityName().subscribe((res: any) => {
      this.CityData = res;
      console.log(this.CityData);
    })
    
  }


  // this.api.getCountries().subscribe
  // (data => { this.HotelData = data })
  // Add Hotel Record ******************************************************************************************

  postHotelDetails() {

    this.HotelModelobj.hotelName = this.formValue.value.hotelName;
    this.HotelModelobj.hotelStar = this.formValue.value.hotelStar;
    this.HotelModelobj.cityRefId = this.formValue.value.cityRefId.cityId;


    this.api.postHotel(this.HotelModelobj)
      .subscribe(res => {
        console.log(res);
        alert("New Hotel added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      },
        err => {
          alert("something went wrong")
        })
  }




  // postHotelDetails() {
  //   this.api.postHotel(this.HotelModelobj)
  //   .subscribe({
  //     next:(Hotel) => {
  //       alert("New Hotel added successfully");
    
  //     }

  //   })

  // }

  // Update Hotel Record ***************************************************************************************

  updateHotelDetails() {
    this.HotelModelobj.hotelId = this.FormID;
    this.HotelModelobj.hotelName = this.formValue.value.hotelName;
    this.HotelModelobj.hotelStar = this.formValue.value.hotelStar;
    this.HotelModelobj.cityRefId = this.formValue.value.cityRefId.cityId;

    alert("Update Record : " + this.FormID);
    this.api.updateHotel(this.HotelModelobj, this.FormID)
      .subscribe(res => {
        console.log(res);
        alert("Hotel update successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      }
      )
  }

  // Delete Hotel Record ***************************************************************************************

  deleteHotelDeatils(row: any) {
    alert("Delete Record : "+row.hotelId);
    this.api.deleteHotel(row.hotelId)
      .subscribe(res => {
        alert('Hotel record delete successfully');
        this.ngOnInit();
      })
  }

  

  GetByHotelID(row: HotelModel) {
    this.FormID = row.hotelId;
    this.formValue.controls['hotelName'].setValue(row.hotelName);
    this.formValue.controls['hotelStar'].setValue(row.hotelStar);
    this.formValue.controls['cityRefId'].setValue(row.cityRefId);

  }

}

