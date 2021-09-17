import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Alisson', '61 9 9999-9999', 'alisson@hotmail.com');


  enviarDados(){
    alert(`seu nome é: ${this.contato.nome}`);
    alert(`seu telefone é: ${this.contato.telefone}`);
    alert(`seu email é: ${this.contato.email}`);
}
  constructor() { }

  ngOnInit(): void {
  }

}
