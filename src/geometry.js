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
var PROP_VERTICES                   = "vertices";
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
var PROP_POSITION                   = "position";
/**
 * @const
 * @type {string}
 */
var PROP_UP                         = "up";
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
/**
 * @const
 * @type {string}
 */
var WORLD                           = "world";
/**
 * @const
 * @type {string}
 */
var CUBE                            = "cube";
/**
 * @const
 * @type {string}
 */
var CYLINDER                        = "cylinder";
/**
 * @const
 * @type {string}
 */
var SPHERE                          = "sphere";
/**
 * @const
 * @type {string}
 */
var POINT_LIGHT                     = "PointLight";
/**
 * @const
 * @type {string}
 */
var LINE_BASIC_MATERIAL             = "LineBasicMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_LAMBERT_MATERIAL           = "MeshLambertMaterial";
/**
 * @const
 * @type {string}
 */
var CUBE_GEOMETRY                   = "CubeGeometry";
/**
 * @const
 * @type {string}
 */
var CYLINDER_GEOMETRY               = "CylinderGeometry";
/**
 * @const
 * @type {string}
 */
var SPHERE_GEOMETRY                 = "SphereGeometry";
/**
 * @const
 * @type {string}
 */
var LINE                            = "Line";
/**
 * @const
 * @type {string}
 */
var MESH                            = "Mesh";
/**
 * @const
 * @type {string}
 */
var GEOMETRY                        = "Geometry";
/**
 * @const
 * @type {string}
 */
var OBJECT_3D                       = "Object3D";
/**
 * @const
 * @type {string}
 */
var VECTOR_3                        = "Vector3";
/**
 * @const
 * @type {number}
 */
var COLOR_GRID = 0x66A1D2
var MATERIAL_GRID_MAJOR = new THREE[LINE_BASIC_MATERIAL]({"color": COLOR_GRID,"opacity":0.20,"transparent":true});
var MATERIAL_GRID_MINOR = new THREE[LINE_BASIC_MATERIAL]({"color": COLOR_GRID,"opacity":0.02,"transparent":true});
var e1 = new THREE[VECTOR_3](1, 0, 0);
var e2 = new THREE[VECTOR_3](0, 1, 0);
var e3 = new THREE[VECTOR_3](0, 0, 1);

mod[WORLD] = Sk.ffi.functionPy(function() {
  Sk.ffi.checkFunctionArgs(WORLD, arguments, 0, 0);
  var scenePy = Sk.ffi.callsim(mod[SCENE]);
  var scene = Sk.ffi.remapToJs(scenePy);

  var pointLight = new THREE[POINT_LIGHT](0xFFFFFF);
  pointLight.position.set(4, 4, 4);
  scene.add(pointLight);

  return scenePy;
});

mod[CUBE] = Sk.nativejs.func(function box(width, height, depth) {
  Sk.ffi.checkFunctionArgs(CUBE, arguments, 0, 3);
  var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy({"color": 0x0000FF}));
  width  = Sk.ffi.remapToJs(width) || 1;
  height = Sk.ffi.remapToJs(height) || 1;
  depth  = Sk.ffi.remapToJs(depth) || 1;
  var geometryPy = Sk.ffi.callsim(mod[CUBE_GEOMETRY], Sk.ffi.remapToPy(width), Sk.ffi.remapToPy(height), Sk.ffi.remapToPy(depth));
  return Sk.ffi.callsim(mod[MESH], geometryPy, materialPy);
});

mod[CYLINDER] = Sk.nativejs.func(function box(radiusTop, radiusBottom, height) {
  Sk.ffi.checkFunctionArgs(CYLINDER, arguments, 0, 3);
  var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy({"color": 0x00FF00}));
  radiusBottom = Sk.ffi.remapToJs(radiusBottom) || 1;
  radiusTop  = Sk.ffi.remapToJs(radiusTop,  radiusBottom);
  height  = Sk.ffi.remapToJs(height) || 1;
  radiusTop          = Sk.ffi.remapToPy(radiusTop);
  radiusBottom       = Sk.ffi.remapToPy(radiusBottom);
  height             = Sk.ffi.remapToPy(height);
  var radialSegments = Sk.ffi.remapToPy(32);
  var geometryPy = Sk.ffi.callsim(mod[CYLINDER_GEOMETRY], radiusTop, radiusBottom, height, radialSegments);
  return Sk.ffi.callsim(mod[MESH], geometryPy, materialPy);
});

mod[SPHERE] = Sk.nativejs.func(function box(radius) {
  Sk.ffi.checkFunctionArgs(SPHERE, arguments, 0, 1);
  var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy({"color": 0xFF0000}));
  radius = Sk.ffi.remapToJs(radius) || 1;
  radius = Sk.ffi.remapToPy(radius);
  var widthSegments = Sk.ffi.remapToPy(24);
  var heightSegments = Sk.ffi.remapToPy(18);
  var geometryPy = Sk.ffi.callsim(mod[SPHERE_GEOMETRY], radius, widthSegments, heightSegments);
  return Sk.ffi.callsim(mod[MESH], geometryPy, materialPy);
});

/**
 * @param {number} size The extent of the axes.
 */
