const body = document.getElementsByTagName("body")[0];
//body.style.backgroundColor = 'blue'

function setColour (name){
    body.style.backgroundColor = name;
}

function randomColour (){
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const orange = Math.round(Math.random()*255);

    const colours = `rgb(${red}, ${green}, ${orange})`;
    body.style.backgroundColor = colours; 
}

randomColour();