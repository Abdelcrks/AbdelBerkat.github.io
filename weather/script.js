const form = document.getElementById("weather-form")
const input = document.getElementById("city-input")
const button = document.getElementById("button-form")
const divWeather = document.getElementById("weather-div")

console.log(input)


const errorMessage = () => {
    const error = document.createElement("p")
    error.innerHTML = "ERREUR"
    document.body.appendChild(error)
}


form.addEventListener("submit", (event) => {
    divWeather.innerHTML = ""
    event.preventDefault()
    const cityInput = input.value
    cityFetch(cityInput)
})

const cityFetch = async (cityName) => {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
        const data = await response.json()
        console.log(data)

        for (const city of data.results) {
            const cityLatitude = city.latitude
            const cityLongitude = city.longitude
            console.log("latitude :", cityLatitude, "longitude", cityLongitude)
            weatherFetch(cityLatitude, cityLongitude)
        }

    }
    catch (error) {
        errorMessage()
    }

}


const weatherFetch = async (latitude, longitude) => {

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        const data = await response.json()
        console.log(data)

        const temperature = document.createElement("p")
        divWeather.appendChild(temperature)
        temperature.innerHTML = `Temperature : ${data.current_weather.temperature}`

    }

    catch (error) {
        errorMessage()
    }

}


