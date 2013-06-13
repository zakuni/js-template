requirejs.config({
  paths: {
    mocha: '../components/mocha/mocha',
    chai: '../components/chai/chai',
    camera: '../camera'
  },

  shim: {
    'mocha': {
      init: function () {
        this.mocha.setup('tdd');
        return this.mocha;
      }
    }
  }
});

require(['camera', 'mocha', 'chai'], function(Camera){
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
  mocha.run();
});