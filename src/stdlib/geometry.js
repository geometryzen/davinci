Sk.geometry = Sk.geometry || {};
/**
 * @const
 * @type {string}
 */
Sk.geometry.ARROW_BUILDER                   = "ArrowBuilder";
/**
 * @const
 * @type {string}
 */
Sk.geometry.CYLINDER_BUILDER                = "CylinderBuilder";
/**
 * @const
 * @type {string}
 */
Sk.geometry.VORTEX_BUILDER                  = "VortexBuilder";
/**
 * @const
 * @type {string}
 */
Sk.geometry.VOLUME_BUILDER                  = "VolumeBuilder";
/**
 * @const
 * @type {string}
 */
Sk.geometry.VOLUME                          = "Volume";

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
var EUCLIDEAN_3                     = "Euclidean3";
/**
 * @const
 * @type {string}
 */
var COLOR                           = "Color";
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
var CANVAS_RENDERER                 = "CanvasRenderer";
/**
 * @const
 * @type {string}
 */
var WEBGL_RENDERER                  = "WebGLRenderer";
/**
 * @const
 * @type {string}
 */
var PROP_ATTITUDE                   = "attitude";
/**
 * @const
 * @type {string}
 */
var PROP_AXIS                       = "axis";
/**
 * @const
 * @type {string}
 */
var PROP_ORIGIN                     = "origin";
/**
 * @const
 * @type {string}
 */
var PROP_ORIENTATION                = "orientation";
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
var PROP_COLOR                      = "color";
/**
 * @const
 * @type {string}
 */
var PROP_DEPTH                      = "depth";
/**
 * @const
 * @type {string}
 */
var PROP_HEIGHT                     = "height";
/**
 * @const
 * @type {string}
 */
var PROP_MAGNITUDE                  = "magnitude";
/**
 * @const
 * @type {string}
 */
var PROP_MATERIAL                   = "material";
/**
 * @const
 * @type {string}
 */
var PROP_NAME                       = "name";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS                     = "radius";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS_TOP                 = "radiusTop";
/**
 * @const
 * @type {string}
 */
var PROP_RADIUS_BOTTOM              = "radiusBottom";
/**
 * @const
 * @type {string}
 */
var PROP_SCALE                      = "scale";
/**
 * @const
 * @type {string}
 */
var PROP_SEGMENTS                   = "segments";
/**
 * @const
 * @type {string}
 */
var PROP_VOLUME                     = "volume";
/**
 * @const
 * @type {string}
 */
var PROP_WIDTH                      = "width";
/**
 * @const
 * @type {string}
 */
var PROP_WIREFRAME                  = "wireframe";
/**
 * @const
 * @type {string}
 */
var PROP_WIREFRAME_LINEWIDTH        = "wireframeLinewidth";
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
var METHOD_BUILD                    = "build";
/**
 * @const
 * @type {string}
 */
var METHOD_LOOK_AT                  = "lookAt";
/**
 * @const
 * @type {string}
 */
var METHOD_NORMALIZE                = "normalize";
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
var CONE_BUILDER                    = "ConeBuilder";
/**
 * @const
 * @type {string}
 */
var CUBE_BUILDER                    = "CubeBuilder";
/**
 * @const
 * @type {string}
 */
var PLANE_BUILDER                   = "PlaneBuilder";
/**
 * @const
 * @type {string}
 */
var SPHERE_BUILDER                  = "SphereBuilder";
/**
 * @const
 * @type {string}
 */
var AMBIENT_LIGHT                   = "AmbientLight";
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
var MESH_BASIC_MATERIAL             = "MeshBasicMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_LAMBERT_MATERIAL           = "MeshLambertMaterial";
/**
 * @const
 * @type {string}
 */
var MESH_NORMAL_MATERIAL            = "MeshNormalMaterial";
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
var PLANE_GEOMETRY                  = "PlaneGeometry";
/**
 * @const
 * @type {string}
 */
var SPHERE_GEOMETRY                 = "SphereGeometry";
/**
 * @const
 * @type {string}
 */
var TORUS_GEOMETRY                  = "TorusGeometry";
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
var QUATERNION                      = "Quaternion";
/**
 * @const
 * @type {string}
 */
var VECTOR_3                        = "Vector3";
/**
 * @const
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUMBER                          = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {number}
 */
var DEFAULT_CUBE_LENGTH             = 1.0;
/**
 * @const
 * @type {number}
 */
var DEFAULT_CYLINDER_RADIUS         = 0.5;
/**
 * @const
 * @type {number}
 */
var DEFAULT_CYLINDER_HEIGHT         = 1.0;
/**
 * @const
 * @type {number}
 */
var DEFAULT_SPHERE_RADIUS           = 0.5;
/**
 * @const
 * @type {number}
 */
var DEFAULT_COLOR                   = 0xFFFFFF;
/**
 * @const
 * @type {string}
 */
var COMMA                           = ",";
/**
 * @const
 * @type {string}
 */
var SPACE                           = " ";
/**
 * @const
 * @type {string}
 */
var EQUAL                           = "=";
/**
 * @const
 * @type {string}
 */
var LPAREN                          = "(";
/**
 * @const
 * @type {string}
 */
