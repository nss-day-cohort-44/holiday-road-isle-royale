
import { getWeather, useWeather } from "./WeatherProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"

const weatherElement = document.querySelector(".weather")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("parkSelect", changeEvent => {
    console.log("weather reciever pinged")
    console.log("change Event Id", changeEvent.detail.parkThatWasChosen)

    if (changeEvent.target.id !== "0") {
        // debugger
        const parks = useParks()
        const foundPark = parks.find( selectedPark => {
            return selectedPark.id === changeEvent.detail.parkThatWasChosen
        })
        console.log(foundPark)
        // debugger
        getWeather(foundPark)
            .then(() => {
                let fiveDayForecast = ``
                const forecast = useWeather()

                for (let i=0; i<=4; i++) {
                    fiveDayForecast += forecastHTML(forecast[i])
                }
                
                render(fiveDayForecast)
            })
    }
})


const render = (weatherObj) => {
    weatherElement.innerHTML = weatherObj
}


const forecastHTML = (api) => {
    return `
    <div id="${api.weather[0].id}" class="weatherCard">
        <h3 class="weatherCard__date">${new Date(api.dt).toLocaleDateString('en-US')}</h3>
        <img class="weatherCard__icon" src="http://openweathermap.org/img/wn/${api.weather[0].icon}@2x.png">
        <h4 class="weatherCard__atmosphere">${api.weather[0].main}: ${api.weather[0].description}</h4>
        <h4 class="weatherCard__windSpeed">Wind Speed: ${(api.wind_speed/1.609).toFixed(2)}mph</h4>
        <h4 class="weatherCard__high">High: ${((api.temp.max-273.15)*(9/5)+32).toFixed(1)}&#8457;</h4>
        <h4 class="weatherCard__low">Low: ${((api.temp.min-273.15)*(9/5)+32).toFixed(1)}&#8457;</h4>
        <h4 class="weatherCard__humidity">Humidity: ${api.humidity}&#37;</h4>
        <h4 class="weatherCard__uvi">UV Index: ${api.uvi}</h3>
    </div>
    `
}