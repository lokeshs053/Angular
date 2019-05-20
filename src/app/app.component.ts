import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
 export class AppComponent implements OnInit{
   coupon:String

  ngOnInit(){
  }

  loadView(){
    //navigate from this method
 //   this._router.navigate(['offers',{coupon:this.coupon}]);
  }


  // constructor(private _router:Router){
  //   this.coupon="100GRUB";
  // }
  
}