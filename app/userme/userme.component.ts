import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userme',
  templateUrl: './userme.component.html',
  styleUrls: ['./userme.component.css']
})
export class UsermeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
