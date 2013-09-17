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
var PROP_LENGTH                     = "length";
/**
 * @const
 * @type {string}
 */
var PROP_LENGTH_MANGLED             = Sk.ffi.mangleName(PROP_LENGTH);
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
var ARROW_BUILDER                   = "ArrowBuilder";
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
var CYLINDER_BUILDER                = "CylinderBuilder";
/**
 * @const
 * @type {string}
 */
var SPHERE_BUILDER                  = "SphereBuilder";
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
var ARROW_GEOMETRY                  = "ArrowGeometry";
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
 * @type {number}
 */
var COLOR_GRID = 0x66A1D2
var MATERIAL_GRID_MAJOR = new THREE[LINE_BASIC_MATERIAL]({"color": COLOR_GRID,"opacity":0.20,"transparent":true});
var MATERIAL_GRID_MINOR = new THREE[LINE_BASIC_MATERIAL]({"color": COLOR_GRID,"opacity":0.02,"transparent":true});
var e1 = new THREE[VECTOR_3](1, 0, 0);
var e2 = new THREE[VECTOR_3](0, 1, 0);
var e3 = new THREE[VECTOR_3](0, 0, 1);

function isVector3(valuePy) {return Sk.ffi.isClass(valuePy, VECTOR_3);}

function methodName(targetPy) {
  var target = Sk.ffi.remapToJs(targetPy);
  return Sk.ffi.callableToPy(mod, PROP_NAME, function(methodPy, namePy) {
    Sk.ffi.checkMethodArgs(PROP_NAME, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
    target[PROP_NAME] = Sk.ffi.remapToJs(namePy);
    return targetPy;
  });
}

function modifyMesh(meshPy, parameters) {
  var mesh = Sk.ffi.remapToJs(meshPy);
  if (parameters[PROP_NAME]) {
    mesh.name = parameters[PROP_NAME];
  }
  return meshPy;
}

mod[WORLD] = Sk.ffi.functionPy(function() {
  Sk.ffi.checkFunctionArgs(WORLD, arguments, 0, 0);
  var scenePy = Sk.ffi.callsim(mod[SCENE]);
  var scene = Sk.ffi.remapToJs(scenePy);

  var pointLight = new THREE[POINT_LIGHT](0xFFFFFF);
  pointLight.position.set(0, 5, 5);
  scene.add(pointLight);

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

mod[CARTESIAN_SPACE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scenePy) {
    Sk.ffi.checkMethodArgs(CARTESIAN_SPACE, arguments, 0, 0);
    var scenePy = Sk.ffi.callsim(mod[WORLD]);
    var scene = Sk.ffi.remapToJs(scenePy);
    var cameraPy = Sk.ffi.callsim(mod[PERSPECTIVE_CAMERA], Sk.ffi.numberToFloatPy(45), Sk.ffi.numberToFloatPy(1.0), Sk.ffi.numberToFloatPy(0.1), Sk.ffi.numberToFloatPy(10000));
    var camera = Sk.ffi.remapToJs(cameraPy);
    camera[PROP_UP].set(0, 0, 1);
    camera[PROP_POSITION].set(+8, +4, +5);
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
    return Sk.ffi.stringToPy("" + space);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var space = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + space);
  })
}, CARTESIAN_SPACE, []);

