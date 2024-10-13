import { Injectable } from '@angular/core';
import { Carros } from '../Carros';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:3000';
  getAllCars():Observable<Carros[]>{
    return this.http.get<Carros[]>(`${this.apiUrl}/cars`);
  }
  
  constructor(private http:HttpClient) { }
  remove(cars: Carros[], car:Carros){
    return cars.filter((a) => car.nome != a.nome);
  }

  getItemCar(id:number): Observable<Carros>{
    return this.http.get<Carros>(`${this.apiUrl}/cars/${id}`);
  }
}
