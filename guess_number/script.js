/*
function chooseSecretNumber(){
    let player1GivenNumber = prompt("Entre un nombre entre 0 et 50")

    while (player1GivenNumber === null ||                  // Si le joueur clique sur "Annuler" prompt retourne null → on rejette
        player1GivenNumber.trim() === "" ||              // Si le joueur tape juste des espaces ou rien du tout → on rejette
        isNaN(Number(player1GivenNumber)) ||             // Si ce qu’il a tapé ne peut pas être transformé en nombre → on rejette
        Number(player1GivenNumber) < 0 ||                // Si le nombre est plus petit que 0 → on rejette
        Number(player1GivenN umber) > 50){                // Si le nombre est plus grand que 50 → on rejette

        alert("Rentre un numéro entre 0 et 50")
                // Si une des conditions au-dessus est vraie, on montre une alerte
        player1GivenNumber = (prompt("Entre un nombre entre 0 et 50"))
                // On redemande à l'utilisateur de taper un nombre
        console.log("Valeur entrée :", player1GivenNumber)
      }
        alert("Merci ! Ton nombre a été enregistré 😊")
        return Number(player1GivenNumber)
//On retourne cette valeur convertie en nombre cette fois.
}

let numberToGuess = chooseSecretNumber() // Résultat du chooseSecretNumber

function askNumber(){
    let givenNumberPlayer2 = Number(prompt("Entre un nombre"))
    return givenNumberPlayer2
  }

//chooseSecretNumber()
console.log(numberToGuess)

  function didIWin (givenNumberPlayer2,numberToGuess){
    if(givenNumberPlayer2 < numberToGuess){
      return false
    }
    else if (givenNumberPlayer2>numberToGuess){
      return false
    } 
      return true
  }

/*
function gamePlay() {
    let player2
    let result;
    do {
        player2 = askNumber();         // On demande un nombre
        result = didIWin(player2,numberToGuess);     // On vérifie s’il est bon
    

        if (result === false) {         // Affiche "false" si ce n’est pas bon
            alert("Raté looser");       
        }else{
            alert("Ta gagné")
        }

    } while (result !== true);   // On recommence tant qu’on n’a pas gagné
}
*/
// gamePlay()

const input = document.querySelector("#input")
const buttonValider = document.querySelector("#valider")
const msgWin = document.querySelector("#msgWin")
const range = document.querySelector("#range")
const compteur = document.querySelector("#compteur")
const buttonRejouer= document.querySelector("#rejouer")
const body = document.querySelector("body")
const msgLoose = document.querySelector("#msgLoose")
// Ligne 69 à 76 = créer des variables qui font réference aux ID, ou balise du html 
console.log(buttonValider)
// je test ici pour voir si c'est bien pris en compte 

let min = 0  // 0 à 50 ici le 0 servira en tant que chiffre minimum
let max = 50 // 50 chiffre maximum 
let essais = 0  // servira de réference au compteur
let secretNumber = 33 // nombre à deviner 

