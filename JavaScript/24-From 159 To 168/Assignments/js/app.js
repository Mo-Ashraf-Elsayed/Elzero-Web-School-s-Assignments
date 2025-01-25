// ------------------------------------------------ NO Challenge----------------------------------------------

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let birthday = new Date('Aug 3 99');
let unix = new Date();
let timeNow = Date.now();
let age = timeNow - birthday;
// console.log(age/1000);
console.log(`${Math.trunc(age/1000)} Seconds`);
console.log(`${Math.trunc(age/1000/60)} Minutes`);
console.log(`${Math.trunc(age/1000/60/60)} Hours`);
console.log(`${Math.trunc(age/1000/60/60/24)} Days`);
console.log(`${Math.trunc(age/1000/60/60/24/30)} Months`);
console.log(`${Math.trunc(age/1000/60/60/24/30/12)} Years`);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

//-----------------------------2

let date = new Date("1980-01-01T00:00:01");
console.log(date);

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

//-----------------------------3

let date2 = new Date('2022-04-30T18:13:20');
let arrMonthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
let monthOfDate = arrMonthes[date2.getMonth()];
let dayOfDate = date2.getDate();

console.log(date2);
console.log(`Previous ${monthOfDate} Is April And Last Day Is ${dayOfDate}`);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

//-----------------------------4

let birthday2 = new Date('1999-08-03T00:00:00');
let birthday3 = new Date(1999,7,3,0,0,0);
let birthday4 = new Date(Date.parse("Aug 3 99"));
console.log(birthday2);
console.log(birthday3);
console.log(birthday4);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

//-----------------------------5
let timeONe = performance.now()
// for(let i = 0; i <= 99999; i++){
//     console.log(i)
// }
let timeTwo = performance.now()
console.log(`Loop Took ${Math.trunc(timeTwo-timeONe)} Milliseconds`)
// Needed Output

// "Loop Took 1921 Milliseconds."

//-----------------------------6

// Write Your Generator Function Here
function* gen(){
    let i = 140;
    let j = 14;
    while(true){
      yield j;
      j+=i
      i+=200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

//-----------------------------7

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
  function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
  }
  
  let generator2 = genAll();
  
  console.log(generator2.next()); // {value: 1, done: false}
  console.log(generator2.next()); // {value: 2, done: false}
  console.log(generator2.next()); // {value: 3, done: false}
  console.log(generator2.next()); // {value: 4, done: false}
  console.log(generator2.next()); // {value: 5, done: false}
  console.log(generator2.next()); // {value: "A", done: false}
  console.log(generator2.next()); // {value: "B", done: false}
  console.log(generator2.next()); // {value: "C", done: false}
  console.log(generator2.next()); // {value: "D", done: false}

  //-----------------------------8

  // the task in the folder(importAndExportWorkingInThisFile) 