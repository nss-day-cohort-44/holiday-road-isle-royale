import { default as myKeys } from "../Settings.js"

// console.log(myKeys.npsKey)

let ParksArray = []

export const useParks= () => {
    // debugger 
    return ParksArray.slice()
}

export const getParks = () => {
    // debugger
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${myKeys.npsKey}`)
    .then(response => response.json())
    .then(
        parsedParks => {
            
            ParksArray = parsedParks.data
            // console.log("INSIDE GET PARKS", ParksArray)
        }
    )
}
    
    // const url = "https://api.football-data.org/v2/matches";
    // fetch(url, {
        //   method: "GET",
        //   headers: {
            //     "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e"
            //   }
            // })
            // const npsURL = "https://developer.nps.gov/api/v1/parks?api_key="