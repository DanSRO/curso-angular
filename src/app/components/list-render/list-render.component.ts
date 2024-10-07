import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { CarListComponent } from '../car-list/car-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, CarListComponent, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  // animals:Animal[] = [
  //   {name:'Turca', type:'dog', age:3},
  //   {name:'Tom', type:'cat', age:4},
  //   {name:'Frida', type:'dog', age:3},
  //   {name:'Bob', type:'horse', age:10},
  // ]
  animals: Animal[]=[];
  constructor(private listService:ListService){}
  animalsDetail:string = '';
  ngOnInit() {
    this.listService.getAll().subscribe((data) => {
      this.animals = data;
      console.log(this.animals); // Verificar os dados no console
    });    
  }
  // listService: ListService = new ListService;
  showAge(animal: Animal): void{
    this.animalsDetail = `O pet ${animal.name} tem ${animal.age} anos de idade.`;
  }
  removeAnimal(animal:Animal){
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

}
