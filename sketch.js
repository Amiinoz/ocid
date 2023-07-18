let mapimg;
let cntrLat = 0;
let cntrLon = 0;
let lat = 2.0469;
let lon = 45.3182;
let zoom = 1;
let ships = [];

function preload() {
  mapimg = loadImage(
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/46.2037,5.16329,4,0,0/600x1024?access_token=pk.eyJ1IjoibW9zanVuazAwNyIsImEiOiJjbGs1b2kwMW0wMHF1M3JwbjA3dnZ0bHp0In0.RGiWll97yE8muru5skz1eg"
  );
}

function mercProjectionsX(lon) {
  lon = radians(lon);
  let a = (256 / PI) * pow(2, zoom);
  let b = lon + PI;
  return a * b;
}

function mercProjectionsY(lat) {
  lat = radians(lat);
  let a = (256 / PI) * pow(2, zoom);
  let b = tan(PI / 4 + lat / 2);
  let c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  let cx = mercProjectionsX(cntrLon);
  let cy = mercProjectionsY(cntrLat);

  let x = mercProjectionsX(lon) - cx;
  let y = mercProjectionsY(lat) - cy;

  ships.push({ x, y }); // Initialize ship position

  fill(225, 0, 225, 200);
  ellipse(x, y, 20, 20);
}

function draw() {
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  let cx = mercProjectionsX(cntrLon);
  let cy = mercProjectionsY(cntrLat);

  for (let i = 0; i < ships.length; i++) {
    let ship = ships[i];
    let x = ship.x;
    let y = ship.y;

    // Simulate ship movement (update the ship's position)
    x += random(-1, 1);
    y += random(-1, 1);

    // Wrap around the map if the ship moves off-screen
    if (x < -width / 2) x = width / 2;
    if (x > width / 2) x = -width / 2;
    if (y < -height / 2) y = height / 2;
    if (y > height / 2) y = -height / 2;

    ship.x = x;
    ship.y = y;

    // Draw the ship on the map
    fill(225, 0, 225, 200);
    ellipse(x, y, 20, 20);
  }
}
