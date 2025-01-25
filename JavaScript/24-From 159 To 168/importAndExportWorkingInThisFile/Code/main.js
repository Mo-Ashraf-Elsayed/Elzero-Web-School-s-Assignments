
// ---------------------- if you want to see code result margin code and see the other and turn on live server

// -----------------------------------------------------Video (167)--------------------------------------------
/*
  Modules
  - Import And Export
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//   return `Something`;
// }

// export { a, arr, saySomething };

// -----------------------------------------------------Video (168)--------------------------------------------

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

let a2 = 10;
let arr2 = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a2 as myNumber, arr2, saySomething };

export default function () {
  return `Hello`;
}