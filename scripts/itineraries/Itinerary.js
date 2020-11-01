export const itineraryCardHTML = (obj) => {
    return `
    <div id="${obj.id}" class="itineraryCard">
        <h3 class="card__category">Your Itinereary</h3>
        <h4 class="itineraryCard__parkName">${obj.foundPark.name}</h4>
        <img class="itineraryCard__image" src="${obj.foundPark.image.url}" alt="image of the park">
        <h4 class="itineraryCard__attractionName">${obj.foundAttraction.name}</h4>
        <div class="itineraryCard__attractionLocation">${obj.foundAttraction.city}, ${obj.foundAttraction.state}</div>
        <h4 class="itineraryCard__eateryName">${obj.foundEatery.businessName}</h4>
        <div class="itineraryCard__eateryLocation">${obj.foundEatery.city}, ${obj.foundEatery.state}</div>
    </div>
    `
}

//to be populated with Lat and Long: <div class="itineraryCard__location">${obj.parkLocation}</div>