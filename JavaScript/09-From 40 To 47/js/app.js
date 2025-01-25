// ------------------------------------------------ Array Challenge-------------------------------------------

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.splice(++counter, --counter);
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

console.log(
  `${my[zero].slice(--zero, --counter)}${my[counter].slice(counter)}`
); // "Elzero"

console.log(
  my[counter++].slice(++counter, ++counter) + my[zero].slice(zero, ++zero)
); // "rO"

//                https://codepen.io/mqinovbp-the-lessful/pen/jOJZgoy

//---------Another Solution
// // Write Code Here

// my.splice(-(--counter), +counter);
// my.reverse();
// // let newMy = my.slice(--counter, ++counter);

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]

// console.log(
// `${my.slice(zero, counter)[--zero].slice(zero, --counter)}${my
//     .slice(++zero, ++counter)
//     [zero].slice(--counter)}`
// ); // "Elzero"

// console.log(
//   `${my[counter].substr(counter * counter, zero)}${my[counter]
//     .substr(counter * counter + zero, zero)
//     .toUpperCase()}`
// ); // "rO"

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// let last1 = myFriends.splice(num);
// let last2 = myFriends.pop();

// Method 1
console.log(myFriends.slice(+false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(+false, num)); // ["Ahmed", "Elham", "Osama"];

//-----------------------------2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

let fFriend = friends.shift();
let lFriend = friends.pop();

console.log(friends); // ["Eman", "Osama"]

//-----------------------------3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(
  arrTwo.reverse()[finalArr.length],
  arrOne.reverse(),
  arrTwo.slice(+true)
);

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//-----------------------------4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][+false].slice(website.length).toUpperCase()); // ZERO

//-----------------------------5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle) === true) {
  console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

//-----------------------------6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

arr2.splice(arr1.length, +allArrs.length, arr1[arr1.length - true]);
allArrs = arr2
  .slice(arr1.length - true)
  .join("")
  .toLowerCase();

// Another SolutionVVVVVVVVVVVVVVV

// allArrs = allArrs
//   .concat(
//     arr2[arr2.indexOf("F")],
//     arr1[arr2.indexOf("F")],
//     arr2[arr2.indexOf("Y")]
//   )
//   .join("")
//   .toLowerCase();

console.log(allArrs); // fxy
