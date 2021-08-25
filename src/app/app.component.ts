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

  // Injetando dependência
  constructor(private service: AlertaService){ }
    enviarMsg(): void{
      this.service.msgAlerta();
    }

  // Event Binding
  msgAlerta(): void{
    alert('Livro Angular 2');
  }
}

