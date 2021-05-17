import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  backgroundUrl: string = '../../../../assets/img/background.png';

  constructor() { }

  ngOnInit(): void {
  }

}
