define ['camera', 'mocha', 'chai'], (Camera, mocha, chai) ->
  assert = chai.assert
  suite 'Camera', () ->
    camera = new Camera()
    suite '#Camera', () ->
      test 'is instance of Camera', () ->
        assert.instanceOf(camera, Camera)
    suite '#take()', () ->
      test 'is function', () ->
        assert.isFunction(camera.take)
