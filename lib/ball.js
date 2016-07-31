const Paddle = require('./paddle');
const Brick = require('./brick');
const World = require('./world');

class Ball {
  constructor (properties, world, paddle) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 16;
    this.width = properties.width || 16;
    this.x = properties.x || 442;
    this.y = properties.y || 404;
    this.speedx = properties.speedx || 4;
    this.speedy = properties.speedy || -3;
    this.world = world;
    this.paddle = paddle;
  };

  moveBall() {
    this.y = this.y + this.speedy;
    this.x = this.x + this.speedx;
  };

  collisionWithPaddleLeft(paddleY, paddleX, paddleWidth) {
    if(   this.x + this.width >= paddleX && this.x < paddleX + (paddleWidth * .20)  && this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = -8
    }
  };

  collisionWithPaddleMiddleLeft(paddleY, paddleX, paddleWidth) {
    if(this.x >= paddleX + (paddleWidth * .20) && this.x <= paddleX + (paddleWidth * .40)  && this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = -4
    }
  };

  collisionWithPaddleMiddle(paddleY, paddleX, paddleWidth) {
    if(this.x >= paddleX + (paddleWidth * .40) && this.x <= paddleX + (paddleWidth * .60) && this.y + this.height === paddleY) {
      return this.speedy = -this.speedy
    }
  };

  collisionWithPaddleMiddleRight(paddleY, paddleX, paddleWidth) {
    if(this.x >= paddleX + (paddleWidth * .60) && this.x <= paddleX + (paddleWidth * .80)  && this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = 4
    }
  };

  collisionWithPaddleRight(paddleY, paddleX, paddleWidth) {
    if(this.x > paddleX + (paddleWidth * .80) && this.x <= paddleX + paddleWidth  && this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = 8
    }
  };
};


module.exports = Ball;
