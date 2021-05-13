import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpMockModule } from '../http-mock/http-mock.module';
import { HTTP_INTERCEPTORS, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpMockInterceptorService } from 'src/backend-mock/http-mock/http-mock-interceptor.service';
import { HttpMockService, MockedRequestHandler } from 'src/backend-mock/http-mock/http-mock.service';
import { User } from './models/user';
import { Transaction, Balance } from './models/transaction';
import { UserService } from './services/user.service';
import { TransactionService } from './services/transaction.service';
import { SeedService } from './services/seed.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpMockModule
  ]
})
export class BankitoModule {
  public static forRoot(): ModuleWithProviders<BankitoModule> {
    return {
        ngModule: BankitoModule,
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

  constructor(
    private mock: HttpMockService,
    private userService: UserService,
    private transactionService: TransactionService,
    private seedService: SeedService,
  ) {

    this.seedService.seed();

    this.mock.setPostMock('http://bankito.com.br/login', this.login.bind(this));
    this.mock.setGetMock('http://bankito.com.br/getUserById', this.getUserById.bind(this));
    this.mock.setGetMock('http://bankito.com.br/getUserByAccount', this.getUserByAccount.bind(this));
    this.mock.setGetMock('http://bankito.com.br/getUserByCpf', this.getUserByCpf.bind(this));
    this.mock.setPutMock('http://bankito.com.br/updateUser', this.updateUser.bind(this));
    this.mock.setGetMock('http://bankito.com.br/getTransactionsHistoryByUser', this.getTransactionsHistoryByUser.bind(this));
    this.mock.setPutMock('http://bankito.com.br/addTransaction', this.addTransaction.bind(this));
    this.mock.setGetMock('http://bankito.com.br/getBalance', this.getBalance.bind(this));

  }

  // user

  login(
    req: HttpRequest<{
      cpf: string;
      password: string;
    }>
  ): User {
    const body = req.body;
    const user = this.userService.login(body.cpf, body.password);
    if (user) {
      return user;
    } else {
      throw new HttpErrorResponse({
        status: 401,
        statusText: 'Usuário e senha invalidos',
        error: user,
      });
    }
  }

  getUserById(req: HttpRequest<null>): User {
    const params = req.params;
    const user = this.userService.getById(params.get('userId'));
    if (user) {
      return user;
    } else {
      throw new HttpErrorResponse({
        status: 404,
        statusText: 'Usuário não encontrado',
        error: user,
      });
    }
  }

  getUserByAccount(req: HttpRequest<null>): User {
    const params = req.params;
    const user = this.userService.getByAccount(params.get('accountId'));
    if (user) {
      return user;
    } else {
      throw new HttpErrorResponse({
        status: 404,
        statusText: 'Usuário não encontrado',
        error: user,
      });
    }
  }

  getUserByCpf(req: HttpRequest<null>): User {
    const params = req.params;
    const user = this.userService.getByCpf(params.get('cpf'));
    if (user) {
      return user;
    } else {
      throw new HttpErrorResponse({
        status: 404,
        statusText: 'Usuário não encontrado',
        error: user,
      });
    }
  }

  updateUser(req: HttpRequest<User>): void {
    const user = req.body;
    this.userService.update(user);
  }

  // transactions

  getTransactionsHistoryByUser(req: HttpRequest<null>): Transaction[] {
    const params = req.params;
    return this.transactionService.getTransactionsHistoryByUser(
      params.get('userId'),
      params.get('interval') === 'currentMonth' ? 'currentMonth' : 'all',
    );
  }

  addTransaction(req: HttpRequest<{
    userId: string;
    value: number;
    account: string; // conta que recebe
  }>): void {
    const body = req.body;
    this.transactionService.addTransaction(body.userId, body.value, body.account);
  }

  getBalance(req: HttpRequest<null>): Balance {
    const params = req.params;
    return this.transactionService.getBalance(
      params.get('userId'),
      params.get('interval') === 'currentMonth' ? 'currentMonth' : 'all',
    );
  }

}
