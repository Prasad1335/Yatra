
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Airlines';

  // Get All Airlines Record *************************************************************

  getAirlines() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add Airlines Record *********************************************************************

  postAirlines(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update Airlines Record *******************************************************************

  updateAirlines(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete Airlines Record *******************************************************************
  deleteAirlines(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }













  BaseUrlCity: string = 'https://localhost:7204/api/Cities';

  // Get All Airlines Record *************************************************************
  getByCityName() {
    return this.http.get<any>(this.BaseUrlCity)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}




