import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CarGuard implements CanActivate {
  constructor(private _loginService:LoginService ,private _router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      //logic to check whether the user is loggedIn
      //check session storage
      if(sessionStorage.getItem("email")!=null){
        return true;
      }
    if(this._loginService.isLoggedIn)
    return true;
    else
    this._router.navigate(['/login']);
      return false;
  }
}
