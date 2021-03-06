
import { default as mykeys } from "../Settings.js"

let weatherArray = []

export const useWeather = () => {
    return weatherArray.slice()
}


export const getWeather = (location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=hourly,minutely,current&appid=${mykeys.weatherKey}`)
        .then( response => response.json() )
        .then( parsedWeather => weatherArray = parsedWeather.daily )
        
}