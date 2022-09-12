import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  public customerDetails:any="";



  constructor(private rs:RecordService,private router:Router) { }
  

  ngOnInit(): void {
  }

updateProductsByAdmin(update:any){
  // const productFormData=this.prepareFormData(this.product);
this.rs.updateProductsByAdminService(update.value).subscribe(
  (_res:any)=>{
    update.reset();
    // data=>{alert("Added product is now visible to the customer")});

});
}
 


check(data:String){
  this.rs.getCustomerDetails(data).subscribe((resp:any)=>{this.customerDetails=resp;});
 }


}