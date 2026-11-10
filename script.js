/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

//let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

const tabellone = document.querySelector("#tabellone");
const ultimoNumero = document.querySelector("#ultimo-numero")
const btnEstrai = document.querySelector("#estrai");
const cronologia = document.querySelector("#cronologia");
const reset = document.querySelector("#reset");




let allNumbers = [];
let cronologiaNumeri = [];

function render() {


  tabellone.textContent = "";
  let numeriVisibiliCronologia = "";
  
  cronologiaNumeri.forEach((numero) => {
    numeriVisibiliCronologia += `${numero} :p `;
  })

  cronologia.textContent = numeriVisibiliCronologia;
  

  allNumbers.forEach((number) => {

    const printedNum = document.createElement("div");
    printedNum.classList.add("number");
    tabellone.appendChild(printedNum);

    const span = document.createElement("span");
    span.textContent = number.numero;
    printedNum.appendChild(span);

    if(number.estratto === true) {
      printedNum.classList.add("estratto");
      printedNum.style.color = "red";
    }
  })

}

function creaTabellone() {

  for(let i = 0; i < 90; i++) {

    const number = {
      numero: i + 1,
      estratto: false
    };

    allNumbers.push(number);
  }
}
creaTabellone();

reset.addEventListener("click", (event) =>{
  event.preventDefault();
  cronologiaNumeri = [];
  allNumbers = [];
  creaTabellone();
  render()

})

btnEstrai.addEventListener("click", (event) =>{
  event.preventDefault();

  const nonEstratti = allNumbers.filter((numero) => numero.estratto === false )

    const randomIndex = Math.floor(Math.random() * nonEstratti.length);

    // allNumbers[randomNum - 1].estratto = true;
    const numeroEstratto = nonEstratti[randomIndex];
    
    if(cronologiaNumeri.length > 3) {
      cronologiaNumeri.splice(0, 1)
    }

    
    cronologiaNumeri.push(numeroEstratto.numero);



    const indice = allNumbers.indexOf(numeroEstratto);
    allNumbers[indice].estratto = true;
    render();


}
)

render();