
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
