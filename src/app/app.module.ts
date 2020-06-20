import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BookService } from './services/Book/book.service';
import { MovieService } from './services/Movies/movie.service';
import { RecipeService } from './services/Recipes/recipe.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BooksComponent } from './components/books/books.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/header/header.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BooksComponent,
    RecipesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [
    MovieService,
    BookService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
