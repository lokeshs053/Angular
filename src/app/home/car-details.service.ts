import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  constructor(private _http:HttpClient) { }

  getCarDetails(url){
  let observableData=this._http.get(url);
  return observableData.
         pipe(  map(  data=>data['upCommingCars']  )   );
  }


//  getCarDetails=(url)=>this._http.get(url).pipe(map(data=>data['upComingCars']))

}
