requirejs.config({
  paths: {
    mocha: '../components/mocha/mocha',
    chai: '../components/chai/chai',
    camera: '../camera'
  },

  shim: {
    'mocha': {
      init: () ->
        this.mocha.setup('tdd');
        return this.mocha;
    }
  }
});

require(['camera', 'mocha', 'chai', 'test.camera'], (Camera) ->
  mocha.run();
);