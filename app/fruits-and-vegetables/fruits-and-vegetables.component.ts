import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fruits-and-vegetables',
  templateUrl: './fruits-and-vegetables.component.html',
  styleUrls: ['./fruits-and-vegetables.component.css']
})
export class FruitsAndVegetablesComponent implements OnInit {
public productList: any;
public filterCategory:any;
searchKey:string="";
email:String="";
item:any;



  constructor(private api:ApiService,private cartService:CartService,public _router:Router) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

    this.email=this.cartService.getEmail();

    

  }
  
 public filter(category:String){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category==category||category==''){
        return a;
      }
    })


  }
  addtoCart(item:any){
    console.log(this.email)
    console.log(item)
    console.log(item)
  
    this.cartService.addtoCartService(item.value).subscribe();


    if(item.id==this.filterCategory.id){
      item.quantity+=1;
    }
  console.log(item.quantity)
  }

}
