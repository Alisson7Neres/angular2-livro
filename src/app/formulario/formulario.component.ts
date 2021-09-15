import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Alisson', '61 9 9999-9999', 'alisson@hotmail.com');

  constructor() { }

  ngOnInit(): void {
  }

}
