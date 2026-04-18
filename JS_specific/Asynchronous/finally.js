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
  .then(()=>{
    })

    .then(()=>{
    })

    .catch(()=>{

    })

    .finally(()=>{
    })
*/

const stock = {
  fruits: ["Apple", "Banana", "Mango", "Strawberry", "Watermelon"],
  liquid: ["Water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["Chocolate", "peanuts"],
};

let shop_is_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shop_is_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry Shop is closed"));
    }
  });
};

order(1000, () =>
     console.log(`${stock.fruits[0]}`))


.then(()=>{
    
    return order(0000,()=>console.log("Production is strated")) ;
})

.then(()=>{
    return order(2000,()=>console.log(`${stock.fruits[0]} cutted into pices`));
})

.then(()=>{
    return order(1000,()=>console.log(`added water and ice`));
})


.then(()=>{
    return order(1000,()=>console.log('machine has stated to make apple icecream'))
})

.then(()=>{
    return order(2000,()=>console.log(`${stock.holder[1]} is selected`))
})

.then(()=>{
    return order(3000,()=>console.log(`${stock.topping[0]} is selected`))
})

.then(()=>{
    return order(100,()=>console.log(`hey We made a ice cream`))
})

.catch(()=>{
    console.log("Bro shop is cloused we are sorry")
})

.finally(()=>console.log("day ended shop"))