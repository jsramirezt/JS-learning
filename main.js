// If control statement

// Switch statement
/*
switch (expression) {
	case value1:
		//Executed when the result of the value matches value 1
		[break];
	case value2;
		//Executed when the result of the value matches value 2
		[break];
	case ValueN;
		//Executed when the result of the value matches value N

	default;
		// Executed when none of the values matches to the expression
}
*/
	
/* For example

Which language do you choose:
1) Javascript	2) Python
3) PHP			4) Asp.net

*/

let respuesta = 0;
switch (respuesta) {
	case 1: 
		console.log("You have selected JavaScript");
		break;
	case 2:
		console.log("You have selected Python");
		break;
	case 3:
		console.log("You have selected PHP");
		break;
	case 4:
		console.log("You have selected Asp.net");
		break;
	default:
		console.log("Sorry, your selection is incorrect");
		break;
}


/*

Loops
JS has 4 looping statements
1) While lopp
2) do/While loop
3) for loop
4) for/in loop

*/

/* While Loop 

while (expression) // Will be executed while the expression is true
statement;

For several statements use "{}"

while (expression){
	statement1;
	statement2;
	statementN
}

*/

// print 0 to 9 in console

let cuenta = 0;
while (cuenta < 10){
console.log(cuenta);
cuenta++;
}

 /*  Do/While loop */

 /* Syntax 

 do {
	statement1;
	statement2;
	statementN;
 }
	while(expression);
   */

/* Example: */

let cuenta2 = 0;
do {
	//execute this bloc at least once no matter if Cuenta2 is already less than 0
 console.log("Cuenta: " + cuenta2); // print count variable value on console
cuenta2++; // increase count variable value by 1
}while(cuenta2 < 0); // evaluate expression

/* When the count variable value beccame 5 whil expression return false */


/* For loop */

/* Syntax

for (initialization; expression; incement/decrement)
  statement; // If value of the expression is true, then the statement will be executed
*/

/* Print 0 to 4 number of the console */

for (let contar3 = 0; contar3 <5; contar3++)
	console.log("Número: " + contar3);

/* 

(*) Execution pattern
1) Initialize variable and specify value
2) Evaluate expression
3) Execute statement
4) Execute increment and decrement operators
5) While the expression is true, it will return to the Step 2

*/

for (let i=0, j = 50; i < 50; i++, j--){
	console.log(i + " and " + j);
}



/* Nested For loop */

for (let i = 1; i < 4; i++){ // Entra en este ciclo 
	for (let k = 1; k < 4; k++){ // Empieza este ciclo hasta que la expresión se vuelve falsa
		console.log(i + " , " + k);
	}
	console.log("\n"); 
	}
	

/* For..In loop */
// Syntax (Works only with objects)

/*
for (variable in object)
	statement;
	
*/

const obj = {a:1, b:2, c:3, d:4, e:5};

for (let o in obj){
	console.log(o + ":" + obj[o]); // print object properties values on the console using keys
}


/* 
Variable will show all key values in an object
*/


/* For Of ... lop */

// Syntax
/*
for (variable of object)
	statement;
*/
// Example

// declare array

let ary = [1,2,3,4,5];

let str = "tuition";

for (let value of ary){
	console.log(value);
}

for (let value in ary){
	console.log(value);
}

for (let value of str){
	console.log(value);
}

//For of will print array element on the console
//For in will print the index number on the console
//For of will print string character on the console

// An expression is a comparison of a value to produce a value
// Primary Expression, it's the simplest expression
// Literals are constant value embeded directly in the program
5.30 // it is a number literal
"Daily" // is a a string literal

// Javascript reserve words
null
true
false

// Bare expressions

str // expression evaluate to the value of the str
undefined // it is a global variable, not a keyword like null


// Example
let z; // Declare variable "z"
z = 4*5; // Combine two expressions multiplication(*) and assignment(*) 
console.log(z); // Print variable "z" on the console

/*
let y, j; // declare variable y and j
j = y = 4 * 5; //combine three expressions multiplication (*) and assigments (=)
j = y = 20; // evalute multiplication
j = 20; // assign 20 value to the variable y
		// J is still undefined
20 		// assign 20 variable value to the variable J
console.log(y); // print variable y value on the console
console.log(j); // print variable j value on the console
*/

