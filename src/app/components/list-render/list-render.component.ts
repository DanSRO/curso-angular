import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../Animal';
import { AnimalService } from '../../services/animal.service';
import { CarListComponent } from '../car-list/car-list.component';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { AlunosComponent } from '../alunos/alunos.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Carros } from '../../Carros';
import { Alunos } from '../../Alunos';
import { CarService } from '../../services/car.service';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, CarListComponent, AnimalListComponent, AlunosComponent, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {

  animals: Animal[]=[];
  cars: Carros[]=[];
  alunos:Alunos[]=[];
  constructor(
    private animalService:AnimalService, 
    private carService:CarService,
    private alunoService:AlunoService,  
  ){ }
  animalsDetail:string = '';
  carsDetail:string='';
  alunosDetail:string='';
  ngOnInit() {
    this.animalService.getAllAnimals().subscribe((data) => {
      this.animals = data;
      console.log(this.animals); // Verificar os dados no console
    });
    this.carService.getAllCars().subscribe((data) => {
      this.cars = data;
      console.log(this.cars); // Verificar os dados no console
    });
    this.alunoService.getAllAlunos().subscribe((data) => {
      this.alunos = data;
      console.log(this.alunos); // Verificar os dados no console
    });
  }
}
