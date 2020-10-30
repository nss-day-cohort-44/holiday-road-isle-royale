import { getAttractions } from "./attractions/AttractionProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import "./parks/ParkList.js"
import "./attractions/AttractionList.js"
import "./eateries/EateryList.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { ItineraryList } from "./itineraries/ItineraryList.js"
import "./weather/WeatherList.js"
import "./itineraries/SaveButtonDisable.js"
import "./itineraries/ItinerarySaveButton.js"

console.log("main module test")
parkSelect()
getAttractions()
attractionSelect()

getEateries()
eaterySelect()
ItineraryList()
