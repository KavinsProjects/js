//array
//array can hold different datatypes in js
// finding  the length of array 
// //assecessing with index value 

// const myarry = ["lamborhini", "AMG One", "Proches","Mclaren "];
// const tripvist = ["ooty", "12", 90.0, "",true ];
// const numbers = [1, 5, 10, 15, 20];

// console.log(typeof myarry);
// console.log(numbers);

// console.log(myarry[0]); //print lam

// //console.log(`the lenght of give array is .${tripvis.}`);
// console.log(tripvist.length);
// const lasttipt = tripvist[tripvist.length -1];
// console.log(lasttipt);

// //changing iteams in array

// tripvist[1] = "varanasi";
// console.log(tripvist);

// //adding the array 
// tripvist.push

//array is object 
const myfavFood = ["rice", "noodels", "cake", "eggPuff","lemonRice"];

//acessing the total values
console.log(typeof myfavFood);

console.log(myfavFood[1]); //noodels
console.log(myfavFood[8]); // if values is not present it gives undenfined

//to find length
lengtht = myfavFood.length;
console.log(lengtht);

console.log(myfavFood[myfavFood.length-1]);

//array hold muilt array

const needExplore = ["German", "Swiss", "Norway", true, false, 33,["shurthi", "janani shree"]];

//console.log(needExplore);
console.log(needExplore[6][1]);

//2d array
let matrix = [ [1,2,3], 
               [4,5,6], 
               [7,8,9]
];

console.log(matrix[1][1]);
console.log(matrix[2][2])


//array methods
let abc = ['a','b','c','d','e','f','g'];
//push - add the element at last 
abc.push("kavin");
console.log(abc);

//pop - remove element at end
abc.pop("kavin");
abc.pop("abi");
console.log(abc);


//shift
//unshift
