const key = 'pk.eyJ1IjoiemFyb21pIiwiYSI6ImNrbTJkN3QwZjRtMzgycHBtZ2lyNGl1eXoifQ.uQCxr7nLnjbOe0-z7WwaZw';

const options = {
  lat: 39.5,
  lng: -98,
  zoom: 3.3,
  style: 'mapbox://styles/zaromi/ckmc6s2qu4rha17md2csptu99',
  pitch: 0,
}

const mappa = new Mappa('MapboxGL', key);
let mtMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}


function draw() {
  
  clear();
  stroke(255,0,0);
  strokeWeight(3);
  textSize(18);
  textAlign(CENTER, CENTER);
  const dallas= myMap.latLngToPixel(32.77965264529317,-96.75964415073395);
  const orlando = myMap.latLngToPixel( 28.5390742, -81.4027404);
  const santa = myMap.latLngToPixel(37.24725,-121.58793);
  const pasa = myMap.latLngToPixel(34.161327, -118.167648);
  const atl = myMap.latLngToPixel(33.770163586, -84.388998444);
  const east = myMap.latLngToPixel(40.813778, -74.074310);
   const land = myMap.latLngToPixel(38.904663048 ,-76.858663232);
  const chi = myMap.latLngToPixel(41.85749657, -87.6166642);
  if(dist(east.x,east.y,mouseX,mouseY)<50){  
    
    fill(109, 109, 151 ,100);
    ellipse(east.x, east.y, 100, 100);
    fill(255);
    text('MetLife Stadium',east.x,east.y);
  }else{
    fill(255,0,0 ,50);
    ellipse(east.x, east.y, 100, 100);
    fill(255);
    text('6',east.x,east.y);
  }
  
  if(dist(atl.x,atl.y,mouseX,mouseY)<50){  
    
    fill(109, 109, 151 ,100);
    ellipse(atl.x, atl.y, 100, 100);
    fill(255);
    text('Bobby Dodd Stadium',atl.x,atl.y);
  }else{
    fill(255,0,0 ,50);
    ellipse(atl.x, atl.y, 100, 100);
    fill(255);
    text('5',atl.x,atl.y);
  }
  
  if(dist(dallas.x,dallas.y,mouseX,mouseY)<50){ 
    
    fill(109, 109, 151 ,100);
    ellipse(dallas.x, dallas.y, 100, 100);
    fill(255);
    text('Cotton Bowl Stadium',dallas.x,dallas.y);
  }else{
   fill(255,0,0 ,50);
    ellipse(dallas.x, dallas.y, 100, 100);
    fill(255);
    text('3',dallas.x,dallas.y);
  }
  
  if(dist(pasa.x,pasa.y,mouseX,mouseY)<50){  
    
    fill(109, 109, 151 ,100);
    ellipse(pasa.x, pasa.y, 100, 100);
    fill(255);
    text('Rose Bowl',pasa.x,pasa.y);
  }else{
  fill(255,0,0 ,50);
    ellipse(pasa.x, pasa.y, 100, 100);
    fill(255);
    text('2',pasa.x,pasa.y);
  }
  
  if(dist(orlando.x,orlando.y,mouseX,mouseY)<50){  
    
    fill(109, 109, 151 ,100);
    ellipse(orlando.x, orlando.y, 100, 100);
    fill(255);
    text('Camping World Stadium',orlando.x,orlando.y);
  }else{
   fill(255,0,0 ,50);
    ellipse(orlando.x, orlando.y, 100, 100);
    fill(255);
    text('4',orlando.x,orlando.y);
  }
  
  if(dist(santa.x,santa.y,mouseX,mouseY)<50){  
    fill(109, 109, 151 ,100);
    ellipse(santa.x, santa.y, 100, 100);
    fill(255);
    text('Levis Stadium',santa.x,santa.y);
  }else{
  fill(255,0,0 ,50);
    ellipse(santa.x, santa.y, 100, 100);
    fill(255);
    text('1',santa.x,santa.y);
  }
    if(dist(land.x,land.y,mouseX,mouseY)<50){  
    fill(109, 109, 151 ,100);
    ellipse(land.x, land.y, 100, 100);
    fill(255);
    text('FedExField',land.x,land.y);
  }else{
   fill(255,0,0 ,50);
    ellipse(land.x, land.y, 100, 100);
    fill(255);
    text('7',land.x,land.y);
  }
    if(dist(chi.x,chi.y,mouseX,mouseY)<50){  
    fill(109, 109, 151 ,100);
    ellipse(chi.x, chi.y, 100, 100);
    fill(255);
    text('Soldier Field',chi.x,chi.y);
  }else{
  fill(255,0,0 ,50);
    ellipse(chi.x, chi.y, 100, 100);
    fill(255);
    text('8',chi.x,chi.y);
  }
}


