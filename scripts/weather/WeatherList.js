
import { getWeather, useWeather } from "./WeatherProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"

const weatherElement = document.querySelector(".weather")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("parkSelect", changeEvent => {

    if (changeEvent.target.id !== "0") {
        // debugger
        const parks = useParks()
        const foundPark = parks.find( selectedPark => {
            return selectedPark.id === changeEvent.detail.parkThatWasChosen
        })
        // console.log("park Object", foundPark)
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
        <h3 class="weatherCard__date">${new Date(api.dt*1000).toLocaleDateString('en-US', {weekday: "long", month: "long", day: "numeric"})}</h3>
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

// The save button event clears the weather
eventHub.addEventListener("itineraryStateChanged", () => {
    weatherElement.innerHTML = ""
  })

// Displays Nashville weather when the page loads before a park is selected
export const NashvilleWeather = () => {
    const parks = useParks()
    const nashvillePark = parks.find( selectedPark => {
        return selectedPark.id === "89157226-8474-4BAE-B471-F1730993A468"
    })
    getWeather(nashvillePark)
        .then(() => {
            let fiveDayNashvilleForecast = ``
            const forecast = useWeather()
            
            for (let i=0; i<=4; i++) {
                fiveDayNashvilleForecast += forecastHTML(forecast[i])
            }

            render(fiveDayNashvilleForecast)
        })
}