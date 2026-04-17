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

*/


const stock = {
    fruits : ["Apple", "Banana", "Mango", "Strawberry", "Watermelon"],
    liquid : ["Water" , "ice"],
    holder : ["cone", "cup", "stick"],
    topping : ["Chocolate", "peanuts"],
};


let = shop_is_open = true;


let order = (time, work)=>{
  return new Promise((Resolve,Reject)=>{

    if(shop_is_open){
      setTimeout(()=>{
          Resolve( work());
      })  
      
    }else{
      Reject(console.log("shop closed"))
    }
  })
}