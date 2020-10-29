
import { getWeather, useWeather } from "./WeatherProvider.js"

const weatherElement = document.querySelector(".weather")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("parkSelect", changeEvent => {
    console.log("weather reciever pinged")

    if (changeEvent.target.id !== 0) {
        getWeather(changeEvent)
            .then(() => {
                let fiveDayForecast = ``
                const forecast = useWeather()

                for (i=0; i<=4; i++) {
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
    <div id="${api.weather.id}" class="weatherCard">
        <h3 class="weatherCard__date">${new Date(api.dt).toLocaleDateString('en-US')}</h3>
        <img class="weatherCard__icon" src="http://openweathermap.org/img/wn/${api.weather.icon}@2x.png">
        <h4 class="weatherCard__atmosphere">${api.weather.main}: ${api.weather.description}</h4>
        <h4 class="weatherCard__windSpeed">Wind Speed: ${api.wind_speed*0.62}mph</h4>
        <h4 class="weatherCard__high">High: ${api.temp.min-459.67}&#8457;</h4>
        <h4 class="weatherCard__low">Low: ${api.temp.max-459.67}&#8457;</h4>
        <h4 class="weatherCard__humidity">Humidity: ${api.humidity}&#37;</h4>
        <h4 class="weatherCard__uvi">UV Index: ${api.uvi}</h3>
    </div>
    `
}