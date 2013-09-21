(function() {
Sk.builtin.defineWorkbench = function(mod) {
Sk.ffi.checkFunctionArgs("defineWorkbench", arguments, 1, 1);
/**
 * @const
 * @type {string}
 */
var WORKBENCH                       = "Workbench";
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

function removeElementsByTagName(tagName) {
  var elements = document.getElementsByTagName(tagName);
  for (var i = elements.length - 1; i >= 0; i--) {
    var e = elements[i];
    e.parentNode.removeChild(e);
  }
}

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
          removeElementsByTagName('canvas');
          document.body.insertBefore(workbench.renderer['domElement'], document.body.firstChild);
          window.addEventListener('resize', workbench.onWindowResize, false);
          workbench.onWindowResize(null);
        });
      }
      case METHOD_TEAR_DOWN: {
        return Sk.ffi.callableToPy(mod, METHOD_TEAR_DOWN, function(methodPy) {
          window.removeEventListener('resize', workbench.onWindowResize, false);
          removeElementsByTagName('canvas');
        });
      }
    }
  });
}, WORKBENCH, []);

};
}).call(this);
