import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from '../cart.service';
import { RecordService } from '../record.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginform') public loginForm1!: NgForm;
  msg='';
  msg1='';
  shopsearch(){
    this.router.navigateByUrl('/customer')
  }
  
  constructor( private cartService:CartService,private rs:RecordService, private router: Router,private route: ActivatedRoute,) { }
  
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
    // console.log(this.user)
    // console.log(this.user.email)
    this.rs.loginUserFromRemote(this.user).subscribe(
      _data=>{
        this.cartService.setEmail(this.user.email)

        // this.msg1='You logged in successfully';
       
        alert("logged in successfully");
      this.router.navigateByUrl('/fruits-and-vegetables');
    },
      _error=>{
        this.msg='please recheck your password and emailid';
        // alert("failed login");

      // this.router.navigateByUrl('/afterloginnavigation');
  }
    )

  }

}
