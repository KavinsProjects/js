//

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data=> console.log(data.name))
//     .catch(error => console.error(error))


fetchdata();


//const pokemonName = document.getElementById("inpuTextBox").value .toLowerCase();

async function fetchdata() {

  const pokemonName = document.getElementById("inpuTextBox").value .toLowerCase();
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if(!response.ok){
          throw new error("could fectch the data")
      }
      const data = await response.json()
      const pokemonSprite = data.sprites.front_default;
      const imageEle = document.getElementById("PokimonSprite")

      imageEle.src = pokemonSprite;
      imageEle.style.display = "block"
  }
  catch(error){
    console.error(error);
  }
}


      // dictionatydata();

      //   async function dictionatydata(params) {
      //       try{
      //           const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/car");

      //           if(!response.ok){
      //               console.log("could'd fech the data from the api")
      //           }
      //           const data = await response.json();
      //           console.log(data.definitions)
      //       }  
      //       catch(error){
      //           console.error(error);
      //       }
      //   }





// async function f1datafetch() {
//   try{
//     const response = await fetch("https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158");
//     if(!response.ok){
//       console.log("could'd  fetch the data from f1 api");
//     }
//     else{
//     const data = await response.json();
//     console.log(data);
//     }
//   }
//   catch(error){
//     console.error("bad Request");
//   }
// }

// f1datafetch();