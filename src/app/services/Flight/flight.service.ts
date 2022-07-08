


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Flights';

  // Get All Flight Record *************************************************************

  getFlight() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add Flight Record *********************************************************************

  postFlight(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update Flight Record *******************************************************************

  updateFlight(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete Flight Record *******************************************************************
  deleteFlight(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }






  BaseAirlinesUrl: string = 'https://localhost:7204/api/Airlines';

  // Get All Flight Record *************************************************************
  getAirlines() {
    return this.http.get<any>(this.BaseAirlinesUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  BaseCitiesUrl: string = 'https://localhost:7204/api/Cities';

  // Get All Flight Record *************************************************************
  getCities() {
    return this.http.get<any>(this.BaseCitiesUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}






