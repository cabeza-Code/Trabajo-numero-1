let btn = document.querySelectorAll(".item");
let p = document.querySelector("p");
let caja = document.querySelector(".caja");

let toques = 
['O','X','O','X','O','X','O','X','O','X']
let posicion = 0;
btn.forEach((e,i)=>{
 e.addEventListener('click',()=>{
 posicion++;
  e.innerHTML = toques[posicion];
  e.value = toques[posicion];
console.log('btn = '+ i + ' valor'+e.value);  
  if(btn[0].value == "X" &&
     btn[4].value == "X" && 
     btn[8].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  if(btn[2].value == "X" &&
     btn[4].value == "X" && 
     btn[6].value == "X"){
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  if(btn[0].value == "X" &&
     btn[1].value == "X" && 
     btn[2].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"     
  }
  if(btn[3].value == "X" &&
     btn[4].value == "X" && 
     btn[5].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  if(btn[6].value == "X" &&
     btn[7].value == "X" && 
     btn[8].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  if(btn[0].value == "X" &&
     btn[3].value == "X" && 
     btn[6].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  if(btn[1].value == "X" &&
     btn[4].value == "X" && 
     btn[7].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  if(btn[2].value == "X" &&
     btn[5].value == "X" && 
     btn[8].value == "X") {
     p.innerHTML = "👏🏻ganaste⭐X🎉"
  }
  ///////// o
  if(btn[0].value == "O" &&
     btn[4].value == "O" && 
     btn[8].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[2].value == "O" &&
     btn[4].value == "O" && 
     btn[6].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[0].value == "O" &&
     btn[1].value == "O" && 
     btn[2].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[3].value == "O" &&
     btn[4].value == "O" && 
     btn[5].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[6].value == "O" &&
     btn[7].value == "O" && 
     btn[8].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[0].value == "O" &&
     btn[3].value == "O" && 
     btn[6].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[1].value == "O" &&
     btn[4].value == "O" && 
     btn[7].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }
  if(btn[2].value == "O" &&
     btn[5].value == "O" && 
     btn[8].value == "O") {
     p.innerHTML = "👏🏻ganaste⭐O🎉"
  }    
 });
});



