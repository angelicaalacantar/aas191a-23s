// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':8}

let treated = L.featureGroup();
let untreated = L.featureGroup();

let layers = {
    "Treated Respondent": treated,
    "Untreated Respondent": untreated
}

let circleOptions = {
    radius: 6,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR1Re4FCLu-jT9wjL8bawR0DRFdhLUsHeRVqx8D6KXMJgARQLbzw7fc-0TL0462XMXBiAsIcLT7G9V9/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker(data){
    if(data['Have you ever sought treatment for mental health concerns?'] == "Yes"){
        circleOptions.fillColor = "red"
        treated.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Treated</h2>`))
        createButtons(data.lat,data.lng,data['Where are you located or receive care?'])
        }
    else{
        circleOptions.fillColor = "blue"
        untreated.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Untreated</h2>`))
        createButtons(data.lat,data.lng,data['Where are you located or receive care?'])
}
    return data
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    treated.addTo(map) // add our layers after markers have been made
    untreated.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([treated,untreated]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
