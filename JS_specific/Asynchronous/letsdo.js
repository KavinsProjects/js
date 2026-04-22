let coffeeShopOpen = true;

const coffeeShop = {
    EspressoBased : ["Espresso", "Americano","Latte","Cortado"],
    MilkSweet : ["Mocha", "Vanilla Latte", "White Chocolate Mocha"],
    indianSpecial : ["Filter Coffee","Chicory Coffee","Masala Chai Latte"],
}
function WelcomeCoffeeShop() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coffeeShopOpen) {
        resolve("Welcome to our Coffee shop");     
      } else {
         
        reject("We are sorry, shop is closed");      
      }
    }, 1000);
  });
}

async function ordering() {
    try{
        const Welcome = await WelcomeCoffeeShop();

        console.log(Welcome);

        await(1000);
        console.log(`the ordered item is ${coffeeShop.MilkSweet[2]}`);

        await(3000);
        console.log("Prepare the drink");

        await(1000);
        console.log("order is serveced");
    }
    catch(error){
        console.log("Sorry! We couldn't complete your order: Out of milk",error);
    }
}

ordering();


const movie = ["Interstaller", "tenet", "Inception"];

function MovieTicket(ms){
    return new Promise((resolve, reject)=>{
        if()
    })
}