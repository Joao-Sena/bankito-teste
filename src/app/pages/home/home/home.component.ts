import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Transaction } from 'src/app/interfaces/transaction';
import { User } from 'src/app/interfaces/user';
import { Balance } from 'src/backend-mock/bankito/models/transaction';
import { TransactionService } from 'src/backend-mock/bankito/services/transaction.service';

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
    // Aqui para obter o balanço de Saldo, Entrada e saída apenas peguei o retorno, pois nesse Mock tentar consumi-lo como API
    // dava erro dizendo que o .PIPE não pertence ao tipo BALANCE, então apenas já guardei o retorno na variável
    // Mas claro se não eu iria consumir como uma API assim como a de LOGIN
    this.balance = this.transactionService.getBalance(this.user.id, this.interval);
  }

  getTransactions() {
    // Apenas guardei o retorno na variável pois também não teve como simular uma requisição nessa API do Mock
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
