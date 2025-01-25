// ------------------------------------------------Operators Challenges---------------------------------------

/*
  Challenge 1
*/

let a1 = 10;
let b1 = "20";
let c1 = 80;

//           11 + 20   +  80  -  11
console.log(++a1 + +b1++ + +c1++ - +a1++); // value is = 100
//           13 +(-21)+ 81 - (-13) + 14 => (13-21+81+13+14)
console.log(++a1 + -b1 + +c1++ - -a1++ + +a1); // value is = 100
//           81 + 21 +  13 * 21 -   22 * 13+  12 - 1
console.log(--c1 + +b1 + --a1 * +b1++ - +b1 * a1 + --a1 - +true); // value is = 100

/*
  Challenge 2
*/

let d1 = "-100";
let e1 = "20";
let f1 = 30;
let g1 = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d1 * e1); // 2000

console.log(++g1 * ++e1 + -d1 + ++f1); // 173

// https://codepen.io/mqinovbp-the-lessful/pen/Babmqgq (The challenge on codepen);

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

//           11 + 20   +  80  -  11
console.log(++a + +b++ + +c++ - +a++); // value is = 100
//           13 +(-21)+ 81 - (-13) + 14 => (13-21+81+13+14)
console.log(++a + -b + +c++ - -a++ + +a); // value is = 100
//           81 + 21 +  13 * 21 -   22 * 13+  12 - 1
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // value is = 100

/*
    1.1
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: pre increment
  [+]
  - Explain: arithmetic operator +  (plus)
  -----------------------------
  1.2
  [+b++] [+]
  [+b++]
  - Value: 20 
  - Explain: post increment and unary plus operator (Data type in the variable string and here is number because of the unary plus operator)
  [+]
  - Explain: arithmetic operator +  (plus)

  -----------------------------
    1.3
  [+c++] [-]
  [+c++]
  - Value: 80 
  - Explain: pre increment and unary plus operator
  [-]
  - Explain: arithmetic operator +  (minus)

  -----------------------------
    1.4
  [+a++] 
  [+a++]
  - Value: 11  >>> because of we made an increment in the first of the line in console 
  - Explain: post increment and unary plus operator 

  -----------------------------
    2.1
  [++a] [+]
  [++a]
  - Value: 13
  - Explain: pre increment
  [+]
  - Explain: arithmetic operator +  (plus)
  -----------------------------
    2.2
  [-b] [+]
  [-b]
  - Value: -21
  - Explain: negation operator
  [+]
  - Explain: arithmetic operator +  (plus)

  -----------------------------
      2.3
  [+c++] [-]
  [+c++]
  - Value: 81 
  - Explain: pre increment and unary plus operator
  [-]
  - Explain: arithmetic operator +  (minus)

  -----------------------------
    2.4
  [-a++] [+]
  [-a++]
  - Value: -13
  - Explain: post increment and negation operator
  [+]
  - Explain: arithmetic operator - (plus)

  -----------------------------
    2.5
  [+a] 
  [+a]
  - Value: 14
  - Explain: unary plus operator



  -----------------------------
    3.1
  [--c] [+]
  [--c]
  - Value: 81
  - Explain: pre decrement
  [+]
  - Explain: math operator + (plus)

  -----------------------------
      3.2
  [+b] [+]
  [+b]
  - Value: 21
  - Explain: unary plus operator
  [+]
  - Explain: math operator + (plus)

  -----------------------------
    3.3
  [--a] [*]
  [--a]
  - Value: 13
  - Explain: pre decrement
  [*]
  - Explain: math operator * (multiply by)

  -----------------------------
    3.4
  [+b++] [-]
  [+b++]
  - Value: 21 
  - Explain: post decrement and unary plus operator
  [-]
  - Explain: math operator + (minus)

  -----------------------------
    3.5
  [+b] [+]
  [+b]
  - Value: 22 
  - Explain: unary plus operator
  [+]
  - Explain: math operator + (plus)

  -----------------------------
    3.6
  [a] [+]
  [a]
  - Value: 12 
  - Explain: variable a after decrement and increment and unary plus and negation operators (this line is The focus of the challenge)
  [+]
  - Explain: math operator - (plus)

  -----------------------------
      3.7
  [--a] [-]
  [--a]
  - Value: 13 
  - Explain: pre decrement
  [-]
  - Explain: arithmetic operator - (minus)

  -----------------------------

    3.8
  [-true]
  [-true]
  - Value: -1
  - Explain: unary negation operator for Data Type boolean



*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000

console.log(++g * ++e + -d + ++f); // 173

// ------------------------------------------------Tasks-----------------------------------------------------

// -------------------------------------------------------------------------1

// Replace ? With Arithmetic Operators
console.log(10 * 20 - (15 % 3) + 190 + 10 - 400); // 0

// -------------------------------------------------------------------------2

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + num / +true); // 6

// Soultion Three
console.log(num + num * +true); // 6

// Soultion Four
console.log((num += num)); // 6

// Solution Five
console.log(num * +true); // 6

// Solution Six
console.log(num / +true); // 6

// -------------------------------------------------------------------------3

let nums = "10";

// Solution One
console.log(+nums + +nums); // 20

// Solution Two
console.log(Number(nums) + Number(nums)); // 20

// Solution Three
console.log(+nums + +nums * +true); // 20

// Solution Four
console.log(+nums + +nums / +true); // 20

// ---------------------or-----------------------
// Solution One
console.log(nums * (true + true)); // 20

// Solution Two
console.log(+nums + +nums); // 20

// Solution Three
console.log((nums * nums) / (nums / (true + true))); // 20

// Solution Four
console.log((nums *= true + true)); // 20

// -------------------------------------------------------------------------4

let points = 10;

// Write Your Code Here
points = points + +true + +true + +true;

console.log(points); // 13

// Write Your Code Here
points = points - true - true - true - true - true;

console.log(points); // 8;
