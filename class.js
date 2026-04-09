// class


class Product{
    constructor(name, price){

        this.name = name;
        this.price = price;
    }

    displayProduct (){
        console.log(this.name);
        console.log(this.price);
    }
    
    calualteWithTax(salesTax){
        return this.price+(this.price * salesTax);
    }
};
const salesTax = 0.05;
const product1 = new Product("hotWheels", 150);
const product2 = new Product("Btwin- WaterBottel", 100);

product1.displayProduct();
product2.displayProduct();


class Mart{
    constructor(products, salaesTeam){
        this.products = products;
        this.salaesTeam = salaesTeam;
    }

    displayMyProerty(){
        console.log(this.products);
        console.log(this.salaesTeam);
    }

} ;

const productsOne = new Mart("Cars, Bike, toys ", "kavin's");
const productsTwo = new Mart("Veggies" ,"madhu");


productsOne.displayMyProerty();
productsTwo.displayMyProerty();
