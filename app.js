'use strict';

// array to store the objects, but also need an array within with 3 images
Photo.allPics = [];

//make an object
function Photo(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  // this.votes = votes;
  // this.views = views;
  // this.
  // this.
  Photo.allPics.push(this);

}
// make new instances
new Photo('bag', 'images/bag.jpg');
new Photo('banana', 'images/banana.jpg');
new Photo('bathroom', 'images/bathroom.jpg');
new Photo('boots', 'images/boots.jpg');
new Photo('breakfast', 'images/breakfast.jpg');
new Photo('bubblegum', 'images/bubblegum.jpg');
new Photo('chair', 'images/chair.jpg');
new Photo('cthulhu', 'images/cthulhu.jpg');
new Photo('dog-duck', 'images/dog-duck.jpg');
new Photo('dragon', 'images/dragon.jpg');
new Photo('pen', 'images/pen.jpg');
new Photo('pet-sweep', 'images/pet-sweep.jpg');
new Photo('scissors', 'images/scissors.jpg');
new Photo('shark', 'images/shark.jpg');
new Photo('sweep', 'images/sweep.png');
new Photo('tauntaun', 'images/tauntaun.jpg');
new Photo('unicorn', 'images/unicorn.jpg');
new Photo('usb', 'images/usb.gif');
new Photo('water-can', 'images/water-can.jpg');
new Photo('wine-glass', 'images/wine-glass.jpg');
console.log(Photo.allPics);

// listener, and somthing to be clicked


var imgEl = document.getElementById('pics');

imgEl.addEventListener('click', randomPhoto);

// randomly display one of the picture
function randomPhoto(){
  var randomIndex = Math.floor(Math.random() * Photo.allPics.length);
  imgEl.src = Photo.allPics[randomIndex].filepath;
}

randomPhoto();


// (name, path, votes, views)
