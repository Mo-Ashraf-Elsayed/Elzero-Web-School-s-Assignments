// --------------------------------------------- Map And Set Challenge ----------------------------------------

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2));
console.log("Your Solution Here"); // 210

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/NWmPjWa}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

console.log([...setOfNumbers][setOfNumbers.size - 1]);

// Needed Output
// Set(3) {10, 20, 2}
// 2

//-----------------------------2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//-----------------------------3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

console.log(new Map(Object.entries(myInfo)));
console.log(new Map(Object.entries(myInfo)).size);
console.log(new Map(Object.entries(myInfo)).has("role"));

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

//-----------------------------4

let theNumber = 100020003000;

console.log(
  +[...new Set([...theNumber.toString()])].filter((e) => +e > 0).join("")
);

// Needed Output
// 123

//-----------------------------5

let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName]);
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

//-----------------------------6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbers = chars.filter(function (ele) {
  return typeof ele == "number";
});
let charcters = chars.filter(function (ele) {
  return typeof ele == "string";
});
chars = [...numbers, ...charcters];

console.log(chars.copyWithin(0, numbers.length, numbers.length * 2));

// Another Solution

// let newArr = [];

// for (let i = 0; i < chars.length; i++) {
//   if (typeof chars[i] === "number") {
//     let num = chars.splice(chars.indexOf(chars[i]), 1);
//     chars.unshift(...num);
//     newArr.push(...num);
//   }
// }
// chars.splice(0, newArr.length, ...newArr);
// console.log(newArr);
// chars.copyWithin(0, newArr.length, newArr.length * 2);
// console.log(chars);

//-----------------------------7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6]

//-----------------------------8

//--------The Same OF The Map And Set Cahllenge--------
