import { getAttractions, useAttractions  } from './AttractionProvider.js'
import { bizarreCardHTML } from "./Attraction.js"

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

