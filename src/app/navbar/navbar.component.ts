import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	constructor() {
	}
	@Output() featureSelected: EventEmitter<number> = new EventEmitter();

	ngOnInit() {}
	shoppify() {
		this.featureSelected.emit(1);
	}
	recipiffy() {
		this.featureSelected.emit(2);
	}
}
