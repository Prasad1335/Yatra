
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Customers';

  
  // Get All Customer Record *************************************************************

  getCustomer(): Observable<any> {
    return this.http.get(this.BaseUrl);
  }

  // Add Customer Record *****************************************************************

  postCustomer(data: any): Observable<any> {
    return this.http.post(this.BaseUrl, data);
  }

  // Update Customer Record ***************************************************************

  updateCustomer(data: any, id: number): Observable<any> {
    return this.http.put(`${this.BaseUrl}/${id}`, data)
  }

  // Delete Customer Record ***************************************************************

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/${id}`)
  }

  // Get All Countries Record *************************************************************
  BaseCitiesUrl: string = 'https://localhost:7204/api/Cities';

  getCityName(): Observable<any> {
    return this.http.get(this.BaseCitiesUrl);
  }

}



