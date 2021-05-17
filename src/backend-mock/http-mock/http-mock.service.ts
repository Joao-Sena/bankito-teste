import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

export interface RequestConfig {
  readonly url: string;
  readonly method: string;
}

export type MockedRequestHandler<T = unknown, Q = unknown> = (request: HttpRequest<T>) => HttpResponse<Q> | any;
export type HttpResponseOrHandler<T = unknown, Q = unknown> = MockedRequestHandler<T, Q> | HttpResponse<T>;

@Injectable()
export class HttpMockService {

  private requestMap = new Map<string, HttpResponseOrHandler>();

  constructor() { }

  setMock(method: string, url: string, responseOrHandler: HttpResponseOrHandler | any): void {
    const requestConfig: RequestConfig = { method, url };

    const hash = this.reqHash(requestConfig);
    if (typeof responseOrHandler === 'function' || responseOrHandler instanceof HttpResponse) {
      this.requestMap.set(hash, responseOrHandler);
    } else {
      this.requestMap.set(hash, new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: responseOrHandler,
        url: requestConfig.url
      }));
    }
  }

  setGetMock(url: string, responseOrHandler: HttpResponseOrHandler | any): void {
    this.setMock('GET', url, responseOrHandler);
  }
  setPostMock(url: string, responseOrHandler: HttpResponseOrHandler | any): void {
    this.setMock('POST', url, responseOrHandler);
  }
  setPutMock(url: string, responseOrHandler: HttpResponseOrHandler | any): void {
    this.setMock('PUT', url, responseOrHandler);
  }
  setDeleteMock(url: string, responseOrHandler: HttpResponseOrHandler | any): void {
    this.setMock('DELETE', url, responseOrHandler);
  }
  setPatchMock(url: string, responseOrHandler: HttpResponseOrHandler | any): void {
    this.setMock('PATCH', url, responseOrHandler);
  }

  handle(request: HttpRequest<unknown>): HttpResponse<unknown> | null {
    const hash = this.reqHash(request);
    const responseOrHandler = this.requestMap.get(hash);

    if (!responseOrHandler) {
      return null;
    } else if (responseOrHandler instanceof HttpResponse) {
      return responseOrHandler;
    } else {
      try {
        const response: HttpResponse<unknown> | any = responseOrHandler(request);
        if (response instanceof HttpResponse) {
          return response;
        } else {
          return new HttpResponse({
            status: 200,
            statusText: 'OK',
            body: response,
            url: request.url
          });
        }
      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          throw error;
        } else {
          throw new HttpErrorResponse({
            status: 400,
            statusText: 'Bad Request',
            url: request.url,
            error,
          });
        }
      }
    }
  }

  deleteMock(method: string, url: string): boolean {
    const requestConfig: RequestConfig = { method, url };

    const hash = this.reqHash(requestConfig);
    return this.requestMap.delete(hash);
  }

  clearMocks(): void {
    this.requestMap.clear();
  }

  private reqHash(requestConfig: RequestConfig | HttpRequest<unknown>): string {
    return `${requestConfig.method}#${requestConfig.url}`;
  }
}
