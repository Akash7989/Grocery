import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any=[];
public grandTotal!:number;

  constructor(private cartService:CartService,public router:Router) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
     this.cartService.reomoveCartItem(item);
     
  }
  emptyCart(){
    this.cartService.reomoveAllcart();
  }
  loginFirst(){
    alert("login to buy products");
    this.router.navigateByUrl("/login");
  }
  cart(){
    this.router.navigateByUrl("");
  }

}
