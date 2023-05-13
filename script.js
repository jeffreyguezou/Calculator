const upperDisplay =  document.querySelector("#upperDisplay");
const lowerDisplay = document.querySelector("#lowerDisplay");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalButton = document.querySelector(".calcButtonEqual");
const acButton = document.querySelector("#acButton");
const clearButton = document.querySelector("#clearButton");
let operandOne;
let upperText;

let lowerNumber = '';
let upperNumber='';

function addition(a,b){
  lowerNumber = parseInt(a)+parseInt(b);
  lowerDisplay.textContent= lowerNumber;
  upperDisplay.textContent='';
}
function subtraction(a,b){
  lowerNumber = a-b;
  lowerDisplay.textContent= lowerNumber;
  upperDisplay.textContent='';
}
function multiplication(a,b){
  lowerNumber = a*b;
  lowerDisplay.textContent= lowerNumber;
  upperDisplay.textContent='';
}
function division(a,b){
  lowerNumber = a/b;
  lowerDisplay.textContent= lowerNumber;
  upperDisplay.textContent='';
}
function operate(a,b,c){
  if (c=== '+') addition(a,b);
  if (c === '-' ) subtraction(a,b);
  if( c === '*') multiplication(a,b);
  if(c=== '/') division(a,b);

}

numberButtons.forEach((button)=>{
   button.addEventListener("click",(e)=>{
    lowerNumber = lowerNumber+`${e.target.value}`;
    lowerDisplay.textContent = lowerNumber;
   })
   
 })

 operatorButtons.forEach((operator)=>{
  operator.addEventListener("click",(e)=>{
    upperText = lowerNumber+`${e.target.value}`;
    upperDisplay.textContent = upperText;
    lowerDisplay.textContent='';
    operandOne =  lowerNumber;
    lowerNumber='';
  })
 })

 equalButton.addEventListener("click",()=>{
    operate(operandOne,lowerNumber,upperText.at(-1));
 })
acButton.addEventListener("click",()=>{
  upperText='';
  lowerNumber='';
  upperNumber='';
  lowerDisplay.textContent = lowerNumber;
  upperDisplay.textContent = upperNumber;

})