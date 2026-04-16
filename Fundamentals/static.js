class MathUtil{
    static pi = 3.145;
}

console.log(MathUtil.pi);

class ToFind{

    static pi = 3.145;

    static getDiameter(ratuds){
        return ratuds * 2
    }
    static getArea(ratuds){
        return this.pi * ratuds * ratuds;
    }
}
console.log(ToFind.getDiameter(10));
console.log(ToFind.getArea(10));

//mix of regual properties methods staitc properties

class Users{
    static userConunt = 0;

    constructor(userNames){
        this.userNames = userNames;
        Users.userConunt ++;
    }

}

const user1 = new Users("kavin");
const user2 = new Users("Priya");

console.log(user1.userNames );
console.log(user2.userNames);
console.log(Users.userConunt);