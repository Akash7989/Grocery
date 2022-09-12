import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  public customerDetails:any="";

  constructor(private rs:RecordService) { }

  ngOnInit(): void {
  }
  check(data:String){
    this.rs.getCustomerDetails(data).subscribe((resp:any)=>{this.customerDetails=resp;});
   }

}
