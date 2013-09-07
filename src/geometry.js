/**
 * Convenience function for incorporating visual components into a module.
 *
 * Usage:
 *
 * Sk.builtin.defineGeometry(mod);
 */
(function() {
  /**
   * @param {string} moduleName The name of the module.
   */
  Sk.builtin.defineGeometry = function(mod, THREE, moduleName) {
    Sk.ffi.checkFunctionArgs("defineGeometry", arguments, 3, 3);
    Sk.ffi.checkArgType("moduleName", Sk.ffi.JsType.STRING, typeof moduleName === Sk.ffi.JsType.STRING);
    /**
     * A Euclidean space described by Cartesian coordinates with 3 dimensions.
     *
     * @const
     * @type {string}
     */
    var CARTESIAN_SPACE                 = "CartesianSpace";
    /**
     * @const
     * @type {string}
     */
    var SCENE                           = "Scene";
    /**
     * @const
     * @type {string}
     */
    var PERSPECTIVE_CAMERA              = "PerspectiveCamera";
    /**
     * @const
     * @type {string}
     */
    var WEBGL_RENDERER                  = "WebGLRenderer";
    /**
     * @const
     * @type {string}
     */
    var PROP_ORIGIN                     = "origin";
    /**
     * @const
     * @type {string}
     */
    var PROP_CAMERA                     = "camera";
    /**
     * @const
     * @type {string}
     */
    var PROP_RENDERER                   = "renderer";
    /**
     * @const
     * @type {string}
     */
    var PROP_SCENE                      = "scene";
    /**
     * @const
     * @type {string}
     */
    var PROP_WIDTH                      = "width";
    /**
     * @const
     * @type {string}
     */
    var PROP_HEIGHT                     = "height";
    /**
     * @const
     * @type {string}
     */
    var METHOD_ADD                      = "add";
    /**
     * @const
     * @type {string}
     */
    var METHOD_LOOK_AT                  = "lookAt";
    /**
     * @const
     * @type {string}
     */
    var METHOD_SET_CLEAR_COLOR          = "setClearColor";
    /**
     * @const
     * @type {string}
     */
    var METHOD_RENDER                   = "render";
    /**
     * @const
     * @type {string}
     */
    var METHOD_VIEW_SIZE                = "viewSize";
    /**
     * @const
     * @type {string}
     */
    var METHOD_SET_SIZE                 = "setSize";
    /**
     * @const
     * @type {string}
     */
    var METHOD_UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix";

    mod[CARTESIAN_SPACE] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scenePy) {
        Sk.ffi.checkMethodArgs(CARTESIAN_SPACE, arguments, 0, 0);
        var scenePy = Sk.ffi.callsim(mod['world']);
        var scene = Sk.ffi.remapToJs(scenePy);
        var cameraPy = Sk.ffi.callsim(mod[PERSPECTIVE_CAMERA], Sk.ffi.numberToPy(45), Sk.ffi.numberToPy(1.0), Sk.ffi.numberToPy(0.1), Sk.ffi.numberToPy(10000));
        var camera = Sk.ffi.remapToJs(cameraPy);
        camera.position.set(8, 8, 8);
        camera[METHOD_LOOK_AT](scene.position);
        var rendererPy = Sk.ffi.callsim(mod[WEBGL_RENDERER]);
        var renderer = Sk.ffi.remapToJs(rendererPy);
        renderer[METHOD_SET_CLEAR_COLOR](0x080808, 1.0);
        Sk.ffi.referenceToPy({scenePy: scenePy, cameraPy: cameraPy, rendererPy: rendererPy}, CARTESIAN_SPACE, undefined, selfPy);
      });
      $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
        var space = Sk.ffi.remapToJs(selfPy);
        switch(name) {
          case PROP_CAMERA: {
            return space.cameraPy;
          }
          case PROP_ORIGIN: {
            return Sk.ffi.gattr(space.scenePy, 'position');
          }
          case PROP_RENDERER: {
            return space.rendererPy;
          }
          case PROP_SCENE: {
            return space.scenePy;
          }
          case METHOD_ADD: {
            return Sk.ffi.gattr(space.scenePy, METHOD_ADD);
          }
          case METHOD_RENDER: {
            return Sk.ffi.callableToPy(mod, METHOD_RENDER, function() {
              var methodPy = Sk.ffi.gattr(space.rendererPy, METHOD_RENDER);
              return Sk.ffi.callsim(methodPy, space.scenePy, space.cameraPy);
            });
          }
          case METHOD_VIEW_SIZE: {
            return Sk.ffi.callableToPy(mod, METHOD_RENDER, function(methodPy, widthPy, heightPy) {
                Sk.ffi.checkMethodArgs(METHOD_VIEW_SIZE, arguments, 2, 2);
                Sk.ffi.checkArgType(PROP_WIDTH, Sk.ffi.PyType.INT, Sk.ffi.isInt(widthPy));
                Sk.ffi.checkArgType(PROP_HEIGHT, Sk.ffi.PyType.INT, Sk.ffi.isInt(heightPy));
                var width  = Sk.ffi.remapToJs(widthPy);
                var height = Sk.ffi.remapToJs(heightPy);
                var renderer = Sk.ffi.remapToJs(space.rendererPy);
                renderer.setSize(width, height);
                var camera = Sk.ffi.remapToJs(space.cameraPy);
                camera.aspect = width / height;
                camera[METHOD_UPDATE_PROJECTION_MATRIX]();
            });
          }
          default: {
            throw Sk.ffi.err.attribute(name).isNotGetableOnType(CARTESIAN_SPACE);
          }
        }
      });
      $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
        var space = Sk.ffi.remapToJs(selfPy);
        return Sk.ffi.stringToPy("" + space)
      })
      $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
        var space = Sk.ffi.remapToJs(selfPy);
        return Sk.ffi.stringToPy("" + space)
      })
    }, CARTESIAN_SPACE, []);
  };
}).call(this);
