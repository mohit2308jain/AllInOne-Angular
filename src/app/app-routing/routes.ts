import { Routes } from '@angular/router';

import { MoviesComponent } from '../components/movies/movies.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { BooksComponent } from '../components/books/books.component';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];