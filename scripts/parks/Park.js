export const parkCardHTML = (api) => {
    return `
        <img class="parkCard__image" src="${api.image.url}">
        <h4 class="parkCard__title title">${api.fullName}</h4>
        <button id="parkCard__button">Details</button>

    `
}