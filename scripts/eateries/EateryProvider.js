// Duh...

let eateriesArray = []

export const useEateries = () => {
  return eateriesArray.slice()
}

export const getEateries = () => {
  return fetch("http://holidayroad.nss.team/eateries")
    .then((response) => response.json())
    .then((parsedEateries) => {
      eateriesArray = parsedEateries
      eateriesArray = eateriesArray.filter(
        (eatery) => eatery.ameneties.wheelchairAccessible === true
      )
      console.log(eateriesArray)
    })
}
