import { Routes } from '@angular/router';
import { Notes } from './aside/notes/notes';
import { Archive } from './aside/archive/archive';

export const routes: Routes = [
  { path: 'notes', component: Notes },
  { path: 'archive', component: Archive },
  { path: '', redirectTo: 'notes', pathMatch: 'full' }
];