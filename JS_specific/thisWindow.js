//

// this typeoff -> object

// console.log(this);           // Window {...}
// console.log(this === window); // true


function greet(){
    console.log(this);
    console.log(this === window);
} 

greet();

"use strict"

function sayHello (){
    console.log(this);
    //dconsole.log(this === window);
}

sayHello();