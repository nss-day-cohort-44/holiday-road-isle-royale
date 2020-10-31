import { getAttractions } from "./attractions/AttractionProvider.js"
import { getParks } from "./parks/ParkProvider.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { attractionSelect } from "./attractions/AttractionSelect.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { ItineraryList } from "./itineraries/ItineraryList.js"
import "./parks/ParkList.js"
import "./attractions/AttractionList.js"
import "./eateries/EateryList.js"
import "./weather/WeatherList.js"
import "./itineraries/ItinerarySaveButton.js"
debugger
ItineraryList()
getParks()
parkSelect()
getAttractions()
attractionSelect()
getEateries()
eaterySelect()
