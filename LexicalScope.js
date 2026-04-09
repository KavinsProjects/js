//
let b =0;
function outer(){
    let a = 10;

    function inner(){
        console.log(a);
        //console.log(b);

        let axy = 90;
    }
    inner();
}


outer();
//console.log(axy);


function addinner() {
    let a = 89, b = 90;
    function totalInner() {
        console.log(a + b);
    }
    totalInner();
}
addinner();

//Scope Chain


let iCanAcess = "I am Gobal one";
function One() {
    let varOne = "Hi i'am varivble one ";

    function two() {
        let twovar = " hi variable two";
        console.log(iCanAcess);
        console.log(varOne);
        console.log(twovar);
    }
    two();
}
One();


const timer = setTimeout(() => {
  console.log("Hi Say Hello akka");
}, 2000);
