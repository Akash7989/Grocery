import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  updatepassword(update:any){
    this.is.updatepasswordservice(update.value).subscribe();
    

  }
  

}