let y, j;
j = y = 5 * 5;
console.log(y);
console.log(j);

/* Operators

- In simple words operator is just a expression result in a value
- Operators take one or more operands to produce a result

1 + 2  	// 1 and 2 is operands (argument)
		// (+) is the operator

Arithmetic Operators

(+) Addition and concatenation. Evaluate value from right to left 
(-) Substraction. Evalue values from right to lefft 
(/) Division. Evaluate value from left to right
(*) Multiplication. Evaluate value from left to right
(%) Reminder. Reminder after division (remanente). (10 % 3) = 1.  Evaluate value from left to right
(-) Unary Negation. If y = 10 then -y will be -10. Evaluate value from right to left
(+) Unary Plus. If y = -10 then -y will be 10. Evaluates value from right to left
(++) Pre-increment. Use to increment value by one and evaluate to a  new value, evaluate value from right to left
(++) Post-increment. Use to increment value by one, evaluate the value of 'y' before the increment. Evaluate value from right to left
(--) Pre-decrement. Use to decrease value by one and evaluate to a new value, evaluate value right to left
(--) Post-decrement. Use to decrease value by one, and evalute the value of Y before the decrement, evaluate valut from right to left

*/

// Pre and Post-increment

let b, x = 5;
b = ++x; // Pre-increment
console.log(b + " with Pre-increment "); // will be 6

let c, e = 5;
c = e++; // Post-increment
console.log(c + " with Post-increment"); // will be 5
c = e++; // Post-increment
console.log( c + " with Post increment"); // will be 6


/* Comparison Operator 
- Strict equality
- Abstract equality
- Relational

(<) Less than
(>) Greater than 
(<=) Less than or equal to
(>=) Greater of equal to


*/

// Strict equality

let g = 5, h = 10;
console.log(g < h); // You will get true because 5 is less than 10
console.log(h > g);
console.log(g <= h);
console.log(h >= g);

// Strict equality
// WHen two values consider strictly equal if they refer to the same object or they are the same type and have the same value
// To check strictly equal two values you can use (===) three equal signs. 
// And to check not strictly equal value you can use exclamation mark and double equal (!==)


// Abstract equality
// When two values consider abstractaly equal if they refer to the same object of having the same value
// To check abstract equality you can use double equal sign (==)
// To cjeck not abstract equality you can use exclamation mark with the equal sign (!=)


/* Strict and abstract equality */

/* Using Strict equality */
let xx = 10, strA = "10";
console.log(xx == strA); // result = True because XX and strA have the same value 10, it will not check about data type
console.log(xx === strA); // Results = False bacause xx and strA have different data type

/* Converting strA into Number using strict equality */
console.log(xx === Number(strA)); //This function will convert the string value from strA into a number, that will match the data type of variable xx, resulting in True

/* Using not strict equality */

console.log(xx !== Number(strA)); // result = False, because xx is equal to strA

/* Using not abstract equality */
console.log(xx !=strA); // Result = false because xx is equal to strA 

/*  Logical Operators

(&&) AND  
	Logical operator use for Boolean opeetaion on two values
	It return true if and only if its firs operand and second operand are true
	If one or both operands are false, then local operator (&&) returns false


(||) OR
	Logical operator perform Boolean operation on two relational values
	It will return true if one or both operand evaluate to tre
	It means, when both expressions evaluate to false the (||) operator return false, otherwise it will return true


(!) NOT
	The (!) opoerator is an unary operator and it is placed before the single operand
	The use of (!) operator is to invert the Boolean expression
	It means if
		x = true;
		!x; invest x Boolean value. Now x is equal to false




*/


// AND (&&) example
let x5 = 10, y5 = 10;
if (x5 === 10 && y5 === 10){
	console.log("The AND relationship is true");
}else{
	console.log("The AND relationship is false");
}

// OR (||) example

if(x5 === 11 || y5 === 10){
	console.log("The OR relationship is true");
}else{
	console.log("The OR relationship is false");
}


// NOT (!) example

let z1 = true
console.log("Using NOT Operator: " + !z1);


