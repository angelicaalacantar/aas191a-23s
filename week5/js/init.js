// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

const dataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZaAwxlqC5mUzlbGkKu6uGBLC4yTkmJW1_tPdcUsgTSYypd87L-jh2VgnsEuvKfdj7t-17qdnwIV9U/pub?output=csv"

function loadData(url){
    fetch(url)
        .then(response => {
            console.log(response)
            return response
        })
        .then(data =>{
            // do something with the data
        })
}
// we will put this comment to remember to call our function later!
loadData(dataURL)

