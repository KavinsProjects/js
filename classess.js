class Persones{
    constructor(name,age){

        this.persoName = name;
        this.persoName = age
    }

    sayHi(){
        return 'say ${this.name}'
    }
}

const var1  = new Persones("kavin", 23);
console.log(var1.persoName);