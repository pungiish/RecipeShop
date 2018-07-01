import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredients = [
		new Ingredient('Apples', 2),
		new Ingredient('Sour cream', 1)
	];
	constructor() {}

	ngOnInit() {}
	addNewIngredient(event) {
		this.ingredients.push(event);
	}
}
