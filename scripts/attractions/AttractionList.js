import { getAttractions, useAttractions  } from './AttractionProvider.js'

const attractionsElement = document.querySelector("#bizzarreCard")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("attractionSelected", changeEvent => {
    console.log("bizarre shit reciever pinged")   
// debugger
    if (changeEvent.target.id !== 0) {
        getAttractions()
        .then(() => {
            const attractions = useAttractions();
            const chosenAttraction = attractions.find ( taco => {
                return taco.id === parseInt(changeEvent.detail.attractionThatWasChosen)
            })
            // console.log(chosenAttraction)
            const bizarreHTML = bizarreCardHTML(chosenAttraction)
            render(bizarreHTML)
        })
    }
})   

const render = (bizarreObj) => {
    attractionsElement.innerHTML = bizarreObj
}

const bizarreCardHTML = (api) => {
    return `
    <div id="bizzarreCard--${api.id}" class="previewCard">
        <h3 class="card__category">Bizarre Attraction</h3>
        <h4 class="bizzarreCard__location">${api.state}, ${api.city}</h4>
        <h4 class="bizzarreCard__title">${api.name}</h4>
        <button id="bizzarreCard__button">Details</button>
    </div>
    `
}