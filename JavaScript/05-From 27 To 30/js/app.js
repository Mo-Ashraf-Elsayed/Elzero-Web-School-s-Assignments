// ------------------------------------------------String Challenge-------------------------------------------

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero  

// 8 H
console.log(a.substring(a.length - 4 , a.length - 3).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.substr(0,6).split(" ")); // ["Elzero"]
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes

console.log(`${a.charAt(0).toLowerCase()}${a.slice(1,-1).toUpperCase()}${a.slice(-1).toLowerCase()}`); // eLZERO WEB SCHOOl

//  codepen.io link ----------------- https://codepen.io/mqinovbp-the-lessful/pen/poYaGgd

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(-10,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(userName.length-(userName.length),userName.length-(userName.length-1)).toLowerCase().repeat(3)); // eee
console.log(userName.split("", 1)[0].toLowerCase().repeat(3)); // eee


//-----------------------------2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toUpperCase().includes("Z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True

//---------------or--------------------

console.log(word.includes(letterZ.toUpperCase().toLowerCase())); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True