const assert = require('chai').assert;
const Paddle = require('../lib/paddle');
const World = require('../lib/world');
const Ball = require('../lib/ball');
const Brick = require('../lib/brick');

describe('Brick in relation to world', function() {

  it('should know about a world if it is passed in', function () {
    let world = new World
    let brick = new Brick({}, world)
    assert.equal(brick.world, world)
  })

  it('should know about a world if it is generated using world.addBrick()', function () {
    let world = new World
    let brick = new Brick({}, world)
    world.addBrick(brick)
    assert.equal(brick.world, world);
  })
})

describe('World in relation to brick', function () {
    it('should have a method called addBrick()', function () {
      let world = new World()
      assert.isFunction(world.addBrick)
    })

    it('should know about the brick added to world', function () {
      let world = new World
      let brick = new Brick({}, world)

      world.addBrick(brick)
      assert.include(world.bricks, brick)
    })

    describe('removeHitBricks()', function () {

      it('should have a method for removing bricks', function () {
        let world = new World();
        assert.isFunction(world.removeHitBricks);
      });

      it('should remove all bricks with a status of false', function () {
        let world = new World();

        let activitedBrick = new Brick({ status: true }, world);
        let deactivitedBrick = new Brick({ status: false }, world);

        world.addBrick(activitedBrick);
        world.addBrick(deactivitedBrick);

        assert.equal(world.bricks.length, 2, 'world.bricks should have two bricks before we call removeHitBricks()');

        world.removeHitBricks();

        assert.equal(world.bricks.length, 1, 'world.bricks should have one brick after we call removeHitBricks()');
      });

    });
})
