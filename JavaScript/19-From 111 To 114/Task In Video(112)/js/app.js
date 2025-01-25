let ulChildren = document.querySelectorAll('li');
let resultEle = document.querySelector('.experiment');

// for(let i = 0; i < document.querySelectorAll('li').length; i++){
//     window.localStorage.setItem(`data-color${i+1}`,document.querySelectorAll('li')[i].getAttribute("data-color"));
//     // window.localStorage.removeItem(`data-color${i+1}`);
// }

ulChildren.forEach(element => {
    element.addEventListener('click',function(){
        ulChildren.forEach(e => {
            e.classList.remove('active')
        })
        window.localStorage.setItem('background-color',element.getAttribute("data-color"));
        window.localStorage.setItem('class','active');
        element.classList.add(window.localStorage.getItem('class'))
        resultEle.style.backgroundColor = window.localStorage.getItem('background-color');
    })
});


if(window.localStorage.getItem('background-color')){
    resultEle.style.backgroundColor = window.localStorage.getItem('background-color');
    ulChildren.forEach(e => {
        e.classList.remove('active')
    })
    document.querySelector(`[data-color = "${window.localStorage.getItem('background-color')}"]`).classList.add('active')
}

//---------------------------------------------The Soulition In The Video (112)------------------------------------------
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color); 
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

// currentTarget => The element what we want to the event on it And this key word like (target) but if we did the event with addEventListener() when we click in the element it will give us the parent existing before in addEventListener()   //  video To explain        https://www.youtube.com/watch?v=8dlKleTwORA
// dataset => If We Have A Custom Attribute And We Want To Access On It