import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-after-cart',
  templateUrl: './after-cart.component.html',
  styleUrls: ['./after-cart.component.css']
})
export class AfterCartComponent implements OnInit {

  public products:any=[];
  public grandTotal!:number;
  public item1!:any;
  public insert1!:any;
  email:String="";
  public item2!:any
  amount!: number;
paymentList:any="";
    constructor(private api:ApiService,private cartService:CartService,public router:Router,private rs:RecordService,) { }
  
    ngOnInit(): void {
      this.cartService.getProduct().subscribe(res=>{
        this.products=res;
        this.grandTotal=this.cartService.getTotalPrice();
      })
      this.item1=this.cartService.cartItemList;
      this.amount=this.grandTotal;
     
  this.email=this.cartService.getEmail();
  // this.item1.email=this.email;
  this.api.getUserPayment().subscribe(res=>{
    this.paymentList=res;
  })
      
    }
    removeItem(item:any){
       this.cartService.reomoveCartItem(item);
       console.log(this.email)
       
    }
    emptyCart(){
      this.cartService.reomoveAllcart();
    }
    loginFirst(){
      alert("login to buy products");
      this.router.navigateByUrl("/login");
    }
    payment(){
      // this.item1
      
      // this.item1.concat(this.email==this.email)
      this.cartService.addAllcart(this.item1).subscribe();
      this.cartService.setAmount(this.amount);
     
      // console.log(this.item1.join(this.email))
      console.log(this.item1)
    //  console.log(this.item1);
    //  console.log(this.item1);
        console.log(this.email)
    //     console.log(this.grandTotal)
      this.router.navigateByUrl('/payment');
    }
      // payment(item1:any){
      //   this.cartService.addAllcart(this.item1).subscribe();
      //  console.log(this.item1);
      //  console.log(this.item1);
      //   this.router.navigateByUrl('/payment');
    
  


}







