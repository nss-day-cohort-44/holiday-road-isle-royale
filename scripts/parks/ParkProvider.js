


let ParksArray = []

export const useParks= () => {
    
    return ParksArray.slice()
}

export const getParks = (key) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${key.npsKey}`)
        .then(response => response.json())
        .then(
            parsedParks => {
                // console.table(parsedCriminals)
                ParksArray = parsedParks
                console.log(ParksArray)
            }
        )
}
