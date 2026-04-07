//

let number = [2,4,9,0,9,1,5];

let evenumber = number.filter(num => num %2==0) ;
console.log(evenumber);

let users = [
    {name: "kavin",age:20},
    {name: "har",age:30},
    {name: "abi",age:10}
];

let age = users.filter(users=>users.age >= 20);
console.log(age);

