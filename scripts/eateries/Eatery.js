import { preview } from "../Preview.js"

const eventHub = document.querySelector("#container")

// Creates html for eatery preview
export const eateryCardPreviewHTML = (api) => {
  const shortenedDescription = preview(api.description)

  return `
    <div id="${api.id}">
        <h3 class="card__category">Eatery</h3>
        <br>
        <h4 class="eateryCard__title title">${api.businessName}</h4>
        <div class="eateryCard__location location">${api.city}, ${api.state}</div>
        <br>
        <div class="eateryCard__preview preview">${shortenedDescription}....</div>
        <br>
        <button id="eateryCard__button" value="${api.id}">Details</button>
    </div>
              `
}

// Listens for detail btn click and attaches eatery id to event object
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "eateryCard__button") {
    const customEvent = new CustomEvent("eateryDetailButtonClicked", {
      detail: {
        eateryThatWasChosen: clickEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

// Creates eatery full detail card and addds minimize btn

export const eateryCardHTML = (api) => {
  return `
     <div id="${api.id}" >
         <h3 class="card__category">Eatery</h3>
         <br>
         <h4 class="eateryCard__title title">${api.businessName}</h4>
         <div class="eateryCard__location location">${api.city}, ${api.state}</div>
         <br>
         <div class="eateryCard__description description">${api.description}</div>
         <br>
         <button id="eateryCard__minimize" value="${api.id}">Minimize</button>
     </div>
               `
}

// Listens for minimize btn click and attaches eatery id to event object.

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "eateryCard__minimize") {
    const customEvent = new CustomEvent("eateryMinimizeButtonClicked", {
      detail: {
        eateryThatWasChosen: clickEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
