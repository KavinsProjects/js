/*🟢 Beginner Problems
1. Pizza Order System

Create a stock with: base, sauce, cheese, toppings
Make a time() helper (same as yours)
Write an async function makePizza() that:

Waits 1s → logs "Rolling the dough"
Waits 2s → logs "Applying sauce"
Waits 1s → logs "Adding cheese"
Waits 3s → logs "Pizza is ready!"


Add a shop_is_open flag — if false, catch the error and log "Sorry, we are closed"

*/

// product base
const pizzaShop = {
    base : ["Thin Crust", "Thick Crust", "Cheese Burst", "Whole Wheat"],
    sauce : ["Tomato", "Pesto", "Barbeque", "White Sauce"],
    cheese : ["Mozzarella", "Cheddar", "Parmesan", "Gouda"],
    toppings : ["Olives", "Mushrooms", "Pepperoni", "Onions", "Bell Peppers"],
};

let pizzahut_OpenOrClose = true;


function time (ms){
    return new Promise((Resolve, Reject)=>{
        if(pizzahut_OpenOrClose){
            setTimeout(()=>{
                Resolve();
            },ms)
        }else{
            Reject(console.log("we have to close the shop"))
        }
    })
}

async function cookingArea() {
    try{
        await time(2000)
            console.log(`${pizzaShop.base[2]}`)

        await time(1000)
            console.log("Rolling the dough")
        await time(2000)

        await time (3000)
            console.log(`${pizzaShop.sauce[2]}`)

            console.log("Applying sauce")
        await time(1000)
            console.log("Adding cheese")

        await time(3000)
            console.log("your Pizza is ready ")
    }
    catch(error){
        console.log("we are sorry on left",error);
    }
    finally{
        console.log("3rofsdfdsf");
    }
}

cookingArea()


/*
 Alarm Clock

Write an async function setAlarm(hour)
If hour < 6 → reject with "Too early!"
If hour > 22 → reject with "Too late!"
Otherwise → wait 2 seconds and resolve with "Wake up! It's time"
Use try/catch to handle both errors
*/

function setAlram(hours) {
    return new Promise(resolve, reject){
        if(hours < 6){

        }
    }
}

