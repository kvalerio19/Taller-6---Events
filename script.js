const btn = document.querySelector('button');
const videoBox = document.querySelector('div#videoBox');
const video = document.querySelector('video');


btn.onclick = function() {
  videoBox.setAttribute('class','showing');
}


videoBox.onclick = function() {
  videoBox.setAttribute('class','hidden');
}

video.onclick = function(event) {
  event.stopPropagation();
  video.play();
}

const firstValue = document.querySelector('input.firstValue');
const secondValue = document.querySelector('input.secondValue');
const buttons = document.querySelector('#buttons');
const result = document.querySelector('#result');

buttons.onclick = function(e) {
  switch (e.target.id) {
    case 'add':
      result.textContent = Number(firstValue.value) + Number(secondValue.value);
      break;
    case 'rest':
      result.textContent = firstValue.value - secondValue.value;
      break;
    case 'multiply':
      result.textContent = firstValue.value * secondValue.value;
      break;
  }
}