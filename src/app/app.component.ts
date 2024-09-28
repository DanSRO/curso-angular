import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FirstComponentComponent, 
    ParentDataComponent,
    DirectivesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquim';
  userData ={
    email:'joaquim@gmail.com',
    role:'Admin',
  }

  userHobbies = ['Ler', 'Jogar', 'nadar'];
  title = 'curso-angular';
}
