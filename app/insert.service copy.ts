import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }
  url="http://localhost:9094/insert"
  url1="http://localhost:9094/view"
  url2="http://localhost:9094/delete"
  url3="http://localhost:9094/insert"

  insertService(data:any){
    return this.http.post(this.url,data);
  }
  viewPlayers(){
    return this.http.get(this.url1);
  }
  deleteService(data1:any){
    return this.http.post(this.url2,data1);
  }
  insertanswer(data2:any){
    return this.http.post(this.url3,data2);
  }
  
}
