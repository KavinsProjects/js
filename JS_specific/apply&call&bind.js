/*
Funtion.prototype.call()
Funtion.prototype.apply()
Funtion.prototype.bind()
*/

// function greetName  (firstName, LastName) {
//     return `${firstName} ${LastName}, ${this.mycolor}`; 
// };
//console.log(greetName("kavin","k"));

//Funtion.prototype.call

// const result = greetName.call({mycolor : "yellow"},"kavin","k");    



// const resultOne = greetName.apply(null,"kavin", "k")
// console.log(resultOne);

const num = [1,23,5,6,7,0];

// let results = Math.max(1,23,5,6,7,0); //we can't pass the 
// console.log(results)

// let result = Math.min.apply(null,num); //we can't pass the number dir bczs it is array and use the null the are else it give's Infinity
// console.log(result);

let result = Math.min.bind(null, ...num); //we can't pass the number dir bczs it is array and use the null the are else it give's Infinity
console.log(result); // spilt opr()

console.log(typeof result);

