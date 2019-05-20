import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string;
  carBrands=[];
  constructor(private _service:HomeService,private _router:Router) { }

  logOut(){
    sessionStorage.clear();
    this._router.navigate(['login']);
  }

  selectBrand(brand){
    console.log(brand);
    this._router.navigate(['home/carDetails',
    {brand:JSON.stringify(brand)}]);
    // ?
  }

  ngOnInit() {
    this.userName=sessionStorage.getItem('userName');
    this._service.getCarBrands().subscribe((data)=>{
      this.carBrands=data['carMakes'];
      console.log(this.carBrands);
    } 
    , ()=>{});
  }

}
