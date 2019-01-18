// define an object without defining a class
var obj = new Object();

obj.firstName = "John";
obj.lastName = "Smith";
obj.age = 33;
obj.address = "123 Main St";

obj;

//add a new property
obj.newProperty = "New Property";
obj;

// Change Porperty Type
obj.age = "Thirty Three";
typeof(obj.age);
obj;

// case sensetive property names - adds a new property for Age
obj.Age = 33;
obj;

