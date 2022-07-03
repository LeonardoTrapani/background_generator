var css = document.getElementById('fill');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.querySelector('button');

function setGradientBackground() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  css.textContent = body.style.background + ';';
}

function setButtonColor() {
  button.style.backgroundColor = color2.value;
}

function generateNumber(maxLimit) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand);
  return rand;
}

function findBackground(colors) {
  var command = `linear-gradient(to right, ${findColorString(
    colors[0]
  )}, ${findColorString(colors[1])})`;
  return command;
}

function findColorString(color) {
  var color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  console.log(color);
  return color;
}

function changeButtonBackgroundColor(color) {
  button.style.backgroundColor = findColorString(color);
}

function createRandomBacground() {
  var colors = [[], []]; //First array is the first color, the second one is the second color
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 3; i++) {
      colors[j][i] = generateNumber(255);
    }
  }
  var colorsString = findBackground(colors);
  changeButtonBackgroundColor(colors[1]);
  body.style.background = colorsString;
  css.textContent = body.style.background + ';';
}

createRandomBacground();

color1.addEventListener('input', setGradientBackground);

color2.addEventListener('input', setGradientBackground);

button.addEventListener('click', createRandomBacground);
