function addPoints() {
  const score = document.getElementById('number');
  let points = 0;

  return function () {
    points++;
    score.innerText = points;
  };
}

const getPoints = addPoints();

function startGame() {
  const welcome = document.getElementById('welcome');

  welcome.style.display = 'none';
}

function moveBallX() {
  const ball = document.getElementById('palla');

  
}