var RPAREN                          = ")";
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
var E3  = new THREE[EUCLIDEAN_3](new THREE[VECTOR_3](0, 0, 1), new THREE[QUATERNION](0, 0, 0, 0), 0, false);
var one = new THREE[EUCLIDEAN_3](new THREE[VECTOR_3](0, 0, 0), new THREE[QUATERNION](0, 0, 0, 1), 0, false);

function isEuclidean3Py(valuePy) {return Sk.ffi.isInstance(valuePy, EUCLIDEAN_3);}
function isVector3Py(valuePy) {return Sk.ffi.isInstance(valuePy, VECTOR_3);}

function methodName(targetPy) {
  var target = Sk.ffi.remapToJs(targetPy);
  return Sk.ffi.callableToPy(mod, PROP_NAME, function(methodPy, namePy) {
    Sk.ffi.checkMethodArgs(PROP_NAME, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
    target[PROP_NAME] = Sk.ffi.remapToJs(namePy);
    return targetPy;
  });
}

function createMaterialPy(parameters) {

  if (parameters[PROP_MATERIAL]) {
    return parameters[PROP_MATERIAL];
  }
  else {
    var args = {};

    if (typeof parameters[PROP_COLOR] !== 'undefined') {
      args[PROP_COLOR] = parameters[PROP_COLOR];
    }
    else {
      args[PROP_COLOR] = DEFAULT_COLOR;
    }

    if (typeof parameters[PROP_WIREFRAME_LINEWIDTH] !== 'undefined') {
        args[PROP_WIREFRAME_LINEWIDTH] = parameters[PROP_WIREFRAME_LINEWIDTH];
    }

    if (typeof parameters[PROP_WIREFRAME] !== 'undefined') {
      args[PROP_WIREFRAME] = parameters[PROP_WIREFRAME];
      if (parameters[PROP_WIREFRAME]) {
        return Sk.ffi.callsim(mod[MESH_BASIC_MATERIAL], Sk.ffi.remapToPy(args));
      }
      else {
        return Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(args));
      }
    }
    else {
      args[PROP_WIREFRAME] = false;
      return Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(args));
    }
  }  
}

function completeMesh(geometryPy, parameters) {

  function modifyMesh(meshPy) {
    var mesh = Sk.ffi.remapToJs(meshPy);
    if (parameters[PROP_NAME]) {
      mesh.name = parameters[PROP_NAME];
    }
    return meshPy;
  }

  if (parameters[PROP_MATERIAL]) {
    return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, parameters[PROP_MATERIAL]));
  }
  else {
    var args = {};

    if (typeof parameters[PROP_COLOR] !== 'undefined') {
      args[PROP_COLOR] = parameters[PROP_COLOR];
    }
    else {
      args[PROP_COLOR] = DEFAULT_COLOR;
    }

    if (typeof parameters[PROP_WIREFRAME_LINEWIDTH] !== 'undefined') {
        args[PROP_WIREFRAME_LINEWIDTH] = parameters[PROP_WIREFRAME_LINEWIDTH];
    }

    if (typeof parameters[PROP_WIREFRAME] !== 'undefined') {
      args[PROP_WIREFRAME] = parameters[PROP_WIREFRAME];
      if (parameters[PROP_WIREFRAME]) {
        var materialPy = Sk.ffi.callsim(mod[MESH_BASIC_MATERIAL], Sk.ffi.remapToPy(args));
        return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy));
      }
      else {
        var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(args));
        return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy));
      }
    }
    else {
      args[PROP_WIREFRAME] = false;
      var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(args));
      return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy));
    }
  }
}

mod[WORLD] = Sk.ffi.functionPy(function()
{
  Sk.ffi.checkFunctionArgs(WORLD, arguments, 0, 0);
  var scenePy = Sk.ffi.callsim(mod[SCENE]);
  var scene = Sk.ffi.remapToJs(scenePy);

  function addPointLight(x, y, z)
  {
    var pointLight = new THREE[POINT_LIGHT](0xFFFFFF);
    pointLight.position.set(x, y, z);
    scene.add(pointLight);
  }

  addPointLight(+5, +5, +5);

  scene.add(new THREE[AMBIENT_LIGHT](0x222222));

  return scenePy;
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

  var axes = new THREE[Sk.three.OBJECT_3D]();
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
  var grid = new THREE[Sk.three.OBJECT_3D]();
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

mod[CARTESIAN_SPACE] = Sk.ffi.buildClass(mod, function($gbl, $loc)
{
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scenePy, rendererPy)
  {
    var scene;
    var renderer;
    Sk.ffi.checkMethodArgs(CARTESIAN_SPACE, arguments, 0, 2);
    if (Sk.ffi.isDefined(scenePy))
    {
      Sk.ffi.checkArgType(PROP_SCENE, SCENE, Sk.ffi.isInstance(scenePy, SCENE), scenePy);
    }
    else
    {
      scenePy = Sk.ffi.callsim(mod[WORLD]);
    }
    scene = Sk.ffi.remapToJs(scenePy);
    if (Sk.ffi.isDefined(rendererPy))
    {
      Sk.ffi.checkArgType(PROP_RENDERER, [CANVAS_RENDERER, WEBGL_RENDERER], Sk.ffi.isInstance(rendererPy, WEBGL_RENDERER) || Sk.ffi.isInstance(rendererPy, CANVAS_RENDERER), rendererPy);
    }
    else
    {
      rendererPy = Sk.ffi.callsim(mod[WEBGL_RENDERER], Sk.ffi.remapToPy({"antialias": true}));
    }
    renderer = Sk.ffi.remapToJs(rendererPy);

    var cameraPy = Sk.ffi.callsim(mod[PERSPECTIVE_CAMERA], Sk.ffi.numberToFloatPy(45), Sk.ffi.numberToFloatPy(1.0), Sk.ffi.numberToFloatPy(0.1), Sk.ffi.numberToFloatPy(10000));
    var camera = Sk.ffi.remapToJs(cameraPy);
    camera[PROP_UP].set(0, 0, 1);
    camera[PROP_POSITION].set(+8, +4, +5);
    camera[METHOD_LOOK_AT](scene.position);
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
    return Sk.ffi.stringToPy(CARTESIAN_SPACE);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(CARTESIAN_SPACE);
  })
}, CARTESIAN_SPACE, []);

