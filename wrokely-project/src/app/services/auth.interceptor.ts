import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService:LoginService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   let nreq=req;
      let token=this.loginService.getTokenFromLoc();
      console.log("token in interceptor"+token)
      if(token!=null && token!='')
      {
     
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
            
        });
      }
       console.log(request.headers.get("Authorization"))
       console.log(request.url)
      return next.handle(request)

    }
}