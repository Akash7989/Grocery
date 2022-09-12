import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  date=new Date();
  currentYear=this.date.getUTCFullYear();
  currentMonth=this.date.getUTCMonth()+1;
  currentDay=this.date.getUTCDate();

  today:any;
  finalMonth:any;
  finaltoday:any;

  itemAmount: any;
  email:any;
cash:any;
paymentList:any="";

  constructor(private router:Router,private cartService:CartService,private api:ApiService) { }

  ngOnInit(): void {     
     this.itemAmount=this.cartService.getAmount();
    this.email=this.cartService.getEmail();
    console.log(this.itemAmount);
    this.api.getUserPayment().subscribe(res=>{
      this.paymentList=res;
    this.itemAmount=this.cartService.getAmount();
    this.email=this.cartService.getEmail();
    
    if(this.currentMonth<10){
      this.finalMonth="0"+this.currentMonth;
    }
    else{
      this.finalMonth=this.currentMonth;
    }
    if(this.currentDay<10){
      this.finaltoday="0"+this.currentDay;
    }else{
      this.finaltoday=this.currentDay;


    }
    this.today=this.currentYear+"-"+this.finalMonth+"-"+this.finaltoday;
    this.cartService.setDate(this.today);
  });
    

  }
 
  // this.cartService.PaymentMethod(this.itemAmount).subscribe();
  // this.cartService.PaymentMethod(this.email).subscribe();

  pay(cash:any){
    console.log(this.today)
    
    this.cartService.paymentService(cash.value).subscribe();
    alert("Payment Successful. Our cart will reach you soon");
    this.router.navigateByUrl("/fruits-and-vegetables");
    // console.log(cash)
    // console.log(this.paymentList);


  }
}

