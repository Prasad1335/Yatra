

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Hotels';

  // Get All Hotels Record *************************************************************

  getHotel() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add Hotels Record *********************************************************************

  postHotel(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update Hotel Record *******************************************************************

  updateHotel(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete Hotel Record *******************************************************************
  deleteHotel(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  BaseUrlCity: string = 'https://localhost:7204/api/Cities';

  // Get All Hotels Record *************************************************************

  getCityName() {
    return this.http.get<any>(this.BaseUrlCity)
      .pipe(map((res: any) => {
        return res;
      }))
  }













  BaseccUrl: string = 'https://localhost:7204/api/Countries';

  // Get All Countries Record *************************************************************
  getCo() {
    return this.http.get<any>(this.BaseccUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}




