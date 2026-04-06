// function greet (){
//     console.log( "Welcome to space");
// }
// greet(); //normal funtion

// /*
// Types of Funtions
//  > . Function Declaration
//  > .. Function Declaration
// */

// add(); // Hoisted can call before declartion
// function add(a,b){
//     return a + b;
// }

// const addd =function(a,b){
//     return a +b;
// } 

// addd();// not hosited

// //arrow fun()

// let isPosstive = (number) => number>0;



function birthday (username, data){
    console.log("hppay birthday to you");
    console.log(`Happy Bithday ${username}, is ${data} years old`);

}
birthday("kavin", 20);

//return
function add(a,b){
    return a + b;
}

function sub(x,y){
    return x -y;
}
console.log(add(12,90));
console.log(`sub for x and y is ${sub}`); // return the entire funtion 
console.log(sub(12, 7));

function isEvent (number){
    if (number % 2==0){
        console.log("It is evenNumber")
    }else{
        console.log("odd num");
    }
}
isEvent(12);

function isValideEmailareNot (email){
    if (email.includes('@')){
        console.log("it is vailde one ") //we also set an bool val
        //retrun true; 
    }else{
        console.log("it is note email")
        //return flase;
    }
}
isValideEmailareNot("kavin@fake.com");

//chatGPT Practice Ques


// function findThreeNum (num){
//     let  num1 = 5,  num2 = 15 , num3 =89;

//     if(num > num1){
//         console.log(`it smalled number ${num1}`);
//     }
//     else if(num > num2)
//     {
//         console.log(`it smalles number${num2}`);
//     }
//     else if(num > num3)
//     {
//         console.log(`it is smallest numbre ${num3}`);
//     }
//     else{
//         console.log("we");
//     }
// }

function revStr(strin){
    return strin.split("").reverse().join("");
}

console.log(revStr("kavin"));