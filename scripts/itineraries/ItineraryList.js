const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { useAttractions } from "../attractions/AttractionProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { getItineraries, useItineraries } from "./ItineraryProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { itineraryCardHTML } from "./Itinerary.js"

eventHub.addEventListener("itineraryStateChanged", () => {
  // Put in fucntion and add onpage load funciton
  return getItineraries().then(() => {
    renderItineraries()
  })
})

export const renderItineraries = () => {
  const eateries = useEateries()
  const attractions = useAttractions()
  const parks = useParks()
  const allItineraries = useItineraries()

  //   Iterates through the array of itineraries and and uses find to pull the appropriate object from each api array.
  const itineraryArray = allItineraries.map(function (itinObj) {
    return {
      "foundPark": parks.find((chosen) => {
        return chosen.id === itinObj.park
      }),
      "foundAttraction": attractions.find((chosen) => {
        return chosen.id === parseInt(itinObj.attraction)
      }),
      "foundEatery": eateries.find((chosen) => {
        return chosen.id === parseInt(itinObj.eatery)
      }),
    }
  })

  renderSaved(itineraryArray)
}

const renderSaved = (arr) => {
  let itinerariesHTMLRepresentations = ""
  for (const itinerary of arr) {
    itinerariesHTMLRepresentations += itineraryCardHTML(itinerary)
  }
  itinerariesContainer.innerHTML = `
        <h3>SAVED ITINERARIES</h3>
        <br>
        <div class="savedCards">
        ${itinerariesHTMLRepresentations}
        </div>
        `
}
