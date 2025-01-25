// ----------------------------=-----------Random Arguments Function Challenge--------------------------------

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// function showDetails(name,age,hiring){
//     let a = name;
//     let b = age;
//     let c = hiring;

//     for(let i = 0; i < arguments.length; i++){
//         if(typeof arguments[i] === 'string'){
//             a = arguments[i];
//         }else if(typeof arguments[i] === 'number'){
//             b = arguments[i];
//         }else if(typeof arguments[i] === 'boolean'){
//             c = arguments[i];
//             if(c === true){
//                 c=`You Are Available For Hire`
//             }
//             else{
//                 c=`You Are Not Available For Hire`
//             }
//         }

//     }

//     console.log(`Hello ${a}, Your Age Is ${b},${c}`);
// }

function showDetails(name, age, hiring) {
  let a = name;
  let b = age;
  let c = hiring;

  for (let i = 0; i < arguments.length; i++) {
    typeof arguments[i] === "string"
      ? (a = arguments[i])
      : typeof arguments[i] === "number"
      ? (b = arguments[i])
      : typeof arguments[i] === "boolean"
      ? (c = arguments[i])
      : console.log("Unknwon");
    c === true
      ? (c = `You Are Available For Hire`)
      : (c = `You Are Not Available For Hire`);
  }
  console.log(`Hello ${a}, Your Age Is ${b},${c}`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// url in codepen.io  {https://codepen.io/mqinovbp-the-lessful/pen/gOEBgOE}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName} `);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName} `);
  } else {
    console.log(`Hello ${theName} `);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//-----------------------------2

function calculate(firstNum, secondNum, operation) {
  let number;
  if (operation === "add") {
    number = firstNum + secondNum;
  } else if (operation === "subtract") {
    number = firstNum - secondNum;
  } else if (operation === "multiply") {
    number = firstNum * secondNum;
  } else if (operation === undefined) {
    number = firstNum + secondNum;
  } else if (secondNum === undefined) {
    console.log("Second Number Not Found");
  }
  console.log(number);
}

// Another Solution
/*  function calculate(firstNum, secondNum, operation) {
    // let  number;
    if(operation === 'add'){
        console.log( firstNum + secondNum)
    }else if(operation === 'subtract'){
        console.log( firstNum - secondNum)
    }else if(operation === 'multiply'){
        console.log( firstNum * secondNum)
    }else if(secondNum === undefined){
        console.log('Second Number Not Found');
    }else if(operation === undefined){
        console.log( firstNum + secondNum)
    }
    // console.log(number)
  }*/

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//-----------------------------3
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Your Age By Months ${theAge * 12}`);
    console.log(`Your Age By days ${theAge * 12 * 30}`);
    console.log(`Your Age By Hours ${theAge * 12 * 30 * 24}`);
    console.log(`Your Age By Minutes ${theAge * 12 * 30 * 24 * 60}`);
    console.log(`Your Age By Secounds ${theAge * 12 * 30 * 24 * 60 * 60}`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//-----------------------------4

function checkStatus(a, b, c) {
  let name = a;
  let age = b;
  let status = c;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      name = arguments[i];
    } else if (typeof arguments[i] === "number") {
      age = arguments[i];
    } else if (typeof arguments[i] === "boolean") {
      status = arguments[i];
      if (status === true) {
        status = `You Are Available For Hire`;
      } else {
        status = `You Are Not Available For Hire`;
      }
    }
  }
  console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//-----------------------------5

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (startYear; startYear < endYear; startYear++) {
    document.write(`<option value = "${startYear}">${startYear}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//-----------------------------6

function multiply(...args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      args[i] = 1;
    }
    result *= Math.floor(args[i]);
  }
  console.log(result);
  return result;
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
