/*

 constructor = special method for defining the
                         properties and methods of objects


    Syntax

    funtion funName(para, para2){

        this.para = para
    }
    cosnt var1 = new funName(pass the values for para ,para2)
*/


function Cars (Brand, year, type, color){
    this.Brand = Brand,
    this.year = year,
    // this.{};
    this.type = type,
    // this return();
    this.color = color,
    this.drive = function(){
        console.log(`you drive the ${this.Brand}`)
    }
}

const mycar1 = new Cars("Lambohini", 2019, "pertrol", "green");
const mycar2 = new Cars("AMG One",2020, "petrol", "red");



console.log(typeof (Cars));
console.log(mycar1);

//property of car1
console.log(`my car is ${mycar1.Brand}`);
console.log(`my car year is ${mycar1.year}`);
console.log(`my car type is ${mycar1.type}`);
console.log(`my car colour is  ${mycar1.color}`);


mycar1.drive();

//parc

function House(fan, Ac, Tv, pc, laptop){
    this.FanOne = fan,
    this.poolAc = Ac,
    this.sonyTv = Tv,
    this.computer = pc,
    this.Ammalaptop = laptop 
    this.people = function(){console.log(`My Hosue we have ${this.FanOne}`)}
};

const houseOne  = new House("FreeFan", "coolAC", "Sony 53.ich","Nvidia","AsusROG");

console.log(houseOne.FanOne);
console.log(houseOne.computer);
console.log(houseOne.poolAc);
console.log(houseOne.sonyTv);

houseOne.people();