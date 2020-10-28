
import { getParks, useParks  } from './ParkProvider.js'

const parksElement = document.querySelector("#parkCard")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("parkSelect", changeEvent => {
    if (changeEvent.target.id !== 0) {
    getParks()
        .then(() => {
            const parks = useParks()
            const parksHTML = parkCardHTML(parks)
            render(parksHTML)
        })
    }
})


const render = (parkObj) => {
    parksElement.innerHTML = parkObj
}


export const parkCardHTML = (api) => {
    return `
    <div id="${api.data.id}" class="previewCard">
        <h3 class="card__category">Park</h3>
        <img class="parkCard__image" src="${api.images[0].url}">
        <h4 class="parkCard__title">${api.data.fullName}</h4>
        <button id="parkCard__button">Details</button>
    </div>
              `
}