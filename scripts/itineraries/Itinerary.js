export const itineraryCardHTML = (obj) => {
  // Destructed object variables
  const {
    foundPark: {
      name: name,
      longitude: longitude,
      latitude: latitude,
      image: { url: url },
    },
    foundAttraction: { name: aName, city: aCity, state: aState },
    foundEatery: { businessName: businessName, city: eCity, state: eState },
  } = obj

  return `
    <div id="${obj.id}" class="itineraryCard">
        <h3 class="card__category">Your Itinereary</h3>
        <h4 class="itineraryCard__parkName">${name}</h4>
        <p>Lat: ${latitude}  Long: ${longitude}</p>
      
        <img class="itineraryCard__image" src="${url}" alt="image of the park">
        <h4 class="itineraryCard__attractionName">${aName}</h4>
        <div class="itineraryCard__attractionLocation">${aCity}, ${aState}</div>
        <h4 class="itineraryCard__eateryName">${businessName}</h4>
        <div class="itineraryCard__eateryLocation">${eCity}, ${eState}</div>
    </div>
    `
}

//to be populated with Lat and Long: <div class="itineraryCard__location">${obj.parkLocation}</div>
