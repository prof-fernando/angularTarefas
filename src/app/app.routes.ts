import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarefaComponent } from './pages/tarefa/tarefa.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarefa', component: TarefaComponent },
  { path: '**', component: NotFoundComponent },
];
