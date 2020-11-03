import { preview } from "../Preview.js"

const eventHub = document.querySelector("#container")

// Creates html for attraction preview
export const bizarreCardPreviewHTML = (api) => {
  const shortenedDescription = preview(api.description)

  return `
    <div id="bizzarreCard--${api.id}">
        <h3 class="card__category">Bizarre Attraction</h3>
        <br>
        <h4 class="bizzarreCard__title title">${api.name}</h4>
        <div class="bizzarreCard__location location">${api.city}, ${api.state}</div>
        <br>
        <div class="bizarreCard__preview preview">${shortenedDescription}....</div>
        <br>
        <button id="bizzarreCard__button" value="${api.id}">Details</button>
    </div>
    `
}

// Listens for detail btn click and attaches attraction id to event object
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "bizzarreCard__button") {
    const customEvent = new CustomEvent("attractionsDetailButtonClicked", {
      detail: {
        attractionThatWasChosen: clickEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

// Creates attraction full detail card and addds minimize btn
export const bizarreCardHTML = (api) => {
  return `
    <div id="bizzarreCard--${api.id}">
        <h3 class="card__category">Bizarre Attraction</h3>
        <br>
        <h4 class="bizzarreCard__title title">${api.name}</h4>
        <div class="bizzarreCard__location location">${api.state}, ${api.city}</div>
        <br>
        <div class="bizarreCard__preview preview">${api.description}</div>
        <br>
        <button id="bizzarreCard__minimize" value="${api.id}">Minimize</button>
    </div>
    `
}

// Listens for minimize btn click and attaches attraction id to event object.

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "bizzarreCard__minimize") {
    const customEvent = new CustomEvent("attractionMinimizeButtonClicked", {
      detail: {
        attractionThatWasChosen: clickEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
