import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { renderItineraries } from "./itineraries/ItineraryList.js"
import { getParks, useParks } from "./parks/ParkProvider.js"
import { getItineraries, useItineraries } from "./itineraries/ItineraryProvider.js"
import { NashvilleWeather } from "./weather/WeatherList.js"
import "./parks/ParkList.js"
import "./attractions/AttractionList.js"
import "./eateries/EateryList.js"
import "./weather/WeatherList.js"
import "./itineraries/ItinerarySaveButton.js"

// async function loadPage() {
//   const gottenParks = await getParks()
//   const usedParks = await useParks()
//   const gottenAttractions = await getAttractions()
//   const usedAttractions = await useAttractions()
//   const gottenEats = await getEateries()
//   const usedEats = await useEateries()
//   const gottenItineraries = await getItineraries()
//   const usedItineraries = await useItineraries()
//   const renderedItineraries = await renderItineraries()
// }

const reloaded = () => {
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

reloaded()
// loadPage()
parkSelect()
attractionSelect()
eaterySelect()
