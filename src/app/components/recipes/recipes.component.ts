import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/Recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  term: String = '';
  recipes: any[];
  errMess: string;

  constructor(private recipeService: RecipeService) { }

  receiveMessage($event) {
    this.term = $event;
    this.recipeService.getRecipes(this.term)
      .subscribe((recipe) => this.recipes = recipe.hits,
      (errMess) => this.errMess = errMess);
  }

  ngOnInit() {
  }

}
