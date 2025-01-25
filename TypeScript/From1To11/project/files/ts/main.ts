//--------------------------------1

//--------------------------------2
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

//--------------------------------3
function printInfo(
  valueOne: number | string,
  valueTwo: number | string
): string {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

//--------------------------------4

let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [1, [true, false], ["A", ["B", "C", 2]]];

//--------------------------------5

// This task its solution in (tsconfig.json) :
// 1 => {"noImplicitAny": true,} make it false and delete the comment  (line 87)
// 2 => {"noUnusedLocals": true,}  delete the comment  (line 87)
// 3 => {"noUnusedParameters": true,}  delete the comment  (line 87)
// 4 => {"allowUnreachableCode": true,}   make it false and delete the comment  (line 150)

function reportErrors(username, age: number) {
  let rank = "Professor";
  return `Username: ${username}`;
  console.log("We Will Not Reach Here");
}

console.log(reportErrors("Elzero", 40));

//--------------------------------6
let nothing: string;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c: string) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined, undefined, theName)); // Elzero

//--------------------------------7

function showMsg(user?: string, age?: number | string, country?: string) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));

//--------------------------------8

// Write The Function Here
function printInConsole(...arr: any[]) {
  for (let i = 0; i < arr.length; i++) {
    // return arr[i];
    if (typeof arr[i] === "string") {
      console.log(`The Value Is ${arr[i]} And Type Is ${typeof arr[i]}`);
    }
    if (typeof arr[i] === "boolean") {
      console.log(`The Value Is ${arr[i]} And Type Is ${typeof arr[i]}`);
    }
    if (typeof arr[i] === "number") {
      console.log(`The Value Is ${arr[i]} And Type Is ${typeof arr[i]}`);
    }
  }
  return `Done`;
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
