// const str = "hello world";

// const reversed = str.split(' ')              
//   .map(word => word.split('').reverse().join('')) 
//   .join('');                                  

// console.log(reversed); 


// class Students{
//   constructor(name, age, marks){
//       this.name = name;
//       this.age = age;
//       this.marks = marks;
//   }

//   displayall(){
//     console.log(`${this.name}`);
//     console.log(`${this.name} and this marks is ${this.marks}`);
//   }
// }
// const printing = new Students("kavin", 17, [74,89,50]);

// printing.displayall();




/*Create a class Book with:

title
author
price

👉 Create 2 objects and print all details.
*/

class Books{
  constructor(title, author, price){
      
      this.title = title;
      this.author = author;
      this.price = price
  }

  displayBookdel(){

    console.log(`The Book name is ${this.title} written by ${this.author} and price is $ ${this.price}`);
  }
}


let getbooks = new Books("Rich Dada Poor dada", "Robert Kiyosaki and Sharon Lechter", 450);

getbooks.displayBookdel()


/*
Car Class

Create a class Car with:

brand
model
year

👉 Create one object and print:

Toyota Corolla 2022
*/

class Car{
  constructor(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }


  letsdisplya(){
    console.log(`${this.brand} ${this.model} ${this.year}`);
  }
}

const cardata = new Car("Toyota", "Coralla", 2022);

cardata.letsdisplya();

/*
6. Simple Bank Account

Create a class Account with:

name
accountNumber
balance

👉 Create one object and print:
*/

class Accountnum {
  constructor(name,accountNumber,blance){
    this.name = name;
    this.accountNumber = accountNumber;
    this.blance = blance;

  }

  letsCheck(){
    console.log(`${this.name} has ₹ ${this.blance} in account ${this.accountNumber}`);
  }
}

let checking = new Accountnum("kain", 12345, 5000);

checking.letsCheck();