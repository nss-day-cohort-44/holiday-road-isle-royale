export const itineraryCardHTML = (arrOfObj) => {
  //   Dummy Div ID

  return `

    <div id="1" class="itineraryCard">
        <h3 class="card__category">Your Itinereary</h3>
        <h4 class="itineraryCard__parkName">${arrOfObj.foundPark.name}</h4>
        <div class="itineraryCard__image">
        <img src="${arrOfObj.foundPark.image.url}" alt="image of the park">
        </div>
        <h4 class="itineraryCard__attractionName">${arrOfObj.foundAttraction.name}</h4>
        <div class="itineraryCard__attractionLocation">${arrOfObj.foundAttraction.city}, ${arrOfObj.foundAttraction.state}</div>
        <h4 class="itineraryCard__eateryName">${arrOfObj.foundEatery.businessName}</h4>
        <div class="itineraryCard__eateryLocation">${arrOfObj.foundEatery.city}, ${arrOfObj.foundEatery.state}</div>
    </div>
    `
}

//to be populated with Lat and Long: <div class="itineraryCard__location">${obj.parkLocation}</div>
