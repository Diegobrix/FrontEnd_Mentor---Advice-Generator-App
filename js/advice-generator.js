//HTML Elements
const adviceDisplay = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");
const btnNewAdvice = document.querySelector(".advice-generator");

//Vars
const url = "https://api.adviceslip.com/advice/127";

//Functions
const fetchAdvice = async() =>
{
   let response = await fetch(url);
   let data = await response.json();

   return data;
}

const generate = async() => 
{
   let promisedData = await fetchAdvice();
   let data = promisedData.slip;

   renderAdvice(data);
}

function renderAdvice(slipObj)
{
   let data = {id: slipObj.id, advice: slipObj.advice};

   adviceId.innerText = `advice #${data.id}`;
   adviceDisplay.innerText = `″${data.advice}″`;
}

//Listeners
window.addEventListener("load", generate);
btnNewAdvice.addEventListener("click", generate);