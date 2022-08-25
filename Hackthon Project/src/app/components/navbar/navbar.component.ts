import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   logOutDetails={

   }
  public loggedIn=false;
  userName:any=localStorage.getItem("userName");
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  }
  
  logoutUser(){
    let chk=this.loginService.logout();
    this.loginService.logout().subscribe((resp)=>{
      this.loggedIn=true
    this.logOutDetails=resp
    },
    (err)=>{
      console.log(err)
      alert(err.error.message)
    })
    if(chk){
      alert("you have logged out Sucessfully");
      
      this.router.navigate(['login'])
      location.reload()
      
    }
  }
  
}
