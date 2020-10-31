const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { useItineraries } from "./ItineraryProvider.js"
import { itineraryCardHTML } from "./Itinerary.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { useParks } from "../parks/ParkProvider.js"

export const ItineraryList = () => {}

eventHub.addEventListener("itineraryStateChanged", () => {
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
  renderSaved(itineraryArray, "foundPark", "foundAttraction", "foundEatery")
})

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

//     const parkImage = document.querySelector(".parkCard__image").src
//     const parkName = document.querySelector(".parkCard__title").textContent
//     const parkLocation = "Test City, State"
//     const attractionName = document.querySelector(".bizzarreCard__title").textContent
//     const attractionLocation = document.querySelector(".bizzarreCard__location").textContent
//     const eateryName = document.querySelector(".eateryCard__title").textContent
//     const eateryLocation = document.querySelector(".eateryCard__location").textContent

//     // Make a new object representation of a note
//     const newItineraryCard = {
//         parkImage,
//         parkName,
//         parkLocation,
//         attractionName,
//         attractionLocation,
//         eateryName,
//         eateryLocation,

//         // Key/value pairs here

// ***************************************

// let foundPark = ""
// let foundAttraction = ""
// let foundEatery = ""
// for (const itinerary of allItineraries) {
//   foundPark = parks.find((chosen) => {
//     return chosen.id === itinerary.park
//   })
//   foundAttraction = attractions.find((chosen) => {
//     return chosen.id === parseInt(itinerary.attraction)
//   })
//   foundEatery = eateries.find((chosen) => {
//     return chosen.id === parseInt(itinerary.eatery)
//   })
// }
// console.log(foundPark)
// console.log(foundAttraction)
// console.log(foundEatery)

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
