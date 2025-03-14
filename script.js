// Complete the js code
function Car(make, model) {
  constructor(make,model){
	this.make=make;
	this.model=model;
  }

	getMakeModel(){
		return `${this.make} ${this.model}`
	}
}

function SportsCar(make, model, topSpeed) {
	super(make,model);
	this.topSpeed=topSpeed;

	getTopSpeed(){
		return `${this.topSpeed}`
	}
}

const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel());

console.log(car.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
