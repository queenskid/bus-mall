'use strict';

Photo.allPhotos = [];
Photo.lastShown = [];
Photo.totalClicks = 0;
var data = [];
var labels = [];

Photo.section = document.getElementById('image-section');
Photo.set3 = document.getElementById('set3');

function Photo(name, filepath) {
  this.name = name;
  this.filepath = filepath;
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
    // console.log(randomLeft, randomMiddle, randomRight);
  }
  rightEl.src = Photo.allPhotos[randomRight].filepath;
  rightEl.id = Photo.allPhotos[randomRight].name;

  middleEl.src = Photo.allPhotos[randomMiddle].filepath;
  middleEl.id = Photo.allPhotos[randomMiddle].name;

  leftEl.src = Photo.allPhotos[randomLeft].filepath;
  leftEl.id = Photo.allPhotos[randomLeft].name;


  Photo.allPhotos[randomLeft].views += 1;
  Photo.allPhotos[randomMiddle].views += 1;
  Photo.allPhotos[randomRight].views += 1;

  Photo.lastShown = [];
  Photo.lastShown.push(randomLeft, randomMiddle, randomRight);

};

function handleClick(e) {
  if(e.target.id === 'set3') {
    return alert('Please select an image');
  }

  Photo.totalClicks += 1;

  for(var i = 0; i < Photo.allPhotos.length; i++) {
    if(event.target.id === Photo.allPhotos[i].name) {
      Photo.allPhotos[i].votes += 1;
      // console.log(Photo.allPhotos[i].votes + 'votes');
    }
  }
  if(Photo.totalClicks > 4) {
    Photo.set3.removeEventListener('click', handleClick);
    chart.removeAttribute('hidden');
    leftEl.setAttribute('hidden', true);
    rightEl.setAttribute('hidden', true);
    middleEl.setAttribute('hidden', true);
    // document.getElementById('set3').style.backgroundColor = 'rgba(63, 127, 191, 0.4)'
    // showResults();
  }
  randomPhoto();
}

function showResults() {
  for(var i = 0; i < Photo.allPhotos.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Photo.allPhotos[i].name + ' has ' + Photo.allPhotos[i].votes + ' votes in ' + Photo.allPhotos[i].views + ' times shown.';
    Photo.set3.appendChild(liEl);
  }
}

Photo.set3.addEventListener('click', handleClick);
randomPhoto();


function ChartArray() {
  for (var i = 0; i < Photo.allPhotos.length; i++) {
    labels[i] = Photo.allPhotos[i].name;
    data[i] = Photo.allPhotos[i].votes;
  }
}

    // console.log(labels, data);
ChartArray();
showChart();

function showChart() {
  var ctx = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: '25 total votes',
          data: data,
          backgroundColor: [
            'rgba(63, 127, 191, 0.4)'
          ],
          hoverBackgroundColor: [
            'rgba(122, 203, 41, 0.1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsiveness: false,
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes:[
          {
            ticks: {
              stepSize: 1,
              beginAtZero: true,
            }
          }
        ]
      }
    }
  });
}
