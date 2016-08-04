const assert = require('chai').assert;
const Ball = require('../lib/ball');
const Brick = require('../lib/brick');
const World = require('../lib/world');


describe('this is a brick ball test', function(){
  context('context for ball', function(){
  it('collisoin should return true if we hit the brick from the bottom', function(){

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 130;
    let yValue = 119;
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
    let ball = new Ball(properties, "", "", new Brick())

    assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
  });

  it('collision should return true if we hit the brick from the right', function(){

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 94;
    let yValue = 110;
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
    let ball = new Ball(properties, "", "", new Brick())

      assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
    });

  it('collision should return true if we hit the brick from the left', function(){

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 159;
    let yValue = 110;
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
    let ball = new Ball(properties, "", "", new Brick())

      assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
    });

  it('collision should return true if we hit the brick from the top', function(){

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 130;
    let yValue = 94;
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
    let ball = new Ball(properties, "", "", new Brick())

      assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
    });

    it('collision should return true if we hit the brick from the bottom-left corner', function(){

      let heightValue = 7;
      let widthValue = 7;
      let xValue = 94;
      let yValue = 119;
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
      let ball = new Ball(properties, "", "", new Brick())

        assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
      });

    it('collision should return true if we hit the brick from the top-left', function(){

      let heightValue = 7;
      let widthValue = 7;
      let xValue = 94;
      let yValue = 94;
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
      let ball = new Ball(properties, "", "", new Brick())

        assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
      });

    it('collision should return true if we hit the brick from the bottom-right', function(){

      let heightValue = 7;
      let widthValue = 7;
      let xValue = 159;
      let yValue = 119;
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
      let ball = new Ball(properties, "", "", new Brick())

        assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
      });

    it('collision should return true if we hit the brick from the top-right', function(){

      let heightValue = 7;
      let widthValue = 7;
      let xValue = 159;
      let yValue = 94;
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
      let ball = new Ball(properties, "", "", new Brick())

        assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
      });
  });
});
