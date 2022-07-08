
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {

  constructor(private http: HttpClient) { }

  BaseUrl: string = 'https://localhost:7204/api/Amenities';

  // Get All Amenities Record *************************************************************
 getAmenities() {
    return this.http.get<any>(this.BaseUrl)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Add Amenities Record *********************************************************************

  postAmenities(data: any) {
    return this.http.post<any>(this.BaseUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // postAmenities(data: any):Observable<any> {
  //   return this.http.get(this.BaseUrl,data);
  // }

  // Update Amenities Record *******************************************************************

  updateAmenities(data: any, id: number) {
    return this.http.put<any>(`${this.BaseUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  // Delete Amenities Record *******************************************************************
  deleteAmenities(id: number) {
    return this.http.delete<any>(`${this.BaseUrl}/${id}`)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}




