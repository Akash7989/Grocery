import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fruits-and-vegetables1',
  templateUrl: './fruits-and-vegetables1.component.html',
  styleUrls: ['./fruits-and-vegetables1.component.css']
})
export class FruitsAndVegetables1Component implements OnInit {

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
    // alert("login to buy products");
    // this._router.navigateByUrl("/login");
  
    this.cartService.addtoCartService(item);
  }
 public filter(category:String){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category==category||category==''){
        return a;
      }
    })

    


  }
 

}