/**
 * @param {Object} selfPy
 * @param {string} name
 * @param {string} className
 */
function builderGetAttr(selfPy, name, className) {
  var self = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    case PROP_ATTITUDE: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, attitudePy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(name, EUCLIDEAN_3, isEuclidean3Py(attitudePy), attitudePy);
        self[name] = Sk.ffi.remapToJs(attitudePy);
        return selfPy;
      });
    }
    case PROP_COLOR: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, colorPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(name, NUMBER, Sk.ffi.isNum(colorPy)||Sk.ffi.isStr(colorPy)||Sk.ffi.isInstance(colorPy, COLOR), colorPy);
        self[name] = Sk.ffi.remapToJs(colorPy);
        return selfPy;
      });
    }
    case PROP_MATERIAL: {
      return Sk.ffi.callableToPy(mod, PROP_MATERIAL, function(methodPy, materialPy) {
        Sk.ffi.checkMethodArgs(PROP_MATERIAL, arguments, 1, 1);
        Sk.ffi.checkArgType(PROP_MATERIAL, Sk.three.MATERIAL, Sk.ffi.isInstance(materialPy), materialPy);
        self[PROP_MATERIAL] = materialPy;
        return selfPy;
      });
    }
    case PROP_NAME: {
      return methodName(selfPy);
    }
    case PROP_SCALE: {
      return Sk.ffi.callableToPy(mod, PROP_SCALE, function(methodPy, lengthPy) {
        Sk.ffi.checkMethodArgs(PROP_SCALE, arguments, 1, 1);
        Sk.ffi.checkArgType(PROP_SCALE, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(lengthPy) || Sk.ffi.isNone(lengthPy), lengthPy);
        self[PROP_SCALE] = Sk.ffi.remapToJs(lengthPy);
        return selfPy;
      });
    }
    case PROP_VOLUME: {
      return Sk.ffi.callableToPy(mod, PROP_VOLUME, function(methodPy, volumePy) {
        Sk.ffi.checkMethodArgs(PROP_VOLUME, arguments, 1, 1);
        Sk.ffi.checkArgType(PROP_VOLUME, NUMBER, Sk.ffi.isNum(volumePy) || Sk.ffi.isNone(volumePy), volumePy);
        self[PROP_VOLUME] = Sk.ffi.remapToJs(volumePy);
        return selfPy;
      });
    }
    case PROP_WIREFRAME: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, wireframePy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(wireframePy), wireframePy);
        self[name] = Sk.ffi.remapToJs(wireframePy);
        return selfPy;
      });
    }
    case PROP_WIREFRAME_LINEWIDTH: {
      return Sk.ffi.callableToPy(mod, name, function(methodPy, wireframeLinewidthPy) {
        Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.INT, Sk.ffi.isInt(wireframeLinewidthPy), wireframeLinewidthPy);
        self[name] = Sk.ffi.remapToJs(wireframeLinewidthPy);
        return selfPy;
      });
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
    }
  }
}
/**
 * ArrowBuilder
 * @constructor
 */
Sk.geometry.ArrowBuilder = function() {
  this._innerPy = Sk.ffi.callsim(mod[Sk.geometry.ARROW_BUILDER]);
}
Sk.geometry.ArrowBuilder.prototype = {
  constructor: Sk.geometry.ArrowBuilder,
  axis: function(x, y, z) {
    var xPy = Sk.ffi.numberToFloatPy(x);
    var yPy = Sk.ffi.numberToFloatPy(y);
    var zPy = Sk.ffi.numberToFloatPy(z);
    var directionPy = Sk.ffi.callsim(mod[Sk.e3ga.VECTOR_E3], xPy, yPy, zPy);
    Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, PROP_AXIS), directionPy);
    return this;
  },
  material: function(material) {
    var materialPy = Sk.ffi.callsim(mod[Sk.three.MATERIAL], Sk.ffi.referenceToPy(material, Sk.three.MATERIAL));
    Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, PROP_MATERIAL), materialPy);
    return this;
  },
  radius: function(radius) {
    var radiusPy = Sk.ffi.numberToFloatPy(radius);
    Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, PROP_RADIUS), radiusPy);
    return this;
  },
  build: function() {
    return Sk.ffi.remapToJs(Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, METHOD_BUILD)));
  }
};
/**
 * ArrowBuilder
 */
