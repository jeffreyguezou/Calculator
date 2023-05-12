const upperDisplay =  document.querySelector("#upperDisplay");
const lowerDisplay = document.querySelector("#lowerDisplay");
const buttons = document.querySelectorAll(".calcButton");
let lowerNumber =  0;
let upperNumber=0;

function updateDisplay(){
    lowerDisplay.textContent = lowerNumber;
}

buttons.forEach((button)=>{
   button.addEventListener("click",(e)=>{
    lowerNumber=e.target.value;
    updateDisplay();
    console.log(lowerNumber);
    console.log(e.target.value);
   })
 })
