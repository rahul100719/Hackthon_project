import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName=localStorage.getItem("userName");
  url="http://localhost:8080/getAllUser"
  constructor(private http:HttpClient) { }
  getUserDetail(){
    console.log("Username="+this.userName)
   return this.http.get(this.url)
  }
}
