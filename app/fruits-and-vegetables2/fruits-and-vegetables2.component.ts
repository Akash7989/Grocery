import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fruits-and-vegetables2',
  templateUrl: './fruits-and-vegetables2.component.html',
  styleUrls: ['./fruits-and-vegetables2.component.css']
})
export class FruitsAndVegetables2Component implements OnInit {

  public productList: any;
  public filterCategory:any;
  searchKey:string="";
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
  
    }
    addtoCart(item:any){
      this.cartService.addtoCartService(item);
      // console.log(item)
    }
   public filter(category:String){
      this.filterCategory=this.productList.filter((a:any)=>{
        if(a.category==category||category==''){
          return a;
        }
      })
  
      
  
  
    }
   

}
