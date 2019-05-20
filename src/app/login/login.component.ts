import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string="";
  errorMessage:string;
  constructor(private _router:Router,private _loginService:LoginService) { }

  ngOnInit() {
  }
  login(){
    console.log('inside login');
   let userObj=JSON.parse(localStorage.getItem(this.email));
   console.log(userObj);
    if(this.password===userObj.password)
      {
        this._loginService.isLoggedIn=true;
        sessionStorage.setItem("email",this.email);
        sessionStorage.setItem("userName",userObj.name);
        this._router.navigate(['home']);
      }
    else
    this.errorMessage="email ID or password is incorrect";
  }

  navigateToRegister(){
    this._router.navigate(['/register']);
  }
}
