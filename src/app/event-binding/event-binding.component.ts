import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao: Boolean = false;
  valores: string [] = [];
  idade: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  meuClick(): void {
    console.log('evento meuClick do botão');
  }
  digitou($event: any): void {
    console.log($event);
  }
  digitouVarTemplate(valor: any): void {
    console.log(valor);
  }

  validaSenha(valor: string): void {
    if(valor.length >= 5){
      this.habilitarBotao = true;
    }else {
      false
    }
  }
  gravarSenha(senha: any): void {
    alert('senha gravada com sucesso! sua senha é ' + senha);
  }

  adicionar(conteudo: string): void {
    this.valores.push(conteudo);
  }

  verIdade(valor: any): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - valor;
  }
}
