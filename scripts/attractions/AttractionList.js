import { useAttractions } from "./AttractionProvider.js"
import { bizarreCardHTML, bizarreCardPreviewHTML } from "./Attraction.js"

const attractionsElement = document.querySelector("#bizzarreCard")
const eventHub = document.querySelector("#container")

//Listens for selected attraction. Matches id from event object to attraction id. Then renders the preview attraction in the dom.
eventHub.addEventListener("attractionSelected", (changeEvent) => {
    // debugger
    if (changeEvent.target.id !== 0) {
        const attractions = useAttractions()
        const chosenAttraction = attractions.find((taco) => {
            return taco.id === parseInt(changeEvent.detail.attractionThatWasChosen)
        })
        const bizarreHTML = bizarreCardPreviewHTML(chosenAttraction)
        render(bizarreHTML)
    }
})

// Details Btn
// Listens for detail btn click. Renders the full attraction details in the dom.
eventHub.addEventListener("attractionsDetailButtonClicked", (clickEvent) => {
    const attractions = useAttractions()
    const chosenAttractionDescription = attractions.find((chosen) => {
        return chosen.id === parseInt(clickEvent.detail.attractionThatWasChosen)
    })
    const attractionHTML = bizarreCardHTML(chosenAttractionDescription)
    render(attractionHTML)
})

// Minimizes full attraction details.
eventHub.addEventListener("attractionMinimizeButtonClicked", (changeEvent) => {
    if (changeEvent.target.id !== 0) {
        const attractions = useAttractions()
        const chosenAttraction = attractions.find((taco) => {
            return taco.id === parseInt(changeEvent.detail.attractionThatWasChosen)
        })
        const bizarreHTML = bizarreCardPreviewHTML(chosenAttraction)
        render(bizarreHTML)
    }
})

const render = (bizarreObj) => {
    attractionsElement.innerHTML = bizarreObj
}
