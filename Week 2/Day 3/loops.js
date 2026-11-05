/**************************************************
 * LOOP STATEMENTS IN JAVASCRIPT
 * Loops are used to repeat a block of code
 **************************************************/

// console.log("===== LOOP STATEMENTS IN JAVASCRIPT =====");


/**************************************************
 * 1. FOR LOOP
 * Used when number of iterations is known
 **************************************************/

// Print numbers from 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log("For loop value:", i);
// }

// for(initialization; condition; updation){
// basic instructions
// }


// /**************************************************
//  * 2. WHILE LOOP
//  * Runs while condition is true
//  * Condition is checked BEFORE execution
//  **************************************************/

// let count = 1; //intialization

// while (count <= 5) { //while(condition){ //instruction //updation }
//   console.log("While loop value:", count);
//   count++;
// }


// /**************************************************
//  * 3. DO WHILE LOOP
//  * Runs AT LEAST ONCE
//  * Condition is checked AFTER execution
//  **************************************************/

// atleast 1

// let num = 1; //initialization

// do {   //do
//   console.log("Do-While loop value:", num);
//   num++; //updation 2 3 4 5 
// } while (num <= 5);  //condition


/**************************************************
 * 4. FOR...IN LOOP
 * Used to iterate over OBJECT keys or Array Indices
 **************************************************/

//for in -> keys ke upr iterate

// let student = {
//   name: "Karan",
//   age: 22,
//   course: "CSE"
// };

// // console.log(student.course)

// for (let key in student) {  
//   console.log(key, ":", student[key]);
// }


// /**************************************************
//  * 5. FOR...OF LOOP
//  * Used to iterate over ITERABLES (arrays, strings)
//  **************************************************/

// iterator -> values ke upr iterate

// let colors = ["Red", "Green", "Blue"];

// for (let color of colors) {
//   console.log("Color:", color);
// }

// // for...of with string
// let text = "Javascript";

// for (let char of text) {
//   console.log("Character:", char);
// }


// /**************************************************
//  * 6. BREAK STATEMENT
//  * Stops the loop completely
//  **************************************************/

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break; // exits loop
//   }
//   console.log("Break example:", i);
// }


// /**************************************************
//  * 7. CONTINUE STATEMENT
//  * Skips current iteration
//  **************************************************/

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue; // skips 3
//   }
//   console.log("Continue example:", i);
// }


// /**************************************************
//  * 8. NESTED LOOP
//  * Loop inside another loop
//  **************************************************/

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log("i =", i, "j =", j);
//   }
// }

// 3*2 = 6 times




// /**************************************************
//  * 9. ARRAY METHODS AS LOOPS
//  **************************************************/

// let numbers = [1, 2, 3, 4];

// // forEach loop
// numbers.forEach(function (value) {
//   console.log("forEach value:", value);
// });

// map loop (returns new array)
// let squared = numbers.map(function (value) {
//   return value * value;
// });

// // [1,4,9,16]

// console.log("Squared array:", squared);


// /**************************************************
//  * END OF LOOP STATEMENTS
//  **************************************************/
// console.log("===== END =====");
