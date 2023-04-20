
// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 1); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

// use our marker functions

    addMarker(37.005,-121.573,'Gilroy, California, USA','Home :)')
    addMarker(10.315,123.885,'Cebu, The Philippines','2007')
    addMarker(21.161,-86.851,'Cancun, Mexico','random location')
    addMarker(1.352,103.819,'Singapore','2022')
    addMarker(37.566,126.977,'Seoul, South Korea','2022')
    addMarker(41.893, 12.468,'Rome, Italy','2019')
    addMarker(38.716, -9.157,'Lisbon, Portugal','2019')
    addMarker(49.281, -123.129,'Vancouver, Canada','2017')
    addMarker(42.362, -71.064,'Boston, Massachusetts, USA','2019')