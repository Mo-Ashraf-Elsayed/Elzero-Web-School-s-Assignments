// let myArr=["Mohammed","Ashraf","Sayid","Abdullah",["MO","Ashraf"]];


// console.log(myArr);

// myArr[2]="Assem";
// myArr[4]=["Yasser","Ebrahim"];


// console.log(myArr);

let num = 100;
let count = 1




for(let i = 0; i < num; i++ ){
    
    let myP = document.createElement('p');
    let myPaText = document.createTextNode('Product Discription '+count);
    let myH2 = document.createElement('h2');
    let myH2Text = document.createTextNode('Product Title '+count);
    count++
    let myDiv = document.createElement('div');
    myDiv.className = 'product';

    myP.appendChild(myPaText);
    myH2.appendChild(myH2Text);
    myDiv.appendChild(myH2)
    myDiv.appendChild(myP);

    document.body.appendChild(myDiv);
}





