export const bizarreCardHTML = (api) => {
    return `
    <div id="bizzarreCard--${api.id}" class="previewCard">
        <h3 class="card__category">Bizarre Attraction</h3>
        <div class="bizzarreCard__location location">${api.state}, ${api.city}</div>
        <h4 class="bizzarreCard__title title">${api.name}</h4>
        <button id="bizzarreCard__button">Details</button>
    </div>
    `
}