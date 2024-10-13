import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';

export const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'animal/:id', component: AnimalListComponent},
    {path: 'car/:id', component: CarListComponent},
];
