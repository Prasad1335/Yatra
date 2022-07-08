
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelCustomerDetailService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/HotelCustomerDetails';

  // Get All Customer Record *************************************************************

  getHotelCustomerDeatils() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add HotelCustomer Record *********************************************************************

  postHotelCustomer(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update HotelCustomer Record *******************************************************************

  updateHotelCustomer(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete HotelCustomer Record *******************************************************************
  deleteHotelCustomer(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }





  BaseCustomersUrl: string = 'https://localhost:7204/api/Customers';

  // Get All Customer Record *************************************************************
  getCustomer() {
    return this.http.get<any>(this.BaseCustomersUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  BaseHotelBookingsUrl: string = 'https://localhost:7204/api/HotelBookings';

  // Get All Customer Record *************************************************************
  getHotelBooking() {
    return this.http.get<any>(this.BaseHotelBookingsUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}








