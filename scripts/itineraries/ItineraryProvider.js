import { ItineraryList } from "./ItineraryList.js"

const eventHub = document.querySelector("#container")

const saveBtn = document.querySelector("#saveButton")
saveBtn.disabled = true

eventHub.addEventListener("change",event => {
    const parkFilter = document.querySelector("#parksFilter")
    const bizarreFilter = document.querySelector("#bizarreFilter")
    const eatsFilter = document.querySelector("#eatsFilter")

    if(parkFilter.value === "0" || bizarreFilter.value === "0" || eatsFilter.value === "0") {
        saveBtn.disabled = true
    } else {
        saveBtn.disabled = false

    }
})


const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
} 

let itineraries = []

export const useItineraries= () => {
    // debugger 
    return itineraries.slice()
}

export const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
            // console.log(itineraries)
        })
}

export const saveItineraries = itinerary => {
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

