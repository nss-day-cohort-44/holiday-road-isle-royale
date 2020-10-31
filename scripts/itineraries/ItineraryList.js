const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { useAttractions } from "../attractions/AttractionProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { getItineraries, useItineraries } from "./ItineraryProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { itineraryCardHTML } from "./Itinerary.js"

// eventHub.addEventListener("onload", (e) => {
//   return getItineraries().then(() => {
//     renderItineraries()
//   })
// })

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
  console.log(allItineraries)
  renderSaved(itineraryArray, "foundPark", "foundAttraction", "foundEatery")
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

// ***************************************

// getItineraries().then(() => {
//     const allItineraries = useItineraries()
//     const itineraryArray = allItineraries.map(function (itinObj) {
//       return {
//         "foundPark": parks.find((chosen) => {
//           return chosen.id === itinerary.park
//         }),
//         "foundAttraction": attractions.find((chosen) => {
//           return chosen.id === parseInt(itinerary.attraction)
//         }),
//       }
//     })
//     console.log("AFTER ITINLIST", itineraryArray)
//     console.log("AFTER ITINLIST", parks)
//   })
