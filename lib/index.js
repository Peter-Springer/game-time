let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let $ = require('jquery');

const Paddle = require('./paddle');
const Ball   = require('./ball');
const Brick = require('./brick');
const World = require('./world');

let world = new World(canvas.width, canvas.height);

  world.addPaddle(new Paddle({}, world));
  world.addBall(new Ball({}, world));

  for (var i = 0; i < 1; i++) {
    world.addBrick(new Brick({}, world));
    world.bricks[i].x = 10 + (i % 12) * 75
    world.bricks[i].y = 50
    if (i > 12) {
        world.bricks[i].x = 10 + (i % 12) * 75
      world.bricks[i].y = 90
    }
    if (i > 24) {
        world.bricks[i].x = 10 + (i % 12) * 75
      world.bricks[i].y = 130
    }
  }

function renderWorld(context) {
context.fillRect(0, 0, world.width, world.height);

  world.paddles.forEach(function (paddle) {
  context.clearRect(paddle.x, paddle.y, paddle.width, paddle.height);
});
  world.bricks.forEach(function (brick) {
    context.clearRect(brick.x, brick.y, brick.width, brick.height);
  });
  world.balls.forEach(function (ball) {
    context.clearRect(ball.x, ball.y, ball.width, ball.height, ball.speedx, ball.speedy);
  });
};

function renderStartScreen(context) {
  context.fillStyle="grey";
  context.fillRect(0, 0, world.width, world.height);
  context.font = "100px Impact";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("BREAKOUT", canvas.width/2, canvas.height/2);
  context.font = "40px Arial";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("Press Spacebar to start", canvas.width/2, 300);
  context.font = "25px Arial";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("Use the left and right arrows to move your paddle.", canvas.width/2, 350);
}

function renderLoseScreen(context) {
  context.fillStyle="grey";
  context.fillRect(0, 0, world.width, world.height);
  context.font = "100px Impact";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("Try Again!", canvas.width/2, canvas.height/2);
  context.font = "25px Arial";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("Press esc to restart.", canvas.width/2, 350);
}

function renderWinScreen(context) {
  context.fillStyle="grey";
  context.fillRect(0, 0, world.width, world.height);
  context.font = "100px Impact";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("You Won!", canvas.width/2, canvas.height/2);
  context.font = "25px Arial";
  context.textAlign = "center";
  context.fillStyle = 'black';
  context.fillText("Press esc to restart.", canvas.width/2, 350);
}


requestAnimationFrame(function gameLoop() {
  if (world.play === 2) {
    renderWorld(context, world);
    world.launchBall()
    world.worldBorderDetection()
    world.paddleDetectionLeft()
    world.paddleDetectionMiddleLeft()
    world.paddleDetectionMiddle()
    world.paddleDetectionMiddleRight()
    world.paddleDetectionRight()
    world.brickDetection()
    world.removeHitBricks()
    world.loseGame()
    requestAnimationFrame(gameLoop);
  } else if (world.play === 3) {
    renderLoseScreen(context)
    requestAnimationFrame(gameLoop);
 } else if (world.play === 4) {
   renderWinScreen(context)
   requestAnimationFrame(gameLoop);
 }
  else {
    renderStartScreen(context)
    requestAnimationFrame(gameLoop);
  }
});


document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) world.rightArrowPressed();
  if (event.keyCode === 37) world.leftArrowPressed();
  if (event.keyCode === 32) world.startGame();
  if (event.keyCode === 27) document.location.reload();
});
