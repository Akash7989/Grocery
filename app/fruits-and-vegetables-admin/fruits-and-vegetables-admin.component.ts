import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { Product } from '../model/product.model';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-fruits-and-vegetables-admin',
  templateUrl: './fruits-and-vegetables-admin.component.html',
  styleUrls: ['./fruits-and-vegetables-admin.component.css']
})
export class FruitsAndVegetablesAdminComponent implements OnInit {
  // menu: Product = new Product();

  
  public productList: any;
public filterCategory:any;
searchKey:string="";
public some:any="";
id:any;
  constructor(private api:ApiService,private cartService:CartService,public _router:Router,private rs:RecordService) { }

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
  //   this.id=this.cartService.getId();
  // this.cartService.getMenuById(this.id).subscribe(data => {
  //   console.log(this.id)
  //   this.menu = data;
  // }, error => console.log(error));


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

  updateProductsByAdmin(update:any){
    // const productFormData=this.prepareFormData(this.product);
  this.rs.updateProductsByAdminService(update.value).subscribe(
    (_res:any)=>{
      update.reset();
      window.location.reload();

      // data=>{alert("Added product is now visible to the customer")});
  
  });
  }

//     onsubmit(){
//   this.cartService.updateMenu(this.id, this.menu).subscribe( data =>{
//     this.goToMenuList();
//   }
//   , error => console.log(error));
// }

// goToMenuList(){
//   this.router.navigate(['/adminmenulist']);
// }
// }
deleteMenu(data:any){
  console.log(data)
  if(confirm("Are you sure to delte this product from the database?")){
  this.rs.deleteOne(data).subscribe((res:any)=>{
    this.some=res;
    
    
    window.location.reload();
  });
} else {
  // Do nothing!
  console.log('Thing was not saved to the database.');
}

      }

}
