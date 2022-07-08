import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelCustomerDetailService } from 'src/app/services/HotelCustomerDetail/hotel-customer-detail.service';
import { HotelCustomerDetailModel } from 'src/app/services/HotelCustomerDetail/HotelCustomerDetailModel';

@Component({
  selector: 'app-hotel-customer-detail',
  templateUrl: './hotel-customer-detail.component.html',
  styleUrls: ['./hotel-customer-detail.component.scss']
})
export class HotelCustomerDetailComponent implements OnInit {

  hotelCustomerDetailData: any;
  customerdata: any;
  formValue !: FormGroup;
  hotelBookingData: any;
  FormId: any = 0;
  hotelCustomerDetailModelObj: HotelCustomerDetailModel = new HotelCustomerDetailModel();

  constructor(private formbuilder: FormBuilder, private api: HotelCustomerDetailService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      hotelCustomerDetailId: [''],
      hotelBookingRefId: [''],
      customerRefId: [''],
    })
    this.api.getHotelCustomerDeatils().subscribe((res: any) => {
      this.hotelCustomerDetailData = res;
      console.log(this.hotelCustomerDetailData);
    })

    this.api.getHotelBooking().subscribe((res: any) => {
      this.hotelBookingData = res;
      console.log(this.hotelBookingData);
    })

    this.api.getCustomer().subscribe((res: any) => {
      this.customerdata= res;
      console.log(this.customerdata);
    })
  }
  // Add HotelAmenitiesLink Record ******************************************************************************************

  postHotelCustomerDetails() {

    this.hotelCustomerDetailModelObj.hotelBookingRefId = this.formValue.value.hotelBookingRefId.hotelId;
    this.hotelCustomerDetailModelObj.customerRefId = this.formValue.value.customerRefId.amenitiesId;

    this.api.postHotelCustomer(this.hotelCustomerDetailModelObj)
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

  updateHotelCustomerDetails() {
    this.hotelCustomerDetailModelObj.hotelCustomerDetailId = this.FormId;
    this.hotelCustomerDetailModelObj.hotelBookingRefId = this.formValue.value.hotelBookingRefId.hotelId;
    this.hotelCustomerDetailModelObj.customerRefId = this.formValue.value.customerRefId.amenitiesId;


    alert("Update Record : " + this.FormId);
    this.api.updateHotelCustomer(this.hotelCustomerDetailModelObj, this.FormId)
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

  deleteHotelCustomerDetail(row: any) {
    alert("Delete Record : " + row.hotelCustomerDetailId);
    this.api.deleteHotelCustomer(row.hotelCustomerDetailId)
      .subscribe(res => {
        alert('HotelAmenitiesLink record delete successfully');
        this.ngOnInit();
      })
  }


  GetByHotelCustomerDetailDataId(row: HotelCustomerDetailModel) {
    this.FormId = row.customerRefId;
    this.formValue.controls['hotelBookingRefId'].setValue(row.hotelBookingRefId);
    this.formValue.controls['customerRefId'].setValue(row.customerRefId);

  }

}