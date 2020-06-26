import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { BookService } from './services/Book/book.service';
import { MovieService } from './services/Movies/movie.service';
import { RecipeService } from './services/Recipes/recipe.service';
import { OMDBMovieApi, EDAMAMRecipeApi, GoogleBooksApi } from './apis/baseURLs';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BooksComponent } from './components/books/books.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BooksComponent,
    RecipesComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [
    MovieService,
    BookService,
    RecipeService,
    { provide: 'OMDBMovieApi', useValue: OMDBMovieApi },
    { provide: 'GoogleBooksApi', useValue: GoogleBooksApi },
    { provide: 'EDAMAMRecipeApi', useValue: EDAMAMRecipeApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
