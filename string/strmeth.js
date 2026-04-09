/*
  .charAt() // print indexValue 
  .indexOf() // 
  .length;
  .toUpperCase // chanage into uppercase
  .toLoweCase /
  .repate(pass how may times)
  .replaceAll
  //padStart (12,"0") first vlaues say that 
*/

let mykanin = "name";

console.log(mykanin.charAt(0)); // print the index values
console.log(mykanin.indexOf("a")); // print the index place
console.log(mykanin.lastIndexOf("e")); //print the last values and index value
console.log(`the toatl len ${mykanin.length}`);

//

const f1Player = "maxverstappen";
f1 = f1Player.toUpperCase(); // it remove the whitespace before and after 
console.log(`${f1}`);
console.log(typeof f1);
console.log(f1)

let playeris = "MAfeef"
player = playeris.repeat(3);
console.log(player);

let phonenumber = "23-467-654-67";

phonenumber = phonenumber.replaceAll("-","");
console.log(phonenumber);

phonenumber = phonenumber.padStart(12,"9") ;
console.log(phonenumber);

phonenumber = phonenumber.padEnd(12,"0") ;
console.log(phonenumber);

