import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { TransactionService } from './transaction.service';
import { Transaction } from '../models/transaction';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  private readonly usersMock: User[] = [
    {
      id: '1',
      account: '206029-6',
      cpf: '97182610019',
      name: 'Levi José Nicolas das Neves',
      password: '123456',
      photo: '/assets/users/206029-6.jpg'
    },
    {
      id: '2',
      account: '1922831-2',
      cpf: '92157861394',
      name: 'Marina Luiza Hadassa Bernardes',
      password: '123456',
      photo: '/assets/users/206029-6.jpg'
    },
    {
      id: '3',
      account: '07902079-3',
      cpf: '44671760550',
      name: 'Mirella Luana Alice Cavalcanti',
      password: '123456',
      photo: '/assets/users/206029-6.jpg'
    },
  ];

  private readonly transactionMock: {
    userId: string;
    value: number;
    account: string;
    date?: Date;
  }[] = [
    {
      userId: '3',
      value: 1000,
      account: '206029-6',
      date: new Date('01-01-2020')
    },
    {
      userId: '3',
      value: 1500,
      account: '206029-6',
      date: new Date('02-02-2020')
    },
    {
      userId: '3',
      value: 1300,
      account: '206029-6',
      date: new Date('03-03-2020')
    },
    {
      userId: '3',
      value: 1200,
      account: '206029-6',
      date: new Date('04-04-2020')
    },
    {
      userId: '3',
      value: 560,
      account: '206029-6',
      date: new Date('05-05-2020')
    },
    {
      userId: '3',
      value: 1000,
      account: '206029-6',
      date: new Date('06-06-2020')
    },
    {
      userId: '3',
      value: 1000,
      account: '206029-6',
      date: new Date('07-07-2020')
    },
    {
      userId: '3',
      value: 1600,
      account: '206029-6',
    },
    {
      userId: '3',
      value: 1070,
      account: '206029-6',
    },
    {
      userId: '3',
      value: 1070,
      account: '206029-6',
    },
  ];


  constructor(
    private userService: UserService,
    private transactionService: TransactionService,

  ) { }

  seed(): void {
    if (window.localStorage.getItem('seeded') !== 'true') {
      this.seedUsers();
      this.seedTransactions();
      window.localStorage.setItem('seeded', 'true');
    }
  }

  private seedUsers(): void {
    this.usersMock.forEach( u => this.userService.addNewUser(u) );
  }

  private seedTransactions(): void{
    this.transactionMock.forEach(
      u => this.transactionService.addTransaction(u.userId, u.value, u.account, u.date)
    );
  }
}
