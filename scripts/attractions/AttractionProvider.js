
let attractionArray = []

export const useAttractions = () => {
    return attractionArray.slice()
}

export const getAttractions = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)
        .then ( response => response.json () )
        .then ( parsedAttractions => attractionArray = parsedAttractions )
}