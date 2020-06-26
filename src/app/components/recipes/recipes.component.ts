import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/Recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  term: String = '';
  recipelist: any;
  errMess: string;
  isLoading: boolean = false;

  constructor(private recipeService: RecipeService) { }

  receiveMessage($event) {
    this.isLoading = true;
    this.term = $event;
    this.recipeService.getRecipes(this.term)
      .subscribe((recipe) => {
          this.recipelist = recipe;
          this.isLoading = false;
        },
        (errMess) => {
          this.errMess = errMess;
          this.isLoading = false;
        }
      );
  }

  ngOnInit() {
  }

}
