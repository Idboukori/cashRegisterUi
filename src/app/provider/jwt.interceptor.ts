import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    console.log('test jwt', jwt);
    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt.token}`
        }
      });
    }
    return next.handle(request);
  }
}
