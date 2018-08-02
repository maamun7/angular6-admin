
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from "rxjs";
import { AuthService } from '../_services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Calling interceptor !+++++++');
    const token = this.auth.getToken();
   // const newReq = request.clone({setHeaders: {'Authorization': token } });
   // return next.handle(newReq);

    const authReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });


    return next.handle(authReq);
  }
}