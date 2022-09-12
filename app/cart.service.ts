import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './model/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {
  url1="http://localhost:9099/cart1"
  url12="http://localhost:9099/updatemenu"

  email:String="";

public cartItemList :any=[];
public productList= new  BehaviorSubject<any>([]);
public search=new BehaviorSubject<string>("");
  amount:any="";
  date:any="";

  constructor(private http:HttpClient) { }

getProduct(){
  return this.productList.asObservable();
}
setProduct(product:any){
  this.cartItemList.push(...product);

  this.productList.next(product);
  
    
  }
  setEmail(data:any){
    this.email=data;
  }
  getEmail(){
    console.log(this.email);
   return this.email; 
  }
  updateMenu(mid: number, menu: Product): Observable<Object>{
    return this.http.put(`${this.url12}/${mid}`, menu);
  }
//   var found = false;
//   // Search each ordered item for the menuItem to add
//   angular.forEach(vorders, function(orderedItem) {
//     if (orderedItem.name == menuItem.name) { // Found it
//       found = true;
//       orderedItem.qty += 1; // Add one
//     }
//   });

//   // If we didn't find an existing order, add a new one
//   if (!found) {
//     var newItem = { "name": menuItem.name, "price": menuItem.price, "qty": 1 }
//     vorders.push(newItem);
//   }

// }
// addtoCart(product:any){
//   if(product==this.cartItemList){
//     this.cartItemList.product+=1;
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//   }
//   else{
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();

//   }

// }
public addtoCartService(product:any){
  console.log(this.email)
  product.email=this.email;
  console.log(product.email)
  console.log(product)

  this.cartItemList.push(product);
  this.cartItemList.join(this.email)
  console.log(this.cartItemList.join(this.email))

  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  // console.log(product)
  console.log(this.cartItemList)
  return this.http.post("http://localhost:9099/cart1",product)
}
getTotalPrice():number{
  let grandTotal=0;
  this.cartItemList.map((a: any)=>{
    grandTotal+=a.total;
  })
  return grandTotal
   }
   increaseQuantity(product:any){
    let grandQuantity=0;
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        grandQuantity+=a.quantity;
        console.log(grandQuantity)

      }
    })
   }
   reomoveCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    
   }
   reomoveAllcart(){
   this.cartItemList=[]
   this.productList.next(this.cartItemList);

   }
   
   addAllcart(data:any){
    // data.email=this.email;
    
    this.productList.next(this.cartItemList);
    // console.log(data)
    return this.http.post("http://localhost:9099/cart",data)
   }
   setAmount(data:number){
    this.amount=data;
    console.log(this.amount);
  }
  getAmount(){
    console.log(this.amount);
   return this.amount; 
  }
  setDate(date:String){
    this.date=date;
  }
  // PaymentMethod(data:any){
  //   return this.http.post("http://localhost:9099/payment",data)
  //   }

    paymentService(data8: any) {

      data8.itemAmount=this.amount;
      data8.email=this.email
      data8.date=this.date;
      console.log(this.date)
      return this.http.post( "http://localhost:9099/payment",data8);
    }
   
}