/* Bitwise to manage low level representations

-- Bitwise AND (&)
Bitwise and operator perform Boolean operation on each bit of its integer argument
A bit is set in the result only if the corresponding bit is se tin both operands

Example:
0x01234 & 0x00DF 
Result would be 0x0034


-- Bitwise OR (|)

The or(|) operator perform Boolean operation on each bit of its integer argument
A bit is set in the result if the corresponding bit is set in one of both of the operands

Example:
0x1234 | 0x00DF 
Result would be 0x12DF


-- Bitwise XOR (^)
The ^ operator performs a Boolean exclusive OR operationon each bit of its integer arguments
Exclusive OR means that either operand one is tru or operan two is true, but not both


Example:
0xFF00 ^ 0xF0F0
Evaluates to this 0x0FF0



-- Bitwise NOT (~)
This not bitwise operator is unary operator that operate by reversing all bits in the operands

Example:
~0x0F
Evaluates to 0xFFFFFFF0, or -16




-- Bitwise Shift Left (<<)
The left shift bitwise operator move all bits in its first operand
For example, in the operation a<<1, the first bit (the ones bit) of a becomes the second bit (the two's bit), the second bit of a becames the third, etc.
Shifting a value left by one position is equivalent to multiplying by 2, shifting two positions is equivalent to multiplying by 4, and so on

Example:
7 << 2 evaluates to 28



-- Bitwise Shift Right (>>)
The shift right bitwise operator moves all bits in its first operand
Shifting a value right one place is equivalent to dividing by 2, shifting right two places is equivalent to integer division by4, and so on

Example:
7 >> 1 evaluates to 3, and 
-7 >> 1 evaluates to -4


-- Bitwise Right Shift with Zero Fill (>>>)
The right shift with zero fill operator is jut like the >> operator, except that the bits shifted in on the left are always zero

Example:
-1 >> 4 evaluates to -1, 
but -1 >>> 4 evaluates to this 0x0FFFFFFF
 

*/



/* Assignment operator

Assign a value to a variable

let x = 5;
let j = x = 40;


Arithmetic addition
x = x + y;

let x = 10, y = 5;

*/

let xA = 10, 
 yA = 5;

// xA = xA + yA;
xA += yA; // It's the same as the previous one
console.log(xA);

// Substraction assginment operator
xA -= yA;

console.log(xA);

// Multiplication assignment operator 
xA *= yA;

console.log(xA);

//Division assignment operator
xA /= yA;

console.log(xA);


// reminder assignment operator
let xB = 10, yB =4
xB %= yB;
console.log("Reminder assignment operator: " + xB);

//Bitwise Operators
// Left shift assignment operator
xA <<=yA;
console.log(xA);

// Right shift assignment operator
xA >>=y;
console.log(xA);

// Right shift zero fill assigment operator
xA >>>=yA;
console.log(xA);

// AND (&) assignment operator
xA &= yA;
console.log(xA);


// OR (|) assignment operator
xA |= yA;
console.log(xA);


//XOR (^)
xA ^= yA;
console.log(xA)


// Typeof and Grouping Operators
/*
Data types in Javascript

undefined
null
boolean
number
string
symbol
object

*/

// To get the type of the operator:

console.log(typeof 1);
console.log(typeof "daily");
console.log(typeof true);
console.log(typeof null);  // It's an exception
console.log(typeof function(){});

// Comma (,) Operator 

let y1 = 40, x1 = 10;



// Grouping operator ()

// We will use () to specify the order of the operation

// void Operator
// Will only return Undefined
// Example:
//<a href="javascript:void 0">Nothing happened</a>


/* Destructing assignment operator */

// Allows to take an array or object and deconstructing it into individual variables

// Normal object declaration

const obj1 = {aa:11, ab:2, ac:3, ae:15};
console.log(obj1);

// destructing assignment operator
const {aa, ab, ac, ae} = obj1; // ({a,b,c,d,e}=obj); this syntax is also valid
console.log("aa: " + aa);
console.log("ab: " + ab);
console.log("ac: " + ac);
console.log("ae: " + ae);

// The variable name must match the property name in the object

// Destructing assignment operator with array

// Declare array
const array1 = [1,2,3,4,5,6];

// Destructing assigment operator
let [ar,br,cr,...rRestantes] = array1; // We used [] to declare destructing array operator 

console.log(ar);
console.log(br);
console.log(cr);

// All variables should be declared in order to avoid an error

// Using Spread Operator [...]
console.log(rRestantes); // will print remaining array elements;


// Operator precedence

