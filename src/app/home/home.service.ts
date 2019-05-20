import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private _http:HttpClient) { }

  getCarBrands(){
    //make a HTTP call
    console.log('inside getCarBrands');
   return  this._http.get('https://raw.githubusercontent.com/Harsh-gitx/CarAPI/master/getCars');
  }

}
