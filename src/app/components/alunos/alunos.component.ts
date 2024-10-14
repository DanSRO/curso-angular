import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Alunos } from '../../Alunos';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterOutlet],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit{
  alunos:Alunos[]=[];
  aluno?:Alunos;
alunoDetails:string='';

constructor(private alunoService:AlunoService, private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if(id){
      this.getAluno(Number(id));
    }else{
      this.getAlunos();
    }
  });
}

getAluno(id:number){
  this.alunoService.getAlunoId(id).subscribe((x)=>(this.aluno = x));
}

getAlunos(){
  this.alunoService.getAllAlunos().subscribe((x)=>(this.alunos=x));
}

showAluno(aluno:Alunos):void{
  this.alunoDetails=`Aluno ${aluno.nome} estuda ${aluno.disciplina}`;
}
}
