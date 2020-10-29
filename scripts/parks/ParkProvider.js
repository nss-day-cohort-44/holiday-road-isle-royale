import { default as myKeys } from "../Settings.js"

// console.log(myKeys.npsKey)

let ParksArray = []

export const useParks= () => {
    // debugger 
    return ParksArray.slice()
}

export const getParks = () => {
    // debugger
    return fetch(`https://developer.nps.gov/api/v1/parks?q=scenic&limit=193&api_key=${myKeys.npsKey}`)
    .then(response => response.json())
    .then(
        parsedParks => {
            
            ParksArray = parsedParks

            ParksArray = parsedParks.data.map(function (park) {return{"id": park.id, "Name": park.name, "fullName": park.fullName, "Image": park.images[0], "City": park.addresses[0].city, "State": park.addresses[0].stateCode, "Latitude": park.latitude, "Longitude": park.longitude, "Description": park.description}})

            console.log(ParksArray)      

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