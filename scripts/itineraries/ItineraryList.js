const itinerariesContainer = document.querySelector(".savedArea")
const eventHub = document.querySelector("#container")

import { getItineraries, useItineraries } from './ItineraryProvider.js'
import { itineraryCardHTML } from "./Itinerary.js"
import { useEateries } from '../eateries/EateryProvider.js'
import { useAttractions } from '../attractions/AttractionProvider.js'
import { useParks } from '../parks/ParkProvider.js'



export const ItineraryList = () => {
    debugger

    // Stores all API arrays in appropriate variables
    const eateries = useEateries();
    const attractions = useAttractions();
    const parks = useParks();

    // Declares an empty array to store the below object(s)
    let itineraryList = []

    // Creates an empty object to store relevant objects from the API arrays as propertes.
    let itineraryObject = {}
    
    getItineraries()
        .then(() => {
            
            const allItineraries = useItineraries()

            // Creates a loop based on the number of Objects in the JSON array.
            for (let i = 0; i < allItineraries.length; i++) {
                // Empties the transferring object.
                itineraryObject = {}
                // Stores the object from the 'parks' array, that matches the ID of the corresponding object in the JSON array, as a property into 'itineraryObject'.
                itineraryObject.foundPark = parks.find((chosen) => {
                    return chosen.id === (allItineraries[i].park)
                })
                // Stores the object from the 'attractions' array, that matches the ID of the corresponding object in the JSON array, as a property into 'itineraryObject'.
                itineraryObject.foundAttraction = attractions.find((chosen) => {
                    return chosen.id === parseInt(allItineraries[i].attraction)
                })
                // Stores the object from the 'eateries' array, that matches the ID of the corresponding object in the JSON array, as a property into 'itineraryObject'.
                itineraryObject.foundEatery = eateries.find((chosen) => {
                    return chosen.id === parseInt(allItineraries[i].eatery)
                })
                // Pushes the 'itineraryObject', which contains 3 objects, into the 'itineraryList' array and starts the loop over.
                itineraryList.push(itineraryObject)
            }
            // Loops the 'itneraryList' array through two HTML rendering functions.
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