const Paddle = require('./paddle');
const Ball   = require('./ball');
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
    let paddleX = this.paddles[0].x
    let paddleY = this.paddles[0].y
    let paddleWidth = this.paddles[0].width
    this.balls.forEach(ball => {
      ball.collisionWithPaddleLeft(paddleY, paddleX, paddleWidth);
    });
  };

  paddleDetectionMiddleLeft () {
    let paddleX = this.paddles[0].x
    let paddleY = this.paddles[0].y
    let paddleWidth = this.paddles[0].width
    this.balls.forEach(ball => {
      ball.collisionWithPaddleMiddleLeft(paddleY, paddleX, paddleWidth);
    });
  };

  paddleDetectionMiddle() {
    let paddleX = this.paddles[0].x
    let paddleY = this.paddles[0].y
    let paddleWidth = this.paddles[0].width
    this.balls.forEach(ball => {
      ball.collisionWithPaddleMiddle(paddleY, paddleX, paddleWidth);
    });
  };

  paddleDetectionMiddleRight() {
    let paddleX = this.paddles[0].x
    let paddleY = this.paddles[0].y
    let paddleWidth = this.paddles[0].width
    this.balls.forEach(ball => {
      ball.collisionWithPaddleMiddleRight(paddleY, paddleX, paddleWidth);
    });
  };

  paddleDetectionRight () {
    let paddleX = this.paddles[0].x
    let paddleY = this.paddles[0].y
    let paddleWidth = this.paddles[0].width
    this.balls.forEach(ball => {
      ball.collisionWithPaddleRight(paddleY, paddleX, paddleWidth);
    });
  };
};

module.exports = World;
