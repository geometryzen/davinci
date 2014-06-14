(function()
{
  Sk.stdlib.defineEight = function(mod, BLADE)
  {
    Sk.ffi.checkFunctionArgs('defineEight', arguments, 2, 2);
    Sk.builtin.defineNode(mod);

    mod.mesh = Sk.ffi.functionPy(function(geometryPy)
    {
      Sk.ffi.checkFunctionArgs('mesh(geometry)', arguments, 1, 1);
      var geometry = Sk.ffi.remapToJs(geometryPy);
      return Sk.ffi.remapToPy(EIGHT.mesh(geometry));
    });

    mod.perspectiveCamera = Sk.ffi.functionPy(function(fovPy, aspectPy, nearPy, farPy)
    {
      Sk.ffi.checkFunctionArgs('perspectiveCamera(fov, aspect, near, far)', arguments, 4, 4);
      var fov = Sk.ffi.remapToJs(fovPy);
      var aspect = Sk.ffi.remapToJs(aspectPy);
      var near = Sk.ffi.remapToJs(nearPy);
      var far = Sk.ffi.remapToJs(farPy);
      return Sk.ffi.remapToPy(EIGHT.perspectiveCamera(fov, aspect, near, far));
    });

    mod.scene = Sk.ffi.functionPy(function()
    {
      Sk.ffi.checkFunctionArgs('scene()', arguments, 0, 0);
      return Sk.ffi.remapToPy(EIGHT.scene());
    });

    mod.boxGeometry = Sk.ffi.functionPy(function()
    {
      Sk.ffi.checkFunctionArgs('boxGeometry()', arguments, 0, 0);
      return Sk.ffi.remapToPy(EIGHT.boxGeometry());
    });

    mod.prismGeometry = Sk.ffi.functionPy(function()
    {
      Sk.ffi.checkFunctionArgs('prismGeometry()', arguments, 0, 0);
      return Sk.ffi.remapToPy(EIGHT.prismGeometry());
    });

    mod.webGLContextMonitor = Sk.ffi.functionPy(function(canvasPy, contextLossPy, contextGainPy)
    {
      Sk.ffi.checkFunctionArgs('webGLContextMonitor(canvas, contextLoss, contextGain)', arguments, 3, 3);
      var canvas = Sk.ffi.remapToJs(canvasPy);
      var contextLoss = Sk.ffi.remapToJs(contextLossPy);
      var contextGain = Sk.ffi.remapToJs(contextGainPy);
      return Sk.ffi.remapToPy(EIGHT.webGLContextMonitor(canvas, contextLoss, contextGain));
    });

    mod.webGLRenderer = Sk.ffi.functionPy(function()
    {
      Sk.ffi.checkFunctionArgs('webGLRenderer()', arguments, 0, 0);
      return Sk.ffi.remapToPy(EIGHT.webGLRenderer());
    });

    mod.windowAnimationRunner = Sk.ffi.functionPy(function(tickPy, terminatePy, setUpPy, tearDownPy, winPy)
    {
      Sk.ffi.checkFunctionArgs('windowAnimationRunner(tick, terminate, setUp, tearDown[, window])', arguments, 4, 5);
      var tick = Sk.ffi.remapToJs(tickPy);
      var terminate = Sk.ffi.remapToJs(terminatePy);
      var setUp = Sk.ffi.remapToJs(setUpPy);
      var tearDown = Sk.ffi.remapToJs(tearDownPy);
      var win = Sk.ffi.remapToJs(winPy);
      return Sk.ffi.remapToPy(EIGHT.windowAnimationRunner(tick, terminate, setUp, tearDown, win));
    });

    mod.workbench3D = Sk.ffi.functionPy(function(canvasPy, rendererPy, cameraPy, winPy)
    {
      Sk.ffi.checkFunctionArgs('webGLContextMonitor(canvas, renderer, camera[, window])', arguments, 3, 4);
      var canvas = Sk.ffi.remapToJs(canvasPy);
      var renderer = Sk.ffi.remapToJs(rendererPy);
      var camera = Sk.ffi.remapToJs(cameraPy);
      var win = Sk.ffi.remapToJs(winPy);
      return Sk.ffi.remapToPy(EIGHT.workbench3D(canvas, renderer, camera, win));
    });

    mod.vectorE3 = Sk.ffi.functionPy(function(xPy, yPy, zPy)
    {
      Sk.ffi.checkFunctionArgs('vectorE3(x, y, z)', arguments, 3, 3);
      var x = Sk.ffi.remapToJs(xPy);
      var y = Sk.ffi.remapToJs(yPy);
      var z = Sk.ffi.remapToJs(zPy);
      return Sk.ffi.remapToPy(EIGHT.vectorE3(x, y, z));
    });

    mod.bivectorE3 = Sk.ffi.functionPy(function(xyPy, yzPy, zxPy)
    {
      Sk.ffi.checkFunctionArgs('bivectorE3(xy, yz, zx)', arguments, 3, 3);
      var xy = Sk.ffi.remapToJs(xyPy);
      var yz = Sk.ffi.remapToJs(yzPy);
      var zx = Sk.ffi.remapToJs(zxPy);
      return Sk.ffi.remapToPy(EIGHT.bivectorE3(xy, yz, zx));
    });

  }
}).call(this);
