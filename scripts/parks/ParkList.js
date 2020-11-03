import { useParks } from "./ParkProvider.js"
import { parkCardHTML, parkCardDescriptionHTML } from "./Park.js"

const parksElement = document.querySelector("#parkCard")
const eventHub = document.querySelector("#container")

//Listens for selected park. Matches id from event object to park id. Then renders the preview park in the dom.
eventHub.addEventListener("parkSelect", (changeEvent) => {
  // Makes park preview Blank
  if (changeEvent.detail.parkThatWasChosen === "0") {
    return (parksElement.innerHTML = "")
  }
  if (changeEvent.target.id !== 0) {
    const parks = useParks()
    const chosenPark = parks.find((taco) => {
      return taco.id === changeEvent.detail.parkThatWasChosen
    })
    const parksHTML = parkCardHTML(chosenPark)

    render(parksHTML)
  }
})
// Details Btn
// Listens for detail btn click. Renders the full park details in the dom.
eventHub.addEventListener("parkDetailButtonClicked", (changeEvent) => {
  // console.log("parks reciever pinged")
  // debugger
  if (changeEvent.target.id !== 0) {
    const parks = useParks()
    const chosenPark = parks.find((taco) => {
      return taco.id === changeEvent.detail.parkThatWasChosen
    })
    const parksHTML = parkCardDescriptionHTML(chosenPark)
    render(parksHTML)
    // })
  }
})

// Minimizes full park details.
eventHub.addEventListener("parkMinimizeButtonClicked", (changeEvent) => {
  if (changeEvent.target.id !== 0) {
    const parks = useParks()
    const chosenPark = parks.find((taco) => {
      return taco.id === changeEvent.detail.parkThatWasChosen
    })
    const parksHTML = parkCardHTML(chosenPark)
    render(parksHTML)
  }
})

const render = (parkObj) => {
  parksElement.innerHTML = `
    <h3>Park</h3>
    ${parkObj}
    `
}

eventHub.addEventListener("itineraryStateChanged", () => {
  parksElement.innerHTML = ""
})
