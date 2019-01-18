// Create object
var newObj = { firstName: 'John',
lastName: 'Smith',
age: 'Thirty Three',
address: '123 Main St',
newProperty: 'New Property' };

newObj;

//object define properties
var defObj = new Object();
Object.defineProperties(defObj, { 
    "firstName" : { value : "John", writable:true},
    "lastName" : { value : "smith", writable:false}
});

// Firstname is updatable but last name is not
defObj.firstName = "Jack";
defObj.lastName = "Rabbit";

defObj;