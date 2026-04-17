//Object.assign to used combine two objects into one 


// const courses = {
//     naame : "JavaScript",
//     scoree : 56
// };

// const marks = {
//     scoree : 87 // high perfercence
// };

// finalResult = Object.assign(courses, marks, {teacher : "Mr KAvin"});
// console.log(finalResult);
const tagert1 = {A : 1, B : 2, C : 3};
const tagert2 = {D : 4, B : 9, E : 7};

let geto = Object.assign(tagert1, tagert2); // typeOff -> Object
console.log(geto);

console.log(tagert1 === geto);
console.log(typeof (geto));

//Cloning an object

const obj = {a:1};
const   copy = Object.assign({},obj);
console.log(copy);


const myname = {
    name : "kavin",
    hobby : "playing Video Game's",
    roll : "hero"
}

let copycontetn = Object.assign({},myname)
console.log(copycontetn);

//adding extra content

let mee = {
    name : "kavins",
    contry : "india",
    language : "Hindi"
};

let add = Object.assign ({name: " abi", contry : "USA", language: "Tamil" })

console.log(add);