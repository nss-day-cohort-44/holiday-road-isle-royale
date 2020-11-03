const eventHub = document.querySelector("#container")

// Renders the park preview
export const parkCardHTML = (api) => {
  return `
        <img class="parkCard__image" src="${api.image.url}">
        <h4 class="parkCard__title title">${api.fullName}</h4>
        <button id="parkCard__button" value="${api.id}">Details</button>
    </div>
    `
}

// Creates event to listen for click on detail btn. Attached park id to event object.
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "parkCard__button") {
    const customEvent = new CustomEvent("parkDetailButtonClicked", {
      detail: {
        parkThatWasChosen: clickEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})

// creates full detail park card. Adds minimize btn.
export const parkCardDescriptionHTML = (api) => {
  return `
    <div id="${api.id}" >
        <img class="parkCard__image" src="${api.image.url}">
        <h4 class="parkCard__title title">${api.fullName}</h4>
        <br>
         <div class="parkCard__description description">${api.description}</div>
         <br>
        <button id="parkCard__minimize" value="${api.id}">Minimize</button>
    </div>
    `
}

// Creates event to listen for click on minimize btn. Attached park id to event object.

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "parkCard__minimize") {
    const customEvent = new CustomEvent("parkMinimizeButtonClicked", {
      detail: {
        parkThatWasChosen: clickEvent.target.value,
      },
    })
    eventHub.dispatchEvent(customEvent)
  }
})
