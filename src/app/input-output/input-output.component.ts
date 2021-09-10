import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

 @Input() menu: any = '';
 @Output() nomeClicado = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  enviarNome(value: any) {
    this.nomeClicado.emit(value);
  }

}