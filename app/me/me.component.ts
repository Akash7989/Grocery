import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  msg:String="";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  changepassword(){
    this.msg="Choose any of the questions to answer";
    

  }

}
