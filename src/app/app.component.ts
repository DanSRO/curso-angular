import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FirstComponentComponent, 
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    TwoWayDataBindingComponent,
    ListRenderComponent,
    PipesComponent,
    FormsModule,
    ListRenderComponent,
    PipesComponent,
    ItemDetailComponent,
    AnimalListComponent
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
 userData2 ={
    email:'novoemail@gmail.com',
    role:'User',
  } 

  userHobbies = ['Ler', 'Jogar', 'nadar'];
  title = 'curso-angular';
}
