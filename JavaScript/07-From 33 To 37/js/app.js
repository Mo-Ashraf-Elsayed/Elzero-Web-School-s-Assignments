// -------------------------------------------- If Condition Challenge----------------------------------------

/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if (`${st.length + st.length}` === "34") {
  console.log("Good");
}

// W Position May Change
if (st.slice(st.search("W"), st.search("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}
//-------------or--------
// W Position May Change
if (st.slice(st.indexOf("W"), st.indexOf("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

//  codepen.io link ----------------- https://codepen.io/mqinovbp-the-lessful/pen/WNmMPxj

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

// Test Case 1
let num = 9;

if (num < 10) {
  // "009"
  console.log(`00${num}`);
}

// Test Case 2
else if (num > 10 && num < 100) {
  // "020"
  console.log(`0${num}`);
}
// Test Case 3
else if (num >= 100) {
  // "110"
  console.log(num);
} else {
  console.log("undefinded");
}

//-----------------------------2

let num10 = 9;
let str = "9";
let str2 = "20";

if (num10 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num10 == str && typeof num10 != typeof str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num10 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");

//-----------------------------3

let num01 = 10;
let num02 = 30;
let num03 = "30";

if (num03 > num01 && typeof num03 != typeof num01) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
  if (num03 > num01 && num03 == num02 && typeof num03 != typeof num02) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
    if (num03 !== num01 && typeof num03 != typeof num02) {
      console.log(
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
      );
    }
  }
}

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

//-----------------------------4

// Edit What You Want Here

let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;
//----------or-----------

// Edit What You Want Here

let num001 = 25;
let num002 = 1;
let num003 = 25;
let num004 = 70;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
