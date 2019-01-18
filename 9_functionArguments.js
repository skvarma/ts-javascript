function funcArgs(firstname, lastname){
    console.log(arguments);
    return lastname + ", " + firstname
}

funcArgs("arg1","arg2");

//you can call the function without any arguments - it will be undefined
funcArgs();

// you can call the function with more than two arguments
funcArgs("arg1", "arg2", "arg3");

// Function overloading does not exist in javascript
// if the same function is defined with another set of arguments then the new defenition of the function replace the old defenition
function funcArgs(firstname, lastname, age){
    console.log(arguments);
    return lastname + ", " + firstname

}

// TO achive the same affect as overloading in JS, you need to do extra work
function overloadedFunc(arg1, arg2){
    if (arguments.length == 2){
        console.log("Function with 2 args");
    }
    else if (arguments.length == 1){
        if (typeof arg1 == 'number')
            console.log ("Arg1 is number");
        else
            console.log ("Arg1 is not a number"); 
    }
}

overloadedFunc("a","b");
overloadedFunc("a");
overloadedFunc(1);
