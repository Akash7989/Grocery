import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { catchError, map, Observable, pipe } from 'rxjs';
import { tap } from 'rxjs';
import { Admindata } from './admindata';
import { Product } from './model/product.model';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
// };
@Injectable({
  providedIn: 'root'
})
export class RecordService {
 
  constructor(private http:HttpClient) { }
  url="http://localhost:9099/admindata"
  url1="http://localhost:9099/login"
  url2="http://localhost:9099/adminlogin"
  url3="http://localhost:9099/checkanswer"
  url4="http://localhost:9099/usercheckanswer"
  url5="http://localhost:9099/products"
  url7="http://localhost:9099//cart/grocery/{email}"
  url8="http://localhost:9099/player"
  url9="http://localhost:9099/cartShow"
  url10="http://localhost:9099/viewapp"
  url11="http://localhost:9099/viewapp1"
  url12="http://localhost:9099/deletemenu"
  url13="http://localhost:9099/deleteproduct"

  insertservice(data:any){
    
    return this.http.post(this.url,data);


  }
 updateProductsByAdminService(data:any){
    return this.http.post(this.url5,data);
  }
  public loginUserFromRemote(user:User):Observable<object>{
    // console.log(user)
    return this.http.post(this.url1,user);



  }
  public adminloign(user:User):Observable<object>{
    return this.http.post(this.url2,user);
  }
  public adminanswer(answer:Admindata):Observable<object>{
    return this.http.post(this.url3,answer);
  }

  public useranswer(answer:Admindata):Observable<object>{
    return this.http.post(this.url4,answer);
  }
  
// public getCustomerDetails(email:String): Observable<object> {
//   // console.log(email.valueOf)
//   console.log(email)
//   const url = "http://localhost:9099/player/${email}";
//   const url2=`${this.url9}`;
//   return this.http.get<any>(url)
//   .pipe(map((res:any)=>{
//     console.log(res)
//     return res;
//   }));
  // public getCustomerDetails(email:String){
  //   const url="http://localhost:9099/player/${email}"
  //   console.log(email)
  //   // return this.http.get<any>(`http://localhost:9099.player/${email}`).map(res=>res.json());
  //   return this.http.get<any>(url).pipe(
      
    
  //   map((res:any)=>{
  //     console.log(res)
  //     return res;
  //   })
  //   // ,tap(_=>this.log(`fetched email=${email}`))
  //   );

  getCustomerDetails(data:String){
    console.log(data)
    return this.http.post(this.url10,data);
  }
  getProductDetails(data:String){
    console.log(data)
    return this.http.post(this.url11,data);
  }
  deleteOne(data:any){
    console.log(data)
    return this.http.post(this.url12,data);
  } 
  deleteMenu(id:any):Observable<object>{
    return this.http.delete(`${this.url13}/${id}`);

  }

}
/** GET hero by id. Will 404 if id not found */
// getHero(id: number): Observable<Hero> {
//   const url = `${this.heroesUrl}/${id}`;
//   return this.http.get<Hero>(url).pipe(
//     tap(_ => this.log(`fetched hero id=${id}`)),
//     catchError(this.handleError<Hero>(`getHero id=${id}`))
//   );
// }
// return this.http.get(`api/leagues/${id}`).map(res => res.json());


// public getCustomerDetails(user:String){
//   console.log(user)
//   return this.http.get<any>("http://localhost:9099/:player/:user").pipe(map((res:any)=>{
//     return res;
//   }))
// }
  
  



// info1: string[]=["akash G","empoo1","Jfd"];
// info2: string[]=["arun G","Emp002","JFD"];
// info3: string[]=["Ajay G","Emp003","JFD"];

// getInfo1():string[]{
//   return this.info1;
// }
// getInfo2():string[]{
//   return this.info2;
// }
// getInfo3():string[]{
//   return this.info3;
// }

// addInfo(info:any){
//   this.info1.push(info);
//   this.info2.push(info);
//   this.info3.push(info);
  
// }*/