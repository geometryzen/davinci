(function() {
Sk.builtin.defineWorkbench = function(mod) {
Sk.ffi.checkFunctionArgs("defineWorkbench", arguments, 1, 1);
/**
 * @const
 * @type {string}
 */
var WORKBENCH_2D                    = "Workbench2D";
/**
 * @const
 * @type {string}
 */
var WORKBENCH_3D                    = "Workbench3D";
/**
 * @const
 * @type {string}
 */
var WORKBENCH                       = "Workbench";
/**
 * @const
 * @type {string}
 */
var PROP_CANVAS                     = "canvas";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_UP                   = "setUp";
/**
 * @const
 * @type {string}
 */
var METHOD_TEAR_DOWN                = "tearDown";
/**
 * @const
 * @type {string}
 */
var METHOD_UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix";
/**
 * @const
 * @type {string}
 */
var TAG_NAME_CANVAS                 = "canvas";

function removeElementsByTagName(tagName) {
  var elements = document.getElementsByTagName(tagName);
  for (var i = elements.length - 1; i >= 0; i--) {
    var e = elements[i];
    e.parentNode.removeChild(e);
  }
}
/**
 * Workbench2D
 */
mod[WORKBENCH_2D] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, canvasPy) {
    Sk.ffi.checkMethodArgs(WORKBENCH_2D, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_CANVAS, "Element", Sk.ffi.isClass(canvasPy), canvasPy);
    var canvas = Sk.ffi.remapToJs(canvasPy);
    function onWindowResize(event) {
      var width  = window.innerWidth;
      var height = window.innerHeight;
      canvas.width  = width;
      canvas.height = height;
    }
    Sk.ffi.referenceToPy({"canvas": canvas, "onWindowResize": onWindowResize}, WORKBENCH_2D, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var workbench = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_SET_UP: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_UP, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_SET_UP, arguments, 0, 0);
          document.body.insertBefore(workbench.canvas, document.body.firstChild);
          window.addEventListener('resize', workbench.onWindowResize, false);
          workbench.onWindowResize(null);
        });
      }
      case METHOD_TEAR_DOWN: {
        return Sk.ffi.callableToPy(mod, METHOD_TEAR_DOWN, function(methodPy) {
          window.removeEventListener('resize', workbench.onWindowResize, false);
          removeElementsByTagName(TAG_NAME_CANVAS);
        });
      }
    }
  });
}, WORKBENCH_2D, []);
/**
 * Workbench3D
 */
mod[WORKBENCH_3D] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, canvasPy, rendererPy, cameraPy) {
    Sk.ffi.checkMethodArgs(WORKBENCH_3D, arguments, 3, 3);
    Sk.ffi.checkArgType(PROP_CANVAS, "Element", Sk.ffi.isClass(canvasPy), canvasPy);
    var canvas   = Sk.ffi.remapToJs(canvasPy);
    var renderer = Sk.ffi.remapToJs(rendererPy);
    var camera   = Sk.ffi.remapToJs(cameraPy);
    function onWindowResize(event) {
      var width  = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera[METHOD_UPDATE_PROJECTION_MATRIX]();
    }
    Sk.ffi.referenceToPy({"canvas": canvas, "renderer": renderer, "camera": camera, "onWindowResize": onWindowResize}, WORKBENCH_3D, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var workbench = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_SET_UP: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_UP, function(methodPy) {
          document.body.insertBefore(workbench.canvas, document.body.firstChild);
          window.addEventListener('resize', workbench.onWindowResize, false);
          workbench.onWindowResize(null);
        });
      }
      case METHOD_TEAR_DOWN: {
        return Sk.ffi.callableToPy(mod, METHOD_TEAR_DOWN, function(methodPy) {
          window.removeEventListener('resize', workbench.onWindowResize, false);
          removeElementsByTagName(TAG_NAME_CANVAS);
        });
      }
    }
  });
}, WORKBENCH_3D, []);
/**
 * Workbench will be deprecated.
 */
mod[WORKBENCH] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, rendererPy, cameraPy) {
    Sk.ffi.checkMethodArgs(WORKBENCH, arguments, 2, 2);
    var renderer = Sk.ffi.remapToJs(rendererPy);
    var camera   = Sk.ffi.remapToJs(cameraPy);
    function onWindowResize(event) {
      var width  = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera[METHOD_UPDATE_PROJECTION_MATRIX]();
    }
    Sk.ffi.referenceToPy({"renderer": renderer, "camera": camera, "onWindowResize": onWindowResize}, WORKBENCH, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var workbench = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_SET_UP: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_UP, function(methodPy) {
          document.body.insertBefore(workbench.renderer['domElement'], document.body.firstChild);
          window.addEventListener('resize', workbench.onWindowResize, false);
          workbench.onWindowResize(null);
        });
      }
      case METHOD_TEAR_DOWN: {
        return Sk.ffi.callableToPy(mod, METHOD_TEAR_DOWN, function(methodPy) {
          window.removeEventListener('resize', workbench.onWindowResize, false);
          removeElementsByTagName(TAG_NAME_CANVAS);
        });
      }
    }
  });
}, WORKBENCH, []);

};
}).call(this);