mod[Sk.geometry.ARROW_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(Sk.geometry.ARROW_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, Sk.geometry.ARROW_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var arrow = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_MAGNITUDE: {
        return Sk.ffi.callableToPy(mod, PROP_MAGNITUDE, function(methodPy, lengthPy) {
          Sk.ffi.checkMethodArgs(PROP_MAGNITUDE, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_MAGNITUDE, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(lengthPy) || Sk.ffi.isNone(lengthPy), lengthPy);
          arrow[PROP_MAGNITUDE] = Sk.ffi.remapToJs(lengthPy);
          return selfPy;
        });
      }
      case PROP_AXIS: {
        return Sk.ffi.callableToPy(mod, PROP_AXIS, function(methodPy, axisPy) {
          Sk.ffi.checkMethodArgs(PROP_AXIS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_AXIS, [EUCLIDEAN_3, Sk.ffi.PyType.NONE], Sk.ffi.isInstance(axisPy, EUCLIDEAN_3) || Sk.ffi.isNone(axisPy), axisPy);
          arrow[PROP_AXIS] = Sk.ffi.remapToJs(axisPy);
          return selfPy;
        });
      }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          arrow[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          arrow[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{scale: number, attitude: Object, length: number, radius: number, axis: Object}}
           */
          function dimensionArrow() {
            var dims = {};
            dims.attitude = (arrow.attitude) ? arrow.attitude : one;
            dims.axis     = (arrow[PROP_AXIS]) ? arrow[PROP_AXIS] : E3;
            if (arrow.volume) {
              var s = (arrow.scale)  ? arrow.scale  : 1;
              var h = (arrow.length) ? arrow.length : DEFAULT_CYLINDER_HEIGHT;
              var r = (arrow.radius) ? arrow.radius : DEFAULT_CYLINDER_RADIUS;
              var alpha = r / h;
              dims.radius = Math.pow(3 * alpha * arrow.volume / Math.PI, 1 / 3);
              dims.length = dims.radius / alpha;
            }
            else {
              dims.scale    = (arrow.scale)    ? arrow.scale    : 1;
              dims.radius   = (arrow.radius)   ? arrow.radius   : DEFAULT_CYLINDER_RADIUS;
              dims.length   = (arrow.length)   ? arrow.length   : DEFAULT_CYLINDER_HEIGHT;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionArrow();
          var scalePy    = Sk.ffi.numberToFloatPy(dimensions[PROP_SCALE]);
          var attitudePy = Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(dimensions[PROP_ATTITUDE], EUCLIDEAN_3));
          var segmentsPy = Sk.ffi.numberToIntPy(arrow[PROP_SEGMENTS] ? arrow[PROP_SEGMENTS] : 32);
          var lengthPy   = Sk.ffi.numberToFloatPy(dimensions[PROP_MAGNITUDE]);
          var axisPy     = Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(dimensions[PROP_AXIS], EUCLIDEAN_3));
          var geometryPy = Sk.ffi.callsim(mod[Sk.three.ARROW_GEOMETRY], scalePy, attitudePy, segmentsPy, lengthPy, undefined, undefined, undefined, axisPy);
          return completeMesh(geometryPy, arrow);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
//        args[PROP_RADIUS] = Math.sqrt(1 / Math.PI);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, Sk.geometry.ARROW_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.geometry.ARROW_BUILDER + "(" + ")");
  })
}, Sk.geometry.ARROW_BUILDER, []);

