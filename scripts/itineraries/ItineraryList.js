const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { getItineraries, useItineraries  } from './ItineraryProvider.js'
import { itineraryCardHTML } from "./Itinerary.js"


export const ItineraryList = () => {
    getItineraries()
    .then(() => {
        const allItineraries = useItineraries()
        render(allItineraries)
        console.log(allItineraries)
    })
}

eventHub.addEventListener("itineraryStateChanged", () => ItineraryList())

const render = (itineraries) => {
    let itinerariesHTMLRepresentations = ""
    for (const itinerary of itineraries) {
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
