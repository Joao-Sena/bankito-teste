import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpMockInterceptorService } from './http-mock-interceptor.service';
import { HttpMockService } from './http-mock.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class HttpMockModule {
  public static forRoot(): ModuleWithProviders<HttpMockModule> {
    return {
        ngModule: HttpMockModule,
        providers: [
          HttpMockService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpMockInterceptorService,
            multi: true,
          },
        ]
    };
  }
}
