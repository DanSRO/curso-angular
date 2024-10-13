import { Component, OnInit } from '@angular/core';
import { Carros } from '../../Carros';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from '../../services/car.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet, NgIf],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{

  cars:Carros[]=[];
  car?:Carros;
  constructor( private carService:CarService, private route:ActivatedRoute){}
  carDetails:string='';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');
      if(id){
        this.getCar(Number(id));
      }else{
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getAllCars().subscribe((data) => {
      this.cars = data;
    });
  }

  getCar(id: number) {
    this.carService.getItemCar(id).subscribe((x) => (this.car = x));
  }
  showCar(car: Carros): void{
    this.carDetails = `O carro ${car.nome} do ano ${car.ano} tem a cor ${car.cor}`;
  }

  removeCar(car: Carros):void{
    console.log("Excluindo carro...");
    this.cars = this.carService.remove(this.cars, car);
  }

}
