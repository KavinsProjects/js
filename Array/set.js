/*
//set which automatically removes duplicate values.
The Set will only keep unique values:
*/


let set = new Set();

set.add ('kavin')
    .add('sahron')
    .add(12);

// console.log(set);
// set.delete(1); //delete
// console.log(set.has(1)); // returns true if the key exists, false otherwise.
// console.log(set.size);

// set.clear();
// console.log(set);

for (set of set){
    console.log(set);
}

//ex

let number = new Set();
number.add(7)
      .add(5)
      .add(6)
      .add(3)
      .add(4) 
      .add(2)
      .add(1)
      .add(9)
      .add(8)
      .add(0);

console.log(number.size); //size


//removeing the duplicate 

let dup = new Set();

dup.add(1)
    .add(2)
    .add(2)
    .add(3)
    .add(3) 
    .add(3)

console.log(dup);

let setUnqName = new Set();

setUnqName.add("kavin")
          .add("Aurn")
          .add("kavin")
          .add("Vijay");

    console.log(setUnqName);


let games = new Set();

games.add("f1")
     .add("foodball")
     .add("Tennis")
     .add("f1");
    
console.log(games);


