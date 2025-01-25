// -------------------------------------------- Arrow Function Challenge--------------------------------------

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

/*
 let names = function (...arr) { 
   // Parameter ?
   return  `String [${arr.join("],[")}] => Done !`;
 };
 */

let names = (...arr) => `String [${arr.join("],[")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

/*  
  let myNumbers = [20, 50, 10, 60];
  
  let calc = (one, two, ...nums) => one+two+parseInt(nums);
  
  console.log(calc(10, 10, 60)); // 80
*/
let myNumbers = [20, 50, 10, 60];

function calc(one, two, ...nums) {
  return one + two + parseInt(nums);
}

console.log(calc(10, 10, 60)); // 80

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/JjzmEdM}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1
// zName = a.slice(0,a.indexOf(" ")+1)+a.slice(a.indexOf(" ")+1,a.indexOf(" ")+2).toUpperCase()+'.'

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    if (zName.includes(" ")) {
      zName =
        zName.split(" ")[0] + " " + zName.split(" ")[1][0].toUpperCase() + ".";
      // zName = a.slice(0,a.indexOf(" ")+1)+a.slice(a.indexOf(" ")+1,a.indexOf(" ")+2).toUpperCase()+'.'
      return zName;
    } else {
      return zName;
    }
  }
  function ageWithMessage() {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

// Hello Ahmed A., Your Age Is 32, You Live In SY

//-----------------------------2

function itsMe() {
  return `Iam A Normal Function`;
}

let itsMeBySolution = (_) => `Iam A Normal Function BySolution`;

console.log(itsMe()); // Iam A Normal Function

console.log(itsMeBySolution()); // Iam A Normal Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

let urlCreateBySolution = (protocol, web, tld) =>
  `${protocol}://www.${web}.${tld}/BySolution`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log(urlCreateBySolution("https", "elzero", "org")); // https://www.elzero.org

//-----------------------------3

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

let checkerBySolution = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary} BySolution`
    : `Iam Not Avaialble BySolution`;

console.log(checkerBySolution("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerBySolution("Ahmed")("Not Available")()); // Iam Not Avaialble

//-----------------------------4

function specialMix(...data) {
  // Your Code Here
  let a = data;
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(a[i]);
    if (Number.isNaN(data[i]) == true) {
      data[i] = 0;
    }
    result += data[i];
  }
  if (result === 0) {
    result = "All Is Strings";
  }

  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
