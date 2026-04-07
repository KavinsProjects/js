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
