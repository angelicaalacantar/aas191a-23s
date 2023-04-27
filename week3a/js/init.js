// declare the map
const map = L.map('the_map').setView([34.0709,-118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(34.752, -118.252,'Antelope Valley','Poppy superbloom!')
addMarker(37.882, -119.449,'Yosemite National Park','Closest thing to Yellowstone')
addMarker(41.0141, -121.651,'Burney Falls','Incredible waterfall')
addMarker(38.0123, -123.000,'Point Reyes','Amazing views and trails')
addMarker(37.0846, -121.792, 'Uvas Canyon County Park','Close to home and beautiful hike')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton);
}

createButtons(34.752, -118.252,'Antelope Valley')
createButtons(37.882, -119.449,'Yosemite National Park')
createButtons(41.0141, -121.651,'Burney Falls')
createButtons(38.0123, -123.000,'Point Reyes')
createButtons(37.0846, -121.792, 'Uvas Canyon County Park')

    // event listener
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
})
