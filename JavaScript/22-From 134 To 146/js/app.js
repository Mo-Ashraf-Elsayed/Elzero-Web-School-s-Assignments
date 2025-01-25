// ------------------------------------------- Regular Expressions Challenge-----------------------------------

/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'https://www.youtube.com/watch?v=_n_oiZRqH_k&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=146'

let re = /(https?:\/\/)?(www.)?[a-zA-z]{6,7}.(org|com).*/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re)); // Regular Expressions Challenge Video in Elzero Channel

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/YzMPELv}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regex = /\d{4}:[a-z]{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;

// let regex = /\d{4}:[a-z]{2}\d:(\d)\1+:(\d)\1+/g;    => this line what I return for to understand

console.log(ip.match(regex));

//-----------------------------2

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regex2 = /Os\d{0,3}O/g;
// let regex2 = /O\w{0,4}O/g;   Another Soultion
console.log(specialNames.match(regex2));

// Output
// ['Os10O', 'OsO', 'Os100O']

//-----------------------------3

let phone = "+(995)-123 (4567)";

let regex3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(regex3));

//-----------------------------4

let re2 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//  

//-----------------------------5

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re3 = /\d{1,2}(\/|\s)-?\s?\d{1,2}(\/|\s)-?\s?\d{1,4}/g; // Write Pattern Here

console.log(date1.match(re3)); // "25/10/1982"
console.log(date2.match(re3)); // "25 - 10 - 1982"
console.log(date3.match(re3)); // "25 10 1982"
console.log(date4.match(re3)); // "25 10 82"

//-----------------------------6

//--------The Same OF The Regular Expressions Cahllenge--------