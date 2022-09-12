import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-admin-payment-verification',
  templateUrl: './admin-payment-verification.component.html',
  styleUrls: ['./admin-payment-verification.component.css']
})
export class AdminPaymentVerificationComponent implements OnInit {
itemAmount:any="";
email:any="";
paymentList:any
;
public productDetails:any="";
public filterCategory:any;
searchKey:any="";


constructor(public router:Router,private cartService:CartService,private api:ApiService,private rs:RecordService) { }

  ngOnInit(): void {
    this.api.getUserPayment().subscribe(res=>{
      this.paymentList=res;
      this.filterCategory=res;

    this.itemAmount=this.cartService.getAmount();
    this.email=this.cartService.getEmail();
  });
  this.cartService.search.subscribe((val:any)=>{
    this.searchKey=val;
    
  })


}


  check(customer:String){
    console.log(customer)
    this.rs.getProductDetails(customer).subscribe((resp:any)=>{this.productDetails=resp;});
   }

}
