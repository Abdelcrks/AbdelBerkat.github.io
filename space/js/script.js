particlesJS.load('particles-js', 'js/particles-config.json', function () {
    console.log('particles.js loaded 🚀')
  })


const divContainer = document.getElementById("container")
const divLoad = document.getElementById("loading")
const form = document.getElementById("planet-form")
const btnHomePage= document.getElementById("accueil")
//console.log(form)

form.addEventListener("submit", (event) => {
    event.preventDefault()
    divContainer.innerHTML = ""
    const input = document.getElementById("input-search").value
    //console.log(input)
    descriptionFetch(input)
})

const descriptionFetch = async (input) => {
    try{
        const loading = loadingApi()
        const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${input}`)
        const data = await response.json()
        //console.log(data)
        loading.style.display = "none"
        

        const description = document.createElement("p")
        divContainer.appendChild(description)
        description.innerHTML = data.extract
    }
    catch(error){
        console.log("erreur")
    }
}

const loadingApi = () => {
    divLoad.innerHTML=""
    const loading = document.createElement("p")
    divLoad.appendChild(loading)
    loading.innerText = "chargement en cours ... 🚀"
    return loading
}

btnHomePage.addEventListener("click", () => {

})

