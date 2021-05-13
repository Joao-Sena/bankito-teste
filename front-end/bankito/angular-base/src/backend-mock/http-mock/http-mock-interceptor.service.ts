import { Injectable, Injector, Optional } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpMockService } from './http-mock.service';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class HttpMockInterceptorService implements HttpInterceptor {

  constructor(
    private httpMockService: HttpMockService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let mockedResponse: HttpResponse<unknown>;
    try {
      mockedResponse = this.httpMockService.handle(request);
    } catch (error) {
      return throwError(error);
    }

    if (mockedResponse) {
      console.log('Loading from HttpMock: ' + request.urlWithParams, { req: request, res: mockedResponse });
      return of(mockedResponse);
    }

    return next.handle(request);
  }
}
