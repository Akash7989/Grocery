import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})


export class CanDeactivatedGurardService implements CanDeactivate<LoginComponent>{
  
  constructor() { }

  canDeactivate(component: LoginComponent ): boolean  {
    if(component.loginForm1.dirty){
      return true;
    }
   
      // alert("Once you click home you will lose your products in cart");
      return false;
  

  // canDeactivate1(component:AdminloginComponent):boolean{
  //   if(component.loginForm2.dirty){
  //     return true;
  //   }
  //   return false;
  // }
  
}}


