// ------------------------------------------------- No Challenge ---------------------------------------------------

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

//-----------------------------2

let start1 = 10;
let end1 = 0;
let stop = 3;

for (let i = start1; i > end1; i--) {
  if (i < 10) {
    console.log(0, i);
    // console.log(`0${i}`);
  } else {
    console.log(i);
  }
  if (i === 3) break;
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

//-----------------------------3

let start2 = 1;
let end2 = 6;
let breaker = 2;
for (let i = start2; i <= end2; i++) {
  console.log(i);
  console.log(`--`, breaker);
  console.log(`--`, breaker * breaker);
}

//console.log(`${start3} \n -- ${breaker} \n -- ${anotherBreaker}`)

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

//-----------------------------4

let index = 10;
let jump = 2;

for (;;) {
  if (index <= jump) break;
  console.log(index);
  index -= jump;
}

// Output
// 10
// 8
// 6
// 4

//-----------------------------5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
console.log(letter.indexOf(letter));
for (let i = letter.indexOf(letter); i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase()) === false) {
    console.log(`"${i} => ${friends[i]}`);
  }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

//-----------------------------6

let start4 = 0;
let swappedName = "elZerO";
let swappedNameArr = swappedName.split("");

for (let i = start4; i < swappedNameArr.length; i++) {
  if (swappedNameArr[i] === swappedNameArr[i].toUpperCase()) {
    swappedNameArr[i] = swappedNameArr[i].toLowerCase();
  } else if (swappedNameArr[i] === swappedNameArr[i].toLowerCase()) {
    swappedNameArr[i] = swappedNameArr[i].toUpperCase();
  }
}
swappedName = swappedNameArr.join("");
console.log(swappedName);

// Output
// "ELzERo"

//-----------------------------7

let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (start5++; start5 < mix.length; start5++) {
  if (typeof mix[start5] === "string") continue;
  console.log(mix[start5]);
}
// -----------or----------

// for (let i = ++start5; i < mix.length; i++) {
//     if (typeof mix[i] === "string") continue;
//     console.log(mix[i]);
//   }

// Output
// 2
// 3
// 4
