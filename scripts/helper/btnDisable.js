
const saveBtn = document.querySelector("#saveButton")
saveBtn.disabled = true

eventHub.addEventListener("change",event => {
    const parkFilter = document.querySelector("#parksFilter").value
    const bizarreFilter = document.querySelector("#bizarreFilter").value
    const eatsFilter = document.querySelector("#eatsFilter").value
    console.log(parkFilter, bizarreFilter, eatsFilter, 400)
    if(parkFilter.value === "0" || bizarreFilter === "0" || eatsFilter.value === "0") {
        saveBtn.disabled = true
    } else {
        saveBtn.disabled = false
    }

})
