/* CONDITIONS
------------------------------------*/
let num = 5;
let num2 = 10;

// Comparison operators :
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to
// == equal to
// === equel to and the same type
// != not equel to
// !== not equal and not the same type

//A SIMPLE CONDITION
/* if (num > 6){
  show("true!");
}
else { 
  show("false!")
} */

// A STRICT EQUALITY CHECK CONDITION
/* if(5 === 5){
  show("true!");
}
else {
  show("false!")
} */


// A DOUBLE CHECK WITH "OR" (logical operator)
//One of the conditions must be true
/* if(num > 5 || num2 < 30){
  show("double check OR: true!");
} */

// A DOUBLE CHECK WITH "AND" (logical operator)
//both conditions must be true
/* if(num > 4 && num2 < 30){
  show("double check AND: true!");
} */


//USING NOT OERATOR
/* if(num != "5"){
  show("not operator: true!");
} */

//COMPLEX CHECKS
              // FALSE                    //FALSE 
/* if((num === 5 && num > 5) || (num2 == 20 && num2 > 20)){
  show("complex cond: true!");
} */



function message(){

  let date = new Date();
  let hour = date.getHours(); show(hour);

  let message = "";

  if(hour < 8){
  message = "What are you doing that early?";
  }
  if(hour >= 8 && hour < 12){
  message = "Good morning";
  }
  if(hour >= 13 && hour < 17){
  message = "Good afternoon";
  }
  if(hour >= 18 && hour < 21){
  message = "Good evening";
  }
  if(hour >= 22){
    message = "Good night";
  }
  show("Chalenge message:", message);
}
message(7);


