import { default as myKeys } from "../Settings.js"

// Only parks with lat, long and image
let filteredParks = []

// Mapped array wirth only info we are using in app
let ParksArray = []

export const useParks = () => {
  return filteredParks.slice()
}

export const getParks = () => {
  // debugger

  //   fetches only the parks with "scenic in the object" with a limit increase to pull in all applicable parks

  return fetch(`https://developer.nps.gov/api/v1/parks?q=scenic&limit=194&api_key=${myKeys.npsKey}`)
    .then((response) => response.json())
    .then((parsedParks) => {
      ParksArray = parsedParks

      //   Maps useful data from api array
      ParksArray = parsedParks.data.map(function (park) {
        return {
          "id": park.id,
          "name": park.name,
          "fullName": park.fullName,
          "image": park.images[0],
          "city": park.addresses[0].city,
          "state": park.addresses[0].stateCode,
          "latitude": park.latitude,
          "longitude": park.longitude,
          "description": park.description,
        }
      })
      // debugger
      for (const park of ParksArray) {
        if (park.longitude !== "" && park.latitude !== "" && park.image !== undefined) {
          filteredParks.push(park)
        }
      }
    })
}
