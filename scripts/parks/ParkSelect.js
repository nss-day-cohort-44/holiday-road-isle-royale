
import { getParks, useParks } from "./ParkProvider.js"

const eventHub = document.querySelector("#container")
const parkSelectElement = document.querySelector("#parksFilter")

export const parkSelect = () => {
    return getParks()
        .then(() => {
            const parks = useParks()
            parksSelectHTML(parks)
        })
}


const parksSelectHTML = parks => {
    parkSelectElement.innerHTML = `
    <option value="0">Please Select a Park... </option>
    ${parks.map(park => {
        return `<option value="${park.id}">${park.name}</option>`
    }).join(" ")
        }
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parksFilter") {
        const customEvent = new CustomEvent("parkSelect", {
            detail: {
                parkThatWasChosen: changeEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
    }
})