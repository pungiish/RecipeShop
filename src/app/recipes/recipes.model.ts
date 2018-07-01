export class Recipe {
	name: string;
	description: string;
	img: string;
	constructor(name: string, desc: string, img: string) {
		this.name = name;
		this.description = desc;
		this.img = img;
	}
}
