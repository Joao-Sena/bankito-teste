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

  // Não foi possível obter os dados da conta ao digitar o número da conta, pois só tem API pra obter através do ID não do Número
  // Então essa página ficou sem funcionalidade no quesito de pegar dados do Mock

}
