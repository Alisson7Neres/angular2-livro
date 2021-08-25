import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numero: number = 0;

  incrementarNumero(): void{
    this.numero ++;
  }

}
