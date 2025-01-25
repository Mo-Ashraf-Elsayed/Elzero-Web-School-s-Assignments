// -------------------------------------------------Loop Challenge--------------------------------------------

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", , "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let counter = 1;
if (myAdmins.includes("Stop")) {
  myAdmins.splice(myAdmins.indexOf("Stop"));
  // myAdmins.length = myAdmins.indexOf("Stop");
}

document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`
    The Admin For Team ${i + 1} Is ${myAdmins[i]}
  <h3>Team Members:</h3>
    `);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i].charAt(0) !== myEmployees[j].charAt(0)) {
      continue;
    }
    document.write(`</p>- ${counter++} ${myEmployees[j]}</p>`);
  }
  document.write(`</div>`);
  counter = 1;
}
// url in codepen.io  {https://codepen.io/mqinovbp-the-lessful/pen/gOEBgYq}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter1 = 0;

while (index < friends.length) {
  if (
    typeof friends[index] !== "number" &&
    friends[index].indexOf("A") !== +false
  ) {
    console.log(`"${++counter1} => ${friends[index]}"`);
  }
  index++;
}

// Output
("1 => Sayed");
("2 => Mahmoud");
