const buttonAjouter= document.querySelector("#ajouter")
// Sélectionne le bouton "Ajouter" dans le HTML (par son id)
const input=document.querySelector("#input")
// Sélectionne le champ input (là où l'utilisateur écrit la tâche)
const liste=document.querySelector("#liste")
// Sélectionne la liste <ul> ou <ol> qui contiendra les tâches


console.log(buttonAjouter)
console.log(input)
console.log(liste)
// Affiche dans la console pour vérifier que les éléments ont bien été trouvés

let userHasClicked = false
// Variable pour savoir si l'utilisateur a déjà cliqué 


buttonAjouter.addEventListener("click", () => {
//Quand l’utilisateur clique sur le bouton "Ajouter", on lance tout ce qui suit. ⬇️
    userHasClicked = true
// Met à jour la variable 
    let newLi= document.createElement("li") 
// Crée un nouvel élément <li> pour représenter une tâche dans la liste, et donc chaque tâche aura sa propre ligne
    let buttonDelete = document.createElement("button")
//creer un bouton spécial pour cette tâche, qui va permettre à l’utilisateur de la supprimer.
    newLi.innerText= input.value
// Prends le texte que l’utilisateur a tapé dans le champ <input> et tu ça l'ajoute dans le <li>
    buttonDelete.innerText= "Supprimer"
// Ajoute le mot "Supprimer" à ton bouton qui sera a coté de la tâche 
    liste.appendChild(newLi)
// ça ajoute le <li> dans la liste <ul>  Résultat : la tâche s’affiche dans la page.
    newLi.addEventListener("click", ()=>{
// Quand l'utilisateur clique sur l'élément newLi donc la tâche, exécute la fonction suivante.
            userHasClicked = true
// l'utilisateur a bien interagi avec la page.
        newLi.classList.toggle("done")
// liste des classes CSS a newli dont ici .toggle ajoute la classe si elle n'est pas la, et elle l'enleve si elle est la
// et done c'est .done qui est dans mon css qui de base n'est pas défini en html 
    })
//
    newLi.appendChild(buttonDelete)
// ça insères le bouton dans le <li>, donc il s’affiche à côté du texte.
    buttonDelete.addEventListener("click", () => {
//  Quand on clique sur ce bouton-là, on exécute ce qui suit.
        userHasClicked = true
// Je rapelle que l'utilisateur à cliquer  
        newLi.remove()
// Tu supprimes le <li> complet donc la tâche et le bouton disparait 
// !!! Car le bouton est un enfant du <li> voir a la ligne 32 donc si je supprime le parent je supprime également l'enfant 
    })
})