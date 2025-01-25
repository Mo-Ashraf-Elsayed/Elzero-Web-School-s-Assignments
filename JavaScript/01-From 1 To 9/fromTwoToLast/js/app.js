document.write('<h1>Mohammed</h1>');
document.querySelector('h1').style.color='blue';
document.querySelector('h1').style.fontWeight='bold';
document.querySelector('h1').style.fontSize='80px';
document.querySelector('h1').style.fontFamily='Arial';
console.log('%cMohammed %cAshraf %cElsayid','color:red','color:green','background-color:blue;color:white;');
console.group("Group 1");
console.log('Message one');
console.log('Message two');
console.group("Child Group");
console.log('Message one');
console.log('Message two');
console.group("Grand Child Group");
console.log('Message one');
console.log('Message two');
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log('Message one');
console.log('Message two');
console.groupEnd();
console.table(['Mohammed','Ahmed','Sameh','Gamal','Aya']);


/*console.log("Iam In Console");
document.write("Iam In Page");*/

// console.log("Iam In Console");
// document.write("Iam In Page");