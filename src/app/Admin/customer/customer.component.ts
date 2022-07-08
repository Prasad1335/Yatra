import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/Customer/customer.service';
import { CustomerModel } from 'src/app/services/Customer/CustomerModel';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  formValue !: FormGroup
  customerdata: any;
  FormId: any = 0;
  citydata: any;
  customerModelobj: CustomerModel = new CustomerModel();

  constructor(private formbuilder: FormBuilder, private api: CustomerService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      customerId: [''],
      customerFirstName: [''],
      customerLastName: [''],
      customerDateOfBirth: [''],
      customerAddress1: [''],
      customerAddress2: [''],
      cityRefId: [''],
      customerPinCode: [''],
      customerTelephone: [''],
      customerEmail: ['']
    })
    
    this.api.getCityName().subscribe((res: any) => {
      this.citydata = res;
      console.log(this.citydata);
    })
    this.api.getCustomer().subscribe((res: any) => {
      this.customerdata = res;
      console.log(this.customerdata);
    })

  }


  // Add Customer Record ******************************************************************************************

  postCustomersDetails() {
    this.customerModelobj.customerFirstName = this.formValue.value.customerFirstName;
    this.customerModelobj.customerLastName = this.formValue.value.customerLastName;
    this.customerModelobj.customerDateOfBirth = this.formValue.value.customerDateOfBirth;
    this.customerModelobj.customerAddress1 = this.formValue.value.customerAddress1;
    this.customerModelobj.customerAddress2 = this.formValue.value.customerAddress2;
    this.customerModelobj.cityRefId = this.formValue.value.cityRefId.cityId;
    this.customerModelobj.customerPinCode = this.formValue.value.customerPinCode;
    this.customerModelobj.customerTelephone = this.formValue.value.customerTelephone;
    this.customerModelobj.customerEmail = this.formValue.value.customerEmail;



    this.api.postCustomer(this.customerModelobj)
      .subscribe(res => {
        console.log(res);
        alert("New Customer added successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      },
        err => {
          alert("something went wrong")
        })
  }

  // Update Customer Record ***************************************************************************************

  updateCustomersDetails() {

    this.customerModelobj.customerId = this.FormId;
    this.customerModelobj.customerFirstName = this.formValue.value.customerFirstName;
    this.customerModelobj.customerLastName = this.formValue.value.customerLastName;
    this.customerModelobj.customerDateOfBirth = this.formValue.value.customerDateOfBirth;
    this.customerModelobj.customerAddress1 = this.formValue.value.customerAddress1;
    this.customerModelobj.customerAddress2 = this.formValue.value.customerAddress2;
    this.customerModelobj.cityRefId = this.formValue.value.cityRefId.cityId;
    this.customerModelobj.customerPinCode = this.formValue.value.customerPinCode;
    this.customerModelobj.customerTelephone = this.formValue.value.customerTelephone;
    this.customerModelobj.customerEmail = this.formValue.value.customerEmail;

    alert("Update Record : " + this.FormId);
    this.api.updateCustomer(this.customerModelobj, this.FormId)
      .subscribe(res => {
        console.log(res);
        alert("Customer update successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.ngOnInit();
      }
      )
  }

  // Delete Customer Record ***************************************************************************************

  deleteCustomersDetails(row: any) {
    alert("Delete Record : " + row.customerId);
    this.api.deleteCustomer(row.customerId)
      .subscribe(res => {
        alert(' Customer record delete successfully');
        this.ngOnInit();
      })
  }



  GetByCustomerID(row: CustomerModel) {
    this.FormId = row.customerId;
    this.formValue.controls['customerFirstName'].setValue(row.customerFirstName);
    this.formValue.controls['customerLastName'].setValue(row.customerLastName);
    this.formValue.controls['customerDateOfBirth'].setValue(row.customerDateOfBirth);
    this.formValue.controls['customerAddress1'].setValue(row.customerAddress1);
    this.formValue.controls['customerAddress2'].setValue(row.customerAddress2);
    this.formValue.controls['cityRefId'].setValue(row.cityRefId);
    this.formValue.controls['customerPinCode'].setValue(row.customerPinCode);
    this.formValue.controls['customerTelephone'].setValue(row.customerTelephone);
    this.formValue.controls['customerEmail'].setValue(row.customerEmail);
  }

}
