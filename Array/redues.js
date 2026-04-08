
// .reduce() = reduce the elements of an array
//                     to a single value    


const prices = [12, 900,560,340,];

const totalPrice = prices.reduce(sum);
console.log(totalPrice);


function sum (acc, nextindex){
    return acc + nextindex;
}

const grade = [55,67,89,90,100];

let maxGrade =grade.reduce(max);
console.log(maxGrade);

function max (accumalote, nexele){
    return Math.min(accumalote, nexele);
}



