const buttonRouge= document.getElementById("rouge") 
// je déclare une variable buttonRouge qui reprend l'id du html "rouge" (boutton)
console.log(buttonRouge)
// ==> inspecter l'élement sur google pour voir si il n'y a pas d'erreur et que le console.log est bien affiché
const buttonVert= document.getElementById("vert")
console.log(buttonVert)

const buttonBleu=document.getElementById("bleu")

let carré= document.getElementById("carré")
// je déclare une variable carré 
console.log(carré)


buttonRouge.addEventListener("click", () => { 
    // quand je clique sur le bouton rouge , on execute le code ⬇️
    carré.style.backgroundColor = "red"  
    // change la couleur de carré en rouge (via le css)
})

buttonVert.addEventListener("click", () =>{
    carré.style.backgroundColor = "green"
})

buttonBleu.addEventListener("click", () =>{

    carré.style.backgroundColor = "blue"
})

