

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Cities';

  // Get All Cities Record *************************************************************

  getCities(): Observable<any> {
    return this.http.get(this.BaseUrl);
  }

  // Add City Record *****************************************************************

  postCity(data: any): Observable<any> {
    return this.http.post(this.BaseUrl, data);
  }

  // Update City Record *******************************************************************

  updateCity(data: any, id: number): Observable<any> {
    return this.http.put(`${this.BaseUrl}/${id}`, data)
  }

  // Delete City Record *******************************************************************

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.BaseUrl}/${id}`)
  }

  // Get All Countries Record *************************************************************
  BaseccUrl: string = 'https://localhost:7204/api/Countries';

  getCountries(): Observable<any> {
    return this.http.get(this.BaseccUrl);
  }
}








