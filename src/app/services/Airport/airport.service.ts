

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Airports';

  // Get All Airport Record *************************************************************

  getAirports() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // Add Airport Record *********************************************************************

  postAirport(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => { 
        return res;
      }))
  }

  // Update Airport Record *******************************************************************

  updateAirport(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete Airport Record *******************************************************************
  deleteAirport(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  











  BasecUrlCity: string = 'https://localhost:7204/api/Cities';

  // Get All Airport Record *************************************************************
  getCityName() {
    return this.http.get<any>(this.BasecUrlCity)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}





