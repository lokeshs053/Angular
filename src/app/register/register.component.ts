import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  email:string;
  mobile:string;
  password:string;
  confirmPass:string;
  gender:string;
  constructor(private _router:Router
    ) { }

  ngOnInit() {
  }
  register(){
    console.log('entering register method');
    console.log(this.name)
    console.log(this.email)
    const user={
      name:this.name,
      email:this.email,
      password:this.password,
      mobile:this.mobile,
      gender:this.gender
    }
  localStorage.setItem(this.email,JSON.stringify(user));
this._router.navigate(['/login']);

  }
  navigateToLogin(){
    this._router.navigate(['login']);
  }
}
