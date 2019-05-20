import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CarGuard } from '../car.guard';
import { CarDetailsComponent } from '../home/car-details/car-details.component';


const routes:Routes=[
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,
    canActivate:[CarGuard],
    children:[
      {path:'carDetails',component:CarDetailsComponent}
    ]
  },
  {
    path:'**',redirectTo:'login'
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
