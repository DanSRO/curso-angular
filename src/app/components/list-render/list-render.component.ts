import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { CarListComponent } from '../car-list/car-list.component';
import { AnimalListComponent } from '../animal-list/animal-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Carros } from '../../Carros';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, CarListComponent, AnimalListComponent, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {

  animals: Animal[]=[];
  cars: Carros[]=[];
  constructor(private listService:ListService){ }
  animalsDetail:string = '';
  ngOnInit() {
    this.listService.getAllAnimals().subscribe((data) => {
      this.animals = data;
      console.log(this.animals); // Verificar os dados no console
    });
  }
}
