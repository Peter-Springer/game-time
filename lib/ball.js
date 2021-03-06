const Paddle = require('./paddle');
const Brick  = require('./brick');
const World  = require('./world');

class Ball {
  constructor(properties, world, paddle, brick) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 16;
    this.width = properties.width || 16;
    this.x = properties.x || 442;
    this.y = properties.y || 404;
    this.speedx = properties.speedx || 4;
    this.speedy = properties.speedy || -3;
    this.world = world;
    this.paddle = paddle;
    this.brick = brick;
  };

  moveBall() {
    this.y = this.y + this.speedy;
    this.x = this.x + this.speedx;
  };

  collisionWithWorld(worldWidth, worldHeight, worldPlay) {
    if(this.x + this.speedx > worldWidth - this.width ||
      this.x + this.speedx < 0) {
      return this.speedx = -this.speedx, true;
    };
    if(this.y + this.speedy < 0) {
      return this.speedy = -this.speedy, true;
    };
  }

  collisionWithWorldBottom(worldHeight) {
    if(this.y + this.speedy > worldHeight - this.height) {
      return true
    }
  }

  collisionWithPaddleLeft(paddleY, paddleX, paddleWidth) {
    if (this.x + this.width >= paddleX &&
      this.x < paddleX + (paddleWidth * .20) &&
      this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = -8
    }
  };

  collisionWithPaddleMiddleLeft(paddleY, paddleX, paddleWidth) {
    if (this.x >= paddleX + (paddleWidth * .20) &&
      this.x <= paddleX + (paddleWidth * .40) &&
      this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = -4
    }
  };

  collisionWithPaddleMiddle(paddleY, paddleX, paddleWidth) {
    if (this.x >= paddleX + (paddleWidth * .40) &&
      this.x <= paddleX + (paddleWidth * .60) &&
      this.y + this.height === paddleY) {
      return this.speedy = -this.speedy
    }
  };

  collisionWithPaddleMiddleRight(paddleY, paddleX, paddleWidth) {
    if (this.x >= paddleX + (paddleWidth * .60) &&
      this.x <= paddleX + (paddleWidth * .80) &&
      this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = 4
    }
  };

  collisionWithPaddleRight(paddleY, paddleX, paddleWidth) {
    if (this.x > paddleX + (paddleWidth * .80) &&
      this.x <= paddleX + paddleWidth &&
      this.y + this.height === paddleY) {
      return this.speedy = -this.speedy, this.speedx = 8
    }
  }

  collidesWithBrick(brickX, brickY, brickHeight, brickWidth) {
    return this.x < brickX + brickWidth &&
      this.x + this.width > brickX &&
      this.y < brickY + brickHeight &&
      this.y + this.height > brickY
   }

};


module.exports = Ball;
