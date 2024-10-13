import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carros } from '../Carros';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  getAllAnimals(): Observable<Animal[]> {    
      return this.http.get<Animal[]>(`${this.apiUrl}/animals`);    
  }

  getItemAnimal(id:number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/animals/${id}`);
  }

  remove(animals:Animal[], animal:Animal){
    return animals.filter((a) => animal.name != a.name);
  }
}
