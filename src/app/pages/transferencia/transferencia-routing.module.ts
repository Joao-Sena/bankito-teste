import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  {path: '', component: NovaTransferenciaComponent},
  {path: 'nova', component: NovaTransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciaRoutingModule { }
