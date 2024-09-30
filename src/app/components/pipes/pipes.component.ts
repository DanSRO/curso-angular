import { Component } from '@angular/core';
import { UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  someText = 'Testando o operador PIPE';
  today = new Date();

}
