const assert = require('chai').assert;
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const World = require('../lib/world');

describe('Ball in  Relation to Paddle', function() {
  context('World has methods for ball and paddle interaction', function() {

    it('should have a method called paddleDetectionLeft()', function() {
      let world = new World

      assert.isFunction(world.paddleDetectionLeft)
    })

    it('should have a method called paddleDetectionMiddleLeft()', function() {
      let world = new World

      assert.isFunction(world.paddleDetectionMiddleLeft)
    })

    it('should have a method called paddleDetectionMiddle()', function() {
      let world = new World

      assert.isFunction(world.paddleDetectionMiddle)
    })

    it('should have a method called paddleDetectionMiddleRight()', function() {
      let world = new World

      assert.isFunction(world.paddleDetectionMiddleRight)
    })

    it('should have a method called paddleDetectionRight()', function() {
      let world = new World

      assert.isFunction(world.paddleDetectionRight)

    })
  })

  context('Ball bounces off top of paddle', function() {


    it('should bounce off rigth side of paddle', function() {
      let heightValue = 7;
      let widthValue = 7;
      let xValue = 401;
      let yValue = 443;
      let speedxValue = 5;
      let speedyValue = 2;
      let properties = {
        height: heightValue,
        width: widthValue,
        x: xValue,
        y: yValue,
        speedx: speedxValue,
        speedy: speedyValue
      }
      const ball = new Ball(properties);
      const world = new World;
      const paddle = new Paddle;
      let paddleY = paddle.y;
      let paddleX = paddle.x;
      let paddleWidth = paddle.height;

      ball.moveBall();
      ball.collisionWithPaddleLeft(paddleY, paddleX, paddleWidth);
      world.paddleDetectionLeft(paddle);
      assert.equal(ball.x, 406)
    })

    it('should bounce off rigth middle side of paddle', function() {
      let heightValue = 7;
      let widthValue = 7;
      let xValue = 400;
      let yValue = 443;
      let speedxValue = 5;
      let speedyValue = 2;
      let properties = {
        height: heightValue,
        width: widthValue,
        x: xValue,
        y: yValue,
        speedx: speedxValue,
        speedy: speedyValue
      }
      const ball = new Ball(properties);
      const world = new World;
      const paddle = new Paddle;
      let paddleY = paddle.y;
      let paddleX = paddle.x;
      let paddleWidth = paddle.height;

      ball.moveBall();
      ball.collisionWithPaddleLeft(paddleY, paddleX, paddleWidth);
      world.paddleDetectionMiddleLeft(paddle);
      assert.equal(ball.x, 405)
    })
  })

})
