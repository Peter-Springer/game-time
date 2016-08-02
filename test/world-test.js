const assert = require('chai').assert;

const World = require('./../lib/world');
const Brick = require('./../lib/brick');

describe('World', function() {
  context('World contains the basics', function() {

    it('world is an object', function() {
      let world = new World;
      assert.equal(typeof world, "object");
    })

    it('world has a paddle', function() {
      const world = new World;
      assert.equal(typeof world.paddles, "object")
    })

    it('has a ball', function() {
      let world = new World;
      assert.equal(typeof world.balls, "object")
    })

    it('has a brick', function() {
      let world = new World;
      assert.equal(typeof world.bricks, "object")
    })

    it('should have default values', function() {
      let world = new World;
      assert.equal(world.height, 500);
      assert.equal(world.width, 900);
    })

    it('should take given values as properties', function() {
      let heightValue = 400;
      let widthValue = 800;
      let properties = {
        height : heightValue,
        width : widthValue
      }
      const world = new World(properties);

      assert.equal(world.height, 400);
      assert.equal(world.width, 800);
    });

    it('should have a bricks property, which starts out as an empty array', function() {
      let world = new World(100, 100);
      assert.isArray(world.bricks);
      assert.deepEqual(world.bricks, []);
    });

    it('should have a paddles property, which starts out as an empty array', function() {
      let world = new World(100, 100);
      assert.isArray(world.paddles);
      assert.deepEqual(world.paddles, []);
    });

    it('should have a balls property, which starts out as an empty array', function() {
      let world = new World(100, 100);
      assert.isArray(world.balls);
      assert.deepEqual(world.balls, []);
    })
  });

  context('Game can be won and lost', function() {
    // it('should be able to tell the user they lost',function() {
    // let world = new World
    // let brick = new Brick ({ x: 485 })
    //
    //
    // assert
    // })

    // it('should be able to tell the user they won', function() {
    //   let world = new World
    //   let brick = new Brick({ status: true });
    //   // let brick = new Brick({ status: true });
    //
    //   world.addBrick(brick);
    //   world.removeHitBricks();
    //   assert.deepEqual(world.bricks.length, 1)
    // })
  })
});
