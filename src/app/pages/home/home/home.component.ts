import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Transaction } from '../../../interfaces/transaction';
import { User } from '../../../interfaces/user';
import { Balance } from '../../../interfaces/balance';
import { TransactionService } from '../../../../backend-mock/bankito/services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  interval: 'currentMonth' | 'all' = 'all';
  balance: Balance;
  transactions: Array<Transaction>;
    
  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) {
    this.user = JSON.parse(localStorage.loggedUser);
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.getBalance();
    this.getTransactions();
  }

  getBalance() {
    // Tentei consumir como API assim como a de LOGIN mas estava dando erro desconhecido, e no Network falava erro de CORS,
    // então mantive assim simulando o consumo da API, mas se não seria o consumo normalmente com o subscribe
    this.balance = this.transactionService.getBalance(this.user.id, this.interval);
  }

  getTransactions() {
    // Tentei consumir como API assim como a de LOGIN mas estava dando erro desconhecido, e no Network falava erro de CORS,
    // então mantive assim simulando o consumo da API, mas se não seria o consumo normalmente com o subscribe
    this.transactions = this.transactionService.getTransactionsHistoryByUser(this.user.id, this.interval);
  }

  logout() {
    this.router.navigate(['login/auth']);
    localStorage.removeItem('loggedUser');
  }

  dateParse(date: string) {
    
    let dateParsed = new Date(date);
    let day: number | string = dateParsed.getDay();
    let month: number | string = dateParsed.getUTCMonth();
    // O mes obtido pela função GET month começa do 0 igual um indice de Array então é necessário adicionar 1 a ele
    month++;
    const year: number | string = dateParsed.getFullYear();

    if(day < 10) { day = `0${day}`; }
    if(month < 10) { month = `0${month}`; }
    
    return `${day}/${month}/${year}`;

  }

  hoursParse(date: string) {
    let dateParsed = new Date(date);
    let hours: number | string = dateParsed.getHours();
    let minutes: number | string = dateParsed.getMinutes();

    if(hours < 10) { hours = `0${hours}`}
    if(minutes < 10) { minutes = `0${minutes}`}
    
    return `${hours}:${minutes}`;
  }

}
