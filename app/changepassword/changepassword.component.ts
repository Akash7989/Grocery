import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Admindata } from '../admindata';
import { InsertService } from '../insert.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  msg='';
  msg1='';
  
  
  constructor( private rs:RecordService, private router: Router,private route: ActivatedRoute,) { }
  
 answer1:Admindata=new Admindata();
  ngOnInit(): void {
  }
  
  loginUser(){
    console.log(this.answer1)
    this.rs.adminanswer(this.answer1).subscribe(
      _data=>{
        // this.msg1='You logged in successfully';
      
      this.router.navigateByUrl('/updatepassword');
    },
      _error=>{
        this.msg='please enter your favourite';
        // alert("failed login");

      // this.router.navigateByUrl('/afterloginnavigation');
  }
    )

  }
  }