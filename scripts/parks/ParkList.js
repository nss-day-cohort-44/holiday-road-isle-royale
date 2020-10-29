
import { getParks, useParks  } from './ParkProvider.js'
import { parkCardHTML } from "./Park.js"

const parksElement = document.querySelector("#parkCard")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("parkSelect", changeEvent => {
    console.log("parks reciever pinged")    
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


const render = (parkObj) => {
    
    parksElement.innerHTML = 
    `
    <h3>Park</h3>
    ${parkObj}
    `
}

