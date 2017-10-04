'use strict';

Photo.allPhotos = [];
Photo.lastShown = [];
Photo.totalClicks = 0;

Photo.section = document.getElementById('image-section');
Photo.resultsList = document.getElementById('results');

function Photo(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.views = 0;
  this.votes = 0;
  Photo.allPhotos.push(this);
};

new Photo('bag', 'images/bag.jpg'),
new Photo('banana', 'images/banana.jpg'),
new Photo('bathroom', 'images/bathroom.jpg'),
new Photo('boots', 'images/boots.jpg'),
new Photo('breakfast', 'images/breakfast.jpg'),
new Photo('bubblegum', 'images/bubblegum.jpg'),
new Photo('chair', 'images/chair.jpg'),
new Photo('cthulhu', 'images/cthulhu.jpg'),
new Photo('dog-duck', 'images/dog-duck.jpg'),
new Photo('dragon', 'images/dragon.jpg'),
new Photo('pen', 'images/pen.jpg'),
new Photo('pet-sweep', 'images/pet-sweep.jpg'),
new Photo('scissors', 'images/scissors.jpg'),
new Photo('shark', 'images/shark.jpg'),
new Photo('sweep', 'images/sweep.png'),
new Photo('tauntaun', 'images/tauntaun.jpg'),
new Photo('unicorn', 'images/unicorn.jpg'),
new Photo('usb', 'images/usb.gif'),
new Photo('water-can', 'images/water-can.jpg'),
new Photo('wine-glass', 'images/wine-glass.jpg')


var leftEl = document.getElementById('left');
var middleEl = document.getElementById('middle');
var rightEl = document.getElementById('right');

function randomPhoto() {
  var randomLeft = Math.floor(Math.random() * Photo.allPhotos.length);
  var randomMiddle = Math.floor(Math.random() * Photo.allPhotos.length);
  var randomRight = Math.floor(Math.random() * Photo.allPhotos.length);

  while(Photo.lastShown.includes(randomRight) || Photo.lastShown.includes(randomLeft) || Photo.lastShown.includes(randomMiddle) || randomLeft === randomMiddle || randomRight === randomLeft || randomRight === randomMiddle) {
    randomRight = Math.floor(Math.random() * Photo.allPhotos.length);
    randomMiddle = Math.floor(Math.random() * Photo.allPhotos.length);
    randomLeft = Math.floor(Math.random() * Photo.allPhotos.length);
    console.log(randomLeft, randomMiddle, randomRight);
  }
  rightEl.src = Photo.allPhotos[randomRight].filepath;
  rightEl.alt = Photo.allPhotos[randomRight].altText;

  middleEl.src = Photo.allPhotos[randomMiddle].filepath;
  middleEl.alt = Photo.allPhotos[randomMiddle].altText;

  leftEl.src = Photo.allPhotos[randomLeft].filepath;
  leftEl.alt = Photo.allPhotos[randomLeft].altText;


  Photo.allPhotos[randomLeft].views += 1;
  Photo.allPhotos[randomMiddle].views += 1;
  Photo.allPhotos[randomRight].views += 1;

  Photo.lastShown = [];
  Photo.lastShown.push(randomLeft, randomMiddle, randomRight);

};

  function handleClick(e) {
    if(e.target.id === 'image-section') {
      return alert('Please select an image');
    }

    Photo.totalClicks += 1;

    for(var i = 0; i < Photo.allPhotos.length; i++) {
      if(event.target.alt === Photo.allPhotos[i].altText) {
        Photo.allPhotos[i].votes += 1;
      }
    }
      if(Photo.totalClicks > 4) {
      Photo.section.removeEventListener('click', handleClick);
      canvas.removeAttribute('hidden');
      leftEl.setAttribute('hidden', true);
      rightEl.setAttribute('hidden', true);
      middleEl.setAttribute('hidden', true);
      showResults();
    }
    randomPhoto();
  }

  function showResults() {
    for(var i = 0; i < Photo.allPhotos.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = Photo.allPhotos[i].name + ' has ' + Photo.allPhotos[i].votes + ' votes in ' + Photo.allPhotos[i].views + ' times shown.';
      Photo.resultsList.appendChild(liEl);
    }
  }

  Photo.section.addEventListener('click', handleClick);

  randomPhoto();



// fucntion showChart() {
//
// }