mod[CONE_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(CONE_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, CONE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cone = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          cone[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          cone[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          cone[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{radius: number, height: number}}
           */
          function dimensionCone() {
            var dims = {};
            if (cone.volume) {
              var r = (cone.radius) ? cone.radius : DEFAULT_CYLINDER_RADIUS;
              var h = (cone.height) ? cone.height : DEFAULT_CYLINDER_HEIGHT;
              var alpha = r / h;
              dims.radius = Math.pow(3 * alpha * cone.volume / Math.PI, 1 / 3);
              dims.height = dims.radius / alpha;
            }
            else {
              dims.radius = (cone.radius) ? cone.radius : DEFAULT_CYLINDER_RADIUS;
              dims.height = (cone.height) ? cone.height : DEFAULT_CYLINDER_HEIGHT;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions     = dimensionCone();
          var radiusTop      = Sk.ffi.numberToFloatPy(0);
          var radiusBottom   = Sk.ffi.numberToFloatPy(dimensions[PROP_RADIUS]);
          var height         = Sk.ffi.numberToFloatPy(dimensions[PROP_HEIGHT]);
          var radialSegments = Sk.ffi.numberToIntPy(cone[PROP_SEGMENTS] ? cone[PROP_SEGMENTS] : 32);
          var heightSegments = Sk.ffi.numberToIntPy(1);
          var openEnded      = Sk.ffi.booleanToPy(false);
          var geometryPy = Sk.ffi.callsim(mod[CYLINDER_GEOMETRY], radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
          return completeMesh(geometryPy, cone);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
//        args[PROP_RADIUS] = Math.sqrt(1 / Math.PI);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, CONE_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(CONE_BUILDER + "(" + ")");
  })
}, CONE_BUILDER, []);

mod[CUBE_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(CUBE_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, CUBE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cube = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_DEPTH: {
        return Sk.ffi.callableToPy(mod, PROP_DEPTH, function(methodPy, depthPy) {
          Sk.ffi.checkMethodArgs(PROP_DEPTH, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_DEPTH, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(depthPy) || Sk.ffi.isNone(depthPy), depthPy);
          cube[PROP_DEPTH] = Sk.ffi.remapToJs(depthPy);
          return selfPy;
        });
      }
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          cube[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_WIDTH: {
        return Sk.ffi.callableToPy(mod, PROP_WIDTH, function(methodPy, widthPy) {
          Sk.ffi.checkMethodArgs(PROP_WIDTH, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIDTH, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(widthPy) || Sk.ffi.isNone(widthPy), widthPy);
          cube[PROP_WIDTH] = Sk.ffi.remapToJs(widthPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          cube[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{width: number, height: number, depth: number}}
           */
          function dimensionCube() {
            var dims = {};
            if (cube[PROP_VOLUME]) {
              var w = (cube.width)  ? cube.width  : DEFAULT_CUBE_LENGTH;
              var h = (cube.height) ? cube.height : DEFAULT_CUBE_LENGTH;
              var d = (cube.depth)  ? cube.depth  : DEFAULT_CUBE_LENGTH;
              var alpha = Math.pow(cube[PROP_VOLUME] / (w * h * d), 1 / 3);
              dims.width  = alpha * w;
              dims.height = alpha * h;
              dims.depth  = alpha * d;
            }
            else {
              dims.width  = (cube.width)  ? cube.width  : DEFAULT_CUBE_LENGTH;
              dims.height = (cube.height) ? cube.height : DEFAULT_CUBE_LENGTH;
              dims.depth  = (cube.depth)  ? cube.depth  : DEFAULT_CUBE_LENGTH;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionCube();
          var width      = Sk.ffi.numberToFloatPy(dimensions[PROP_WIDTH]);
          var height     = Sk.ffi.numberToFloatPy(dimensions[PROP_HEIGHT]);
          var depth      = Sk.ffi.numberToFloatPy(dimensions[PROP_DEPTH]);
          var segments   = Sk.ffi.numberToIntPy(cube[PROP_SEGMENTS] ? cube[PROP_SEGMENTS] : 1);
          var geometryPy = Sk.ffi.callsim(mod[CUBE_GEOMETRY], width, height, depth, segments, segments, segments);
          return completeMesh(geometryPy, cube);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
          cube[PROP_DEPTH]  = 1;
          cube[PROP_WIDTH]  = 1;
          cube[PROP_HEIGHT] = 1;
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, CUBE_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(CUBE_BUILDER + "(" + ")");
  })
}, CUBE_BUILDER, []);
/**
 * CylinderBuilder
 * @constructor
 */
Sk.geometry.CylinderBuilder = function() {
  this._innerPy = Sk.ffi.callsim(mod[Sk.geometry.CYLINDER_BUILDER]);
}
Sk.geometry.CylinderBuilder.prototype = {
  constructor: Sk.geometry.CylinderBuilder,
  axis: function(x, y, z) {
    var xPy = Sk.ffi.numberToFloatPy(x);
    var yPy = Sk.ffi.numberToFloatPy(y);
    var zPy = Sk.ffi.numberToFloatPy(z);
    var directionPy = Sk.ffi.callsim(mod[Sk.e3ga.VECTOR_E3], xPy, yPy, zPy);
    Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, PROP_AXIS), directionPy);
    return this;
  },
  material: function(material) {
    var materialPy = Sk.ffi.callsim(mod[Sk.three.MATERIAL], Sk.ffi.referenceToPy(material, Sk.three.MATERIAL));
    Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, PROP_MATERIAL), materialPy);
    return this;
  },
  radius: function(radius) {
    var radiusPy = Sk.ffi.numberToFloatPy(radius);
    Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, PROP_RADIUS), radiusPy);
    return this;
  },
  build: function() {
    return Sk.ffi.remapToJs(Sk.ffi.callsim(Sk.ffi.gattr(this._innerPy, METHOD_BUILD)));
  }
};
/**
 * CylinderBuilder
 */
mod[Sk.geometry.CYLINDER_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(Sk.geometry.CYLINDER_BUILDER, arguments, 0, 0);
    var self = {};
    self[PROP_RADIUS_TOP]    = DEFAULT_CYLINDER_RADIUS;
    self[PROP_RADIUS_BOTTOM] = DEFAULT_CYLINDER_RADIUS;
    self[PROP_HEIGHT]        = DEFAULT_CYLINDER_HEIGHT;
    Sk.ffi.referenceToPy(self, Sk.geometry.CYLINDER_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_AXIS: {
        return Sk.ffi.callableToPy(mod, PROP_AXIS, function(methodPy, axisPy) {
          Sk.ffi.checkMethodArgs(PROP_AXIS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_AXIS, [EUCLIDEAN_3, Sk.ffi.PyType.NONE], Sk.ffi.isInstance(axisPy, EUCLIDEAN_3) || Sk.ffi.isNone(axisPy), axisPy);
          cylinder[PROP_AXIS] = Sk.ffi.remapToJs(axisPy);
          return selfPy;
        });
      }
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          cylinder[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          cylinder[PROP_RADIUS_TOP]    = Sk.ffi.remapToJs(radiusPy);
          cylinder[PROP_RADIUS_BOTTOM] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_RADIUS_TOP: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS_TOP, function(methodPy, radiusTopPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS_TOP, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS_TOP, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusTopPy) || Sk.ffi.isNone(radiusTopPy), radiusTopPy);
          cylinder[PROP_RADIUS_TOP] = Sk.ffi.remapToJs(radiusTopPy);
          return selfPy;
        });
      }
      case PROP_RADIUS_BOTTOM: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS_BOTTOM, function(methodPy, radiusBottomPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS_BOTTOM, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS_BOTTOM, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusBottomPy) || Sk.ffi.isNone(radiusBottomPy), radiusBottomPy);
          cylinder[PROP_RADIUS_BOTTOM] = Sk.ffi.remapToJs(radiusBottomPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          cylinder[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{a: number, b: number, h: number, axis: Object}}
           */
          function dimensionCylinder() {
            var dims = {};
            dims.axis     = (cylinder[PROP_AXIS]) ? cylinder[PROP_AXIS] : E3;
            if (cylinder.volume) {
              var a = (typeof cylinder.radiusTop    === 'number') ? cylinder.radiusTop    : DEFAULT_CYLINDER_RADIUS;
              var b = (typeof cylinder.radiusBottom === 'number') ? cylinder.radiusBottom : DEFAULT_CYLINDER_RADIUS;
              var h = (typeof cylinder.height === 'number')       ? cylinder.height       : DEFAULT_CYLINDER_HEIGHT;
              var alpha = Math.pow(3 * cylinder.volume / (b * (b + a) * h * Math.PI), 1 / 3);
              dims.a = alpha * a;
              dims.b = alpha * b;
              dims.h = alpha * h;
            }
            else {
              dims.a = (typeof cylinder.radiusTop === 'number')    ? cylinder.radiusTop    : DEFAULT_CYLINDER_RADIUS;
              dims.b = (typeof cylinder.radiusBottom === 'number') ? cylinder.radiusBottom : DEFAULT_CYLINDER_RADIUS;
              dims.h = (typeof cylinder.height === 'number')       ? cylinder.height       : DEFAULT_CYLINDER_HEIGHT;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionCylinder();
          var radiusTop      = Sk.ffi.numberToFloatPy(dimensions.a);
          var radiusBottom   = Sk.ffi.numberToFloatPy(dimensions.b);
          var height         = Sk.ffi.numberToFloatPy(dimensions.h);
          var radialSegments = Sk.ffi.numberToIntPy(cylinder[PROP_SEGMENTS] ? cylinder[PROP_SEGMENTS] : 32);
          var heightSegments = Sk.ffi.numberToIntPy(1);
          var openEnded      = Sk.ffi.booleanToPy(false);
          var axisPy         = Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(dimensions[PROP_AXIS], EUCLIDEAN_3));
          var geometryPy = Sk.ffi.callsim(mod[CYLINDER_GEOMETRY], radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, axisPy);
          return completeMesh(geometryPy, cylinder);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
//        args[PROP_RADIUS] = Math.sqrt(1 / Math.PI);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, Sk.geometry.CYLINDER_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.geometry.CYLINDER_BUILDER + "(" + ")");
  })
}, Sk.geometry.CYLINDER_BUILDER, []);

