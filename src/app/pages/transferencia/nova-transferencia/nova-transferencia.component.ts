import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  valorTransferencia: string;
  account: string;

  constructor() { }

  ngOnInit(): void {
  }

  moneyMask() {

    this.valorTransferencia = this.valorTransferencia.replace(",", "");

    if(this.valorTransferencia.length <= 3) {
      this.valorTransferencia = `0,${this.valorTransferencia.slice(-2)}`;
    }

    if(this.valorTransferencia.length > 4) {
      if(this.valorTransferencia[0] == '0') { this.valorTransferencia = this.valorTransferencia.replace('0', '')}

      this.valorTransferencia = `${this.valorTransferencia.slice(0, this.valorTransferencia.length -2)},${this.valorTransferencia.slice(-2)}`;
    }

    if(this.valorTransferencia.length === 4 && !this.valorTransferencia.includes(',')) {
      this.valorTransferencia = `${this.valorTransferencia.slice(0,2)},${this.valorTransferencia.slice(-2)}`;
    }

  }

  // Não foi possível obter os dados da conta ao digitar o número da conta, pois só tem API pra obter através do ID não do Número
  // Então essa página ficou sem funcionalidade no quesito de pegar dados do Mock

}
