const Paddle = require('./paddle');
const Ball = require('./ball');
const Brick = require('./brick');

class World {
  constructor(ball) {
    this.height = 500;
    this.width = 900;
    this.paddles = []
    this.balls = []
    this.bricks = []
    this.ball = ball
  };

  addPaddle(paddle) {
    this.paddles.push(paddle);
  };

  rightArrowPressed() {
    this.paddles.forEach(paddle => {
      paddle.moveRight();
    });
  };

  leftArrowPressed() {
    this.paddles.forEach(paddle => {
      paddle.moveLeft();
    });
  };

  addBrick(brick) {
    this.bricks.push(brick);
  };

  addBall(ball) {
    this.balls.push(ball);
  };

  spaceBarPressed() {
    this.balls.forEach(ball => {
      ball.moveBall();
    });
  };

  paddleDetectionLeft() {
    this.balls.forEach(ball => {
      ball.collisionWithPaddleLeft(
        this.paddles[0].y,
        this.paddles[0].x,
        this.paddles[0].width
      );
    });
  };

  paddleDetectionMiddleLeft() {
    this.balls.forEach(ball => {
      ball.collisionWithPaddleMiddleLeft(
        this.paddles[0].y,
        this.paddles[0].x,
        this.paddles[0].width
      );
    });
  };

  paddleDetectionMiddle() {
    this.balls.forEach(ball => {
      ball.collisionWithPaddleMiddle(
        this.paddles[0].y,
        this.paddles[0].x,
        this.paddles[0].width
      );
    });
  };

  paddleDetectionMiddleRight() {
    this.balls.forEach(ball => {
      ball.collisionWithPaddleMiddleRight(
        this.paddles[0].y,
        this.paddles[0].x,
        this.paddles[0].width
      );
    });
  };

  paddleDetectionRight() {
    this.balls.forEach(ball => {
      ball.collisionWithPaddleRight(
        this.paddles[0].y,
        this.paddles[0].x,
        this.paddles[0].width
      );
    });
  };

  brickDetection() {
    this.bricks.find(brick => {
      this.balls.forEach(ball => {
        if (ball.collidesWithBrick(brick.x, brick.y, brick.height, brick.width)) {
          return ball.speedy = -ball.speedy,
                 ball.speedx = -ball.speedx,
                 brick.status = false
        }
      })
    })
  };

  removeHitBricks() {
    this.bricks = this.bricks.filter(brick => brick.status);
  }
}

module.exports = World;
