import { getAttractions, useAttractions  } from './AttractionProvider.js'
import { bizarreCardHTML, bizarreCardPreviewHTML } from "./Attraction.js"

const attractionsElement = document.querySelector("#bizzarreCard")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("attractionSelected", changeEvent => {
    console.log("bizarre shit reciever pinged")   
// debugger
    if (changeEvent.target.id !== 0) {
            const attractions = useAttractions();
            const chosenAttraction = attractions.find ( taco => {
                return taco.id === parseInt(changeEvent.detail.attractionThatWasChosen)
            })
            // console.log(chosenAttraction)
            const bizarreHTML = bizarreCardPreviewHTML(chosenAttraction)
            render(bizarreHTML)
    }
})   

eventHub.addEventListener("attractionsDetailButtonClicked", clickEvent => {
        const attractions = useAttractions()
        const chosenAttractionDescription = attractions.find( chosen => {
            return chosen.id === parseInt(clickEvent.detail.attractionThatWasChosen)
        })
        const attractionHTML = bizarreCardHTML(chosenAttractionDescription)
        render(attractionHTML)
})

eventHub.addEventListener("attractionMinimizeButtonClicked", changeEvent => {
    if (changeEvent.target.id !== 0) {
                const attractions = useAttractions();
                const chosenAttraction = attractions.find ( taco => {
                    return taco.id === parseInt(changeEvent.detail.attractionThatWasChosen)
                })
                const bizarreHTML = bizarreCardPreviewHTML(chosenAttraction)
                render(bizarreHTML)
        }
    })   

const render = (bizarreObj) => {
    attractionsElement.innerHTML = bizarreObj
}

