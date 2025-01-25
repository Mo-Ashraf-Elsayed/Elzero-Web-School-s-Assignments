// ------------------------------------------------ No Challenge ---------------------------------------------

// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1

let ourVa = prompt('Print Number From – To','5-20');

function loopingPromptNumbers(){
    let newOurVa = ourVa.split("-");
    if(parseInt(newOurVa[0]) > parseInt(newOurVa[1])){
        newOurVa.reverse()
    }
    for(let i = parseInt(newOurVa[0]); i <= parseInt(newOurVa[1]); i++){
        document.write(`<div>${i}</div>`)
    }
    
    
}

loopingPromptNumbers()

//-----------------------------2

let thePopupDiv = document.querySelector('.our-div');
let buttonClose = document.querySelector('.close-button');

setTimeout(function(){
    thePopupDiv.style.display = 'block';
},5000);

function popupCloseButton(){
    thePopupDiv.style.display = 'none';
};

//-----------------------------3

// let divCounter = document.getElementById('task-three');
// let funCount = setInterval(function(){
//     divCounter.textContent -=1;
//     if(divCounter.textContent <= '0'){
//         clearInterval(funCount);
//     }
// },1000)

//-----------------------------4

// let divCounter2 = document.getElementById('task-three');
// let funCount2 = setInterval(function(){
//     divCounter2.textContent -=1;
//     if(divCounter2.textContent <= '0'){
//         clearInterval(funCount2);
//         location.href = `https://elzero.org`
//     }
// },1000)

//-----------------------------5

let divCounter3 = document.getElementById('task-three');
let funCount3 = setInterval(function(){
    divCounter3.textContent -=1;
    if(divCounter3.textContent <= '5'){
        window.open('https://elzero.org','','width=500,height=500,top=50,left=1000')
    }
    if(divCounter3.textContent <= '0'){
        clearInterval(funCount3);
    }
},1000)