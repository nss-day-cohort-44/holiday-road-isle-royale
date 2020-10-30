import { getItineraries } from "./ItineraryProvider.js"
import "./SaveButtonDisable.js"

const eventHub = document.querySelector("#container")


// needs major refactor post-friday afternoon feedback...
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        const parkImage = document.querySelector(".parkCard__image").src
        const parkName = document.querySelector(".parkCard__title").textContent
        const parkLocation = "Test City, State"
        const attractionName = document.querySelector(".bizzarreCard__title").textContent
        const attractionLocation = document.querySelector(".bizzarreCard__location").textContent
        const eateryName = document.querySelector(".eateryCard__title").textContent
        const eateryLocation = document.querySelector(".eateryCard__location").textContent

        // Make a new object representation of a note
        const newItineraryCard = {
            parkImage,
            parkName,
            parkLocation,
            attractionName,
            attractionLocation,
            eateryName,
            eateryLocation,

            // Key/value pairs here
        }
        console.log(newItineraryCard)
        // Change API state and application state
        saveItineraries(newItineraryCard)
    }
})

const saveItineraries = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
} 

