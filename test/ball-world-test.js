const assert = require('chai').assert;
const Paddle = require('../lib/paddle')
const Ball = require('../lib/ball');
const World = require('../lib/world');

describe('Ball in Relation to World', function() {

  it('should know about a world if it is passed in', function() {
    let world = new World
    let ball = new Ball({}, world)
    assert.equal(ball.world, world)
  })

  it('should know about a world if it is generated using world.addBall()', function() {
    let world = new World
    let ball = new Ball({}, world)
    world.addBall(ball)
    assert.equal(ball.world, world)
  })

  describe('world in relation to ball', function() {
    it('should have a method called addBall()', function() {
      let world = new World
      assert.isFunction(world.addBall)
    })

    it('should know about the ball added to the world', function() {
      let world = new World
      let ball = new Ball({}, world)

      world.addBall(ball)
      assert.include(world.balls, ball)
    })

    it('should have a method called launchBall()', function() {
      let world = new World
      assert.isFunction(world.launchBall)
    })

    it('should launch the ball when launchBall() is called', function() {
      let world = new World
      let ball = new Ball({}, world)

      world.addBall(ball)
      world.launchBall();
      assert.equal(ball.x, 446)
      assert.equal(ball.y, 401)
    })

    it('should know when it collides with world bottom', function() {
      let world = new World;
      let heightValue = 7;
      let widthValue = 7;
      let xValue = 20;
      let yValue = 499;
      let speedxValue = 5;
      let speedyValue = 2;
      let properties = {
        height: heightValue,
        width: widthValue,
        x: xValue,
        y: yValue,
        speedx: speedxValue,
        speedy: speedyValue
      };
      let ball = new Ball(properties);
      ball.collisionWithWorldBottom(world.height)

      assert.isTrue(ball.collisionWithWorldBottom(world.height))
    })
  })

})
