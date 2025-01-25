// ------------------------------------------Switch And If Condition Challenge--------------------------------

/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// the solution

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(`You are ${job} and your salary is: ${salary}$`);

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money} With Switch Condition`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money} With Switch Condition`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money} With Switch Condition`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money} With Switch Condition`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money} With Switch Condition`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money} With Switch Condition`);
}

// the solution

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money} With if Condition (Solution)`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money} With if Condition (Solution)`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money} With if Condition (Solution)`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money} With if Condition (Solution)`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money} With if Condition (Solution)`);
} else {
  money = 0;
  console.log(`My Money is ${money} With if Condition (Solution)`);
}

//  codepen.io link ----------------- https://codepen.io/mqinovbp-the-lessful/pen/mdoXvre

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuseday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}
