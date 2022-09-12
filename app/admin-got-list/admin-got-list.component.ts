import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-admin-got-list',
  templateUrl: './admin-got-list.component.html',
  styleUrls: ['./admin-got-list.component.css']
})
export class AdminGotListComponent implements OnInit {
  public adminGotProductList:any;
  public customerDetails:any="";
  public email:any;
  public some:any="";
  public filterCategory:any;
  public filterCategory1:any;
  searchKey:any="";
  constructor(private api:ApiService,private router:Router,private rs:RecordService,private cartService:CartService) { }

  ngOnInit(): void {
  
    this.api.getUserCart().subscribe(res=>{
      this.adminGotProductList=res;
      this.filterCategory=res;

      this.api.getCustomerDetails().subscribe(res=>{
        this.filterCategory1=res;
      })

      

      // console.log(this.adminGotProductList)
      // this.adminGotProductList.froEach((a:any)=>{
      //   Object.assign(a,{quantity:1,total:a.price})
      // });
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
      
    })
   
   
  }

 

  check(data:String){
   this.rs.getCustomerDetails(data).subscribe((resp:any)=>{this.customerDetails=resp;});
  }

  // check(value:any){
  //   this.rs.getCustomerDetails(value).subscribe(res=>{
    
  //     this.customerDetails=res;
  //   })
  //   console.log(this.customerDetails)
      
  //   };
  
  delete(data:any){
    if(confirm("Are you sure to delte this product from the database?")){

    this.rs.deleteMenu(data).subscribe(data=>{
      console.log(data)
    })
  }
else{}}
  removeItem(item:any){
    this.cartService.reomoveCartItem(item);
    
 } 
      // this.api.getProduct().subscribe(res=>{
      //   this.productList=res;
      public filter(category:String){
        this.filterCategory=this.adminGotProductList.filter((a:any)=>{
          if(a.category==category||category==''){
            return a;
          }
        })
    


    }}
