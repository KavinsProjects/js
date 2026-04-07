//for loop
//while loop
//do...while loop 
//forEach() method
////for...of loop
//for...in loop

for(let i = 1; i<=10; i+=1){  
        console.log("hello");
        //console.log(i);

}

for(var index = 10; index>=0; index-- ){
    console.log(index);
}console.log("Happy Birhtday kavin");
console.log(index);

for(let i = 10; i>=0; i--){
    console.log(`${i}-Liftofff`);
}

for(var i=1; i <=20; i++){
    if(i ==13 ){
        continue;
    }else{
        console.log(i)
    }
    
}

for (let i=0; i <100; i++){
    if(i % 2 == 0){
        console.log(`${i} - evevnt`);
    }else{
        console.log(` ${i} - odd`);
    }

}

//tables
let i ,x;
for (i=1; i<=10; i++){
    for(x =1; x <=10; x++){
        console.log(`${i} * ${x} = ${i*x} `);
    }
}