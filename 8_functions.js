function fullName(firstname, lastname){
    return lastname + ", " + firstname
}

//fullName is a property of the root object
fullName

//assigning function to another variable
anotehrFullName = fullName;
anotehrFullName("John", "Smith");

//functions are also objects & they can be passed as properties
var funcObj = { firstName: 'John',
lastName: 'Smith',
age: 'Thirty Three',
address: '123 Main St',
newProperty: 'New Property' };

funcObj.fullName = function(){ return this.lastName + ", " + this.firstName};

funcObj.fullName();
