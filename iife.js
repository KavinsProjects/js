/*Immdiately Invoked Funtion Expression */

//Funtion

sayHi()

function sayHi(){
    console.log("supp!!!")
}

//iife

(function(){
    console.log("Hey Kavin's how is your life going");
})();

(function(){
    const userF1 = "max";
    console.log("welcome Max "+userF1);

})();


var a = 3; //Global Scope

(function(){
    var a = 5; //Local Scope Which is used in inside the fun()
    console.log("kavin's fav num is" +a);

})();
console.log(a); 


/*
var let const ->  works;
*/