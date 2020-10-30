import { default as myKeys } from "../Settings.js"

// console.log(myKeys.npsKey)

let filteredParks = []
let ParksArray = []

export const useParks = () => {
    return filteredParks.slice()
}

export const getParks = () => {
    // debugger
    return fetch(`https://developer.nps.gov/api/v1/parks?q=scenic&limit=193&api_key=${myKeys.npsKey}`)
        .then(response => response.json())
        .then(
            parsedParks => {

                ParksArray = parsedParks

                ParksArray = parsedParks.data.map(function (park) { return { "id": park.id, "name": park.name, "fullName": park.fullName, "image": park.images[0], "city": park.addresses[0].city, "state": park.addresses[0].stateCode, "latitude": park.latitude, "longitude": park.longitude, "description": park.description } })
                // debugger
                for (const park of ParksArray) {
                    if (park.longitude !== "" || park.longitude !== "" || park.image !== undefined) {
                        filteredParks.push(park)
                    }
                }
                // console.log("ParksArray", ParksArray)
                console.log("filteredParks", filteredParks)
            }
        )
}

// const parksInfo = ParksArray.map(function (park) {return{"ID": park.id,"Name": park.fullName}})

// console.log("PARKINFO MAP", parksInfo)


    // const url = "https://api.football-data.org/v2/matches";
    // fetch(url, {
        //   method: "GET",
        //   headers: {
            //     "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e"
            //   }
            // })
            // const npsURL = "https://developer.nps.gov/api/v1/parks?api_key="