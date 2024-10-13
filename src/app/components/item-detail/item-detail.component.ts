import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../Animal';
import { Carros } from '../../Carros';

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

  constructor(private listService:ListService, private route: ActivatedRoute){
  }

  ngOnInit(): void{}
}
