import { renderItineraries } from "./itineraries/ItineraryList.js"
import { getParks, useParks } from "./parks/ParkProvider.js"
import { getItineraries, useItineraries } from "./itineraries/ItineraryProvider.js"
import { NashvilleWeather } from "./weather/WeatherList.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js"

export const pageLoad = () => {
  getParks()
    .then(() => useParks())
    .then(() => getAttractions())
    .then(() => useAttractions())
    .then(() => getEateries())
    .then(() => useEateries())
    .then(() => getItineraries())
    .then(() => useItineraries())
    .then(() => renderItineraries())
    .then(() => NashvilleWeather())
}