// For example

let xP;

xP = (5 + 3) * 2;

console.log(xP); // This is equal to 16

// Another example
xP = 20 / 4 +2 * (7 + 4 - 2); // would be 23
// xP = 20 / 4 + 2 *(9);	// Perform expression in the parenthesis
// xP = 5 + 2 * (9);  	// Perform division 20 / 4
// xP = 5 + 18;			// Perform multiplication 2 * (9)
// xP = 23;				//	Perform addition 5 + 18
// 23;					// Assign 23 to the xP variable
console.log(xP);


/*   Array and Object Operators */

// Member access (.)
// syntax
// object.property; // must be a valid identifier

const obj2 = {id:'1', name:'daily'}; // access obj property using (.) member access operator
console.log(obj2.id);
console.log(obj2.name);

// Computed Member Access []
// Example
console.log(obj2["name"]); // Using computed member access operator
console.log(obj2["id"]); 
console.log(["id"]); // Ask why this happened
console.log(["name"]); // Ask why this happened


/* in Operator */
// True if the left side operand is on the right side operand
// True if the left side property is in the right side object

// Example
 const car = {cname:"BMW", model: "i8", year:2015};
 console.log("cname" in car); // result would be true for any of the properties previously specified



/* New Operator */

// New operator is used to create an instance of the user-defined object
// Example

class Model{
	constructor(){

	}
}

// creating an instance of the Model class
const c1 = new Model();

// creating another instance for the same class
const c2 = new Model();

// now we have two instances of Model() object


/* Instance of Operator */

// For example

const d = new Date();
console.log(d instanceof Date); // Would be true

// Declare array
const array2 = [1,2,3];

console.log(array2 instanceof Array); // Would be true

console.log(array2 instanceof Date); // Would be fals, because is not instance of Date object

/* Delete Operator */

const obj3 = {x:1, y:2, z:3};

console.log("x" in obj3); // Result would be true due X is a property of obj3

delete obj3.x;

console.log("x" in obj3); // Result would be false due X property was deleted from obj3

// Using Array

const arry3 = [1,2,3,4];
console.log(arry3[3]); // will print 4 on the console

// delete array element
delete arry3[3];
console.log(arry3[4]);

/* Conditional operator (?:) */
// 1stOperand ? 2ndOperand : 3rdOperand;

// For example
// if and else
// declare variable
let print2; // let print = "Hey everyone";
if(print2){
	console.log(print2);
	}else{
		print2 = "Welcome";
		console.log(print2);
}

// Using conditional operator (?)
let print3 = "Hey everyone"; // let print3; to set the variable blank
print3 = print3 ? print3 : "Welcome";
// If expression returns true, then it will print "Hey everyone", otherwise will print "Welcome"
console.log(print3)

// End of Lesson 27



// Lesson 28
// Jump Statements, afre used to jump the execution to a new location

/* Break statement */
// Syntax
// Break;

// For example;
for (let ai = 1; ai <=5; ai++){
	if (ai == 3) break; //  It will break the loop when the statement gets true
 	console.log(ai); // print ai on the console
}

// Break labeled statement
// Syntax
// break labelname;

/* Labeled statement */

// Allow us to specify a name to the specific block that we can refer it elsewhere in the program

// Syntax
// identifier : statement;

// For example;
//let abc1 = 1;

// creating a labeled statement
/* label:while (abc1 == 1){
	console.log(abc1);
	break label;
} */

// End of Lesson 28



// Lesson 29

// Jump Statements //
// Continue statement
// Will restart the loop from the next iteration
// Syntax
// continue;
// Continue labeled statement syntax
// continue labelname;

let xBC = 0;
while (xBC<10){
	xBC++;
	if(xBC == 5){
		continue; // Will skip the rest of the code and continue the while loop
	}
	console.log(xBC);
}


// Return Statment
// Syntax
// return expression;

// Example
// We will create a function
function adding(xDE){
	return xDE + xDE;
}

// call function and print xDE value on the console
console.log(adding(22));

// End of Lesson 29


// Lesson 30

// Functions // 
// These are a collections of statements that runs as a single unit
// It's a "subprogram"
// Declare with function keywork followed by function name
// parameters are optional
// Syntax
/* function FunctionNAme (argument1,..., argumentN);{
	staments;
}
*/

