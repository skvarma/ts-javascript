// JS Primitives - Boolean, Number, String (undefined & null are sometimes included)

//Adding numbers & strings - prints 58
var a = 5;
var b = "8";
var c = a + b;
//returns string
typeof(c);

//multiplying string and number. returns 40
var d = a * b
typeof(d);
d;

// c was initially defined as a string but we assigned it a number so c is now an number
c = d;
typeof(c);

//multiply 2 strings. returns 30
var e = "5" * "6";
typeof(e);
e;

//Explicit conversion
// returns 15
parseInt("15.5")
// returns 15.5
parseFloat("15.5")
//Returns NaN
parseInt("Hello")

//NaN conversion always returns false. NaN cannot be equal to anything else including anothe NaN
//reutns false
NaN==NaN

//check if a string can be converted to a number. Returns true since Hello is not a number
isNaN("Hello");
//returns false
isNaN("88");

//blocking autoconversion while comparing
//returns true
5 == "5"
//returns false
5 === "5"

//Booleans
var bool;
//bool is undefined so it returns 0
(bool) ? 1:0;
// bool is 0(false) so it returns 0
bool = 0;
(bool) ? 1:0;
// bool is 1(true) so it returns 1
bool = 1;
(bool) ? 1:0;
// bool is non empty string so it returns 1
bool = "false";
(bool) ? 1:0;
// bool is non empty string so it returns 1
bool = "true";
(bool) ? 1:0;
// bool is  empty string so it returns 0
bool = "";
(bool) ? 1:0;
// bool is  null so it returns 0
bool = null;
(bool) ? 1:0;
// bool is  true so it returns 1
bool = true;
(bool) ? 1:0;
// bool is  false so it returns 0
bool = false;
(bool) ? 1:0;

//Boolean conversions
//returns Hellotrue
"Hello" + true
//returns 2
1 + true

(1 + true) + "hello"
//'2hello'

