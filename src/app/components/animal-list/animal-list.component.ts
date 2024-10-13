import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ListService } from '../../services/list.service';
import { Animal } from '../../Animal';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [NgFor,NgIf, RouterLink, RouterOutlet],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit{  
  animals:Animal[]=[];
  animal?:Animal;

constructor( private listService:ListService, private route:ActivatedRoute){}

animalDetails:string='';

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if(id){
      this.getAnimal(Number(id));
    }else{
      this.getAnimals();
    }
  });
}

getAnimal(id:number){  
  this.listService.getItemAnimal(id).subscribe((x) => (this.animal = x));
}
getAnimals(){  
  this.listService.getAllAnimals().subscribe((x) => (this.animals = x));
}
  showAge(animal: Animal): void{
    this.animalDetails = `O animal ${animal.name} com ${animal.age} de idade, é um ${animal.type}`;
  }

  removeAnimal(animal: Animal):void{
    console.log("Excluindo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }
}
