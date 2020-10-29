export const eateryCardHTML = (api) => {
    return `
    <div id="${api.id}" class="previewCard">
        <h3 class="card__category">Eatery</h3>
        <div class="eateryCard__location">${api.state}, ${api.city}</div>
        <h4 class="eateryCard__title">${api.businessName}</h4>
        <button id="eateryCard__button">Details</button>
    </div>
              `
}


