import { Injectable } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatedGuardSignupService {

  constructor() { }

  canDeactivate(component: SignupComponent ): boolean  {
    if(component.loginForm1.dirty){
      return true;
    }
   
      // alert("Once you click home you will lose your products in cart");
      return false;
}
}