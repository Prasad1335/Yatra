import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private http: HttpClient) { }

  //baseApiUrl:string=environment.baseUrl

  BaseUrl: string = 'https://localhost:7204/api/Countries';

  // Get All Countries Record *************************************************************

  getCountries():Observable<any> {
    return this.http.get(this.BaseUrl);
  }

  // Add Country Record *********************************************************************

  postCountry(data: any):Observable<any> {
    return this.http.post(this.BaseUrl,data);
  }

  // Update Country Record *******************************************************************

  updateCountry(data: any, id: number):Observable<any> {
    return this.http.put(`${this.BaseUrl}/${id}`, data)
  }

  // Delete Country Record *******************************************************************

  deleteCountry(id: number):Observable<any> {
    return this.http.delete(`${this.BaseUrl}/${id}`)
  }
}


