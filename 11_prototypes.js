// If a property is not found on the object then the property is searched on the object's prototype
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

//define a function on the prototype
Car.prototype.fullName = function(){ return this.make + " - " + this.model + " - " + this.year}

//use the prototype's functiuon
var car33 = new Car("Nissan","Altima", "2011");
car33.fullName();

global.car33.__proto__