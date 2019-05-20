import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './routing/routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
	declarations:[AppComponent],
	providers:[],
	imports:[BrowserModule,RegisterModule,LoginModule,HomeModule,RoutingModule,
		BrowserAnimationsModule], 
	bootstrap:[AppComponent]
})
export class AppModule { }
