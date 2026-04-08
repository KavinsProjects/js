// Map is object
//new Map();  -create n map
//map.set(key, value) – stores the value by the key.
//map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//map.has(key) – returns true if the key exists, false otherwise.
//map.delete(key) – removes the element (the key/value pair) by the key.
//map.clear() – removes everything from the map.
//map.size – returns the current element count.




let map = new Map();
map.set('ch2',"code with kavin")
    .set(2,"kavin has AMG One car")
    .set(3,"I bought new Land in moon")
    .set(4,"temp ");

console.log(map);
console.log(typeof map);
console.log(map.get(3 )); 
console.log(map.get(7)); //undenfined
console.log(map.has(6)); //eturns true if the key exists, false otherwise.
console.log(map);
console.log(map.delete(4));//removes the element (the key/value pair) by the key.
console.log(map);
console.log(map.clear());//removes everything from the map.
console.log(map);
console.log(map.size);


for(key of map.keys()){ //print key only
    console.log(key);
}

for(key of map.values()){ //it print vlaues only
    console.log(map);
}

for(key of map){
    console.log(map);
}


let greets = new Map();

greets .set("users1", "Kavin")
       .set("user2" ,"Arun");

console.log("hello " + greets.get("users1"));
console.log("hello "+ greets.get("user2"));


let double = new Map();
    double.set(1)
          .set(2)
          .set(3)
          .set(4);
console.log(`${double.get(1)}`*2);
console.log(`${double.get(2)}`*2);
console.log(`${double.get(3)}`*2);
console.log(`${double.get(4)}`*2);


let numbers = [1,2,3,4,5];

let doub = numbers.map(num => num *2);
console.log(doub);


let task = [1,2,3,4,5];

let muilt =task.map(num=>num-6);
console.log(muilt);