buttonValider.addEventListener("click", () => { // je créer un évenement (clicker avec la souris) pour le bouton valider 
    essais += 1 // chaque fois qu'un utilisateur clique sur valider il augmente rajoute +1 
    compteur.innerHTML=  `Nombre d'essais : ${essais}` // je modifie le texte ici pour que tout sois synchronisé via le html donc je modifie le text et il prendra la valeur d'essai 
     msgWin.style.display ="none" // je cache le message gagnant 
     msgLoose.style.display = "none" // je cache le message mauvaise réponse
    let valeurTaper= Number(input.value) // je crée une variable qui transforme toute les types en nombre de ce que l'utilisateur mettra sur le champs (la ou l'utilisateur mettra sa réponse)
    input.value = "" // quand un utilisateur cliquera sur valider le champs sera vider

    if(valeurTaper===secretNumber){ // si l'utilisateur trouve le nombre à deviner
        msgWin.style.display = "block" // message gagnant s'affiche
         input.style.display = "none" // l'input disparait (la ou l'utilisateur tape sa réponse)
          buttonValider.style.display = "none" // bouton valider disparait
          buttonRejouer.style.display ="block" // bouton rejouer apparait pour rejouer si il le souhaite
           range.style.display = "none" // le 0<?<50 disparait
            body.style.backgroundImage = "url('pictures/confetti.png')" // les confettis apparaissent  
            body.style.backgroundSize ="cover" // confetti couvre toute la page 
            gif.style.display="block" // affiche le gif si l'utilisateur gagne 

    } else if(valeurTaper <secretNumber){ // sinon si l'utilisateur tape un chiffre plus petit que le nombre caché
        if(valeurTaper > min){ // si(en rapport avec la condition juste en haut) l'utilisateur tape un chiffre plus grand que le chiffre minimum (0<?<50) donc de base 0 
            min = valeurTaper // le chiffre minimum (0<?<50) deviendra le chiffre que l'utilisateur aura tapé  exemple si il tape 4 ce sera 4<?<50 puis si il tape 10 a nouveau ce sera 10<?<50
            msgLoose.innerText = "Trop petit 😕" // modifie le message loose en "trop petit"
            msgLoose.style.display = "block" // affiche le message trop petit
            range.innerText = `${min} & ${max}` // modifie le texte 0<?<50 en reprenant min=Valeurtaper donc le chiffre 0 deviens ce que l'utilisateur aura tapé 

                }else { // sinon ( en rapport avec la condition en haut else if)
                    alert("Ce nombre n’est pas dans la bonne plage.") // permettra de dire a l'user que si la valeur qu'il a tapé est plus petite que le min cette alert s'affichera
                }

    } else if (valeurTaper >secretNumber){ // sinon si l'utilisateur tape un chiffre plus grand que le nombre caché
        if(valeurTaper<max){ // si (en rapport avec la condition juste en haut) l'user tape un chiffre plus petit que le chiffre maximum 
            max = valeurTaper // la valeur maximum deviendra ce que l'user aura taper
            msgLoose.innerText = "Trop grand 😕" // je change le text loose en disant que c'est trop grand 
            msgLoose.style.display = "block" // je rend visible le message qui dit que c'est trop grand
            range.innerText= `${min} & ${max}` // je modifie les valeurs de base 0<?<50 en mettant les valeurs min et max qui varieront selon ce que l'user aura taper 

                }else {// si en rapport avec le else if 
                    alert("Ce nombre n'est pas dans la bonne plage") // ici ca permettra de dire à l'utilisateur que si le chiffre est au dessus de la valeur max que ce n'est pas dans la bonne plage
                }
    } 
        range.innerText= `${min}< ? <${max}` // modifiele texte  0<?<50 par min <? < max (prendra les valeurs de l'utilisateur qui aura tapé )
})

buttonRejouer.addEventListener("click", () => { // créer un evenement des que l'user aura cliquer sur le bouton rejouer 
    essais = 0 // je repasse l'essai (pour le compteur) à zéro
    compteur.innerText = "Nombre d'essais :" + essais // remet le compteur à zero voir ligne du dessus
        body.style.backgroundImage="none" // Enleve les confetti si l'utilisateur rejoue
        gif.style.display="none" // enlève le gif si l'utilisateur rejoue
          input.style.display = "block" // remet l'input des que l'utilisateur rejoue
           msgWin.style.display = "none" // enleve le message win si l'utilisateur rejoue
            buttonValider.style.display="block" // remet le bouton valider si l'utilisateur clique sur rejouer
            buttonRejouer.style.display="none" // cache le bouton rejouer une fois que l'utilisateur a cliqué sur le bouton rejouer
             range.style.display="block"  // remet le  0> ? > 50 si l'utilisateur clique sur rejouer
             range.innerText="0 < ? < 50" // remet le 0< ? <50 à zero (texte de base)
})