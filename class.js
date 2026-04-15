function Firesnts(name, age, loyaltyLevel) {
    this.friname = name;
    this.firage = age;
    this.firloyaltyLevel = loyaltyLevel;
}

Firesnts.prototype.makesens = function() {
    console.log("making any sense");
}

const var1 = new Firesnts("abi", 20, "good");
const var2 = new Firesnts("janagan", 21, "high");

console.log(var2.makesens());  // 
console.log(var1.makesens());  //  

console.log(var1.makesens === var2.makesens);