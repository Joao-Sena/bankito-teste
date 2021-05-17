import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [
  {path: '', component: StartScreenComponent},
  {path: 'auth', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
