//array Destructuring

// const apl = ['A','B','C','D','E','F'];
// const num = ['1','2','3','4','5','6'];

//Basis Array Destructuring
const [BMW, BENZS, VOLVO] = ["m42005", "AMG ONE", "V40"];

console.log('BMW -' + BMW);
console.log('VOLVO -' + VOLVO);

//Handling with undenfined elements
const [maths, computerScince, Networking] = [99, 100, ];
console.log(Networking); //undefined

//skipping elements
const apl = ['A','B','C','D','E','F'];

let skipping = [,,x,,,y] = apl;
console.log(x); // skipping two elementss
console.log(y);


//Removeing Extra Elements
const [One, Two, Three] = ['1','2','3','4','5','6'];

//let remove = [one ,tow,three ] = num

console.log(One,Two,Three);//we skkiped other numbers

//Default Value
let [kavin] = ["kavin"];
console.log(kavin);

//seting the default value
let [name = "janu"] = [];
console.log(name);

//Rest op
const [one, two, three, ...OtherNumbers] = ['1','2','3','4','5','6'];
// print remaining number as array
console.log(one,two,three, OtherNumbers);


//Swapping Varibles
a = 40;
b = 80;

[a,b] = [b,a];
console.log(`orginal values is A = 40; swaped values ->${a} And orginal values is B = 80; swaped values ->${b}`);

// //Nested array [[]];
// let [onee,twoo,threee,[four,five],] = [1,2,3[4,5],6,7]
// console.log(onee,twoo,threee,four,five);

//Array Destrutting on funtion

let = getNullName = ()=>{
    return ["kavin","janu"];   
}
let [myname, mygirlname] = getNullName();

console.log(myname,mygirlname);


const myfir = [
    ["Abi","kanan","abi@gmail.com"],
    ["para","dhseeh","para@gmail.com"],
];
//console.log(myfir)

for(let [firsName, lastName, emailidi] of myfir){
    console.log(firsName,lastName,emailidi)
}