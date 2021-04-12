import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 public ingredients = [
   new Ingredient('Apple',5),
   new Ingredient('Tomato',10)
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
