let subject = {
    subName : "Javascript",
    score : 91, // but it 
};

let marks ={
    score : 90,
};

const var1 = Object.assign(subject,marks ,{score:"c"}); 
console.log(var1); //here subject is traget word, marks is passing word



function printUserName (user){
    const temp={fname: "kavin"};

    user=Object.assign(temp, user);
    console.log(`hello ${user.fname}, ${user.lname}`)
}

printUserName({ lname : "k"});