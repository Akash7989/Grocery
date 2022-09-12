import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[RecordService]
})
export class CustomerComponent implements OnInit {
  
  navigateByUrl:any

  
  clickshop(){
    this.router.navigateByUrl('/login')

  }
  searchshop(){
    this.router.navigateByUrl('/shoplist')
  }
  constructor(private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
