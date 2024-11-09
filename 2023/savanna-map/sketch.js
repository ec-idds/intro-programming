/*******************************************
 * Final Project 
 * Savanna Bouley <bouleys@emmanuel.edu>
 * December 2023
 ******************************************/

//set variables 
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
let images = [];
let currentImage = null;

//sets up zoom in and out for Mappa.js 
let options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

//points array that has a lat/lng for every corresponding image file
let points = [{
    lat: 42.361145,
    lng: -71.057083,
    image: 'Lander.png'
  },
  {
    lat: 42.370920,
    lng: -72.598140,
    image: 'artie1.png'
  },
  {
    lat: 51.062094,
    lng: -0.3280777,
    image: 'england.png'
  },
  {
    lat: 67.932479,
    lng: 13.0895262,
    image: 'reine.png'
  },
  {
    lat: 39.571625,
    lng: 2.995148,
    image: 'spain.png'
  },
  {
    lat: 46.331979,
    lng: 8.332459,
    image: 'ski.png'
  },
  {
    lat: 31.791702,
    lng: -7.09262,
    image: 'bluecity.png'
  },
  {
    lat: 35.417416,
    lng: 24.53000,
    image: 'crete.png'
  },
  {
    lat: -33.91886,
    lng: 18.42330,
    image: 'capetown.png'
  },
  {
    lat: -18.76694,
    lng: 46.86910,
    image: 'mad.png'
  },
  {
    lat: 46.862496,
    lng: 103.84665,
    image: 'mon.png'
  },
  {
    lat: -9.4527,
    lng: -139.3867,
    image: 'survivor1.png'
  },
  {
    lat: -12.04637,
    lng: -77.042793,
    image: 'peru.png'
  },
  {
    lat: -34.60372,
    lng: -58.381592,
    image: 'arg.png'
  },
  {
    lat: -33.86514,
    lng: 151.209900,
    image: 'aus.png'
  },
];

//initializes the map overlay
function setup() {
  canvas = createCanvas(640, 640);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

//loop through points
//load the images: 'point.image' is the path to the image file. 
//err is in the callback function that is able to address errors during image loading
//push to the image array: adds image to the array. img=image. point=lat/lng.
function preload() {
  for(let point of points) {
    let img = loadImage(point.image, () => console.log(point.image + 'loaded'), (err) => console.log(point.image + 'failed to load', err));
    images.push({
      point: point,
      image: img
    });
  }
}

//initialization w boolean variable
//loop through the images. for loop goes through image array. 
//let pos = myMap.latLngToPixel(item.point.lat, item.point.lng)= convert lat/lng to pixels on the canvas
//const d calculates the euclidean distance btwn mouse and image
//if the distance is less than 20 btwn mouse and image the item is set to current image, if clicked
//breaks out of loop
function mouseClicked() {
  let clicked = false;
  for(let item of images) {
    let pos = myMap.latLngToPixel(item.point.lat, item.point.lng);
    const d = dist(mouseX, mouseY, pos.x, pos.y);
    if(d < 20) {
      currentImage = item;
      clicked = true;
      break;
    }
  }

  //if a pixel is clicked that isn't within 20 pixels of an image it is set to null
  if(!clicked) {
    currentImage = null;
  }
}

//creates a loop through the images array
//converts lat/lng to pixel coordinates on the canvas to define a position 
//and draws an ellipse at that position
function draw() {
  clear();

  for(let item of images) {
    let pos = myMap.latLngToPixel(item.point.lat, item.point.lng);
    fill(200, 100, 100);
    ellipse(pos.x, pos.y, 20, 20);
  }
  //checks for the image selected: either null or not null to make sure it was loaded
  //calculates the image position for x-coord, and y-coord
  //creates the image at the position
  if(currentImage && currentImage.image) {
    let imgX = mouseX - currentImage.image.width / 2;
    let imgY = mouseY - currentImage.image.height / 2;
    image(currentImage.image, imgX, imgY);
  }
}