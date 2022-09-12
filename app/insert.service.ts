import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertService {
  

  constructor(private http:HttpClient) { }
  url="http://localhost:9099/insert"
  url1="http://localhost:9099/insert"
  url3="http://localhost:9099/answer"
  url2="http://localhost:9099/admindata"
  url4="http://localhost:9099/useranswer"

  insertService(data:any){
    return this.http.post(this.url,data);
  }
  updatepasswordservice(data1:any){
    return this.http.post(this.url2,data1);

  }
  userupdatepasswordservice(data3:any){
    return this.http.post(this.url4,data3);

  }
  viewPlayers(){
    return this.http.get(this.url1);
  }

  insertanswer(data2:any){
    return this.http.post(this.url3,data2);

  }
}
