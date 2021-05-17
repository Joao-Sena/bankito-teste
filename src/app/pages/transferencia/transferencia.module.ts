import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferenciaRoutingModule } from './transferencia-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';


@NgModule({
  declarations: [NovaTransferenciaComponent],
  imports: [
    CommonModule,
    TransferenciaRoutingModule,
    SharedModule
  ]
})
export class TransferenciaModule { }
