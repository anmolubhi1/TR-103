/**************************************************
 * CONDITIONAL STATEMENTS IN JAVASCRIPT
 **************************************************/

console.log("===== CONDITIONAL STATEMENTS =====");


/**************************************************
 * 1. IF STATEMENT
 * Executes code only if condition is true
 **************************************************/
// let age = 20;  //humari age hai 20

// if (age >= 18) { // agr hmari 18 se zyada hai ya fir 18 ke equal hai
//   console.log("You are eligible to vote"); // you are eligible to vote
// }

// if condition is false this will not work

// if(condition){
//   //Instructions
// }


/**************************************************
 * 2. IF ELSE STATEMENT
 * Executes one block if true, another if false
 **************************************************/
// let marks = 45;

// if (marks >= 40) {
//   console.log("Result: Pass"); // if condition is true toh if block work krega 
// } else {
//   console.log("Result: Fail"); // vrna humara else block work krega
// }


/**************************************************
 * 3. IF ELSE IF ELSE
 * Used for multiple conditions
 **************************************************/

//else if statement -> multiple if else chalana rehta hai toh humlog else if statement

// let score = 85;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 75) {
//   console.log("Grade: B");
// } else if (score >= 60) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: Fail");
// }


/**************************************************
 * 4. NESTED IF
 * IF inside another IF
 **************************************************/

//Nested If else -> IF KE UNDER AUR IF STATEMENTS

// let hasID = true;

// if (age >= 18) {
//   if (hasID) {
//     console.log("Access Granted");
//   } else {
//     console.log("ID Required");
//   }
// }


/**************************************************
 * 5. SWITCH STATEMENT
 * Best when checking a single value
 **************************************************/
// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// switch(input_case){
//   case expected_case :
//     //Instructions
//     //break;
//   default:
//     //Instructions
//     //isme humko break ki zarurat nahi hoti qki iske baad koi aur statement nahi jo execute ho ske
// }



/**************************************************
 * 6. TERNARY OPERATOR
 * Short form of if else
 **************************************************/
// let number = 7;

// let type = (number % 2 === 0) ? "Even" : "Odd";
// console.log("Number is:", type);


/**************************************************
 * 7. TRUTHY & FALSY CHECK
 **************************************************/
// let username = "";

// if (username) {
//   console.log("User exists");
// } else {
//   console.log("User does not exist");
// }


/**************************************************
 * 8. RETURN INSIDE CONDITION (FUNCTION)
 **************************************************/
function checkAge(userAge) {
  if (userAge < 18) {
    return "Not allowed";
  }
  return "Allowed";
}

console.log(checkAge(16));


/**************************************************
 * END OF SCRIPT
 **************************************************/
console.log("===== END =====");
