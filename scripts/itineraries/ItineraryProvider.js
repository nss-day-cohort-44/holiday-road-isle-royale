const eventHub = document.querySelector("#container")
// set empty array for our itineraties we will be using form our JSON server
let itineraries = []

// Duh...
export const useItineraries= () => {
    // debugger 
    return itineraries.slice()
}

// fetches from 'itineraries' the most recent state of the saved itineraries
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

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
} 

