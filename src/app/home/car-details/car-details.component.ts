import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsService } from '../car-details.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  upComingCars=[];
  constructor(private _route:ActivatedRoute ,private _service:CarDetailsService) { }

  getUpcomingCars(){
    console.log(this._route);
    let brandDetails=this._route.snapshot.params;
    let brandObj=JSON.parse(brandDetails.brand);
    this._service.getCarDetails(brandObj.url)
    .subscribe((data)=>{
      this.upComingCars=data;
    });
  }

  ngOnInit() {

    this._route.params.subscribe(data=>this.getUpcomingCars());
    console.log('inside onInit');
   //console.log(brandObj.name);
    this.getUpcomingCars();

  }

}
