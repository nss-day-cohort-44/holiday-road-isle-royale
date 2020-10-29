export const parkCardHTML = (api) => {
    return `
    <div id="${api.id}" class="previewCard">
        <h3 class="card__category">Park</h3>
        <img class="parkCard__image" src="${api.images[0].url}">
        <h4 class="parkCard__title title">${api.fullName}</h4>
        <button id="parkCard__button">Details</button>
    </div>
    `
}