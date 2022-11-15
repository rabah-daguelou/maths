let h2 = document.getElementById("h2");
let userName = localStorage.getItem("userName");
h2.append(userName + ",");

let formulaire = document.getElementById("formulaire");
let commencer = document.getElementById("commencer");

let myInputNumber = document.createElement("input");
myInputNumber.setAttribute("class", "boite myInputNumber");
let jeValide = document.createElement("button");
jeValide.setAttribute("class", "btn jeValide");
let suivant = document.createElement("button");
suivant.setAttribute("class", "btn suivant");
let numeroQuestion = document.createElement("p");
numeroQuestion.setAttribute("class", "numeroQuestion btn");
let score = document.createElement("p");
score.setAttribute("class", "score btn");
let counter = 1;
let monScore = 0;
let bonneReponse = document.createElement("p");
let mauvaiseReponse = document.createElement("p");
bonneReponse.setAttribute("class", "bonneReponse");
mauvaiseReponse.setAttribute("class", "mauvaiseReponse");

let number1 = Math.floor(Math.random() * 10);
let number2 = Math.floor(Math.random() * 10);

function myFunction() {
  number1 = Math.floor(Math.random() * 10);
  number2 = Math.floor(Math.random() * 10);
  formulaire.innerHTML = `<span class='number1 boite'> ${number1} </span> <span class='operator boite' boite> + </span> <span class='number2 boite'> ${number2} </span> <span class='egal boite'>= </span>`;
  formulaire.appendChild(myInputNumber);
  myInputNumber.setAttribute("type", "number");
  myInputNumber.focus();
  formulaire.appendChild(numeroQuestion);
  formulaire.appendChild(score);
  numeroQuestion.setAttribute("class", "numeroQuestion");
  score.setAttribute("class", "score");
  numeroQuestion.textContent = `Question N°: ${counter}`;
  score.textContent = `Votre score: ${monScore}`;
}

// Cliquer sur Commencer le jeu
commencer.addEventListener("click", () => {
  commencer.remove();

  myFunction();
});

// Afficher le bouTon *** Je valide ***
myInputNumber.addEventListener("input", () => {
  formulaire.appendChild(jeValide);
  jeValide.textContent = `Je valide ${myInputNumber.value}`;
});

// Je clique sur valider ...

jeValide.addEventListener("click", () => {
  jeValide.remove();

  if (myInputNumber.value == number1 + number2) {
    monScore++;
    score.textContent = `Votre score: ${monScore}`;
    formulaire.appendChild(bonneReponse);
    bonneReponse.textContent = "Bonne Réponse";
  } else {
    formulaire.appendChild(mauvaiseReponse);
    mauvaiseReponse.textContent = "Mauvaise Réponse";
  }

  formulaire.appendChild(suivant);
  suivant.textContent = "Suivant";
});

// Clique sur suivant
suivant.addEventListener("click", () => {
  formulaire.innerHTML = `<p class='votre_score'> Votre Score: ${monScore}</p>`;

  myInputNumber.value = "";
  counter++;
  if (counter < 4) {
    myFunction();
  } else {
    let quitter = document.createElement("button");
    quitter.setAttribute("id", "btn");
    //quitter.setAttribute('class','quitter');
    quitter.textContent = "Quitter";
    let recommencer = document.createElement("button");
    recommencer.setAttribute("id", "btn");
    //recommencer.setAttribute('class', 'recommencer');
    recommencer.textContent = "Recommencer";
    formulaire.appendChild(quitter);
    formulaire.appendChild(recommencer);
    //  formulaire.insertAdjacentHTML('beforeend', '<button class="btn quitter"> Quitter </button>');
    //  formulaire.insertAdjacentHTML('beforeend', '<button class="btn recommencer"> Recommencer </button>');
    //let quitter=document.querySelector('quitter');

    quitter.addEventListener("click", () => {
      document.location.href = "../../index.html";
    });
    // let recommencer=document.querySelector('recommencer');
    recommencer.addEventListener("click", () => {
      formulaire.innerHTML = "";
      score = 0;
      numeroQuestion = 1;
      myFunction();
    });
  }
});

