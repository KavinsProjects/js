//synchronous

/*

console.log(" I ");
console.log(" eat ");
console.log(" ice cream ");
console.log(" with a ");
console.log(" spoon ");

*/

console.log(" I ");
console.log(" eat ");

setTimeout(() => {
    console.log("ice cream ") // line is taken out for 4 sec before that other two console.log is printing
},4000)

console.log(" with a ");
console.log(" spoon ");

/*output 
 I 
 eat 
 with a 
 spoon 
ice cream  after 4 sec

*/