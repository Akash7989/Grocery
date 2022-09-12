import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatedGuradAdminService implements CanDeactivate<AdminloginComponent>{

  
    constructor() { }
  
    canDeactivate(component: AdminloginComponent ): boolean  {
      if(component.loginForm2.dirty){
        return true;
      }
      return false;
    }
}
