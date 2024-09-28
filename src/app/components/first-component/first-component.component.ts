import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name:string = 'Dan';
  age:number = 53;
  profission:string = 'Programador';
  hobbies = { 
    primeiro: 'andar',
    segundo: 'jogar',
    terceiro: 'ler'
  }

  lista = ["Estudar", "correr", "comer"];

}
