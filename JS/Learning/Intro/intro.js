// COMMENTS
//=============

// alert("it's working!");
// confirm("it's working!");
// prompt("it's working!");


//This is a single line comment
/*
This is a block
comment
==============
*/




/* VARIABLES
=============*/
/*NAMING RULES
-------------*/
//1. No spaces
//2. You can not start with numbres
//3. You can not use dashes or mathematical operators
//4. You can not use "reserved keywoeds"
let str = "My name is Sya ?";
//let str = 'My name is Sya ?';
const num = 21;
var good = false;


/* NAMING BEST PRACTIESS
--> camel case
 =======================*/
 let my_name = "Syamand";
 let myName = "Sya";
 let someHeadsAreGonnaRoll = "Judas Priest song";
 // let some_heads_are_gonna_roll = "Judas Priest song";

 /* JS IS CASE SENSITIVE
 =======================*/
 let name = "Syamand";
 //not the same as this :
 let Name = "Syamand";

 /* A VAR. IT'S CONTAINER 
 =======================*/
 let number = 21; //numbers
 let text = "Bla bla"; //strings
 let cond = true; //booleans
 let date = [21,13,33,"Clou"]; //array
/*  let object = {
   name: "Lou",
   age: 27
 }; */




 /* STRINGS
=============*/
let str1 = "I'm 21 years of age.";
let str2 = 'I\'m 21 years of age.'; //escape character



//in JS we concatenate with + sign
let str3 = "I'm " + 31

let person_name = "Aso";
let age = 22;
// let phrase = name + " is " + age + " years old "; //Aso is 40 years old

//console.log(phrase);
//NATIVE STRING METHODS
let txt       = "Apple is red";
let txtLength = txt.length; // console.log(txtLength);

let txt2      = "Beatles"; // console.log(txt2.split(""));
let txt3      = "Powercoders"; // console.log(txt3.substr(5, 2));





 /* NUMBERS
=============*/
let integer   = 80; // integer
let negative  = -80; // negative
let float     = 6.5; // float
let calculate = 6 + 9; // console.log(calculate);
let calc2     = 2 + 3 * 10; // 32
let calc3     = (4 + 2) * 9; // 50
let calc4     = -2 + (-2); // console.log(calc4);

// Modulo operator
// let reminder = 110 % 60; console.log(reminder);
let reminder;
reminder = 110 % 60; // console.log(reminder)
reminder = 10 % 4; // console.log(reminder);


//NATIVE NUMBERS METHODS
let rand       = Math.random() * 10; // console.log(rand);
let randInt    = Math.round(rand); // console.log(randInt);
let roundCeil  = Math.ceil(1.22345678); // console.log(roundCeil);
let roundFloor = Math.floor(1.2); // console.log(roundFloor);



/* ARRAY
============= */
let arr1 = [1,2,3,4,5]; // console.log(arr1);
let arr2 = ["Syam", "Lou", "Jeanne", "Fölv"]; // console.log(arr2);
//console.log("Numbres array", arr1[1]); // 2
//console.log(arr2[1]); // Lou

// NATIVE ARRAY METHODS
// Add to the array
 //arr2.push("Solo"); console.log(arr2);
// console.log(arr2.length);

//Delete from the array
// arr2.pop(); console.log(arr2); // last element
// arr2.shift(); console.log(arr2); // first one
// arr2.splice(1, 2); console.log(arr2); // 

// Change a value inside an array
arr2[0] = "Astro" ; // console.log(arr2);

// Using splice method to modify an array
arr2.splice(4, 0, "Gil");
// console.log(arr2);

/* FUNCTIONS
===================================*/
function calcAge(name, birthYear) {

  let date = new Date();
  let currentYear = date.getFullYear(); //console.log(currentYear);
  // let age = currentYear - birthYear;

  return name + " is " + age + " years old!"; // return meens EXIT here!

  // Nothing will be displayed after the first return 
  let sya = 31;
  return sya;
}
// console.log (calcAge("Saymand", 1999));
// console.log (calcAge("Lou", 1994));
// console.log (calcAge("Astro", 1997));



// Return day of the week based on a number
/* function dayOfTheWeek(index) {

  let days = ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];


  return days[index];

} 
console.log(dayOfTheWeek()); */

function sayName(greeting, name) {

  return greeting + " " + name + "!";
  
  }
  // console.log(sayName("Hi", "Sya"));


// Convert minutes into seconds

/* function minToSec(min){

  console.log(min + " min = " + (min * 60)  + " sec");
}
/* minToSec(60);
minToSec(24*60); */

/* let userVal = prompt("Number of minutes");
minToSec(userVal); */

/* function minToSecPrompt(){

  let userInputPrompt = prompt("Number of minutes");
  console.log(userInputPrompt + " min = " + (userInputPrompt * 60)  + " sec");
}

userInputPrompt(); */


/* OBJECTS
========================*/
//Name, gender, age, country
let person = {

  name : "Sya Sha",
  gender : "man",
  age : 21,
  country : "CH"

}
/* console.log(person);
console.log(person["name"]);
console.log(person.name); */  //dot notation
let persons = {

  sya: {
    name : "Sya Sha",
    gender : "man",
    age : 21,
    country : "CH"
  },
  Lou: {
    name : "Lou Sha",
    gender : "girl",
    age : 27,
    country : "CH"
  },
  jeanne: {
    name : "Jeanne Sha",
    gender : "girl",
    age : 22,
    country : "CH"
  }
}
// console.log(persons.sya);



// ***************** my exercise that I do it solo  *********************************
let fruits = ["Frais", "Appel", "Patat", "Bomb"];
fruits.sort();
// console.log(fruits);


let firstName = "Syamand";
let lastName = "Shaker"

let phrase = "My name is " + firstName + " " + lastName;

// console.log(phrase);


/* function calcAge(name, birthYear) {

  let date = new Date();
  let currentYear = date.getFullYear();
  let age = currentYear - birthYear;
  let dateObjectName = new Date();

  return "My name is " + name +"and I'm "+ age + " years old!" +
  "\n" + dateObjectName ;

}
console.log (calcAge("Syamand Shaker ", 1999)); */


// console.log(currentYear);
/* var dateObjectName = new Date();
console.log(dateObjectName); */


/* function calcAge(name, birthYear) {

  let date = new Date();
  let currentYear = date.getFullYear(); //console.log(currentYear);
  let age = currentYear - birthYear;
  
  console.log ("My name is " + name +"and I'm "+ age + " years old!" + "\n"+ new Date);

}
calcAge("Syamand", 1999);
calcAge("Lou", 1999);
calcAge("As", 1999); */
