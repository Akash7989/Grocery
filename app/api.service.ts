import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  url="http://localhost/cart"

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:9099/view")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 
  
  setProduct(data:any){
    
    return this.http.post(this.url,data)
    ;


  }
  getEmail(){
    return this.http.get<any>("http://localhost:9099/email")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getUserCart(){
    return this.http.get<any>("http://localhost:9099/showCart").pipe(map((res:any)=>{
      // console.log(res)
      return res;
    }))
    
  }
  getUserPayment(){
    return this.http.get<any>("http://localhost:9099/get/payment").pipe(map((res:any)=>{
      return res;
    }))
  }
  getCustomerDetails(){
    return this.http.get<any>("http://localhost:9099/customerDet").pipe(map((res:any)=>{
      return res;
    }))
  }
  

 
}
