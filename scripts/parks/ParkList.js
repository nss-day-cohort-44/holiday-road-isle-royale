
import { getParks, useParks  } from './ParkProvider.js'
import { parkCardHTML, parkCardDescriptionHTML } from "./Park.js"

const parksElement = document.querySelector("#parkCard")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("parkSelect", changeEvent => {
    // console.log("parks reciever pinged")    
    // debugger
    if (changeEvent.target.id !== 0) {
    getParks()
        .then(() => {
            const parks = useParks()
            const chosenPark = parks.find( taco => {
                return taco.id === changeEvent.detail.parkThatWasChosen
            })
            const parksHTML = parkCardHTML(chosenPark)
            render(parksHTML)
        })
    }
})

eventHub.addEventListener("parkDetailButtonClicked", changeEvent => {
    // console.log("parks reciever pinged")    
    // debugger
    if (changeEvent.target.id !== 0) {
    getParks()
        .then(() => {
            const parks = useParks()
            const chosenPark = parks.find( taco => {
                return taco.id === changeEvent.detail.parkThatWasChosen
            })
            const parksHTML = parkCardDescriptionHTML(chosenPark)
            render(parksHTML)
        })
    }
})

eventHub.addEventListener("parkMinimizeButtonClicked", changeEvent => {
    if (changeEvent.target.id !== 0) {
        getParks()
            .then(() => {
                const parks = useParks()
                const chosenPark = parks.find( taco => {
                    return taco.id === changeEvent.detail.parkThatWasChosen
                })
                const parksHTML = parkCardHTML(chosenPark)
                render(parksHTML)
        })
    }
})

const render = (parkObj) => {
    
    parksElement.innerHTML = 
    `
    <h3>Park</h3>
    ${parkObj}
    `
}

