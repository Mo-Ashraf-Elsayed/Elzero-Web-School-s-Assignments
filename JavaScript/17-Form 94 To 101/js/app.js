// ------------------------------------------------ DOM Challenge---------------------------------------------

document.body.style.margin = "0";
let header = document.createElement("header");
header.className = `website-head`;
let headerLogoEle = document.createElement("div");
headerLogoEle.className = `logo`;
headerLogoEle.title = `Website Logo`;
let headerLogoText = document.createTextNode("Elzero");
let headerUl = document.createElement("ul");
headerUl.className = `menu`;
let headerLi1 = document.createElement("li");
let headerLi2 = document.createElement("li");
let headerLi3 = document.createElement("li");
let headerLi4 = document.createElement("li");
let headerLi1Text = document.createTextNode("Home");
let headerLi2Text = document.createTextNode("About");
let headerLi3Text = document.createTextNode("Service");
let headerLi4Text = document.createTextNode("Contact");
headerLi1.append(headerLi1Text);
headerLi2.append(headerLi2Text);
headerLi3.append(headerLi3Text);
headerLi4.append(headerLi4Text);
headerUl.append(headerLi1);
headerUl.append(headerLi2);
headerUl.append(headerLi3);
headerUl.append(headerLi4);
header.appendChild(headerUl);
headerLogoEle.appendChild(headerLogoText);
header.prepend(headerLogoEle);
document.body.prepend(header);
header.style.cssText = `display: flex; justify-content: space-between;`;
headerUl.style.cssText = `list-style-type: none; display: flex;`;
headerLi1.style.cssText = `margin: auto 7px; font-size : .8em; color: #74756d`;
headerLi2.style.cssText = `margin: auto 7px; font-size : .8em; color: #74756d`;
headerLi3.style.cssText = `margin: auto 7px; font-size : .8em; color: #74756d`;
headerLi4.style.cssText = `margin: auto 15px auto 7px; font-size : .8em; color: #74756d`;
headerLogoEle.style.cssText = `color: #2ba471; font-size: 1.3em; font-weight: bold; margin: auto 7px`;
/* End Header*/
let section = document.createElement("div");
section.className = `content`;

for (let i = 0; i < 15; i++) {
  let divsProducts = document.createElement("div");
  let TextProducts = document.createTextNode("Product");
  let spanNumProduct = document.createElement("span");
  let numProduct = document.createTextNode(`${i + 1}`);
  divsProducts.className = `produnt`;
  spanNumProduct.prepend(numProduct);
  divsProducts.append(TextProducts);
  divsProducts.prepend(spanNumProduct);
  section.append(divsProducts);

  divsProducts.style.cssText = `border-radius: 5px; background-color: white; width: 32%; margin: .4rem auto; height: 100px; display:flex;flex-direction: column; justify-content: space-around; align-items: center; color:#74756d; font-size: .6em;box-sizing: border-box;padding: 1.3rem 0`;
  spanNumProduct.style.cssText = `font-size: 2.5em; color: black;`;
}
section.style.cssText = `background-color: #ececec; display: flex; flex-wrap: wrap; justify-content: space-around;padding:.4rem `;

header.after(section);
/* End Section*/
let footer = document.createElement("footer");
footer.className = `footer`;
let textFooter = document.createTextNode("Copyright 2021");
footer.append(textFooter);
footer.style.cssText = `text-align: center; background-color: #23a96e; padding: 1rem; color: white; margin: 0 0 3rem 0`;

section.after(footer);

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/dyLyPdP}

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1   => in HTML Page
//-----------------------------2

let addClassesInput = document.querySelector(".classes-to-add");
let removeClassesInput = document.querySelector(".classes-to-remove");
let eleAddAndDeleteClassesFrom = document.querySelector('[title="Current"]');
let result = document.querySelector("h5").nextElementSibling;
console.log(result.hasChildNodes());

function myFunction() {
  result.childNodes.forEach((el) => el.remove());

  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (addClassesInput.value)
      eleAddAndDeleteClassesFrom.classList.add(
        addClassesInput.value.toLowerCase().trim().split(" ")[i]
      );
    if (removeClassesInput.value)
      eleAddAndDeleteClassesFrom.classList.remove(
        removeClassesInput.value.toLowerCase().trim().split(" ")[i]
      );
  }
  this.value = "";

  if (eleAddAndDeleteClassesFrom.classList.length) {
    [...eleAddAndDeleteClassesFrom.classList].sort().forEach((ele) => {
      let newEle = document.createElement("span");
      newEle.textContent = ele;
      result.append(newEle);
    });
  } else result.textContent = "No Classes To Show";
}

addClassesInput.onblur = myFunction;
removeClassesInput.onblur = myFunction;

// addClassesInput.addEventListener('blur',function(){
//     result.children.forEach(el => el.remove())
//     if(addClassesInput.value !== ""){
//         let arr = addClassesInput.value.trim().split(" ")
//         for(let i = 0; i < arr.length; i++){
//             eleAddAndDeleteClassesFrom.classList.add(arr[i].toLowerCase());
//         }

//         addClassesInput.value = '';
//     }else if(addClassesInput.value === ""){
//         addClassesInput.addEventListener('blur',function(e){
//             e.preventDefault();
//         })
//     }

// })

// removeClassesInput.addEventListener('blur',function(){

//     if(removeClassesInput.value !== ""){
//         let arr2 = removeClassesInput.value.trim().split(" ")
//         for(let i = 0; i < arr2.length; i++){
//             eleAddAndDeleteClassesFrom.classList.remove(arr2[i].toLowerCase());
//         }
//         removeClassesInput.value = '';
//         console.log(eleAddAndDeleteClassesFrom.classList.length)
//     }else if(removeClassesInput.value === ""){
//         removeClassesInput.addEventListener('blur',function(e){
//             e.preventDefault();
//         })
//     }

// })

// addClassesInput.addEventListener('blur',createElementsWithClassesNames())
// function createElementsWithClassesNames(){
//     if(eleAddAndDeleteClassesFrom.classList.length !== 0){
//         // result.children.forEach(el => el.remove())
//         for(let j = 0; j < eleAddAndDeleteClassesFrom.classList.length; j++){
//             let ele = document.createElement('span');
//             ele.textContent = eleAddAndDeleteClassesFrom.classList[j];
//             result.append(ele);
//             if(eleAddAndDeleteClassesFrom.classList[j] === ele.textContent){
//                 result.children.forEach(el => el.remove())
//             }
//         }

//     }else{
//         result.innerHTML = 'NonoN'
//     }
// }
console.log(document.querySelectorAll("span"));
//-----------------------------3

let pEle = document.getElementById("task-three");
let divEle = document.querySelector(".our-element");
pEle.remove();

let startDivEle = document.querySelector(".our-element").cloneNode();
startDivEle.className = `start`;
startDivEle.title = `Start Element`;
startDivEle.setAttribute("data-value", "Start");
startDivEle.textContent = `Start`;
divEle.before(startDivEle);
let endDivEle = document.querySelector(".our-element").cloneNode();
endDivEle.className = `end`;
endDivEle.title = `End Element`;
endDivEle.setAttribute("data-value", "End");
endDivEle.textContent = `End`;
divEle.after(endDivEle);

//-----------------------------4

let element1 = document.getElementById("task-four").innerText.split(" ")[1];

console.log(element1);

//-----------------------------5

document.addEventListener("click", function (e) {
  console.log(`This Is ${e.target.tagName}`);
});
