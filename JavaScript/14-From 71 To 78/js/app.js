// ----------------------------------------Higher Order Functions Challenge-----------------------------------

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let num = true;

let solution = myString
  .split("")
  .filter((ele) => isNaN(parseInt(ele)) && ele !== "," && ele !== "_")
  .slice(+true, -true)
  .map((ele) => (ele === ele.toUpperCase() ? " " + ele : ele))
  .reduce((accumulator, ele) => accumulator + ele)
  .trim();

console.log(solution); // Elzero Web School

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/LYagxpm}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let mixSolution = mix
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .reduce((accumulator, element) => accumulator + element);
console.log(mixSolution);
// Elzero

//-----------------------------2

let myString2 = "EElllzzzzzzzeroo";

let myString2ByFilter = myString2
  .split("")
  .filter((ele, index, arr) =>
    ele === arr[index + 1] ? (ele = "") : (ele = ele)
  )
  .join("");
//----or
// .split("")
// .filter((ele, index, arr) => arr.indexOf(ele) == index)
// .reduce((acc, ele) => acc + ele);
console.log(myString2ByFilter);
// Elzero

//-----------------------------3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray
  .reduce((acc, ele) => acc + ele)
  .split(",")
  .join("");

// Another Solution

// let newArray = myArray
//   .reduce(function (acc, ele) {
//     return `${acc}${ele}`;
//   })
//   .split("")
//   .filter((el) => el !== ",")
//   .reduce((acc, ele) => `${acc}${ele}`);

// Another Solution

// let newArray = myArray.join("").split("").filter(el=> el !== ",").reduce((acc,ele)=>`${acc}${ele}`)

console.log(newArray);

// Elzero

//-----------------------------4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNumsAndStrings = numsAndStrings
  .filter((el) => !isNaN(parseInt(el)))
  .map((el) => -el);

console.log(newNumsAndStrings);

// [-1, -10, 10, 20, -5, -3]

//-----------------------------5

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(
  (acc, ele) => (ele % 2 === 0 ? acc * ele : acc + ele),
  1
);
console.log(newNums);

// 500
