'use strict'

// array to store the objects, but also need an array within with 3 images
Photo.allPhotos = [];

//make an object
function Photo(name, filepath, votes, views) {
  this.name = name;
  this.filepath = filepath;
  this.votes = votes;
  this.views = views;
  this.

  Photo.allPhotos.push(this);

}// make new instances
new Photo('bag', './img/bag.jpg');
new Photo('banana', './img/banana.jpg');
new Photo('bathroom', './img/bathroom.jpg');
new Photo('boots', './img/boots.jpg');
new Photo('breakfast', './img/breakfast.jpg');
new Photo('bubblegum', './img/bubblegum.jpg');
new Photo('chair', './img/chair.jpg');
new Photo('cthulhu', './img/cthulhu.jpg');
new Photo('dog-duck', './img/dog-duck.jpg');
new Photo('dragon', './img/dragon.jpg');
new Photo('pen', './img/pen.jpg');
new Photo('pet-sweep', './img/pet-sweep.jpg');
new Photo('scissors', './img/scissors.jpg');
new Photo('shark', './img/shark.jpg');
new Photo('sweep', './img/sweep.png');
new Photo('tauntaun', './img/tauntaun.jpg');
new Photo('unicorn', './img/unicorn.jpg');
new Photo('usb', './img/usb.gif');
new Photo('water-can', './img/water-can.jpg');
new Photo('wine-glass', './img/wine-glass.jpg');

// listener, and somthing to be clicked
var imgEl = document.getElementById('photos');

imgEl.addEventListener('click',randomPhoto);

// randomly display one of the picture
fucntion randomPhoto(){
  var randomIndex = Math.floor(Math.random() * Photo.allPhotos.length);
  imgEl.src = Photo.allPhotos[randomIndex].filepath;
}

randomPhoto();


// (name, path, votes, views)
