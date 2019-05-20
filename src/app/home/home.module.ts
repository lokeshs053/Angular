import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import {HttpClientModule}from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarDetailsComponent } from './car-details/car-details.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { RoutingModule } from '../routing/routing.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,MatGridListModule,MatSidenavModule,
    RoutingModule,MatCardModule
  ],
  declarations: [HomeComponent, CarDetailsComponent],
  providers:[HomeService]
})
export class HomeModule { }
