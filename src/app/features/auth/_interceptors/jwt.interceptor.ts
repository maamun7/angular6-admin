import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public _auth: AuthService, public _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted request ... ");
    const authToken = this._auth.getToken();
   // const newReq = request.clone({setHeaders: {'Authorization': token } });
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: authToken
      }
    });

  //  return next.handle(authReq);
    return next.handle(authReq)
      .catch((error, caught) => {
          if (error.status === 401) {
            console.log('DEBUGG :', "Yes unauthorized !");
              this._auth.removeToken();
              this._router.navigate(['/login']);
              return Observable.throw(error);
          } else {
              return Observable.throw(error);
          }
      }) as any;
  }
}