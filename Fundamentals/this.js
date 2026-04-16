//this don't work => funtion

const person1 = {

    personName : "BroKavin",
    favFood : "curdRice",
    sayHi:function(){
        console.log(`Bro Say hi to ${this.favFood}`);
    } ,
    eat:function(){
        console.log(`hey ${this.personName} is eating his ${this.favFood}`);
    }
};

person1.sayHi();
person1.eat();


const person2 = {

    personName : "sponebob",
    favFood : "pizza",
    sayHi:function(){
        console.log(`Bro Say hi to ${this.favFood}`);
    } ,
    eat:function(){
        console.log(`hey ${this.personName} is eating his ${this.favFood}`);
    }
};


person2.sayHi();
person2.eat();

//what if

console.log(this);{}