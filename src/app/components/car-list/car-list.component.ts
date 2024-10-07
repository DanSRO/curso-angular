import { Component, OnInit } from '@angular/core';
import { Carros } from '../../Carros';
import { NgFor } from '@angular/common';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
  // cars:Carros[]=[
  //   {
  //     nome:'Fusca',
  //     ano:1974,
  //     cor:'Azul'
  //   },
  //   {
  //     nome:'F-10',
  //     ano:1990,
  //     cor:'Preta'
  //   },
  //   {
  //     nome:'Veraneio',
  //     ano:2001,
  //     cor:'Cinza'
  //   }
  // ];
  cars:Carros[]=[];
  constructor( private carService:CarService){}
carDetails:string='';

ngOnInit(): void {
  this.carService.getAllCars().subscribe((data) => {
    this.cars = data
    console.log(this.cars);
  });
}
  showCar(car: Carros): void{
    this.carDetails = `O carro ${car.nome} do ano ${car.ano} tem a cor ${car.cor}`;
  }

  removeCar(car: Carros):void{
    console.log("Excluindo carro...");
    this.cars = this.carService.remove(this.cars, car);
  }

}
