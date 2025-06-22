const buttonAjouter= document.getElementById("ajouter")
const buttonEnlever= document.getElementById("enlever")
const buttonReset= document.getElementById("reset")

console.log(buttonAjouter)
console.log(buttonEnlever)
console.log(buttonReset)

const compteur = document.getElementById("compteur")
console.log(compteur)



let valeur = 0

buttonAjouter.addEventListener("click", () => {
    valeur += 1
    compteur.innerText= valeur

})

buttonEnlever.addEventListener("click", () => {
    valeur -= 1
    compteur.innerText= valeur
})

buttonReset.addEventListener("click", () => {
    valeur = 0
    compteur.innerText= valeur
})



