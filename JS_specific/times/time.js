//                               toool that allows you to measure the time it takes
//                               for a section of code or process to execute
//                               Great for identifying performance "bottlenecks"


/*
console.time(label);        Start the timer
console.timeEnd(label);     Stop and print elapsed time
console.timeLog(label);     Log current elapsed time without stopping

*/

// time taken to the following functions
// used fecting the  data drom api 

console.time("Time Taken To run the code is ");

for(let i=0; i<=100000000; i++){
//Hi
}
     

console.timeEnd("Time Taken To run the code is ");

console.log("_______________________________________________________________________________________");

function loeaddata(){

    console.time("Time Taken To run the code is ");

for(let i=0; i<=100000000; i++){
//Hi
}
     

console.timeEnd("Time Taken To run the code is ");

}

loeaddata();



console.time("total time taken fetch data form ")

await fetch("https://v1.formula-1.api-sports.io/seasons")

console.timeEnd("total time taken fetch data form ");
//this program check the time taken to fetch data form api's