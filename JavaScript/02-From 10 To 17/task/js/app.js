// --------------------------------------- Variable And Concatenation Challenge-------------------------------------

/*
  Variable And Concatenation Challenge
*/

let theTitle = "Elzero",
  theDescription = "Elzero Web School",
  theDate = "25/10";

let card = `
<div>
<h3>${theTitle}</h3>
<p>${theDescription}</p>
<span>${theDate}</span>
</div>
`;

document.write(card.repeat(4));

/*
        the link for codepen
        https://codepen.io/mqinovbp-the-lessful/pen/rNRLMYZ
*/

//----------------------------------------1
let numberOne = 10;
let numberTwo = 20;

// Add Variables Here

// Ouput
console.log(numberOne.toString() + numberTwo.toString()); // Normal Concatenate => 1020
console.log(typeof (numberOne + numberTwo).toString()); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/
//----------------------------------------2

//The solution on HTML file
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//----------------------------------------3

/* `I'm In
 \\
 Love \\ """ '''
 ++ With ++
 \"""\"""
 ""JavaScript""``
*/

console.log(
  '`I\'am In \n \\\\ \n Love \\\\ """ \'\'\' \n ++with++ \n \\"""\\""" \n""javascript""``'
);
//----------------------------------------4

let a = 21;
let b = 20;

let c = a.toString();
let d = b.toString();
let e = c + d + "_";

console.log(`_${a}_${e.repeat(4)}_${b}`); // _21_2021_2021_2021_20_

// -------------------- or ------------

let aa = 21;
let ba = 20;
let baa = "_" + ba.toString() + aa.toString();

console.log(`_${aa}${baa.repeat(4)}_${ba}_`); // _21_2021_2021_2021_20_
