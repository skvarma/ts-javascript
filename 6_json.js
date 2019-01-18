//define a string 
var jsonStr = '{ "firstName": "John",\
"lastName": "Smith"}';
// 'age': 'Thirty Three', \
// 'address': '123 Main St', \
// 'newProperty': 'New Property' }";

jsonStr;

// deserialize the string in an object
var jsonObj = JSON.parse(jsonStr);
jsonObj;