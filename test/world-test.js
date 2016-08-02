const assert = require('chai').assert;

const World = require('./../lib/world');

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
  //
  // context('Game can be won', function() {
  //   it.skip('will inform player if the game is won', function() {
  //     let world = new World
  //     let ball = new Ball { status: false }
  //   })
  // })
});
