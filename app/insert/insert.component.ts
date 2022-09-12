import { Component, OnInit } from '@angular/core';

import { InsertService } from '../insert.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
players:any;
  constructor(private is:InsertService) {
    this.viewPlayer();
   }
  insertdetails(insert:any){
    this.is.insertService(insert.value).subscribe();
  }
  viewPlayer(){
    this.is.viewPlayers().subscribe((resp:any)=>{this.players=resp;})
  }
 deletedetails(deletename:any){
  this.is.insertService(deletename.value).subscribe();
 }

  ngOnInit(): void {
  }

}
