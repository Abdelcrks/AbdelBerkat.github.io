
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
const descriptionDiv = document.getElementById("planet-description")
const planetImageDiv = document.getElementById("planet-image")
const homePageBtn = document.getElementById("homePageBtn")
//console.log(form)

// =======================
// 🚀 Formulaire > evenement
// =======================


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.getElementById("input-search").value

    descriptionDiv.innerHTML = ""
    planetImageDiv.innerHTML= "" 
    divLoad.innerHTML= "" 
    descriptionWikipediaFetch(input)
    showPlanet(input)

})



//
// fonction pour les appels lunes, soleils etc et les Planètes 
//

const wikiOther = (input) => {
  const name = input.toLowerCase()
  if(name === "lune" || name ==="soleil"){
    return name
  } else {
    return `${name}%20(planète)`
  }
}

// =======================
// 🚀 description Api Wiki
// =======================

const descriptionWikipediaFetch = async (input) => {
    try{
        const loading = loadingApi()
        const search = wikiOther(input)
        const response = await fetch(`https://fr.wikipedia.org/api/rest_v1/page/summary/${search.toLowerCase()}`)
        const data = await response.json()
        //console.log(data)
        loading.style.display = "none"
        

        const description = document.createElement("p")
        descriptionDiv.appendChild(description)
        description.innerHTML = data.extract
    }
    catch(error){
        console.log(error, "erreur")
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



function showPlanet(name) {
  planetImageDiv.innerHTML = ""; // reset total

  // Crée un wrapper qui contiendra l’image
  const animation = document.createElement("div");
  animation.classList.add("planetAnimation");

  const img = document.createElement("img");
  img.src = `img/planets/${name.toLowerCase()}.png`;

  animation.appendChild(img);
  planetImageDiv.appendChild(animation);

  // Reflow forcé pour déclencher la transition
  void animation.offsetWidth;

  // Classe visible pour l'effet
  animation.classList.add("visible");
}

// =======================
// 🚀 Menu Hamburger
// =======================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

///
/// Deuxieme api pour le reste de la description 
///
const descriptionSystemSolaireFetch = async (input) => {
  try{
    const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${input.toLowerCase()}`)
    const data = await response.json()
    return data

  }
  catch(err){
    console.log("erreur", err)
  }
}