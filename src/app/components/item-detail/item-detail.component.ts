import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AnimalService } from '../../services/animal.service';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../Animal';
import { Carros } from '../../Carros';
import { Alunos } from '../../Alunos';
import { CarService } from '../../services/car.service';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  animal?: Animal;
  car?:Carros;
  aluno?:Alunos;

  constructor(
    private animalService:AnimalService, 
    private carService:CarService, 
    private alunoService:AlunoService,
    private route: ActivatedRoute){
  }

  ngOnInit(): void{}
}
