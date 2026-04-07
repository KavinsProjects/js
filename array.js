//array
//array can hold different datatypes in js
// finding  the length of array 
//assecessing with index value 

const myarry = ["lamborhini", "AMG One", "Proches","Mclaren "];
const tripvist = ["ooty", "12", 90.0, "",true ];
const numbers = [1, 5, 10, 15, 20];

console.log(typeof myarry);
console.log(numbers);

console.log(myarry[0]); //print lam

//console.log(`the lenght of give array is .${tripvis.}`);
console.log(tripvist.length);
const lasttipt = tripvist[tripvist.length -1];
console.log(lasttipt);

//changing iteams in array

tripvist[1] = "varanasi";
console.log(tripvist);