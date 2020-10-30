import { useEateries, getEateries } from "./EateryProvider.js"

const eventHub = document.querySelector("#container")
const contentElement = document.querySelector("#eatsFilter")

export const eaterySelect = () => {
  return getEateries().then(() => {
    const eateries = useEateries()
    render(eateries)
  })
}

// Renders eatery dropdown
const render = (eateries) => {
  contentElement.innerHTML = `
    <option value="0">Please Select an Eatery... </option>
    ${eateries
      .map((eatery) => {
        return `<option value="${eatery.id}">${eatery.businessName}</option>`
      })
      .join(" ")}
    `
}

// Creates event to attach eatery id to event object

eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "eatsFilter") {
    const customEvent = new CustomEvent("eaterySelect", {
      detail: {
        eateryThatWasChosen: changeEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
