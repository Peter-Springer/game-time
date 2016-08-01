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

  for (var i = 0; i < 42; i++) {
    world.addBrick(new Brick({}, world));
    world.bricks[i].x = 50 + (i % 12) * 65
    world.bricks[i].y = 20
    if (i > 12) {
        world.bricks[i].x = 50 + (i % 12) * 65
      world.bricks[i].y = 60
    }
    if (i > 24) {
        world.bricks[i].x = 50 + (i % 12) * 65
      world.bricks[i].y = 100
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

    if(ball.x + ball.speedx > world.width - ball.width || ball.x + ball.speedx < 0) {
      return ball.speedx = -ball.speedx;
    };
    if(ball.y + ball.speedy > world.height - ball.height || ball.y + ball.speedy < 0) {
      return ball.speedy = -ball.speedy;
    };
    // if(ball.x + ball.speedx > brick.x - ball.width || ball.x + ball.speedx < brick.width) {
    //     console.log('workingg')
    //   // return ball.speedx = -ball.speedx;
    // };
  });
  // context.arc(ball.x, ball.y, 10, 0, Math.PI*2);
};


requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  world.spaceBarPressed()
  world.paddleDetectionLeft()
  world.paddleDetectionMiddleLeft()
  world.paddleDetectionMiddle()
  world.paddleDetectionMiddleRight()
  world.paddleDetectionRight()
  world.brickDetectionRight()
  world.brickDetectionLeft()
  world.brickDetectionTop()
  world.brickDetectionBottom()
  requestAnimationFrame(gameLoop);
});


document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) world.rightArrowPressed();
  if (event.keyCode === 37) world.leftArrowPressed();
});

// document.addEventListener('mousemove' )
