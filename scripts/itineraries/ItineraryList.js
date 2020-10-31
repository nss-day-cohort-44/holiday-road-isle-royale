const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { getItineraries, useItineraries } from './ItineraryProvider.js'
import { itineraryCardHTML } from "./Itinerary.js"
import { useEateries } from '../eateries/EateryProvider.js'
import { useAttractions } from '../attractions/AttractionProvider.js'
import { useParks } from '../parks/ParkProvider.js'



export const ItineraryList = () => {
    debugger
    const eateries = useEateries();
    const attractions = useAttractions();
    const parks = useParks();

    let itineraryList = []

    let itineraryObject = {}
    
    getItineraries()
        .then(() => {
            const allItineraries = useItineraries()

            for (let i = 0; i < allItineraries.length; i++) {
                itineraryObject = {}
                itineraryObject.foundPark = parks.find((chosen) => {
                    return chosen.id === (allItineraries[i].park)
                })
                itineraryObject.foundAttraction = attractions.find((chosen) => {
                    return chosen.id === parseInt(allItineraries[i].attraction)
                })
                itineraryObject.foundEatery = eateries.find((chosen) => {
                    return chosen.id === parseInt(allItineraries[i].eatery)
                })
                itineraryList.push(itineraryObject)
            }
            renderSaved(itineraryList)
            // console.log(foundPark)
            // console.log(foundAttraction)
            // console.log(foundEatery)
        })
}




eventHub.addEventListener("itineraryStateChanged", () => ItineraryList())

const renderSaved = (itineraries) => {
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