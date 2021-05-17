import { Injectable } from '@angular/core';
import { DbService } from '../infra/db.service';
import { Balance, Transaction } from '../models/transaction';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  readonly collection = 'transaction';

  constructor(
    private db: DbService,
    private user: UserService,
  ) { }

  getTransactionsHistoryByUser(userId: string, interval: 'currentMonth' | 'all' = 'all'): Transaction[] | null {
    const transactions = this.db.getAll<Transaction>(this.collection);
    const user = this.user.getById(userId);
    const userTransactions = transactions.filter( t => t.fromAccount === userId || t.toAccount === user.account );

    if (interval === 'all') {
      return userTransactions;
    } else {
      return userTransactions.filter( t => {
        const date = new Date(t.date);
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
      });
    }
  }

  addTransaction(userId: string, value: number, account: string, date = new Date()): void {
    const newTransaction: Transaction = {
      id: this.createId(),
      date: date.toISOString(),
      fromAccount: this.user.getById(userId).account,
      toAccount: account,
      value
    };

    this.db.addOrUpdate(this.collection, newTransaction);
  }
  getBalance(userId: string, interval: 'currentMonth' | 'all' = 'all'): Balance {
    const user = this.user.getById(userId);
    const transactions = this.getTransactionsHistoryByUser(userId, interval);

    const inValue = transactions
      .filter( t => t.toAccount === user.account )
      .reduce(
        (total, current) => {
          return total + current.value;
        }, 0
      );

    const outValue = transactions
      .filter( t => t.fromAccount === user.account )
      .reduce(
        (total, current) => {
          return total + current.value;
        }, 0
      );

    return {
      in: inValue,
      out: outValue,
      total: inValue - outValue
    };
  }

  private createId(): string {
    return 'Transaction' + '_' + Math.random().toString(36).substr(2, 9);
  }

}
