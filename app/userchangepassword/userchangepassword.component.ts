import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admindata } from '../admindata';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-userchangepassword',
  templateUrl: './userchangepassword.component.html',
  styleUrls: ['./userchangepassword.component.css']
})
export class UserchangepasswordComponent implements OnInit {
msg="";
  constructor( private rs:RecordService, private router: Router,private route: ActivatedRoute,) { }
  
  answer1:Admindata=new Admindata();
   ngOnInit(): void {
   }
   
   loginUser(){
     console.log(this.answer1)
     this.rs.useranswer(this.answer1).subscribe(
       _data=>{
         // this.msg1='You logged in successfully';
       
       this.router.navigateByUrl('/userupdatepassword');
     },
       _error=>{
         this.msg='please enter your favourite';
         // alert("failed login");
 
       // this.router.navigateByUrl('/afterloginnavigation');
   }
     )
 
   }
}