mod[ARROW_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(ARROW_BUILDER, arguments, 0, 0);
    var self = {};
    self[PROP_COLOR]     = DEFAULT_COLOR;
    self[PROP_WIREFRAME] = false;
    self[PROP_AXIS]      = e3;
    Sk.ffi.referenceToPy(self, ARROW_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var arrow = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_AXIS: {
        return Sk.ffi.callableToPy(mod, PROP_AXIS, function(methodPy, axisPy) {
          Sk.ffi.checkMethodArgs(PROP_AXIS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_AXIS, VECTOR_3, isVector3(axisPy), axisPy);
          arrow[PROP_AXIS] = Sk.ffi.remapToJs(axisPy);
          return selfPy;
        });
      }
      case PROP_COLOR: {
        return Sk.ffi.callableToPy(mod, PROP_COLOR, function(methodPy, colorPy) {
          Sk.ffi.checkMethodArgs(PROP_COLOR, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_COLOR, NUMBER, Sk.ffi.isNumber(colorPy) || Sk.ffi.isStr(colorPy), colorPy);
          arrow[PROP_COLOR] = Sk.ffi.remapToJs(colorPy);
          return selfPy;
        });
      }
      case PROP_LENGTH_MANGLED: {
        return Sk.ffi.callableToPy(mod, PROP_LENGTH, function(methodPy, lengthPy) {
          Sk.ffi.checkMethodArgs(PROP_LENGTH, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_LENGTH, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(lengthPy) || Sk.ffi.isNone(lengthPy), lengthPy);
          arrow[PROP_LENGTH] = Sk.ffi.remapToJs(lengthPy);
          return selfPy;
        });
      }
      case PROP_NAME: { return methodName(selfPy); }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          arrow[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_VOLUME: {
        return Sk.ffi.callableToPy(mod, PROP_VOLUME, function(methodPy, volumePy) {
          Sk.ffi.checkMethodArgs(PROP_VOLUME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_VOLUME, NUMBER, Sk.ffi.isNumber(volumePy) || Sk.ffi.isNone(volumePy), volumePy);
          arrow[PROP_VOLUME] = Sk.ffi.remapToJs(volumePy);
          return selfPy;
        });
      }
      case PROP_WIREFRAME: {
        return Sk.ffi.callableToPy(mod, PROP_WIREFRAME, function(methodPy, wireframePy) {
          Sk.ffi.checkMethodArgs(PROP_WIREFRAME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIREFRAME, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(wireframePy), wireframePy);
          arrow[PROP_WIREFRAME] = Sk.ffi.remapToJs(wireframePy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{length: number, radius: number}}
           */
          function dimensionArrow() {
            var dims = {};
            if (arrow.volume) {
              var h = (arrow.length) ? arrow.length : DEFAULT_CYLINDER_HEIGHT;
              var r = (arrow.radius) ? arrow.radius : DEFAULT_CYLINDER_RADIUS;
              var alpha = r / h;
              dims.radius = Math.pow(3 * alpha * arrow.volume / Math.PI, 1 / 3);
              dims.length = dims.radius / alpha;
            }
            else {
              dims.length = (arrow.length) ? arrow.length : DEFAULT_CYLINDER_HEIGHT;
              dims.radius = (arrow.radius) ? arrow.radius : DEFAULT_CYLINDER_RADIUS;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionArrow();
          var length     = Sk.ffi.numberToFloatPy(dimensions[PROP_LENGTH]);
          var segments   = Sk.ffi.numberToIntPy(32);
          var geometryPy = Sk.ffi.callsim(mod[ARROW_GEOMETRY], length, segments);
          var parameters = {};
          parameters[PROP_COLOR]     = arrow[PROP_COLOR];
          parameters[PROP_WIREFRAME] = arrow[PROP_WIREFRAME];
          var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(parameters));
          return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy), arrow);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ARROW_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(ARROW_BUILDER + "(" + ")");
  })
}, ARROW_BUILDER, []);

mod[CONE_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(CONE_BUILDER, arguments, 0, 0);
    var self = {};
    self[PROP_COLOR]     = DEFAULT_COLOR;
    self[PROP_WIREFRAME] = false;
    self[PROP_AXIS]      = e3;
    Sk.ffi.referenceToPy(self, CONE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cone = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_AXIS: {
        return Sk.ffi.callableToPy(mod, PROP_AXIS, function(methodPy, axisPy) {
          Sk.ffi.checkMethodArgs(PROP_AXIS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_AXIS, VECTOR_3, isVector3(axisPy), axisPy);
          cone[PROP_AXIS] = Sk.ffi.remapToJs(axisPy);
          return selfPy;
        });
      }
      case PROP_COLOR: {
        return Sk.ffi.callableToPy(mod, PROP_COLOR, function(methodPy, colorPy) {
          Sk.ffi.checkMethodArgs(PROP_COLOR, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_COLOR, NUMBER, Sk.ffi.isNumber(colorPy) || Sk.ffi.isStr(colorPy), colorPy);
          cone[PROP_COLOR] = Sk.ffi.remapToJs(colorPy);
          return selfPy;
        });
      }
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          cone[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_NAME: { return methodName(selfPy); }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          cone[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_VOLUME: {
        return Sk.ffi.callableToPy(mod, PROP_VOLUME, function(methodPy, volumePy) {
          Sk.ffi.checkMethodArgs(PROP_VOLUME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_VOLUME, NUMBER, Sk.ffi.isNumber(volumePy) || Sk.ffi.isNone(volumePy), volumePy);
          cone[PROP_VOLUME] = Sk.ffi.remapToJs(volumePy);
          return selfPy;
        });
      }
      case PROP_WIREFRAME: {
        return Sk.ffi.callableToPy(mod, PROP_WIREFRAME, function(methodPy, wireframePy) {
          Sk.ffi.checkMethodArgs(PROP_WIREFRAME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIREFRAME, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(wireframePy), wireframePy);
          cone[PROP_WIREFRAME] = Sk.ffi.remapToJs(wireframePy);
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
          var dimensions = dimensionCone();
          var radiusTop      = Sk.ffi.numberToFloatPy(0);
          var radiusBottom   = Sk.ffi.numberToFloatPy(dimensions[PROP_RADIUS]);
          var height         = Sk.ffi.numberToFloatPy(dimensions[PROP_HEIGHT]);
          var radialSegments = Sk.ffi.numberToIntPy(32);
          var heightSegments = Sk.ffi.numberToIntPy(1);
          var openEnded      = Sk.ffi.booleanToPy(false);
          var geometryPy = Sk.ffi.callsim(mod[CYLINDER_GEOMETRY], radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
          var parameters = {};
          parameters[PROP_COLOR]     = cone[PROP_COLOR];
          parameters[PROP_WIREFRAME] = cone[PROP_WIREFRAME];
          var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(parameters));
          return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy), cone);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CONE_BUILDER);
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
    var self = {};
    self[PROP_COLOR]     = DEFAULT_COLOR;
    self[PROP_WIREFRAME] = false;
    Sk.ffi.referenceToPy(self, CUBE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cube = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callableToPy(mod, PROP_COLOR, function(methodPy, colorPy) {
          Sk.ffi.checkMethodArgs(PROP_COLOR, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_COLOR, NUMBER, Sk.ffi.isNumber(colorPy) || Sk.ffi.isStr(colorPy), colorPy);
          cube[PROP_COLOR] = Sk.ffi.remapToJs(colorPy);
          return selfPy;
        });
      }
      case PROP_DEPTH: {
        return Sk.ffi.callableToPy(mod, PROP_DEPTH, function(methodPy, depthPy) {
          Sk.ffi.checkMethodArgs(PROP_DEPTH, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_DEPTH, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(depthPy) || Sk.ffi.isNone(depthPy), depthPy);
          cube[PROP_DEPTH] = Sk.ffi.remapToJs(depthPy);
          return selfPy;
        });
      }
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          cube[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_NAME: { return methodName(selfPy); }
      case PROP_VOLUME: {
        return Sk.ffi.callableToPy(mod, PROP_VOLUME, function(methodPy, volumePy) {
          Sk.ffi.checkMethodArgs(PROP_VOLUME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_VOLUME, NUMBER, Sk.ffi.isNumber(volumePy) || Sk.ffi.isNone(volumePy), volumePy);
          cube[PROP_VOLUME] = Sk.ffi.remapToJs(volumePy);
          return selfPy;
        });
      }
      case PROP_WIDTH: {
        return Sk.ffi.callableToPy(mod, PROP_WIDTH, function(methodPy, widthPy) {
          Sk.ffi.checkMethodArgs(PROP_WIDTH, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIDTH, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(widthPy) || Sk.ffi.isNone(widthPy), widthPy);
          cube[PROP_WIDTH] = Sk.ffi.remapToJs(widthPy);
          return selfPy;
        });
      }
      case PROP_WIREFRAME: {
        return Sk.ffi.callableToPy(mod, PROP_WIREFRAME, function(methodPy, wireframePy) {
          Sk.ffi.checkMethodArgs(PROP_WIREFRAME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIREFRAME, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(wireframePy), wireframePy);
          cube[PROP_WIREFRAME] = Sk.ffi.remapToJs(wireframePy);
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
          var width      = Sk.ffi.remapToPy(dimensions[PROP_WIDTH]);
          var height     = Sk.ffi.remapToPy(dimensions[PROP_HEIGHT]);
          var depth      = Sk.ffi.remapToPy(dimensions[PROP_DEPTH]);
          var geometryPy = Sk.ffi.callsim(mod[CUBE_GEOMETRY], width, height, depth);
          var parameters = {};
          parameters[PROP_COLOR]     = cube[PROP_COLOR];
          parameters[PROP_WIREFRAME] = cube[PROP_WIREFRAME];
          var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(parameters));
          return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy), cube);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CUBE_BUILDER);
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

mod[CYLINDER_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(CYLINDER_BUILDER, arguments, 0, 0);
    var self = {};
    self[PROP_RADIUS_TOP]    = DEFAULT_CYLINDER_RADIUS;
    self[PROP_RADIUS_BOTTOM] = DEFAULT_CYLINDER_RADIUS;
    self[PROP_HEIGHT]        = DEFAULT_CYLINDER_HEIGHT;
    self[PROP_COLOR]         = DEFAULT_COLOR;
    self[PROP_WIREFRAME]     = false;
    Sk.ffi.referenceToPy(self, CYLINDER_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callableToPy(mod, PROP_COLOR, function(methodPy, colorPy) {
          Sk.ffi.checkMethodArgs(PROP_COLOR, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_COLOR, NUMBER, Sk.ffi.isNumber(colorPy) || Sk.ffi.isStr(colorPy), colorPy);
          cylinder[PROP_COLOR] = Sk.ffi.remapToJs(colorPy);
          return selfPy;
        });
      }
      case PROP_HEIGHT: {
        return Sk.ffi.callableToPy(mod, PROP_HEIGHT, function(methodPy, heightPy) {
          Sk.ffi.checkMethodArgs(PROP_HEIGHT, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_HEIGHT, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(heightPy) || Sk.ffi.isNone(heightPy), heightPy);
          cylinder[PROP_HEIGHT] = Sk.ffi.remapToJs(heightPy);
          return selfPy;
        });
      }
      case PROP_MATERIAL: {
        return Sk.ffi.callableToPy(mod, PROP_MATERIAL, function(methodPy, materialPy) {
          Sk.ffi.checkMethodArgs(PROP_MATERIAL, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_MATERIAL, [Sk.ffi.PyType.CLASS], Sk.ffi.isClass(materialPy), materialPy); // TODO: MATERIALS
          cylinder[PROP_MATERIAL] = materialPy;
          return selfPy;
        });
      }
      case PROP_NAME: { return methodName(selfPy); }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          cylinder[PROP_RADIUS_TOP]    = Sk.ffi.remapToJs(radiusPy);
          cylinder[PROP_RADIUS_BOTTOM] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_RADIUS_TOP: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS_TOP, function(methodPy, radiusTopPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS_TOP, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS_TOP, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(radiusTopPy) || Sk.ffi.isNone(radiusTopPy), radiusTopPy);
          cylinder[PROP_RADIUS_TOP] = Sk.ffi.remapToJs(radiusTopPy);
          return selfPy;
        });
      }
      case PROP_RADIUS_BOTTOM: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS_BOTTOM, function(methodPy, radiusBottomPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS_BOTTOM, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS_BOTTOM, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(radiusBottomPy) || Sk.ffi.isNone(radiusBottomPy), radiusBottomPy);
          cylinder[PROP_RADIUS_BOTTOM] = Sk.ffi.remapToJs(radiusBottomPy);
          return selfPy;
        });
      }
      case PROP_VOLUME: {
        return Sk.ffi.callableToPy(mod, PROP_VOLUME, function(methodPy, volumePy) {
          Sk.ffi.checkMethodArgs(PROP_VOLUME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_VOLUME, NUMBER, Sk.ffi.isNumber(volumePy) || Sk.ffi.isNone(volumePy), volumePy);
          cylinder[PROP_VOLUME] = Sk.ffi.remapToJs(volumePy);
          return selfPy;
        });
      }
      case PROP_WIREFRAME: {
        return Sk.ffi.callableToPy(mod, PROP_WIREFRAME, function(methodPy, wireframePy) {
          Sk.ffi.checkMethodArgs(PROP_WIREFRAME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIREFRAME, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(wireframePy), wireframePy);
          cylinder[PROP_WIREFRAME] = Sk.ffi.remapToJs(wireframePy);
          return selfPy;
        });
      }
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, METHOD_BUILD, function(methodPy) {
          /**
           * @return {{a: number, b: number, h: number}}
           */
          function dimensionCylinder() {
            var dims = {};
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
          var radialSegments = Sk.ffi.numberToIntPy(32);
          var heightSegments = Sk.ffi.numberToIntPy(1);
          var openEnded      = Sk.ffi.booleanToPy(false);
          var geometryPy = Sk.ffi.callsim(mod[CYLINDER_GEOMETRY], radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);
          if (cylinder[PROP_MATERIAL]) {
            return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, cylinder[PROP_MATERIAL]), cylinder);
          }
          else {
            var parameters = {};
            parameters[PROP_COLOR]     = cylinder[PROP_COLOR];
            parameters[PROP_WIREFRAME] = cylinder[PROP_WIREFRAME];
            var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(parameters));
            return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy), cylinder);
          }
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CYLINDER_BUILDER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy("" + self);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(CYLINDER_BUILDER + "(" + ")");
  })
}, CYLINDER_BUILDER, []);

