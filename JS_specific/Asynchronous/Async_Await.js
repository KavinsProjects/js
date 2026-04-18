const stock = {
  fruits: ["Apple", "Banana", "Mango", "Strawberry", "Watermelon"],
  liquid: ["Water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["Chocolate", "peanuts"],
};

let shop_is_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (shop_is_open) {
            setTimeout(function () {
                resolve();
            }, ms);
        } else {
            reject("shop is closed");
        }
    });
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stock.fruits[0]}`);

        await time(0000)
            console.log("start the production");

        await time(2000)
            console.log(`${stock.fruits[0]} cutted into pices`);
        
        await time (1000)
            console.log(`added water and ice`);

        await time(1000)
            console.log('machine has stated to make apple icecream');
        
        await time(2000)
            console.log(`${stock.holder[1]} is selected`);

        await time(3000)
            console.log(`${stock.topping[0]} is selected`);

        await time(1000)
            console.log(`hey We made a ice cream`);
        console.log()
    } catch (error) {
        console.log("customer has left the shop:", error);
    } finally {
        console.log("day ended so customer left the chat");
    }
}

// call async function
kitchen();