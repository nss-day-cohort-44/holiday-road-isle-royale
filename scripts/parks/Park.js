const eventHub = document.querySelector("#container")

export const parkCardHTML = (api) => {
    return `
        <img class="parkCard__image" src="${api.image.url}">
        <h4 class="parkCard__title title">${api.fullName}</h4>
        <button id="parkCard__button" value="${api.id}">Details</button>
    </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "parkCard__button") {
        const customEvent = new CustomEvent("parkDetailButtonClicked", {
            detail: {
                parkThatWasChosen: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const parkCardDescriptionHTML = (api) => {
    return `
    <div id="${api.id}" >
        <h3 class="card__category">Park</h3>
        <img class="parkCard__image" src="${api.image.url}">
        <h4 class="parkCard__title title">${api.fullName}</h4>
        <br>
         <div class="parkCard__description description">${api.description}</div>
         <br>
        <button id="parkCard__minimize" value="${api.id}">Minimize</button>
    </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "parkCard__minimize") {
        const customEvent = new CustomEvent("parkMinimizeButtonClicked", {
            detail: {
                parkThatWasChosen: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
