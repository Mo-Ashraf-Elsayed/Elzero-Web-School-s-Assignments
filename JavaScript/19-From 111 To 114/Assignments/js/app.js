// ------------------------------------------------ BOM Challenge---------------------------------------------
let input = document.querySelector('.input');
let tasks = document.querySelector('.tasks');
let buttonAddTask = document.querySelector('.add');
let form = document.querySelector('.form');
let num = 1633596700000;



// console.log(JSON.stringify(ourObject))



// let ourObjectToString = JSON.stringify(ourObject);  


function addTask(){
    
    if(input.value !== ''){
        let divTask = document.createElement('div')
        divTask.className = 'task-from-input';
        let task = document.createElement('div');
        let deleteTask = document.createElement('button');
        deleteTask.className = 'btn-delete';
        let taskText = document.createTextNode(input.value);
        deleteTask.innerHTML = 'Delete';
        let ourObject = {
            id: num+Math.floor(Math.random()*9999),
            title: input.value
        }
        task.append(taskText);
        divTask.prepend(task);
        divTask.append(deleteTask);
        tasks.appendChild(divTask);
        emArray.push(JSON.stringify(ourObject));
        window.localStorage.setItem('tasks',emArray);
        
        input.value = '';
    }
    
};
function deleteTasks(){
    for(let i = 0; i < document.querySelectorAll('.btn-delete').length; i++){
        document.querySelectorAll('.btn-delete')[i].onclick = function(){
            document.querySelectorAll('.btn-delete')[i].parentElement.remove()
        }
        
    }
}

buttonAddTask.addEventListener('click',addTask);
document.addEventListener('click',deleteTasks);

// url in codepen.io {https://codepen.io/mqinovbp-the-lessful/pen/jOROEZZ}


// // console.log(Math.floor(Math.random()*9000));
// window.localStorage.clear()



// -----------------------------------------------------Tasks-------------------------------------------------

//-----------------------------1
let fontFamily = document.getElementById('font-family');
let fontColor = document.getElementById('font-color');
let fontSize = document.getElementById('font-size');
console.log(fontColor.value);
console.log(fontFamily.value);
console.log(fontSize.value);

document.forms[0].onsubmit = function(e){
    if(fontFamily.value === 'Open'){
        window.localStorage.setItem('fontFamily','"Open Sans", sans-serif;');
    }
    else {
        window.localStorage.setItem('fontFamily',`"${fontFamily.value}" , sans-serif`);
    }
    window.localStorage.setItem('fontColor',`${fontColor.value.toLowerCase()}`);
    window.localStorage.setItem('fontSize',`${fontSize.value}px`);
    document.body.style.fontFamily = window.localStorage.getItem('fontFamily');
    document.body.style.backgroundColor = window.localStorage.getItem('fontColor');
    document.body.style.fontSize = window.localStorage.getItem('fontSize');

    
    e.preventDefault()
}
document.body.style.fontFamily = window.localStorage.getItem('fontFamily');
document.body.style.backgroundColor = window.localStorage.getItem('fontColor');
document.body.style.fontSize = window.localStorage.getItem('fontSize');

//-----------------------------2

let valueOne = document.getElementById('input-one-in-sessinoStorage');
let valueTwo = document.getElementById('input-two-in-sessinoStorage');
let valueThree = document.getElementById('input-three-in-sessinoStorage');
let valueFour = document.getElementById('select-in-sessionStorage');

valueOne.oninput = function(){
    window.sessionStorage.setItem('valueOne',valueOne.value);
    // valueOne.value = window.sessionStorage.getItem('valueOne');
}
valueTwo.oninput = function(){
    window.sessionStorage.setItem('valueTwo',valueTwo.value)
    // valueTwo.value = window.sessionStorage.getItem('valueTwo');
}
valueThree.oninput = function(){
    window.sessionStorage.setItem('valueThree',valueThree.value);
    // valueThree.value = window.sessionStorage.getItem('valueThree');

}
valueFour.oninput = function(){
    window.sessionStorage.setItem('valueFour',valueFour.value);
    // valueFour.value = window.sessionStorage.getItem('valueFour');
}

valueOne.value = window.sessionStorage.getItem('valueOne');
valueTwo.value = window.sessionStorage.getItem('valueTwo');
valueThree.value = window.sessionStorage.getItem('valueThree');
valueFour.value = window.sessionStorage.getItem('valueFour');