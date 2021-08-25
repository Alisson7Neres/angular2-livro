import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../alerta.service';
import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {
  
  pessoas: string [];
  nome: string = "Alisson";

  constructor(private serviceAlerta: AlertaService, private servicePessoa: PessoaServiceService) { 
  this.pessoas = servicePessoa.getPessoas();
  }

  alertaMsg(): void{
    this.serviceAlerta.msgAlerta();
  } 
  

  ngOnInit() {
  }
  enviarNome(){
    this.servicePessoa.setPessoa(this.nome);
}

}
