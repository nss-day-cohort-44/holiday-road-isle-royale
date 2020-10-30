export const itineraryCardHTML = (obj) => {
    return `
    <div id="${obj.id}" class="itineraryCard">
        <h3 class="card__category">Your Itinereary</h3>
        <h4 class="itineraryCard__parkName">${obj.parkName}</h4>
        <div class="itineraryCard__image">
        <img src="${obj.parkImage}" alt="image of the park">
        </div>
        <h4 class="itineraryCard__attractionName">${obj.attractionName}</h4>
        <div class="itineraryCard__attractionLocation">${obj.attractionLocation}</div>
        <h4 class="itineraryCard__eateryName">${obj.eateryName}</h4>
        <div class="itineraryCard__eateryLocation">${obj.eateryLocation}</div>
    </div>
    `
}

//to be populated with Lat and Long: <div class="itineraryCard__location">${obj.parkLocation}</div>