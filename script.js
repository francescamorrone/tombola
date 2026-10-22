/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

const tabellone = document.querySelector("#tabellone");
const ultimoNumero = document.querySelector("#ultimo-numero")
const btnEstrai = document.querySelector("estrai")

//crea griglia
rendiTabellone = () => {
  //pulisci tabellone
  tabellone.innerHTML = "";

  for(let i = 0; i < 90; i++) {
    const numbers = document.createElement("div");
    numbers.classList.add("numero");
    const numeroAttuale = i + 1;
    numbers.innerText= numeroAttuale;

    if(usciti.includes(numeroAttuale)) {
      numbers.classList.add("uscito");
    }

    tabellone.appendChild(numbers);

  }
  
}
rendiTabellone();

estrai = () => {
  const disponibili = [];

  for(let i  = 1; i <= 90; i++) {
    if(!usciti.includes[i]){
      disponibili.push[i];
    }
  }
  
  if(disponibili.length === 0) {
    alert("Tutti i numeri sono usciti!");
    return;
  }
}

const randomNum = Math.floor(Math.random() * disponibili.length);
const numeroEstratto = disponibili[randomNum];

usciti.push(numeroEstratto);

ultimoNumero.innerText = numeroEstratto;
btnEstrai.addEventListener("click", estrai)

