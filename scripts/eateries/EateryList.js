import { useEateries } from "./EateryProvider.js"
import { eateryCardHTML, eateryCardPreviewHTML } from "./Eatery.js"

const contentElement = document.querySelector("#eateryCard")
const eventHub = document.querySelector("#container")

//Listens for selected eatery. Matches id from event object to eatery id. Then renders the preview eatery in the dom.
eventHub.addEventListener("eaterySelect", (changeEvent) => {
  //   Sets the preview to empty at "0" index on select
  if (changeEvent.detail.eateryThatWasChosen === "0") {
    return (contentElement.innerHTML = "")
  }
  if (changeEvent.target.id !== 0) {
    const eateries = useEateries()
    const chosenEatery = eateries.find((chosen) => {
      return chosen.id === parseInt(changeEvent.detail.eateryThatWasChosen)
    })

    const eateryHTML = eateryCardPreviewHTML(chosenEatery)
    render(eateryHTML)
  }
})

//  Details Btn
// Listens for detail btn click. Renders the full eatery details in the dom.
eventHub.addEventListener("eateryDetailButtonClicked", (clickEvent) => {
  const eateries = useEateries()
  const chosenEateryDescription = eateries.find((chosen) => {
    return chosen.id === parseInt(clickEvent.detail.eateryThatWasChosen)
  })

  const eateryHTML = eateryCardHTML(chosenEateryDescription)
  render(eateryHTML)
})

// Minimizes full eatery details.
eventHub.addEventListener("eateryMinimizeButtonClicked", (changeEvent) => {
  if (changeEvent.target.id !== 0) {
    const eateries = useEateries()
    const chosenEatery = eateries.find((chosen) => {
      return chosen.id === parseInt(changeEvent.detail.eateryThatWasChosen)
    })

    const eateryHTML = eateryCardPreviewHTML(chosenEatery)
    render(eateryHTML)
  }
})

const render = (eateryObj) => {
  contentElement.innerHTML = eateryObj
}
