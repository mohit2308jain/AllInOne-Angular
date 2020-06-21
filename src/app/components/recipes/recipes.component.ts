import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/Recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: any[];
  errMess: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes('coffee')
      .subscribe((recipe) => this.recipes = recipe.hits,
      (errMess) => this.errMess = errMess);
  }

}
