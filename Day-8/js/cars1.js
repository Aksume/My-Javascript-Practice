class Car {
	constructor(_make, _model, _year, _color) {
		this.make = _make;
		this.model = _model;
		this.year = _year;
		this.color = _color;
	}

	display() {
		console.log(`${this.color} ${this.year} ${this.make} ${this.model}`);
		let overview = document.createElement("DIV");
		overview.setAttribute("id", "overview");
		overview.style.backgroundColor = "#E1C9C9";
		//   overview.style.height = "90vh";
		 overview.style.width = "20vw";
		//  overview.style.position = "absolute";
		//   overview.style.left = "32px";
		document.body.appendChild(overview);
		let text = document.createElement("P");
		text.innerHTML = `${this.color} ${this.year} ${this.make} ${this.model}`;
		overview.appendChild(text);
	}
}

let cars = [
	new Car("Ford", "Fusion", 2014, "Blue"),
	new Car("Toyota", "Prius", 2008, "Red"),
	new Car("Mazda", "Miata", 1996, "Green"),
	new Car("McLaren", "Artura", 2022, "Purple"),
];

for (cars of cars) {
	cars.display();
}
