import { Component } from '@angular/core';
import { Carros } from '../../Carros';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  car:Carros[]=[
    {
      nome:'Fusca',
      ano:1974,
      cor:'Azul'
    },
    {
      nome:'F-10',
      ano:1990,
      cor:'Preta'
    },
    {
      nome:'Veraneio',
      ano:2001,
      cor:'Cinza'
    }
  ];

}
