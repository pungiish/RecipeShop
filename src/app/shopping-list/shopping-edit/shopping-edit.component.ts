import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('ingredientRef') ingredientRef: ElementRef;
	@ViewChild('amountRef') amountRef: ElementRef;
	@Output() newIngredient = new EventEmitter<Ingredient>();
	constructor() {}

	ngOnInit() {}

	addToCart() {
		const ingredient = {name: this.ingredientRef.nativeElement.value, amount: this.amountRef.nativeElement.value};
		// const a = new Ingredient(this.ingredientRef, this.amountRef);
		this.newIngredient.emit(ingredient);
	}
}
