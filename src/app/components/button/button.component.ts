import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() textoBotao: string;
  @Input() tipoBotao: string;
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
