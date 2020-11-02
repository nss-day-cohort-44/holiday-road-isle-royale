import { saveItineraries } from "./ItineraryProvider.js"

const eventHub = document.querySelector("#container")

let dataObject = {
  park: "",
  attraction: "",
  eatery: "",
}

eventHub.addEventListener("parkSelect", (eventObj) => {
  dataObject.park = eventObj.detail.parkThatWasChosen
  // console.log(dataObject)
})

eventHub.addEventListener("eaterySelect", (eventObj) => {
  dataObject.eatery = eventObj.detail.eateryThatWasChosen
  // console.log(dataObject)
})

eventHub.addEventListener("attractionSelected", (eventObj) => {
  dataObject.attraction = eventObj.detail.attractionThatWasChosen
  // console.log(dataObject)
})

// needs major refactor post-friday afternoon feedback...
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveButton") {
    saveItineraries(dataObject)
  }
})

// disable functionality

const saveBtn = document.querySelector("#saveButton")
saveBtn.disabled = true

eventHub.addEventListener("change", (event) => {
  console.log(dataObject)

  //   this could be shorter if the ids were always parsed.
  if (
    dataObject.park === "" ||
    dataObject.park === "0" ||
    dataObject.attraction === "" ||
    dataObject.attraction === "0" ||
    dataObject.eatery === "" ||
    dataObject.eatery === "0"
  ) {
    saveBtn.disabled = true
  } else {
    saveBtn.disabled = false
  }
})
