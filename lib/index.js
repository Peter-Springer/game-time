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

  for (var i = 0; i < 37; i++) {
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


requestAnimationFrame(function gameLoop() {
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
  requestAnimationFrame(gameLoop);
});


document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) world.rightArrowPressed();
  if (event.keyCode === 37) world.leftArrowPressed();
});
