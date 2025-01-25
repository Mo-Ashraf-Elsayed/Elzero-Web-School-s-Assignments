// --------------------------------------------- Destructuring Challenge --------------------------------------

/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let [
  ,
  ,
  {
    title: a,
    age: b,
    available: c,
    skills: [, d],
  },
] = myFriends;

if (chosen === 1) {
  [
    {
      title: a,
      age: b,
      available: c,
      skills: [, d],
    },
    ,
  ] = myFriends;
} else if (chosen === 2) {
  [
    ,
    {
      title: a,
      age: b,
      available: c,
      skills: [, d],
    },
  ] = myFriends;
} else if (chosen === 3) {
  [
    ,
    ,
    {
      title: a,
      age: b,
      available: c,
      skills: [, d],
    },
  ] = myFriends;
} else {
  console.log("The Object Is Undefiend");
}
c ? (c = "Available") : (c = "Not Avilable");
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/KKYKwoo}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a1, , , , e1] = myNumbers;

console.log(a1 * e1); // 5

//-----------------------------2

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a2, b2, c2, [d2, e2, [f2, g2]]] = mySkills;

console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//-----------------------------3

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let newArr = [arr1, arr2, arr3];
// Write Your Destructuring Assignment Here
let [[c3, ,], [, ,], [, a3, b3]] = newArr;
console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//-----------------------------4

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {
  age: a4,
  working: w4,
  country: c4,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

//-----------------------------5

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
const {
  title: t5,
  developer: d5,
  releases: {
    "Oath In Felghana": [u5, j5],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;
//   const {'Oath In Felghana':[u5,j5],'Ark Of Napishtim':{US:u_price,JAP:j_price},Origin:or} = game.releases
const o5 = Object.keys(game.releases)[0];
const a5 = Object.keys(game.releases)[1];
//   const o5 = Object.keys(game.releases)[0];

console.log(`My Favourite Games Style Is ${t5} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d5} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o5} It Released in ${u5} & ${j5}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim

console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a5} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
//   Origin Price Is 30 USD

//-----------------------------6

//--------The Same OF The Distructuring Cahllenge--------
