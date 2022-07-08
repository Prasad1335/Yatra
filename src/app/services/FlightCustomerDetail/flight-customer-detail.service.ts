

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightCustomerDetailService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/FlightCustomerDetails';

  // Get All Customer Record *************************************************************

  getFlightCustomerDetail() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add FlightCustomerDetails Record *********************************************************************

  postFlightCustomerDetails(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update FlightCustomerDetails Record *******************************************************************

  updateFlightCustomerDetails(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete FlightCustomerDetails Record *******************************************************************
  deleteFlightCustomerDetails(id: number) {
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

  BaseFlightBookingsUrl: string = 'https://localhost:7204/api/FlightBookings';

  // Get All Customer Record *************************************************************
  getflightBooking() {
    return this.http.get<any>(this.BaseFlightBookingsUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}







