const Paddle = require('./paddle');
const Ball   = require('./ball');
const Brick  = require('./brick');

class World {
  constructor(properties, ball) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 500;
    this.width = properties.width || 900;
    this.paddles = [];
    this.balls = [];
    this.bricks = [];
    this.ball = ball;
    this.play = 1;
  };

  startGame() {
    this.play = this.play = 2;
  }

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

  launchBall() {
    this.balls.forEach(ball => {
      ball.moveBall();
    });
  };

  worldBorderDetection(){
    this.balls.forEach(ball => {
      ball.collisionWithWorld(
        this.width,
        this.height
      );
    });
  };

  loseGame(){
    this.balls.forEach(ball => {
      if(ball.collisionWithWorldBottom(this.height)) {
        return this.play = this.play = 3;
      }
    })
  }

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
          brick.status = false;
        }
      })
    })
  };

  removeHitBricks() {
    this.bricks = this.bricks.filter(brick => brick.status);
  };

  winTheGame() {
    if (this.bricks.length === 0 ) {
      return this.play = this.play = 4;
    }
  }

  tick() {
    this.launchBall();
    this.worldBorderDetection();
    this.paddleDetectionLeft();
    this.paddleDetectionMiddleLeft();
    this.paddleDetectionMiddle();
    this.paddleDetectionMiddleRight();
    this.paddleDetectionRight();
    this.brickDetection();
    this.removeHitBricks();
    this.loseGame();
    this.winTheGame();
  }

}

module.exports = World;