mod[PLANE_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(PLANE_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, PLANE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var plane = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          plane[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_WIDTH: {
        return Sk.ffi.callableToPy(mod, PROP_WIDTH, function(methodPy, widthPy) {
          Sk.ffi.checkMethodArgs(PROP_WIDTH, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIDTH, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(widthPy) || Sk.ffi.isNone(widthPy), widthPy);
          plane[PROP_WIDTH] = Sk.ffi.remapToJs(widthPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          plane[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{width: number, height: number}}
           */
          function dimensionPlane() {
            var dims = {};
            if (plane[PROP_VOLUME]) {
              var w = (plane.width)  ? plane.width  : DEFAULT_CUBE_LENGTH;
              var h = (plane.height) ? plane.height : DEFAULT_CUBE_LENGTH;
              var alpha = Math.pow(plane[PROP_VOLUME] / (w * h), 1 / 2);
              dims.width  = alpha * w;
              dims.height = alpha * h;
            }
            else {
              dims.width  = (plane.width)  ? plane.width  : DEFAULT_CUBE_LENGTH;
              dims.height = (plane.height) ? plane.height : DEFAULT_CUBE_LENGTH;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionPlane();
          var width      = Sk.ffi.numberToFloatPy(dimensions[PROP_WIDTH]);
          var height     = Sk.ffi.numberToFloatPy(dimensions[PROP_HEIGHT]);
          var segments   = Sk.ffi.numberToIntPy(plane[PROP_SEGMENTS] ? plane[PROP_SEGMENTS] : 1);
          var geometryPy = Sk.ffi.callsim(mod[PLANE_GEOMETRY], width, height, segments, segments);
          return completeMesh(geometryPy, plane);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
//        args[PROP_RADIUS] = Math.sqrt(1 / Math.PI);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, PLANE_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PLANE_BUILDER + "(" + ")");
  })
}, PLANE_BUILDER, []);

mod[SPHERE_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(SPHERE_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, SPHERE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var args = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          args[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          args[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{radius: number}}
           */
          function dimensionSphere() {
            var dims = {};
            if (args[PROP_VOLUME]) {
              var r = (args.radius) ? args.radius : DEFAULT_SPHERE_RADIUS;
              dims.radius = Math.pow(3 * args[PROP_VOLUME] / (4 * Math.PI), 1 / 3);
            }
            else {
              dims.radius = (args.radius) ? args.radius : DEFAULT_SPHERE_RADIUS;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionSphere();
          var radius         = Sk.ffi.numberToFloatPy(dimensions.radius);
          var widthSegments  = Sk.ffi.numberToIntPy(args[PROP_SEGMENTS] ? args[PROP_SEGMENTS] : 24);
          var heightSegments = Sk.ffi.numberToIntPy(args[PROP_SEGMENTS] ? args[PROP_SEGMENTS] : 18);
          var geometryPy = Sk.ffi.callsim(mod[SPHERE_GEOMETRY], radius, widthSegments, heightSegments);
          return completeMesh(geometryPy, args);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
          args[PROP_RADIUS] = Math.pow(3 / (4 * Math.PI), 1 / 3);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, SPHERE_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(SPHERE_BUILDER + "(" + ")");
  })
}, SPHERE_BUILDER, []);
/**
 * VolumeBuilder
 */
mod[Sk.geometry.VOLUME_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(Sk.geometry.VOLUME_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, Sk.geometry.VOLUME_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var args = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          args[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          args[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{radius: number, height: number}}
           */
          function dimensionPlane() {
            var dims = {};
            if (args[PROP_VOLUME]) {
              var w = (args.radius) ? args.radius : DEFAULT_CUBE_LENGTH;
              var h = (args.height) ? args.height : DEFAULT_CUBE_LENGTH;
              var alpha = Math.pow(args[PROP_VOLUME] / (w * h), 1 / 2);
              dims.width  = alpha * w;
              dims.height = alpha * h;
            }
            else {
              dims.radius = (args.radius) ? args.radius : DEFAULT_CUBE_LENGTH;
              dims.height = (args.height) ? args.height : DEFAULT_CUBE_LENGTH;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionPlane();
          var radius      = Sk.ffi.numberToFloatPy(dimensions[PROP_RADIUS]);
          var radiusCone  = Sk.ffi.numberToFloatPy(0.08);
          var radiusShaft = Sk.ffi.numberToFloatPy(0.01);
          var lengthCone  = Sk.ffi.numberToFloatPy(0.2);
          var lengthShaft = Sk.ffi.numberToFloatPy(0.8);
          var arrows      = Sk.ffi.numberToIntPy(6);
          var segments    = Sk.ffi.numberToIntPy(args[PROP_SEGMENTS] ? args[PROP_SEGMENTS] : 32);
          return Sk.ffi.callsim(mod[Sk.geometry.VOLUME], createMaterialPy(args));
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
          args[PROP_RADIUS] = Math.sqrt(1 / Math.PI);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, Sk.geometry.VOLUME_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.geometry.VOLUME_BUILDER + "(" + ")");
  })
}, Sk.geometry.VOLUME_BUILDER, []);
/**
 * Volume
 */
mod[Sk.geometry.VOLUME] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, materialPy) {
    Sk.ffi.checkMethodArgs(Sk.geometry.VOLUME, arguments, 1, 1);
    var composite = new THREE[Sk.three.OBJECT_3D]();
    var cylinder;
    var arrow;
    var cb = new Sk.geometry.CylinderBuilder();
    cb.radius(0.01).material(Sk.ffi.remapToJs(materialPy));

    cb.axis(1, 0, 0);
    cylinder = cb.build();
    cylinder.position.set(+0.0, +0.5, +0.5);
    composite.add(cylinder);

    cylinder = cb.build();
    cylinder.position.set(+0.0, +0.5, -0.5);
    cylinder.name = "c1";
    composite.add(cylinder);

    cylinder = cb.build();
    cylinder.position.set(+0.0, -0.5, +0.5);
    composite.add(cylinder);

    cb.axis(0, 1, 0);
    cylinder = cb.build();
    cylinder.position.set(+0.5, +0.0, +0.5);
    composite.add(cylinder);

    cylinder = cb.build();
    cylinder.position.set(-0.5, +0.0, +0.5);
    composite.add(cylinder);

    cylinder = cb.build();
    cylinder.position.set(-0.5, +0.0, -0.5);
    cylinder.name = "c2";
    composite.add(cylinder);

    cb.axis(0, 0, 1);
    cylinder = cb.build();
    cylinder.position.set(+0.5, -0.5, +0.0);
    composite.add(cylinder);

    cylinder = cb.build();
    cylinder.position.set(-0.5, +0.5, +0.0);
    composite.add(cylinder);

    cylinder = cb.build();
    cylinder.position.set(-0.5, -0.5, +0.0);
    composite.add(cylinder);

    var ab = new Sk.geometry.ArrowBuilder();
    ab.radius(0.01).material(Sk.ffi.remapToJs(materialPy));

    ab.axis(1, 0, 0);
    arrow = ab.build();
    arrow.name = "e1";
    arrow.position.set(+0.0, -0.5, -0.5);
    composite.add(arrow);

    ab.axis(0, 1, 0);
    arrow = ab.build();
    arrow.name = "e2";
    arrow.position.set(+0.5, +0.0, -0.5);
    composite.add(arrow);

    ab.axis(0, 0, 1);
    arrow = ab.build();
    arrow.position.set(+0.5, +0.5, +0.0);
    composite.add(arrow);

    Sk.ffi.referenceToPy(composite, Sk.geometry.VOLUME, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var composite = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      default: {
        return Sk.three.object3DGetAttr(Sk.geometry.VOLUME, selfPy, name);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var composite = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_ORIENTATION: {
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        var orientation = Sk.ffi.remapToJs(valuePy);
        var e1 = composite.getObjectByName("e1");
        var c1 = composite.getObjectByName("c1");
        var e2 = composite.getObjectByName("e2");
        var c2 = composite.getObjectByName("c2");
        if (orientation) {
          e1.position.set(+0.0, -0.5, -0.5);
          c1.position.set(+0.0, +0.5, -0.5);
          e2.position.set(+0.5, +0.0, -0.5);
          c2.position.set(-0.5, +0.0, -0.5);
        }
        else {
          e1.position.set(+0.0, +0.5, -0.5);
          c1.position.set(+0.0, -0.5, -0.5);
          e2.position.set(-0.5, +0.0, -0.5);
          c2.position.set(+0.5, +0.0, -0.5);
        }
      }
      break;
      default: {
        return Sk.three.object3DSetAttr(Sk.geometry.VOLUME, selfPy, name, valuePy);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [];
    var args = names.map(function(name) {return [name, Sk.ffi.remapToJs(Sk.ffh.str(Sk.ffi.gattr(selfPy, name)))].join(EQUAL);});
    return Sk.ffi.stringToPy(Sk.geometry.VOLUME + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var names  = [];
    var argsPy = names.map(function(name) {return Sk.ffi.gattr(selfPy, name);});
    var args = argsPy.map(function(valuePy) {return Sk.ffi.remapToJs(Sk.ffh.repr(valuePy));});
    return Sk.ffi.stringToPy(Sk.geometry.VOLUME + LPAREN + args.join(COMMA + SPACE) + RPAREN);
  });
}, Sk.geometry.VOLUME, []);
/**
 * VortexBuilder
 */
mod[Sk.geometry.VORTEX_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(Sk.geometry.VORTEX_BUILDER, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, Sk.geometry.VORTEX_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var args = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNum(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          args[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_SEGMENTS: {
        return Sk.ffi.callableToPy(mod, PROP_SEGMENTS, function(methodPy, segmentsPy) {
          Sk.ffi.checkMethodArgs(PROP_SEGMENTS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_SEGMENTS, [Sk.ffi.PyType.INT, Sk.ffi.PyType.NONE], Sk.ffi.isInt(segmentsPy) || Sk.ffi.isNone(segmentsPy), segmentsPy);
          args[PROP_SEGMENTS] = Sk.ffi.remapToJs(segmentsPy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{radius: number, height: number}}
           */
          function dimensionPlane() {
            var dims = {};
            if (args[PROP_VOLUME]) {
              var w = (args.radius) ? args.radius : DEFAULT_CUBE_LENGTH;
              var h = (args.height) ? args.height : DEFAULT_CUBE_LENGTH;
              var alpha = Math.pow(args[PROP_VOLUME] / (w * h), 1 / 2);
              dims.width  = alpha * w;
              dims.height = alpha * h;
            }
            else {
              dims.radius = (args.radius) ? args.radius : DEFAULT_CUBE_LENGTH;
              dims.height = (args.height) ? args.height : DEFAULT_CUBE_LENGTH;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionPlane();
          var radius      = Sk.ffi.numberToFloatPy(dimensions[PROP_RADIUS]);
          var radiusCone  = Sk.ffi.numberToFloatPy(0.08);
          var radiusShaft = Sk.ffi.numberToFloatPy(0.01);
          var lengthCone  = Sk.ffi.numberToFloatPy(0.2);
          var lengthShaft = Sk.ffi.numberToFloatPy(0.8);
          var arrows      = Sk.ffi.numberToIntPy(6);
          var segments    = Sk.ffi.numberToIntPy(args[PROP_SEGMENTS] ? args[PROP_SEGMENTS] : 32);
          var geometryPy  = Sk.ffi.callsim(mod[Sk.three.VORTEX_GEOMETRY], radius, radiusCone, radiusShaft, lengthCone, lengthShaft, arrows, segments);
          return completeMesh(geometryPy, args);
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
          args[PROP_RADIUS] = Math.sqrt(1 / Math.PI);
          return selfPy;
        });
      }
      default: {
        return builderGetAttr(selfPy, name, Sk.geometry.VORTEX_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(Sk.geometry.VORTEX_BUILDER + "(" + ")");
  })
}, Sk.geometry.VORTEX_BUILDER, []);

};
}).call(this);
