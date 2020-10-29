
import { getParks, useParks  } from './ParkProvider.js'

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
    parksElement.innerHTML = parkObj
}

const parkCardHTML = (api) => {
    return `
    <div id="${api.id}" class="previewCard">
        <h3 class="card__category">Park</h3>
        <img class="parkCard__image" src="${api.images[0].url}">
        <h4 class="parkCard__title">${api.fullName}</h4>
        <button id="parkCard__button">Details</button>
    </div>
    `
}