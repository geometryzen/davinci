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
var PROP_CANVAS                     = "canvas";
/**
 * @const
 * @type {string}
 */
var PROP_WINDOW                     = "window";
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
 * @param {*} arg
 * @return {boolean}
 */
var isWindow = (function () {
    "use strict";
    var wStr;
    wStr = Object.prototype.toString.call(window);
    return function(arg) {
        var e,
            str,
            self,
            hasSelf;
        //Safari returns DOMWindow
        //Chrome returns global
        //Firefox, Opera & IE9 return Window
        str = Object.prototype.toString.call(arg);
        switch (wStr) {
        case '[object DOMWindow]':
        case '[object Window]':
        case '[object global]':
            return str === wStr;
        }
        ///window objects always have a `self` property;
        ///however, `arg.self == arg` could be fooled by:
        ///var o = {};
        ///o.self = o;
        if ('self' in arg) {
            //`'self' in arg` is true if
            //the property exists on the object _or_ the prototype
            //`arg.hasOwnProperty('self')` is true only if
            //the property exists on the object
            hasSelf = arg.hasOwnProperty('self');
            try {
                if (hasSelf) {
                    self = arg.self;
                }
                delete arg.self;
                if (hasSelf) {
                    arg.self = self;
                }
            } catch (e) {
                //IE 7&8 throw an error when window.self is deleted
                return true;
            }
        }
        return false;
    };
}());

var windowFromPy = function(windowPy)
{
  if (typeof windowPy !== 'undefined' && !Sk.ffi.isNone(windowPy))
  {
    var windowJs = Sk.ffi.remapToJs(windowPy);
    Sk.ffi.checkArgType(PROP_WINDOW, "Window", isWindow(windowJs), windowPy);
    return windowJs;
  }
  else
  {
    return window;
  }
};

/**
 * Workbench2D
 */
mod[WORKBENCH_2D] = Sk.ffi.buildClass(mod, function($gbl, $loc)
{
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, canvasPy, windowPy) {
    Sk.ffi.checkMethodArgs(WORKBENCH_2D + "(canvas[, window])", arguments, 1, 2);
    Sk.ffi.checkArgType(PROP_CANVAS, [Sk.ffi.PyType.OBJECT], Sk.ffi.isObject(canvasPy) || Sk.ffi.isInstance(canvasPy), canvasPy);
    var canvas = Sk.ffi.remapToJs(canvasPy);
    var windowJs = windowFromPy(windowPy);
    function onWindowResize(event)
    {
      var width  = windowJs.innerWidth;
      var height = windowJs.innerHeight;
      canvas.width  = width;
      canvas.height = height;
    }
    Sk.ffi.referenceToPy({"canvas": canvas, "window": windowJs, "onWindowResize": onWindowResize}, WORKBENCH_2D, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name)
  {
    var workbench = Sk.ffi.remapToJs(selfPy);
    var windowJs = workbench.window;
    var documentJs = windowJs.document;
    switch(name) {
      case METHOD_SET_UP: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_UP, function(methodPy)
        {
          Sk.ffi.checkMethodArgs(METHOD_SET_UP, arguments, 0, 0);
          documentJs.body.insertBefore(workbench.canvas, documentJs.body.firstChild);
          windowJs.addEventListener('resize', workbench.onWindowResize, false);
          workbench.onWindowResize(null);
        });
      }
      case METHOD_TEAR_DOWN: {
        return Sk.ffi.callableToPy(mod, METHOD_TEAR_DOWN, function(methodPy)
        {
          windowJs.removeEventListener('resize', workbench.onWindowResize, false);
          removeElementsByTagName(TAG_NAME_CANVAS);
        });
      }
    }
  });
}, WORKBENCH_2D, []);
/**
 * Workbench3D
 */
mod[WORKBENCH_3D] = Sk.ffi.buildClass(mod, function($gbl, $loc)
{
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, canvasPy, rendererPy, cameraPy, windowPy)
  {
    Sk.ffi.checkMethodArgs(WORKBENCH_3D + "(canvas, renderer, camera[, window])", arguments, 3, 4);
    var canvas   = Sk.ffi.remapToJs(canvasPy);
    var renderer = Sk.ffi.remapToJs(rendererPy);
    var camera   = Sk.ffi.remapToJs(cameraPy);
    var windowJs = windowFromPy(windowPy);
    function onWindowResize(event)
    {
      var width  = windowJs.innerWidth;
      var height = windowJs.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera[METHOD_UPDATE_PROJECTION_MATRIX]();
    }
    Sk.ffi.referenceToPy({"canvas": canvas, "renderer": renderer, "camera": camera, "window": windowJs, "onWindowResize": onWindowResize}, WORKBENCH_3D, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name)
  {
    var workbench = Sk.ffi.remapToJs(selfPy);
    var windowJs = workbench.window;
    var documentJs = windowJs.document;
    switch(name) {
      case METHOD_SET_UP: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_UP, function(methodPy)
        {
          documentJs.body.insertBefore(workbench.canvas, documentJs.body.firstChild);
          windowJs.addEventListener('resize', workbench.onWindowResize, false);
          workbench.onWindowResize(null);
        });
      }
      case METHOD_TEAR_DOWN:
      {
        return Sk.ffi.callableToPy(mod, METHOD_TEAR_DOWN, function(methodPy)
        {
          windowJs.removeEventListener('resize', workbench.onWindowResize, false);
          removeElementsByTagName(TAG_NAME_CANVAS);
        });
      }
    }
  });
}, WORKBENCH_3D, []);

};
}).call(this);
