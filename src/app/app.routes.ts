import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent},
];
