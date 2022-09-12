import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'GroceryStore';
  
  constructor(public router: Router){}
    
  
 
   
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}

