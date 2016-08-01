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

    it('should take take the first argument and set it as the "height" property', function() {
      let world = new World(500, 50);
      assert.equal(world.height, 500);
    });

    it('should take take the second argument and set it as the "width" property', function() {
      let world = new World(50, 900);
      assert.equal(world.width, 900);
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
});
