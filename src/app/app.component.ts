import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2'; /* Interpolation */
  foto: string = 'favicon.ico'; /* Property binding */
  desenvolvimento: string [] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  valor: string = '';

  // Injetando dependência
  constructor(private service: AlertaService){ }
    enviarMsg(): void{
      this.service.msgAlerta();
    }

  // Event Binding
  msgAlerta(): void{
    alert('Livro Angular 2');
  }

  valorPassado(valorPassado: any) {
    this.valor = valorPassado;
  }
}