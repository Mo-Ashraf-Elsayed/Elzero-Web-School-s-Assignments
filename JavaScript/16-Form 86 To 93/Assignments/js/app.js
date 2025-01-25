// ------------------------------------------------ No Challenge----------------------------------------------

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let one = document.querySelector("#elzero");
let two = document.querySelector(".element");
let three = document.querySelector('[name= "js"]');
let four = document.querySelector("div");
let five = document.querySelectorAll("#elzero")[0];
let six = document.querySelectorAll(".element")[0];
let seven = document.querySelectorAll('[name= "js"]')[0];
let eight = document.querySelectorAll("div")[0];
let nine = document.getElementById("elzero");
let ten = document.getElementsByClassName("element")[0];
let eleven = document.getElementsByTagName("div")[0];
let twelve = document.body.children[0];
let thirteen = document.body.childNodes[0];
let fourteen = document.body.firstChild;
let fifteen = document.body.firstElementChild;
console.log(thirteen);

//-----------------------------2
let imgs = document.querySelectorAll('[decoding="async"]');
for (let i = 0; i < imgs.length; i++) {
  document.images[i].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
  document.images[i].style.backgroundColor = "black";
}

//-----------------------------3

let input$ = document.querySelector('[name = "dollar"]');
let divResult = document.querySelector(".result");
document.forms[0].onsubmit = function (e) {
  e.preventDefault();
};

document.forms[0].oninput = function () {
  let pound = parseFloat(input$.value * 15.6).toFixed(2);
  let dollor = input$.value;
  divResult.textContent = `{${dollor}} USD Dollar = {${pound}} Egyptian Pound`;
};
//-----------------------------4
let divOne = document.querySelector("div.one");
let divTwo = document.querySelector("div.two");
let divsLength = document.querySelectorAll(".task4").length;
let twoText = divOne.textContent + " " + divsLength;
let oneText = divTwo.textContent;
let titleOne = divTwo.getAttribute("title");
let titleTwo = divOne.getAttribute("title");

divOne.title = titleOne;
divTwo.title = titleTwo;
divOne.textContent = oneText;
divTwo.textContent = twoText;

//-----------------------------5

let imgs2 = document.querySelectorAll('[decoding="async2"]');
for (let i = 0; i < imgs2.length; i++) {
  if (imgs2[i].hasAttribute("alt")) {
    imgs2[i].setAttribute("alt", "Old");
  } else {
    imgs2[i].setAttribute("alt", "Elzero New");
  }
}

//-----------------------------6

let eleNum = document.querySelector('[name="elements"]');
let eletext = document.querySelector('[name="texts"]');
let eletype = document.querySelector('[name="type"]');
let resaultLast = document.querySelector(".resultsLast");

document.forms[1].onsubmit = function (ele) {
  ele.preventDefault();
  // to make the result div empty on click on create
  while (resaultLast.hasChildNodes()) {
    resaultLast.removeChild(resaultLast.firstChild);
  }
  //-------or
  //   resaultLast.innerHTML = "";
  for (let i = 0; i < Number(eleNum.value); i++) {
    let eleText = document.createTextNode(eletext.value);
    let elements = document.createElement(eletype.value.toLowerCase());
    elements.className = "box";
    elements.title = "Element";
    elements.id = `id-${i + 1}`;
    elements.appendChild(eleText);
    resaultLast.appendChild(elements);
  }
};