// Example
function Magic(){
	console.log("Hello");
	console.log("Function");
}

Magic();

function Magic2(){
	return "Hello Function";
}

Magic2();

console.log(Magic2); // Referencing to the function, will not execute body of the function


// Assign reference to the variable
const f1 = Magic2;

console.log(f1());

// declare object with property
const obj4 = {f1: Magic2};
console.log(obj4.f1()); // call function using object property

// End of Lesson 30


// Lesson 31
// Working with the Function Arguments
// Function Arguments

// Pass information to a function, they are also called parameters
// The argument is like a variable. The argument doesn't exist until the function is called
// Example
// Function with two parameters or arguments

function demo(aD, bD){
		// aD and bD are formal arguments
	// when they receive 5 and 40 values, they become actual arguments
	return(aD + bD) / 2; // return average of two numbers
}

console.log(demo(5,40)); // Call function and pass value as argument

let aD = 500,
	bD = 400;
console.log(demo(aD,bD)); // Call function and pass variable as value


// Default values for arguments
// For example

/* function f2(x2){
	return `in function : x2 = ${x2}`; // use backtick to specify string
}
console.log(f2());  // Without parameter
*/

function f2(x2 = "3"){
	return `in function : X = ${x2}`;
}
console.log(f2());

// End of Lesson 31


// Lesson 32

// Anonymous function

// function() {}  // Anonymous function

// Expressions

/* const f3 = functio(){
	// statements.
}

f3(); //called function
*/


// Anonymous functions are used to declare functions as object properties

const o = {
	name: "Anonymous Function",
	invoke: function(){
		return "You called me!";
	}
}

console.log(o.invoke()); // call function using object propert by specifying parenthesis, without them the console will return the reference of the function

const o1 = {
	name:"Anonymous Function",
	// now invoke is the method
	invoke(){
		return "You called me!";
	}
}
console.log(o.invoke()); // call Method using object property

// End of Lesson 32


// Lesson 33
// Arrow notation => to reduce the number of times to write "Function"
/*
1) You can ommit the Function keyword
2) if the function take on single parameter, then you can ommit the parentheses
3) if your function only have single statement, then you can ommit {} also 
*/

// Example

const f10 = function(){ return "Hello everyone"};

const f11 = () => "Hello everyone";

// Using single argument
const f20 = function (arg1) {Return `Value of the argumen: $(arg1)`}

// Using arrow function with argument
const f21 = arg1 => `Value of the Argument: ${arg1}`; // This is the same as the one above

// Using two arguments
const f30 = function(arg1, arg2){return arg1 * arg2};

// Using arrow function with two arguments
const f31 = (arg1, arg2) => arg1 * arg2;

// This Keyword
// this keyword refers to the current object where is use

const obj5 = {
	name: "Daily tuition",
	Magic3() {return `Hello ${this.name}`;} // This keyword refers to the current object
};


// call magic3 method
console.log(obj5.Magic3());

// if we say
const m1=obj5.Magic3;
console.log(m1===obj5.Magic3); // would return true

console.log(m1());

// End of Lesson 33



// Lesson 34
// Destructuring arguments
// Declare object
const oA = {
	w1 : "Daily",
	w2 : "Tuition",
	w3 : "Tutorials"
}

// Create a function to return those 3 properties
// Specify {} when declaring object properties
function getData({w1, w2, w3}){
	return `${w1} ${w2} ${w3}`;
}

// Call function
console.log(getData(oA)); //call object from the function with destructured arguments

// Using Array

const arr = ["daily1", "tuition1", "tutorials1"];

// declare function
// specify [] square brackets when declaring array
function getData1([wx1, wx2, wx3]){
	return `${wx1} ${wx2} ${wx3}`;
}

// call function
console.log(getData1(arr)); // call array using destructured arguments

// call() Method

// Calls the function with specific values 
// Example,

function Magic4(){
	return `Welcome, to ${this.name}`;
}

// create two objects
const objA = { name: "Daily"};
const objB = { name: "Tuition"};

// call function
console.log(Magic4()); // without call method

// call function with call() method
console.log(Magic4.call(objA)); // called call() method with objA parameter

console.log(Magic4.call(objB)); // called call() method with objB parameter
 

// End of Lesson 34



// Lesson 35 from the ThinkPad

