var assert = chai.assert;

suite('Camera', function(){
  var camera = new Camera();
  suite('#Camera', function(){
    test('is instance of Camera', function(){
      assert.instanceOf(camera, Camera);    
    });
  });
  suite('#take()', function(){
    test('is function', function(){
      assert.isFunction(camera.take);
    });
  });
});