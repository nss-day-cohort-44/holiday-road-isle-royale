import { ItineraryList } from "./ItineraryList.js"





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



