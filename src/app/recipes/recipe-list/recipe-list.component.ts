import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() selectedItem = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe(
			'Kvinojine kroglice',
			'Okusne kroglice iz kvinoje',
			'https://www.sensa.si/media/cache/upload/Photo/2016/11/18/kvinojine-kroglice-3_bigimage.jpg'
		),
		new Recipe(
			'Solata',
			'Okusna grška solata',
			'https://www.mojirecepti.com/slike/solata-iz-rukole.jpg'
		)
	];
	constructor() {
	}
	onSelect(i) {
		this.selectedItem.emit(this.recipes[i]);
	}
	ngOnInit() {}
	// onDelete(i) {
	// 	this.recipes.splice(i, 1);
	// }
}
