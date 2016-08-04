const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function() {
  context('checks default values', function() {

    let ball = new Ball;

    it('has default values', function() {
      assert.equal(ball.height, 16);
      assert.equal(ball.width, 16);
      assert.equal(ball.x, 442);
      assert.equal(ball.y, 404);
      assert.equal(ball.speedx, 4);
      assert.equal(ball.speedy, -3);
    });
  });

  context('check that set all values of ball', function() {

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 20;
    let yValue = 20;
    let speedxValue = 5;
    let speedyValue = -2;
    let properties = {
      height: heightValue,
      width: widthValue,
      x: xValue,
      y: yValue,
      speedx: speedxValue,
      speedy: speedyValue
    };

    const ball = new Ball(properties);

    it('assigns xValue to the ball x', function() {
      assert.equal(ball.x, xValue);
    });

    it('assigns yValue to the ball y', function() {
      assert.equal(ball.y, yValue);
    });

    it('assigns heightValue to the ball height', function() {
      assert.equal(ball.height, heightValue);
    });

    it('assigns widthValue to the ball width', function() {
      assert.equal(ball.width, widthValue);
    });

    it('assigns speedxValue to the ball speedx', function() {
      assert.equal(ball.speedx, speedxValue);
    });

    it('assigns speedyValue to the ball speedy', function() {
      assert.equal(ball.speedy, speedyValue)
    });
  });

  context('check that ball methods exist', function() {

    let ball = new Ball;

    it('should have a method called moveBall()', function () {
      assert.isFunction(ball.moveBall)
    });

    it('should have a method called collisionWithWorld()', function() {
      assert.isFunction(ball.collisionWithWorld)
    });

    it('should have a method called collisionWithWorldBottom', function () {
      assert.isFunction(ball.collisionWithWorldBottom)
    });

    it('should have a method called collisionWithPaddleLeft()', function() {
      assert.isFunction(ball.collisionWithPaddleLeft)
    });

    it('should have a method called collisionWithPaddleMiddleLeft()', function() {
      assert.isFunction(ball.collisionWithPaddleMiddleLeft)
    });

    it('should have a method called collisionWithPaddleMiddle()', function() {
      assert.isFunction(ball.collisionWithPaddleMiddle)
    });

    it('should have a method called collisionWithPaddleMiddleRight()', function() {
      assert.isFunction(ball.collisionWithPaddleMiddleRight)
    });

    it('should have a method called collisionWithPaddleRight()', function() {
      assert.isFunction(ball.collisionWithPaddleRight)
    });

    it('should have a method calles collidesWithBrick()', function() {
      assert.isFunction(ball.collidesWithBrick)
    })      
  });

  context('check that ball moves around world', function() {

    it('should move on the x and y axis when moveBall() is called', function() {
      let ball = new Ball
      ball.moveBall()
      assert.equal(ball.x, 446)
      assert.equal(ball.y, 401)
    });
  });

});