function createCartesianAxes(size) {
  var COLOR_X_AXIS = 0xFF0000;
  var COLOR_Y_AXIS = 0x00FF00;
  var COLOR_Z_AXIS = 0x0000FF;
  var geometries = [[+size,0,0],[0,+size,0],[0,0,+size],[-size,0,0],[0,-size,0],[0,0,-size]].map(function(v) {
    var geometry = new THREE[GEOMETRY]();
    geometry[PROP_VERTICES].push(new THREE[VECTOR_3](0, 0, 0));
    geometry[PROP_VERTICES].push(new THREE[VECTOR_3](v[0], v[1], v[2]));
    return geometry;
  });

  var axes = new THREE[OBJECT_3D]();
  axes.add(new THREE[LINE](geometries[0], new THREE[LINE_BASIC_MATERIAL]({"color":COLOR_X_AXIS, "opacity": 0.5, "transparent":true})));
  axes.add(new THREE[LINE](geometries[1], new THREE[LINE_BASIC_MATERIAL]({"color":COLOR_Y_AXIS, "opacity": 0.5, "transparent":true})));
  axes.add(new THREE[LINE](geometries[2], new THREE[LINE_BASIC_MATERIAL]({"color":COLOR_Z_AXIS, "opacity": 0.5, "transparent":true})));
  axes.add(new THREE[LINE](geometries[3], new THREE[LINE_BASIC_MATERIAL]({"color":COLOR_X_AXIS, "opacity": 0.2, "transparent":true})));
  axes.add(new THREE[LINE](geometries[4], new THREE[LINE_BASIC_MATERIAL]({"color":COLOR_Y_AXIS, "opacity": 0.2, "transparent":true})));
  axes.add(new THREE[LINE](geometries[5], new THREE[LINE_BASIC_MATERIAL]({"color":COLOR_Z_AXIS, "opacity": 0.2, "transparent":true})));
  return axes;
}

/**
 * @param {number} majorSteps
 * @param {number} minorsPerMajorMark
 * @param {number} majorScale
 * @param {!Object} e
 * @param {!Object} o
 */
function createCartesianLines(majorSteps, minorsPerMajorMark, majorScale, e, o) {
  var grid = new THREE[OBJECT_3D]();
  var steps = majorSteps * minorsPerMajorMark;
  var minorScale = majorScale / minorsPerMajorMark;
  var extent = majorSteps * majorScale;
  var extentX = o.x * extent;
  var extentY = o.y * extent;
  var extentZ = o.z * extent;
  for (var i = -steps; i <= steps; i += 1) {
    if (i != 0) {
      var t = i * minorScale;
      var gridLineGeometry = new THREE[GEOMETRY]();
      gridLineGeometry[PROP_VERTICES].push(new THREE[VECTOR_3](e.x*t-extentX, e.y*t-extentY, e.z*t-extentZ));
      gridLineGeometry[PROP_VERTICES].push(new THREE[VECTOR_3](e.x*t+extentX, e.y*t+extentY, e.z*t+extentZ));
      var material = (i % minorsPerMajorMark === 0) ? MATERIAL_GRID_MAJOR : MATERIAL_GRID_MINOR;
      var line = new THREE[LINE](gridLineGeometry, material);
      grid.add(line);
    }
  }
  return grid;
}

mod[CARTESIAN_SPACE] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scenePy) {
    Sk.ffi.checkMethodArgs(CARTESIAN_SPACE, arguments, 0, 0);
    var scenePy = Sk.ffi.callsim(mod[WORLD]);
    var scene = Sk.ffi.remapToJs(scenePy);
    var cameraPy = Sk.ffi.callsim(mod[PERSPECTIVE_CAMERA], Sk.ffi.numberToPy(45), Sk.ffi.numberToPy(1.0), Sk.ffi.numberToPy(0.1), Sk.ffi.numberToPy(10000));
    var camera = Sk.ffi.remapToJs(cameraPy);
    camera[PROP_UP].set(0, 0, 1);
    camera[PROP_POSITION].set(+8, -8, +8);
    camera[METHOD_LOOK_AT](scene.position);
    var rendererPy = Sk.ffi.callsim(mod[WEBGL_RENDERER], Sk.ffi.remapToPy({"antialias":true}));
    var renderer = Sk.ffi.remapToJs(rendererPy);
    renderer[METHOD_SET_CLEAR_COLOR](0x080808, 1.0);
    scene.add(createCartesianAxes(1000));
    scene.add(createCartesianLines(5, 10, 1.0, e1, e2));
    scene.add(createCartesianLines(5, 10, 1.0, e2, e1));
    Sk.ffi.referenceToPy({scenePy: scenePy, cameraPy: cameraPy, rendererPy: rendererPy}, CARTESIAN_SPACE, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var space = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_CAMERA: {
        return space.cameraPy;
      }
      case PROP_ORIGIN: {
        return Sk.ffi.gattr(space.scenePy, PROP_POSITION);
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
        return Sk.ffi.callableToPy(mod, METHOD_RENDER, function(methodPy) {
          // Delegate the call to the renderer with scene and camera arguments.
          methodPy = Sk.ffi.gattr(space.rendererPy, METHOD_RENDER);
          return Sk.ffi.callsim(methodPy, space.scenePy, space.cameraPy);
        });
      }
      case METHOD_VIEW_SIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_RENDER, function(methodPy, widthPy, heightPy) {
          Sk.ffi.checkMethodArgs(METHOD_VIEW_SIZE, arguments, 2, 2);
          Sk.ffi.checkArgType(PROP_WIDTH, Sk.ffi.PyType.INT, Sk.ffi.isInt(widthPy), widthPy);
          Sk.ffi.checkArgType(PROP_HEIGHT, Sk.ffi.PyType.INT, Sk.ffi.isInt(heightPy), heightPy);
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
