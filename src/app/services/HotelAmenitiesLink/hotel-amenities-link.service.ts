
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelAmenitiesLinkService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/HotelAmenitiesLinks';

  // Get All HotelAmenitiesLink Record *************************************************************
 getHotelAmenitiesLink() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Add HotelAmenitiesLink Record *********************************************************************

  postHotelAmenitiesLink(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // postHotelAmenitiesLink(data: any):Observable<any> {
  //   return this.http.get(this.BaseUrl,data);
  // }

  // Update HotelAmenitiesLink Record *******************************************************************

  updateHotelAmenitiesLink(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete HotelAmenitiesLink Record *******************************************************************
  deleteHotelAmenitiesLink(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }




  // Get All HotelAmenitiesLink Record *************************************************************
  BaseUrlHotel: string = 'https://localhost:7204/api/Hotels';
  getByHotelName() {
    return this.http.get<any>(this.BaseUrlHotel)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  

  
  // Get All HotelAmenitiesLink Record *************************************************************
  BaseUrlAmenities: string = 'https://localhost:7204/api/Amenities';
  GetByAmenitiesLinkName() {
    return this.http.get<any>(this.BaseUrlAmenities)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}





