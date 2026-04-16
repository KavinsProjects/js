// const products = [
//   { name: "Laptop", price: 50000, inStock: true },
//   { name: "Mouse", price: 500, inStock: false },
//   { name: "Keyboard", price: 1500, inStock: true },
// ];


// const productisrnot = products.filter(avaiblae=>avaiblae.inStock == true ).map(products => `${products.name} and its price is ${products.price}`);
//  console.log(productisrnot);

// const students = [
//   { name: "Ali", marks: 80, email: "ali@mail.com" },
//   { name: "Sara", marks: 40, email: "sara@mail.com" },
//   { name: "John", marks: 55, email: "john@mail.com" },
// ];

// const goodmark = students.filter(examark => examark.marks> 50).map(studentname=> `${students.name},emai lid is ${students.email}`);
// console.log(goodmark);

const employees = [
  { name: "Ravi", city: "Chennai", street: "Anna Nagar" },
  { name: "Priya", city: "Coimbatore", street: "RS Puram" },
  { name: "Kumar", city: "Chennai", street: "T Nagar" },
];

const peoplearechinnai = employees.filter(basedchenaai => basedchenaai.city == "Chennai").map(employees=> `${employees.name} ${employees.city}`);
console.log(peoplearechinnai);


const orders = [
  { id: 1, item: "shoes", amount: 1200, delivered: true },
  { id: 2, item: "shirt", amount: 800, delivered: false },
  { id: 3, item: "watch", amount: 5000, delivered: true },
];

const totalSum = orders.filter(deliveredis => deliveredis.delivered == true).map(orders=> `${orders.amount}`)
