const upperDisplay =  document.querySelector("#upperDisplay");
const lowerDisplay = document.querySelector("#lowerDisplay");
const operatorDisplay = document.querySelector("#operator")
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalButton = document.querySelector(".calcButtonEqual");
const acButton = document.querySelector("#acButton");
const clearButton = document.querySelector("#clearButton");
let operatorValue;
let upperText;

let lowerNumber = '';
let upperNumber='';

function addition(a,b){
  return (parseFloat(a)+parseFloat(b));
  
}
function subtraction(a,b){
  return(parseFloat(a)-parseFloat(b));
 
}
function multiplication(a,b){
  return(parseFloat(a)*parseFloat(b));
  
}
function division(a,b){
  return (parseFloat(a)/parseFloat(b));
  
}
function operate(a,b,c){
  if (c=== '+') return(addition(a,b));
  if (c === '-' ) return (subtraction(a,b));
  if( c === '*') return multiplication(a,b);
  if(c=== '/') return division(a,b);

}

numberButtons.forEach((button)=>{
   button.addEventListener("click",(e)=>{
    lowerNumber = lowerNumber+`${e.target.value}`;
    lowerDisplay.textContent = lowerNumber;
   })
   
 })

 operatorButtons.forEach((operator)=>{
  operator.addEventListener("click",(e)=>{
    
    if(upperNumber !=='' && lowerNumber !='' && operatorValue!='')
    {
      
      upperNumber =  operate(upperNumber,lowerNumber,operatorValue);
      upperNumber = roundTo5decimalsMax(upperNumber);
      operatorValue = e.target.value;
      operatorDisplay.textContent =  operatorValue;
      upperDisplay.textContent= upperNumber;
      lowerNumber = '';
      lowerDisplay.textContent =  lowerNumber;
    }
    else{

      operatorValue = e.target.value;
      operatorDisplay.textContent =  operatorValue;
      upperNumber =  lowerNumber;
      upperDisplay.textContent =  upperNumber;
      lowerNumber = '';
      lowerDisplay.textContent =  lowerNumber;
    }
    
  })
 })

 equalButton.addEventListener("click",()=>{
  if(upperNumber && lowerNumber && operatorValue){
    lowerNumber = operate(upperNumber,lowerNumber,operatorValue);
    lowerNumber =  roundTo5decimalsMax(lowerNumber);
    lowerDisplay.textContent =  lowerNumber;
    upperNumber='';
    upperDisplay.textContent = '';
    operatorDisplay.textContent = '';
  }
    
 })
acButton.addEventListener("click",()=>{
  window.location.reload();
})

function roundTo5decimalsMax(result){
  result *= 100000;
  result = Math.round(result);
  return result / 100000;
}

clearButton.addEventListener("click",()=>{
  lowerNumber = lowerNumber.slice(0,-1);
  lowerDisplay.textContent = lowerNumber;
})