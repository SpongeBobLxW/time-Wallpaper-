let hours = document.querySelector(".hour")
let minutes = document.querySelector(".min")
let seconds = document.querySelector(".sec")

setInterval(() => {
    let todaysDate = new Date

    let theHour = todaysDate.getHours()
    let theMinute = todaysDate.getMinutes()
    let theSeconds = todaysDate.getSeconds()

    hours.innerHTML = theHour
    minutes.innerHTML = theMinute
    seconds.innerHTML = theSeconds
    
    // DOUBLE FIGURE CONDITION

    if (theHour < 10) {
        hours.innerHTML = "0" + theHour
    }
    if (theMinute < 10) {
        minutes.innerHTML = "0" + theMinute
    }
    if (theSeconds < 10) {
        seconds.innerHTML = "0" + theSeconds
    }

    // MODE SWITCH

}, 10);

let main = document.getElementById("mainContainer")
let lightButton = document.querySelector(".toDark")
let darktButton = document.querySelector(".toLight")
let lightHourColor = document.querySelector(".colch")
let lightMinColor = document.querySelector(".colch2")
let lightSecColor = document.querySelector(".colch3")
let firstCol = document.querySelector(".colch4")
let secCol = document.querySelector(".colch5")

const lightToggle  = ()=>{
    main.style.background = "#ffffff"
    lightButton.style.display = "block"
    darktButton.style.display = "none"
    lightHourColor.style.color = "#090784"
    lightMinColor.style.color = "#090784"
    lightSecColor.style.color = "#090784"
    firstCol.style.color  = "#060606"
    secCol.style.color  = "#060606"
}

const darkToggle  = ()=>{
    main.style.background = "#060606"
    lightButton.style.display = "none"
    darktButton.style.display = "block"
    lightHourColor.style.color = "#1A1A1A"
    lightMinColor.style.color = "#1A1A1A"
    lightSecColor.style.color = "#1A1A1A"
    firstCol.style.color  = "#ffffff"
    secCol.style.color  = "#ffffff"
}
