import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred={
    "userName":'',
    "passWord":''
  }
  a="hello"
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
   
    if(this.cred.userName!=null && this.cred.passWord!=null &&this.cred.userName!='' && this.cred.passWord!=''){
       this.loginService.login(this.cred).subscribe((resp:any)=>{
                  console.log(resp);
                  // this.loginService.loginUer(resp.token)
                  localStorage.setItem("userName",this.cred.userName);
                  window.location.href="/dashbord"
                  
                  alert("Logged In Sucessfully");
                  // this.loginService.logout()
       },
       err=>{
        console.log(err)
        alert(err.error )
        this.cred.passWord='';
        this.cred.userName='' 
       }
      )
      
    }
    else{
      alert("Value Should not be null or Empty")
    }
  }

}
