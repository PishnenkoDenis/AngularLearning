import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('Session', '22102022')
    })
    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if(event instanceof HttpResponse) {
            console.log('Server responsed successfully');
          }
        },
        (error) => {
          if(error instanceof HttpErrorResponse) {
            console.log('error');
          }
        }
      )
    )
  }
}
