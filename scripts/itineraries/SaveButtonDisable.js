
const eventHub = document.querySelector("#container")

const saveBtn = document.querySelector("#saveButton")
saveBtn.disabled = true

eventHub.addEventListener("change",event => {
    const parkFilter = document.querySelector("#parksFilter")
    const bizarreFilter = document.querySelector("#bizarreFilter")
    const eatsFilter = document.querySelector("#eatsFilter")

    if(parkFilter.value === "0" || bizarreFilter.value === "0" || eatsFilter.value === "0") {
        saveBtn.disabled = true
    } else {
        saveBtn.disabled = false

    }
})