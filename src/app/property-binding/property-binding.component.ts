import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verParagrafo: boolean = true;

  mostrar(): boolean{  
    return this.verParagrafo = ! this.verParagrafo
  }


}
