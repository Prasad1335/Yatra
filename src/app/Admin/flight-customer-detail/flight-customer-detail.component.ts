import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightCustomerDetailService } from 'src/app/services/FlightCustomerDetail/flight-customer-detail.service';
import { FlightCustomerDetailModel } from 'src/app/services/FlightCustomerDetail/FlightCustomerDetailModel';

@Component({
  selector: 'app-flight-customer-detail',
  templateUrl: './flight-customer-detail.component.html',
  styleUrls: ['./flight-customer-detail.component.scss']
})
export class FlightCustomerDetailComponent implements OnInit {

  flightCustomerDetailData: any;
  customerdata: any;
  formValue !: FormGroup;
  flightBookingData: any;
  FormId: any = 0;
  flightCustomerDetailModelObj: FlightCustomerDetailModel = new FlightCustomerDetailModel();

  constructor(private formbuilder: FormBuilder, private api: FlightCustomerDetailService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      flightCustomerDetailId: [''],
      flightBookingRefId: [''],
      customerRefId: [''],
    })
    this.api.getFlightCustomerDetail().subscribe((res: any) => {
      this.flightCustomerDetailData = res;
      console.log(this.flightCustomerDetailData);
    })

    this.api.getflightBooking().subscribe((res: any) => {
      this.flightBookingData = res;
      console.log(this.flightBookingData);
    })

    this.api.getCustomer().subscribe((res: any) => {
      this.customerdata= res;
      console.log(this.customerdata);
    })
  }
  // Add HotelAmenitiesLink Record ******************************************************************************************

  postFlightCustomerDetails() {

    this.flightCustomerDetailModelObj.flightBookingRefId = this.formValue.value.flightBookingRefId.hotelId;
    this.flightCustomerDetailModelObj.customerRefId = this.formValue.value.customerRefId.amenitiesId;

    this.api.postFlightCustomerDetails(this.flightCustomerDetailModelObj)
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

  updateFlightCustomerDetails() {
    this.flightCustomerDetailModelObj.flightCustomerDetailId = this.FormId;
    this.flightCustomerDetailModelObj.flightBookingRefId = this.formValue.value.flightBookingRefId.hotelId;
    this.flightCustomerDetailModelObj.customerRefId = this.formValue.value.customerRefId.amenitiesId;


    alert("Update Record : " + this.FormId);
    this.api.updateFlightCustomerDetails(this.flightCustomerDetailModelObj, this.FormId)
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

  deleteFlightCustomerDetail(row: any) {
    alert("Delete Record : " + row.flightCustomerDetailId);
    this.api.deleteFlightCustomerDetails(row.flightCustomerDetailId)
      .subscribe(res => {
        alert('HotelAmenitiesLink record delete successfully');
        this.ngOnInit();
      })
  }


  GetByFlightCustomerDetailDataId(row: FlightCustomerDetailModel) {
    this.FormId = row.customerRefId;
    this.formValue.controls['flightBookingRefId'].setValue(row.flightBookingRefId);
    this.formValue.controls['customerRefId'].setValue(row.customerRefId);

  }

}
