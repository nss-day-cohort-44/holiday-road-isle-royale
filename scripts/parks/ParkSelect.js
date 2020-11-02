import { getParks, useParks } from "./ParkProvider.js"

const eventHub = document.querySelector("#container")
const parkSelectElement = document.querySelector("#parksFilter")

export const parkSelect = () => {
  return getParks().then(() => {
    const parks = useParks()
    parksSelectHTML(parks)
  })
}

// renders dropdown options based on the parks array
const parksSelectHTML = (parks) => {
  // debugger
  parkSelectElement.innerHTML = `
    <option value="0">Please Select a Park... </option>
    ${parks
      .map((park) => {
        return `<option value="${park.id}">${park.name}</option>`
      })
      .join(" ")}
    `
}

// Custom "change" event. Every time we select a park, broadcasts the value of the park to the event object so we know which park to render in preview
eventHub.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "parksFilter") {
    const customEvent = new CustomEvent("parkSelect", {
      detail: {
        parkThatWasChosen: changeEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
    console.log(customEvent)
    // console.log(changeEvent)
  }
})

eventHub.addEventListener("itineraryStateChanged", () => {
  parkSelect();
})