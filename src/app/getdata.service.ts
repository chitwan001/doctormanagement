import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http : HttpClient) { }
  _url = 'https://doctormanagementapi.herokuapp.com/';

  getdoctors(){
    return this.http.get(this._url+'doctor/get');
  }
}
