'use strict';

function Photo(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.views = 0;
};

Photo.prototype.clicked = function(){
  this.votes++;
};

Photo.prototype.viewed = function(){
  this.views++;
};

var official = [];
var totalClicks = 0;
var allPics = [
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
];

var photoDisplay = function() {
  var current = [];
  while(current.length < 3) {
    var photo = randomPhoto();
    var duplicate = false;
    for(var i = 0; i < official.length; i++) {
      if(official[i].name == photo.name) {
        duplicate = true;
      }
    }

    if(!duplicate) {
      for(var j = 0; j < current.length; j++) {
        if(current[j].name == photo.name) {
          duplicate = true;
        }
      }
    }

    if(!duplicate) {
      photo.viewed();
      current.push(photo);
    }
  }

  document.getElementById("pic1").src = current[0].filepath;
  document.getElementById("pic2").src = current[1].filepath;
  document.getElementById("pic3").src = current[2].filepath;

  document.getElementById("pic1").alt = current[0].name;
  document.getElementById("pic2").alt = current[1].name;
  document.getElementById("pic3").alt = current[2].name;
  official = current;
}

photoDisplay();
/*
// listener, and somthing to be clicked


var imgEl = document.getElementById('pics');

imgEl.addEventListener('click', randomPhoto);

// randomly display one of the picture
*/
function randomPhoto(){
  var randomIndex = Math.floor(Math.random() * allPics.length);
  return allPics[randomIndex];
}

function switchPhoto(element) {
  var clicked_photo = getPhotoByName(element.alt);
  clicked_photo.clicked();
  console.log(clicked_photo);
  if(totalClicks < 25) {
    photoDisplay();
    totalClicks++;
  } else {
    alert("You Have completed the Survey!")
  }
}

function getPhotoByName(name) {
  var photo = null;
  allPics.forEach(function(item) {
    if(item.name == name) {
      photo = item;
    }
  })
  return photo;
}