mod[SPHERE_BUILDER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(SPHERE_BUILDER, arguments, 0, 0);
    var self = {};
    self[PROP_COLOR]     = DEFAULT_COLOR;
    self[PROP_WIREFRAME] = false;
    self[PROP_AXIS]      = e3;
    Sk.ffi.referenceToPy(self, SPHERE_BUILDER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var sphere = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_AXIS: {
        return Sk.ffi.callableToPy(mod, PROP_AXIS, function(methodPy, axisPy) {
          Sk.ffi.checkMethodArgs(PROP_AXIS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_AXIS, VECTOR_3, isVector3(axisPy), axisPy);
          sphere[PROP_AXIS] = Sk.ffi.remapToJs(axisPy);
          return selfPy;
        });
      }
      case PROP_COLOR: {
        return Sk.ffi.callableToPy(mod, PROP_COLOR, function(methodPy, colorPy) {
          Sk.ffi.checkMethodArgs(PROP_COLOR, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_COLOR, NUMBER, Sk.ffi.isNumber(colorPy) || Sk.ffi.isStr(colorPy), colorPy);
          sphere[PROP_COLOR] = Sk.ffi.remapToJs(colorPy);
          return selfPy;
        });
      }
      case PROP_NAME: { return methodName(selfPy); }
      case PROP_RADIUS: {
        return Sk.ffi.callableToPy(mod, PROP_RADIUS, function(methodPy, radiusPy) {
          Sk.ffi.checkMethodArgs(PROP_RADIUS, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_RADIUS, [NUMBER, Sk.ffi.PyType.NONE], Sk.ffi.isNumber(radiusPy) || Sk.ffi.isNone(radiusPy), radiusPy);
          sphere[PROP_RADIUS] = Sk.ffi.remapToJs(radiusPy);
          return selfPy;
        });
      }
      case PROP_VOLUME: {
        return Sk.ffi.callableToPy(mod, PROP_VOLUME, function(methodPy, volumePy) {
          Sk.ffi.checkMethodArgs(PROP_VOLUME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_VOLUME, NUMBER, Sk.ffi.isNumber(volumePy) || Sk.ffi.isNone(volumePy), volumePy);
          sphere[PROP_VOLUME] = Sk.ffi.remapToJs(volumePy);
          return selfPy;
        });
      }
      case PROP_WIREFRAME: {
        return Sk.ffi.callableToPy(mod, PROP_WIREFRAME, function(methodPy, wireframePy) {
          Sk.ffi.checkMethodArgs(PROP_WIREFRAME, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_WIREFRAME, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(wireframePy), wireframePy);
          sphere[PROP_WIREFRAME] = Sk.ffi.remapToJs(wireframePy);
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
            if (sphere[PROP_VOLUME]) {
              var r = (sphere.radius) ? sphere.radius : DEFAULT_SPHERE_RADIUS;
              dims.radius = Math.pow(3 * sphere[PROP_VOLUME] / (4 * Math.PI), 1 / 3);
            }
            else {
              dims.radius = (sphere.radius) ? sphere.radius : DEFAULT_SPHERE_RADIUS;
            }
            return dims;
          }
          Sk.ffi.checkMethodArgs(METHOD_BUILD, arguments, 0, 0);
          var dimensions = dimensionSphere();
          var radius         = Sk.ffi.remapToPy(dimensions.radius);
          var widthSegments  = Sk.ffi.remapToPy(24);
          var heightSegments = Sk.ffi.remapToPy(18);
          var geometryPy = Sk.ffi.callsim(mod[SPHERE_GEOMETRY], radius, widthSegments, heightSegments);
          var parameters = {};
          parameters[PROP_COLOR]     = sphere[PROP_COLOR];
          parameters[PROP_WIREFRAME] = sphere[PROP_WIREFRAME];
          var materialPy = Sk.ffi.callsim(mod[MESH_LAMBERT_MATERIAL], Sk.ffi.remapToPy(parameters));
          return modifyMesh(Sk.ffi.callsim(mod[MESH], geometryPy, materialPy), sphere);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(SPHERE_BUILDER);
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

};
}).call(this);
