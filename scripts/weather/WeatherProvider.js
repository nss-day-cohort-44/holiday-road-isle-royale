//imports openweather map api key
import { default as mykeys } from "../Settings.js"

// stores the weather array
let weatherArray = []

// slices weather array
export const useWeather = () => {
    return weatherArray.slice()
}

// provides a function that extracts the latitude and longitude properties of the 'foundPark' object from WeatherList.js and inputs weather key.
export const getWeather = (location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=hourly,minutely,current&appid=${mykeys.weatherKey}`)
        .then( response => response.json() )
        // adds the daily array from the fetched api to weatherArray[]
        .then( parsedWeather => weatherArray = parsedWeather.daily )
        
}