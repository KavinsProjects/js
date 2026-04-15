/*
use strict 
*/

// "use strict";   

carName = "redbull";
console.log(carName);

function usestrict(){
    
    let y = 3.14;
    console.log(y);
}

// usestrict();



//using the public keyword as variable

function initialize(){
    "use strict"
    let  public = true;
};
initialize();
console.log(public);

//we can't pass the key word as varibel

//passing parameter

'use strict';
function addition (a,b,a){ //When you have a duplicate parameter name, the last value assigned to a wins. So:
    console.log( a + b); //So inside the function, a = 2 and b = 4, giving you 2 + 4 = 6.
}
addition(6,4,2);

//error
//Duplicate parameter name not allowed in this context