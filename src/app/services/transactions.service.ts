import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  
  urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  getBalance(idUser: string, interval: 'currentMonth' | 'all' = 'all') {
    const url: string = `${this.urlBase}/getBalance?id=${idUser}&interval=${interval}`;

    return this.http.get(url);
  }

  getTransactionsHistory(idUser: string, interval: 'currentMonth' | 'all' = 'all') {
    const url: string = `${this.urlBase}/getTransactionsHistoryByUser?id=${idUser}&interval=${interval}`;

    return this.http.get(url);
  }

  getUserByAccount(accountId: string) {
    const url: string = `${this.urlBase}/getUserByAccount?accountId=${accountId}`;

    return this.http.get(url);
  }

}
