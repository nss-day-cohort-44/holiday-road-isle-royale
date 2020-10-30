const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { getItineraries, useItineraries } from './ItineraryProvider.js'
import { itineraryCardHTML } from "./Itinerary.js"
import { useEateries } from '../eateries/EateryProvider.js'
import { useAttractions } from '../attractions/AttractionProvider.js'
import { useParks } from '../parks/ParkProvider.js'

const eateries = useEateries();
const attractions = useAttractions();
const parks = useParks();



export const ItineraryList = () => {
    getItineraries()
        .then(() => {
            const allItineraries = useItineraries()
            // renderSaved(allItineraries)
            let foundPark = ""
            let foundAttraction = ""
            let foundEatery = ""
            for (const itinerary of allItineraries) {
                foundPark = parks.find((chosen) => {
                    return chosen.id === (itinerary.park)
                })
                foundAttraction = attractions.find((chosen) => {
                    return chosen.id === parseInt(itinerary.attraction)
                })
                foundEatery = eateries.find((chosen) => {
                    return chosen.id === parseInt(itinerary.eatery)
                })
                
            }
                console.log(foundPark)
                console.log(foundAttraction)
                console.log(foundEatery) 
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