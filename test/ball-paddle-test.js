const assert = require('chai').assert;
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const World = require('../lib/world');

describe('Ball in  Relation to Paddle', function() {
  context('Ball bounces off top of paddle', function() {


    it.skip('should bounce off rigth side of paddle', function() {
      let heightValue = 7;
      let widthValue = 7;
      let xValue = 400;
      let yValue = 443;
      let speedxValue = 5;
      let speedyValue = -2;
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

      ball.collisionWithPaddleLeft(paddleY, paddleX, paddleWidth);
      world.paddleDetectionLeft();
      assert.equal(ball.x, 405)
    })
  })

})
