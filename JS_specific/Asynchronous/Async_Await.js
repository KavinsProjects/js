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
  
*/   

const stock = {
  fruits: ["Apple", "Banana", "Mango", "Strawberry", "Watermelon"],
  liquid: ["Water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["Chocolate", "peanuts"],
};

let shop_is_open = false;

