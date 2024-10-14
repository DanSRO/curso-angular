import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alunos } from '../Alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiUrl='http://localhost:3000';
  constructor(private http:HttpClient) { }

  getAllAlunos():Observable<Alunos[]>{
    return this.http.get<Alunos[]>(`${this.apiUrl}/alunos`);
  };

  remove(alunos:Alunos[], aluno:Alunos){
    return alunos.filter((x)=> aluno.nome !==x.nome);
  }

  getAlunoId(id: number): Observable<Alunos> {
    return this.http.get<Alunos>(`${this.apiUrl}/alunos/${id}`);
  }
}
