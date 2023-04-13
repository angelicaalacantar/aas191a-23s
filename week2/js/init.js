var mario = 3;
var age = 12;
var combine = mario + age
console.log('Hello Asian Am 191! :)')


// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker2 = L.marker([34.0666, -118.4466]).addTo(map) 
        .bindPopup('Ronald Reagan Medical Center')
        .openPopup();
let marker3 = L.marker([34.06327178477289, -118.4468590040583]).addTo(map) 
.bindPopup('Diddy Riese')
.openPopup();

function addMarker(lat,long,message){ 
    console.log(message) 
    L.marker([lat,long]).addTo(map).bindPopup(message)
}

addMarker(34.0709, -118.444, 'Math Sciences 4328')
addMarker(34.0666, -118.4466, 'Ronald Reagan Medical Center')
addMarker(34.06327178477289, -118.4468590040583, 'Diddy Riese')


