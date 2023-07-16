let mapimg;

let cntrLat = 0;
let cntrLon = 0;


// 2.0469° N, 45.3182° E
let lat = 2.0469;
let lon = 45.3182;


function preload(){
  mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/46.2037,5.16329,4,0,0/600x1024?access_token=pk.eyJ1IjoibW9zanVuazAwNyIsImEiOiJjbGs1b2kwMW0wMHF1M3JwbjA3dnZ0bHp0In0.RGiWll97yE8muru5skz1eg")
}


function setup() {
  createCanvas(600, 1024);
  image(mapimg, 0, 0)
}

function draw() {
  // background(120);
}