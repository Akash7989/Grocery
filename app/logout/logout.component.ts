import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FruitsAndVegetablesComponent } from '../fruits-and-vegetables/fruits-and-vegetables.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public totalItem:number=0;
public searchTerm!:string;
  constructor(public router: Router,public route: ActivatedRoute,private cartService:CartService,public fs:FruitsAndVegetablesComponent) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    
  })
  // btnclick0(){
  //   this.router.navigateByUrl('/login');
  // }
  // btnclick1(){
  //   this.router.navigateByUrl('/signup');
  // }

  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm)
  }
  
}

