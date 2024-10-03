import { Injectable } from '@angular/core';
import { Carros } from '../Carros'; 

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  remove(cars: Carros[], car:Carros){
    return cars.filter((a) => car.nome != a.nome);
  }
}
