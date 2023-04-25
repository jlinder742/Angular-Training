import { Component, OnInit } from '@angular/core';
//importing the model
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  //This type declaration is a single array of recipe objects
  recipes: Recipe[] = [
    //Making a recipe for testing
    new Recipe('Test recipe', 'test decription',
    'https://static01.nyt.com/images/2021/05/23/dining/kc-chicken-katsu/merlin_185308080_a60a6563-292e-4f52-a33b-386113aca0b2-master768.jpg?w=1280&q=75' )
  ];

  constructor() {}

  ngOnInit(){
    
  }
}
