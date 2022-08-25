import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/token"
  constructor(private http:HttpClient) { }
  loginUer(token:any){
    localStorage.setItem("token",token);
    return true;

  }
  login(cred:any){
    return this.http.post(this.url,cred);
  }
 
  getToken(cred:any){
    localStorage.setItem("userName",cred.userName);
    return this.http.post(this.url,cred);
  }

  getTokenFromLoc(){
    
    return localStorage.getItem("token");;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined ||token==null || token=='')
    {
      return false;
    }
    return true;
  }
  logout(){
 return   this.http.get(this.url)
    // localStorage.removeItem('token');
    // localStorage.removeItem('userName');
    // return true;
  }
}
