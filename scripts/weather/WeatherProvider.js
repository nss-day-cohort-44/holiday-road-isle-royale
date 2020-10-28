
import { default as mykeys } from "../Settings.js"

const weatherArray = []

export const useWeather = () => {
    return weatherArray.slice()
}


export const getWeather = (location) => {
    console.log("weather data provider pinged")
    return fetch(`api.openweathermap.org/data/2.5/forecast?q=${location.addresses[0].city},${location.addresses[0].stateCode}&appid=${mykeys.weatherKey}`)
        .then( response => response.json() )
        .then( parsedWeather => weatherArray = parsedWeather.list )
}