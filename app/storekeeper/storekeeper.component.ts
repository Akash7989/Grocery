import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-storekeeper',
  templateUrl: './storekeeper.component.html',
  styleUrls: ['./storekeeper.component.css']
})
export class StorekeeperComponent implements OnInit {

  constructor(private rs:RecordService) { }

  insertValues(insert:any){
    this.rs.insertservice(insert.value).subscribe();

  }
  ngOnInit(): void {
  }
  



  }


  
 // constructor(private router: Router,private route: ActivatedRoute,private rs:RecordService) { }
   

  //ngOnInit(): void {
  //}

//}


/**--info_rec1:string[]=[];
info_rec2:string[]=[];
info_rec3:string[]=[];

getEmpInfo1(){
  this.info_rec1=this.rs.getInfo1();
}
getEmpInfo2(){
  this.info_rec2=this.rs.getInfo2();
}
getEmpInfo3(){
  this.info_rec3=this.rs.getInfo3();
}
constructor(private rs:RecordService) { }

ngOnInit(): void {
}
updateInfo(loc:any){
  this.rs.addInfo(loc.value.Location)
}

}*/