
// .reduce() = reduce the elements of an array
//                     to a single value    


// const prices = [12, 900,560,340,];

// const totalPrice = prices.reduce(sum);
// console.log(totalPrice);


// function sum (acc, nextindex){
//     return acc + nextindex;
// }

// const grade = [55,67,89,90,100];

// let maxGrade =grade.reduce(max);
// console.log(maxGrade);

// function max (accumalote, nexele){
//     return Math.min(accumalote, nexele);
// }


//eex

// let sett = [1, 2, 3, 4, 5];

// let overall = sett.reduce(istofindToatl);
// console.log(overall);

// function istofindToatl(indexOne , nextIndex){
//     return indexOne+nextIndex;
// }






let sett = [1, 2, 3, 4];
let otatl = sett.reduce(sbash);
console.log(otatl);
//const sbash=(indexOen, indextwo) => indexOen - indextwo; 
function sbash(indexOen, indextwo){
    return indexOen * indextwo;
}

const maxbro = [10, 5, 25, 8];

let bromax = maxbro.reduce(findMymMax);
console.log(bromax);

function findMymMax(shurthi,jan){
    return Math.max(shurthi, jan);
    //return Math.min(shurthi, jan);
}

const findChar = ["hi", "hello", "hey"];

function count(acc, word) {
    return acc + word.length;
}

let totalLength = findChar.reduce(count, 0);

console.log(totalLength);


// const realword = [
//   { price: 100 },
//   { price: 200 },
//   { price: 50 }
// ];

// let mytoat = realword.reduce(totalofRealWorld);

// function totalofRealWorld (objName , insdie){
//     return realword = objName;
// }

