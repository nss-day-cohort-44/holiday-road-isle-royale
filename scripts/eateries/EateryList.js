import { getEateries, useEateries } from "./EateryProvider.js"
import { eateryCardHTML } from "./Eatery.js"

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
                
                const eateryHTML = eateryCardHTML(chosenEatery)
                render(eateryHTML)
            })
    }
})

const render = (eateryObj) => {
    contentElement.innerHTML = eateryObj
}
