/*

A Promise is made
        |
        ↓
    Pending
    /      \
   ↓        ↓
Resolve    Reject
   |          |
   |          |
   ↓          ↓
 .then      .catch
   |          |
   ↓          |
 .then        |
      \       /
       ↓     ↓
      .finally


  syntax

const funtionName =() =>{
    return new Promise((resolve, reject)=>{

        if(){
            resolve()
        }
        else{
            reject()
        }
        })
    }

// */

// const stock = {
//   fruits: ["Apple", "Banana", "Mango", "Strawberry", "Watermelon"],
//   liquid: ["Water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   topping: ["Chocolate", "peanuts"],
// };

// let shop_is_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (shop_is_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Sorry Shop is closed"));
//     }
//   });
// };

// order(1000, () => console.log(`${stock.fruits[0]}`));

let foodisava = false;

function waitinQueue(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(foodisava){
          console.log(resolve("buy noodles for me"));
        }else{
          console.log(reject("food is over"));
        }
      },1000)
  });
}

async function laststpe() {
  try{
    let done = await waitinQueue();
    console.log(done);
  }
  catch(error){
    console.log('food is over :(')
  }
  finally{
    console.log("go Home");
  }
}
laststpe();