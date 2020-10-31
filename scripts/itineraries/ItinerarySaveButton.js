import { saveItineraries } from "./ItineraryProvider.js"

const eventHub = document.querySelector("#container")

let dataObject = {
    park: "",
    attraction: "",
    eatery: "",
}

eventHub.addEventListener("parkSelect", eventObj => {
    dataObject.park = eventObj.detail.parkThatWasChosen
    console.log(dataObject)
})

eventHub.addEventListener("eaterySelect", eventObj => {
    dataObject.eatery = eventObj.detail.eateryThatWasChosen
    console.log(dataObject)
})

eventHub.addEventListener("attractionSelected", eventObj => {
    dataObject.attraction = eventObj.detail.attractionThatWasChosen
    console.log(dataObject)
})


// needs major refactor post-friday afternoon feedback...
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        saveItineraries(dataObject)
    }
})

// disable functionality 


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
