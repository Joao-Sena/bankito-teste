import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { take } from 'rxjs/operators';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  messageErrorLogin: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    // Deixei a senha já setada no formulário só pra facilitar o LOGIN da aplicação para não ter que procurar no LocalStorage
    this.loginForm = this.formBuilder.group({
      cpf: ['97182610019', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14)
      ])] ,
      password: ['123456', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ]) ] 
    });
  }

  logIn() {

    this.loginService.logIn(this.loginForm.value)
    .pipe(take(1)).subscribe(
      (response: User) => {

        this.messageErrorLogin = '';
        localStorage.setItem('loggedUser', JSON.stringify(response));
        this.router.navigate(['home']);

      },
      (error: any) => {
        this.messageErrorLogin = error.statusText;
      }
    );

  }

}
