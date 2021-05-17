import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BankitoModule } from '../backend-mock/bankito/bankito.module';
import { HttpClientModule } from '@angular/common/http';

// Formatar Currency para modelo utilizado no Brasil ( . separar milhares e , separar centavos)
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BankitoModule.forRoot()
  ],
  providers: [
    { provide : LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
