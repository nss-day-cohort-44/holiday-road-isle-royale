import { attractionSelect } from "./attractions/AttractionSelect.js"
import { eaterySelect } from "./eateries/EaterySelect.js"
import { parkSelect } from "./parks/ParkSelect.js"
import { pageLoad } from "./pageLoad.js"

import "./itineraries/ItinerarySaveButton.js"
import "./attractions/AttractionList.js"
import "./eateries/EateryList.js"
import "./weather/WeatherList.js"
import "./parks/ParkList.js"

pageLoad()
parkSelect()
attractionSelect()
eaterySelect()

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
