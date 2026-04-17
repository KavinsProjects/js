// callback are simple ex haveing two funtion passing one funtion into another function's para is called callback

/*

funtion one (call_backk){

//code goes'her

call_backk()

};

function (two){
code goes here
}

one(tow);


*/

// function One (call_two){
//     console.log("this is function 1");
// call_two();  
// };



// function two (){
//     console.log("this is function 2");
// };  

// One(two);



const stock = {
    fruits : ["Apple", "Banana", "Mango", "Strawberry", "Watermelon"],
    liquid : ["Water" , "ice"],
    holder : ["cone", "cup", "stick"],
    topping : ["Chocolate", "peanuts"],
};

//console.log(stock.fruits[2]);


const order = (furite_name,call_production) =>{
   

    setTimeout(()=>{
        console.log(`${stock.fruits[furite_name]} was selected`)

        call_production();

    },2000)

};



const production = () =>{
    
    setTimeout(()=>{
        console.log("Prodtion is started ");

        setTimeout(()=>{

            console.log("fuite has been chooped");

            setTimeout(()=>{
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were added`);

                setTimeout(()=>{
                    console.log("the Production machine was started");
                    setTimeout(()=>{
                        console.log(`For ${stock.fruits[0]} the ${stock.holder[0]}`);
                            setTimeout(() => {
                                console.log(`the costmer seleted the ${stock.topping[1]}`);
                                    setTimeout(()=>{
                                        console.log("the ice cream is ready pls pass the order ")
                                    },2000)
                            }, 3000);
                    },2000)
                },1000)
            },1000);
        },2000);
    }, 0000);
};

order(0,production);