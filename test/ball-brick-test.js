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

      // it ('collisoin should invert y axis if we hit the brick from the bottom', function(){
      //
      //   let heightValue = 7;
      //   let widthValue = 7;
      //   let xValue = 130;
      //   let yValue = 121;
      //   let speedxValue = 5;
      //   let speedyValue = -2;
      //   let properties = {
      //     height: heightValue,
      //     width: widthValue,
      //     x: xValue,
      //     y: yValue,
      //     speedx: speedxValue,
      //     speedy: speedyValue
      //   };
      //   let ball = new Ball(properties, "", "", new Brick())
      //   let world = new World
      //
      //   ball.moveBall()
      //   ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width)
      //   world. brickDetection()
      //   assert.equal(ball.speedy, 2);
      // });
  //
  //     it ('collisoin should return true if we hit the brick from the right bottom', function(){
  //
  //       let heightValue = 7;
  //       let widthValue = 7;
  //       let xValue = 130;
  //       let yValue = 121;
  //       let speedxValue = -5;
  //       let speedyValue = -2;
  //       let properties = {
  //         height: heightValue,
  //         width: widthValue,
  //         x: xValue,
  //         y: yValue,
  //         speedx: speedxValue,
  //         speedy: speedyValue
  //       };
  //       let ball = new Ball(properties, "", "", new Brick()) // the ball is i px underneath the brick// brick is default at 100, 100
  //
  //       ball.moveBall();
  //       ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width)
  //       assert.equal(ball.speedx, 5);
  //       assert.equal(ball.speedy, 2);
  //       // we need to move the ball basically to the same location as the brick
  //       // we want to assert that if they are colliding that the function returns true
  //     });
  //
  //     it('collision should return true if we hit the brick from the bottom right', function(){
  //
  //       let heightValue = 7;
  //       let widthValue = 7;
  //       let xValue = 89;
  //       let yValue = 108;
  //       let speedxValue = 5;
  //       let speedyValue = -2;
  //       let properties = {
  //         height: heightValue,
  //         width: widthValue,
  //         x: xValue,
  //         y: yValue,
  //         speedx: speedxValue,
  //         speedy: speedyValue
  //       };
  //       let ball = new Ball(properties, "", "", new Brick())
  //
  //       ball.moveBall();
  //       ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width)
  //       assert.equal(ball.speedx, -5);
  //       assert.equal(ball.speedy, 2);
  //       });
  //
  //     it('collision should return true if we hit the brick from the left', function(){
  //
  //       let heightValue = 7;
  //       let widthValue = 7;
  //       let xValue = 159;
  //       let yValue = 110;
  //       let speedxValue = 5;
  //       let speedyValue = -2;
  //       let properties = {
  //         height: heightValue,
  //         width: widthValue,
  //         x: xValue,
  //         y: yValue,
  //         speedx: speedxValue,
  //         speedy: speedyValue
  //       };
  //       let ball = new Ball(properties, "", "", new Brick())
  //
  //         assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
  //       });
  //
  //     it('collision should return true if we hit the brick from the top', function(){
  //
  //       let heightValue = 7;
  //       let widthValue = 7;
  //       let xValue = 130;
  //       let yValue = 94;
  //       let speedxValue = 5;
  //       let speedyValue = -2;
  //       let properties = {
  //         height: heightValue,
  //         width: widthValue,
  //         x: xValue,
  //         y: yValue,
  //         speedx: speedxValue,
  //         speedy: speedyValue
  //       };
  //       let ball = new Ball(properties, "", "", new Brick())
  //
  //         assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
  //       });
  //
  //       it('collision should return true if we hit the brick from the bottom-left corner', function(){
  //
  //         let heightValue = 7;
  //         let widthValue = 7;
  //         let xValue = 89;
  //         let yValue = 121;
  //         let speedxValue = 5;
  //         let speedyValue = -2;
  //         let properties = {
  //           height: heightValue,
  //           width: widthValue,
  //           x: xValue,
  //           y: yValue,
  //           speedx: speedxValue,
  //           speedy: speedyValue
  //         };
  //         let ball = new Ball(properties, "", "", new Brick())
  //
  //         ball.moveBall()
  //         ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width)
  //         debugger;
  //           assert.equal(ball.speedx, -5);
  //         });
  //
  //       it('collision should return true if we hit the brick from the top-left', function(){
  //
  //         let heightValue = 7;
  //         let widthValue = 7;
  //         let xValue = 94;
  //         let yValue = 94;
  //         let speedxValue = 5;
  //         let speedyValue = -2;
  //         let properties = {
  //           height: heightValue,
  //           width: widthValue,
  //           x: xValue,
  //           y: yValue,
  //           speedx: speedxValue,
  //           speedy: speedyValue
  //         };
  //         let ball = new Ball(properties, "", "", new Brick())
  //
  //           assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
  //         });
  //
  //       it('collision should return true if we hit the brick from the bottom-right', function(){
  //
  //         let heightValue = 7;
  //         let widthValue = 7;
  //         let xValue = 159;
  //         let yValue = 119;
  //         let speedxValue = 5;
  //         let speedyValue = -2;
  //         let properties = {
  //           height: heightValue,
  //           width: widthValue,
  //           x: xValue,
  //           y: yValue,
  //           speedx: speedxValue,
  //           speedy: speedyValue
  //         };
  //         let ball = new Ball(properties, "", "", new Brick())
  //
  //           assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
  //         });
  //
  //       it('collision should return true if we hit the brick from the top-right', function(){
  //
  //         let heightValue = 7;
  //         let widthValue = 7;
  //         let xValue = 159;
  //         let yValue = 94;
  //         let speedxValue = 5;
  //         let speedyValue = -2;
  //         let properties = {
  //           height: heightValue,
  //           width: widthValue,
  //           x: xValue,
  //           y: yValue,
  //           speedx: speedxValue,
  //           speedy: speedyValue
  //         };
  //         let ball = new Ball(properties, "", "", new Brick())
  //
  //           assert.equal(true, ball.collidesWithBrick(ball.brick.x, ball.brick.y, ball.brick.height, ball.brick.width));
  //         });
  });
});
