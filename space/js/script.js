
// =======================
// 🚀 Chargement script particles 
// =======================

particlesJS.load('particles-js', 'js/particles-config.json', function () {
    console.log('particles.js loaded 🚀')
  })

// =======================
// 🚀 Element html
// =======================

const divContainer = document.getElementById("container")
const divLoad = document.getElementById("loading")
const form = document.getElementById("planet-form")
const btnHomePage= document.getElementById("accueil")
const descriptionDiv = document.getElementById("planet-description")
const planetImageDiv = document.getElementById("planet-image")
//console.log(form)

// =======================
// 🚀 Formulaire > evenement
// =======================


form.addEventListener("submit", (event) => {
    event.preventDefault()
    descriptionDiv.innerHTML = ""
    planetImageDiv.innerHTML = ""
    const input = document.getElementById("input-search").value
    //console.log(input)
    descriptionFetch(input)
    //unplashFetch(input)
    showPlanet(input)
})

// =======================
// 🚀 description Api Wiki
// =======================

const descriptionFetch = async (input) => {
    try{
        const loading = loadingApi()
        const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${input}`)
        const data = await response.json()
        //console.log(data)
        loading.style.display = "none"
        

        const description = document.createElement("p")
        descriptionDiv.appendChild(description)
        description.innerHTML = data.extract
    }
    catch(error){
        console.log("erreur")
    }
}

// =======================
// 🚀 Chargement api
// =======================

const loadingApi = () => {
    divLoad.innerHTML=""
    const loading = document.createElement("p")
    divLoad.appendChild(loading)
    loading.innerText = "décollage en cours ... 🚀"
    return loading
}


// const unplashFetch = async (input) => {
//     try {
//         const response = await fetch(`https://api.unsplash.com/search/photos?query=${input}&client_id=qP1MEZBV35jy7MuCkjFL68XnIw3VAIPXQ_mePY60hU4
//         `)
//         const data = await response.json()
//         const photo = data.results[0]
//         const img = document.createElement("img")
//         img.src= photo.urls.regular
         
//         const attribution = document.createElement("p");
//         attribution.innerHTML = `Photo de <a href="${photo.user.links.html}" target="_blank">${photo.user.name}</a> sur <a href="https://unsplash.com" target="_blank">Unsplash</a>`;

//         planetImageDiv.appendChild(img);
//         planetImageDiv.appendChild(attribution);
//     }
//     catch(error){
//         console.log("error unsplash")
//     }
// }



// =======================
// 🚀 Image planète
// =======================

function showPlanet(name) {
  planetImageDiv.innerHTML = "" // Reset
  const img = document.createElement("img")
  img.src = `img/planets/${name.toLowerCase()}.png`
  planetImageDiv.appendChild(img)

  // Force reflow + animation
  planetImageDiv.classList.remove("visible")
  void planetImageDiv.offsetWidth // Trick
  planetImageDiv.classList.add("visible")
}


// =======================
// 🚀 Menu Hamburger
// =======================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});