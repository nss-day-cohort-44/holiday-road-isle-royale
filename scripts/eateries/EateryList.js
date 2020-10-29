import { getEateries, useEateries } from "./EateryProvider.js"
import { eateryCardHTML, eateryCardPreviewHTML } from "./Eatery.js"

const contentElement = document.querySelector("#eateryCard")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("eaterySelect", changeEvent => {
    if (changeEvent.target.id !== 0) {
        getEateries()
            .then(() => {
                const eateries = useEateries()
                const chosenEatery = eateries.find( chosen => {
                    return chosen.id === parseInt(changeEvent.detail.eateryThatWasChosen)
                })
                
                const eateryHTML = eateryCardPreviewHTML(chosenEatery)
                render(eateryHTML)
            })
    }
})

eventHub.addEventListener("eateryDetailButtonClicked", clickEvent => {
    // debugger
    getEateries()
            .then(() => {
                const eateries = useEateries()
                const chosenEateryDescription = eateries.find( chosen => {
                    return chosen.id === parseInt(clickEvent.detail.eateryThatWasChosen)
                })
                
                const eateryHTML = eateryCardHTML(chosenEateryDescription)
                render(eateryHTML)
            })
            
})

eventHub.addEventListener("eateryMinimizeButtonClicked", changeEvent => {
    if (changeEvent.target.id !== 0) {
        getEateries()
            .then(() => {
                const eateries = useEateries()
                const chosenEatery = eateries.find( chosen => {
                    return chosen.id === parseInt(changeEvent.detail.eateryThatWasChosen)
                })
                
                const eateryHTML = eateryCardPreviewHTML(chosenEatery)
                render(eateryHTML)
            })
    }
})

const render = (eateryObj) => {
    contentElement.innerHTML = `
    <h3 class="card__category">Eatery</h3>
    ${eateryObj}
    `
}
