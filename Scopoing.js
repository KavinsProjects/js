/*
variable scope = where a vara

*/

funtion1();
function2();

function funtion1(){
    let x = 1;
    console.log(y);
}

function function2(){
    let y = 2;
    console.log(x);
}


let x = 4;
funtion1();
function funtion1(){
    console.log(x);
}

function funtion2(){
    console.log(x);
}
