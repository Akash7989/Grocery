import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg='';
  @ViewChild('insert') public loginForm1!: NgForm;

  constructor(private router: Router,private is:InsertService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  insertdetails(insert:any){
    this.is.insertService(insert.value).subscribe(
      
      _data=>{alert("Registration done successfully.");
      this.router.navigateByUrl("/login");

        
      },
      _error=>{this.msg="The given email id is already exist";

      }
    );


  }
  
  btnclick7(){

    this.router.navigateByUrl('/afterloginnavigation');


  }
  
  

}
