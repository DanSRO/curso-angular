import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, CarListComponent],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals:Animal[] = [
    {name:'Turca', type:'dog', age:3},
    {name:'Tom', type:'cat', age:4},
    {name:'Frida', type:'dog', age:3},
    {name:'Bob', type:'horse', age:10},
  ]
  constructor(private listService:ListService){}
  animalsDetail:string = '';
  // listService: ListService = new ListService;
  showAge(animal: Animal): void{
    this.animalsDetail = `O pet ${animal.name} tem ${animal.age} anos de idade.`;
  }
  removeAnimal(animal:Animal){
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }
}
