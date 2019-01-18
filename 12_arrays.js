// Creating arrays
var arr1 = ["A","B","C"];
var arr2 = new Array("x","y","z");

global.arr1;
global.arr2

arr1.length;

arr1.push("dd");
global.arr1;

// Arrays can hold multiple data types
var multiArr = ["A", 55, function (){ console.log("I am a function")}];

multiArr;
multiArr[0];
multiArr[1];
multiArr[2]();

// For iterator shows indexes of a n array rather than the element
var arr3 = new Array("x","y","z");
for(var elem in arr3) 
    console.log(elem);

//access the array elements 
for(var elem in arr3) 
    console.log(arr3[elem]);

 // The reason for iterator showing indexes - Array is an object with properties 0,1,2
 global.arr3;  
 
 
 // The below is not best practice but it ashows you a cann adda description property to an array
 arr3.description = "Added description to Array";

 // now whenr we iterate over the arr3 object desciption appears as the index
 for(var elem in arr3) 
    console.log(elem);

 // It is not possible to access number indexes as a property after the "." since numbered property names are not allowed
 arr3.0;
 
 //however we can acces description as an array index
 arr3["description"];

 // So array is just an object and the Array() is just a constructor for the Array object
 // just like arrays we can use a for loop to iterate over properties of a regular object
 var newObj = { firstName: 'John',
 lastName: 'Smith',
 age: 'Thirty Three',
 address: '123 Main St',
 newProperty: 'New Property' };

 for (var e in newObj) console.log(e);
 for (var e in newObj) console.log(newObj[e]);