

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/FlightSchedules';

  // Get All Flight Record *************************************************************

  getFlightSchedules() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add Flight Record *********************************************************************

  postFlightSchedule(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Update Flight Record *******************************************************************

  updateFlightSchedule(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete Flight Record *******************************************************************
  deleteFlightSchedule(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }



  BaseFlightsUrl: string = 'https://localhost:7204/api/Flights';

  // Get All Flight Record *************************************************************
  getFlights() {
    return this.http.get<any>(this.BaseFlightsUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}







