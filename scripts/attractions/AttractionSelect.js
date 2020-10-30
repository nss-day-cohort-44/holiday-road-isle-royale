import { getAttractions, useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector("#container")
const attractionselectElement = document.querySelector("#bizarreFilter")

export const attractionSelect = () => {
  return getAttractions().then(() => {
    const attractions = useAttractions()
    attractionsSelectHTML(attractions)
  })
}

// Renders attraction dropdown
const attractionsSelectHTML = (attractions) => {
  attractionselectElement.innerHTML = `
    <option value="0">Please Select a Bizarre Attraction... </option>
    ${attractions
      .map((taco) => {
        return `<option value="${taco.id}">${taco.name}</option>`
      })
      .join(" ")}
    `
}

// Creates event to attach attraction id to event object
eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "bizarreFilter") {
    const customEvent = new CustomEvent("attractionSelected", {
      detail: {
        attractionThatWasChosen: changeEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
    console.log(customEvent)
  }
})
