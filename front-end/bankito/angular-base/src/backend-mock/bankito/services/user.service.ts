import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DbService } from '../infra/db.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly collection = 'user';

  constructor(
    private db: DbService
  ) { }


  login(cpf: string, password: string): User | null {
    const users = this.db.getAll<User>(this.collection);

    return users.find( u => u.cpf === cpf && u.password === password );
  }


  getById(id: string): User | null {
    return this.db.get<User>(this.collection, id);
  }

  getByAccount(account: string): User | null {
    const users = this.db.getAll<User>(this.collection);

    return users.find( u => u.account === account );
  }

  getByCpf(cpf: string): User | null {
    const users = this.db.getAll<User>(this.collection);

    return users.find( u => u.cpf === cpf );
  }

  update(user: User): void {
    if (!user) {
      throw new Error('Usuario não especificado');
    }

    this.db.addOrUpdate(this.collection, user);
  }

  addNewUser(user: User): void {
    if (!user) {
      throw new Error('Usuario não especificado');
    }

    this.db.addOrUpdate(this.collection, user);
  }
}
