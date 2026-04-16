// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance


class Products{
    constructor(name, price,){
        this.name = name;
        this.price = price;
        
    }

    //no function keyword need 
     displayName(){
        console.log(`Products : ${this.name}`);
        console.log(`price : ${this.price.toFixed(2)}`); //.toFind(2,4) it print the Decimal values in range
        //console.log(`Toys ${this.toys}`);
    }
}

const products1 = new Products("shrit", 1200);
const mytoys = new Products("HotWheels", 250.900);

products1.displayName();    
mytoys.displayName();