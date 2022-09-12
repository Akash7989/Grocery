import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';
import { User } from '../user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  @ViewChild('loginform') public loginForm2!: NgForm;

  msg='';
  msg1='';
  constructor( private rs:RecordService, private router: Router,private route: ActivatedRoute,) { }
  
 user:User=new User();
  ngOnInit(): void {
  }
  btnclick1(){
    this.router.navigateByUrl('/afterloginnavigation');
  }
  btnclick2(){
    this.router.navigateByUrl('/signup');
  }
  loginUser(){
    console.log(this.user)
    this.rs.adminloign(this.user).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
        alert("logged in successfully");
      this.router.navigateByUrl('/admin');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        // alert("failed login");

      // this.router.navigateByUrl('/afterloginnavigation');
  }
    )

  }

}


