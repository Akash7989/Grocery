import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-userupdatepassword',
  templateUrl: './userupdatepassword.component.html',
  styleUrls: ['./userupdatepassword.component.css']
})
export class UserupdatepasswordComponent implements OnInit {

  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
  }
  updatepassword(update:any){
    this.is.userupdatepasswordservice(update.value).subscribe();
    

  }

}
