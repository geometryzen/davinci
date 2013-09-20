(function() {
Sk.builtin.defineThree = function(mod, THREE, BLADE) {
Sk.ffi.checkFunctionArgs("defineThree", arguments, 3, 3);
/**
* @const
* @type {string}
*/
var NODE                       = "Node";
/**
* @const
* @type {Sk.ffi.PyType}
*/
var INT                        = Sk.ffi.PyType.INT;
/**
* @const
* @type {!Array.<Sk.ffi.PyType>}
*/
var NUMBER                     = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
* @const
* @type {string}
*/
var EUCLIDEAN_3                = "Euclidean3";
/**
* @const
* @type {string}
*/
var FACE_3                     = "Face3";
/**
* @const
* @type {string}
*/
var VECTOR_2                   = "Vector2";
/**
* @const
* @type {string}
*/
var VECTOR_3                   = "Vector3";
/**
 * @const
 * @type {string}
 */
var QUATERNION                 = "Quaternion";
/**
 * @const
 * @type {string}
 */
var SCENE                      = "Scene";
/**
* @const
* @type {string}
*/
var CANVAS_RENDERER            = "CanvasRenderer";
/**
* @const
* @type {string}
*/
var WEBGL_RENDERER             = "WebGLRenderer";
/**
* @const
* @type {string}
*/
var COLOR                      = "Color";
/**
* @const
* @type {string}
*/
var ORTHOGRAPHIC_CAMERA        = "OrthographicCamera";
/**
* @const
* @type {string}
*/
var PERSPECTIVE_CAMERA         = "PerspectiveCamera";
/**
* @const
* @type {string}
*/
var GEOMETRY                   = "Geometry";
/**
* @const
* @type {string}
*/
var OBJECT_3D                  = "Object3D";
/**
* @const
* @type {string}
*/
var AMBIENT_LIGHT              = "AmbientLight";
/**
* @const
* @type {string}
*/
var DIRECTIONAL_LIGHT          = "DirectionalLight";
/**
* @const
* @type {string}
*/
var POINT_LIGHT                = "PointLight";
/**
* @const
* @type {string}
*/
var LINE                       = "Line";
/**
* @const
* @type {string}
*/
var LINE_BASIC_MATERIAL        = "LineBasicMaterial";
/**
* @const
* @type {string}
*/
var MESH                       = "Mesh";
/**
* @const
* @type {string}
*/
var MESH_BASIC_MATERIAL        = "MeshBasicMaterial";
/**
* @const
* @type {string}
*/
var MESH_LAMBERT_MATERIAL      = "MeshLambertMaterial";
/**
* @const
* @type {string}
*/
var MESH_NORMAL_MATERIAL       = "MeshNormalMaterial";
/**
* @const
* @type {string}
*/
var MESH_PHONG_MATERIAL        = "MeshPhongMaterial";
/**
* @const
* @type {string}
*/
var ARROW_GEOMETRY             = "ArrowGeometry";
/**
* @const
* @type {string}
*/
var CIRCLE_GEOMETRY            = "CircleGeometry";
/**
* @const
* @type {string}
*/
var CUBE_GEOMETRY              = "CubeGeometry";
/**
* @const
* @type {string}
*/
var CYLINDER_GEOMETRY          = "CylinderGeometry";
/**
* @const
* @type {string}
*/
var ICOSAHEDRON_GEOMETRY       = "IcosahedronGeometry";
/**
* @const
* @type {string}
*/
var LATHE_GEOMETRY             = "LatheGeometry";
/**
* @const
* @type {string}
*/
var OCTAHEDRON_GEOMETRY        = "OctahedronGeometry";
/**
* @const
* @type {string}
*/
var PLANE_GEOMETRY             = "PlaneGeometry";
/**
* @const
* @type {string}
*/
var REVOLUTION_GEOMETRY        = "RevolutionGeometry";
/**
* @const
* @type {string}
*/
var SPHERE_GEOMETRY            = "SphereGeometry";
/**
* @const
* @type {string}
*/
var TEXT_GEOMETRY              = "TextGeometry";
/**
* @const
* @type {string}
*/
var TETRAHEDRON_GEOMETRY       = "TetrahedronGeometry";
/**
* @const
* @type {string}
*/
var TORUS_GEOMETRY             = "TorusGeometry";
/**
* @const
* @type {string}
*/
var PROP_ATTITUDE              = "attitude";
/**
* @const
* @type {string}
*/
var PROP_AXIS                  = "axis";
/**
* @const
* @type {string}
*/
var PROP_BOTTOM                = "bottom";
/**
* @const
* @type {string}
*/
var PROP_COLOR                 = "color";
/**
* @const
* @type {string}
*/
var PROP_DEPTH                 = "depth";
/**
* @const
* @type {string}
*/
var PROP_DEPTH_SEGMENTS        = "depthSegments";
/**
* @const
* @type {string}
*/
var PROP_DETAIL                = "detail";
/**
* @const
* @type {string}
*/
var PROP_DISTANCE              = "distance";
/**
* @const
* @type {string}
*/
var PROP_EULER_ORDER           = "eulerOrder";
/**
* @const
* @type {string}
*/
var PROP_FAR                   = "far";
/**
* @const
* @type {string}
*/
var PROP_GEOMETRY              = "geometry";
/**
* @const
* @type {string}
*/
var PROP_ID                    = "id";
/**
* @const
* @type {string}
*/
var PROP_LEFT                  = "left";
/**
* @const
* @type {string}
*/
var PROP_MATERIAL              = "material";
/**
* @const
* @type {string}
*/
var PROP_MATRIX_AUTO_UPDATE    = "matrixAutoUpdate";
/**
* @const
* @type {string}
*/
var PROP_NAME                  = "name";
/**
* @const
* @type {string}
*/
var PROP_NEAR                  = "near";
/**
* @const
* @type {string}
*/
var PROP_NEEDS_UPDATE          = "needsUpdate";
/**
* @const
* @type {string}
*/
var PROP_OPACITY               = "opacity";
/**
* @const
* @type {string}
*/
var PROP_OVERDRAW              = "overdraw";
/**
* @const
* @type {string}
*/
var PROP_PHI_START             = "phiStart";
/**
* @const
* @type {string}
*/
var PROP_PHI_LENGTH            = "phiLength";
/**
* @const
* @type {string}
*/
var PROP_POINTS                = "points";
/**
* @const
* @type {string}
*/
var PROP_POSITION              = "position";
/**
* @const
* @type {string}
*/
var PROP_QUATERNION            = "quaternion";
/**
* @const
* @type {string}
*/
var PROP_RADIUS                = "radius";
/**
* @const
* @type {string}
*/
var PROP_RADIUS_TOP            = "radiusTop";
/**
* @const
* @type {string}
*/
var PROP_RADIUS_BOTTOM         = "radiusBottom";
/**
* @const
* @type {string}
*/
var PROP_HEIGHT                = "height";
/**
* @const
* @type {string}
*/
var PROP_HEIGHT_SEGMENTS       = "heightSegments";
/**
* @const
* @type {string}
*/
var PROP_OPEN_ENDED            = "openEnded";
/**
* @const
* @type {string}
*/
var PROP_RADIAL_SEGMENTS       = "radialSegments";
/**
* @const
* @type {string}
*/
var PROP_RIGHT                 = "right";
/**
* @const
* @type {string}
*/
var PROP_ROTATION              = "rotation";
/**
* @const
* @type {string}
*/
var PROP_SCALE                 = "scale";
/**
* @const
* @type {string}
*/
var PROP_SEGMENTS              = "segments";
/**
* @const
* @type {string}
*/
var PROP_THETA_START           = "thetaStart";
/**
* @const
* @type {string}
*/
var PROP_THETA_LENGTH          = "thetaLength";
/**
* @const
* @type {string}
*/
var PROP_TOP                   = "top";
/**
* @const
* @type {string}
*/
var PROP_TRANSPARENT           = "transparent";
/**
* @const
* @type {string}
*/
var PROP_TYPE                  = "type";
/**
* @const
* @type {string}
*/
var PROP_UP                    = "up";
/**
* @const
* @type {string}
*/
var PROP_UUID                  = "uuid";
/**
* @const
* @type {string}
*/
var PROP_USE_QUATERNION        = "useQuaternion";
/**
* @const
* @type {string}
*/
var PROP_VERTICES              = "vertices";
/**
* @const
* @type {string}
*/
var PROP_VISIBLE               = "visible";
/**
* @const
* @type {string}
*/
var PROP_WIDTH                 = "width";
/**
* @const
* @type {string}
*/
var PROP_WIDTH_SEGMENTS        = "widthSegments";
/**
* @const
* @type {string}
*/
var PROP_WIREFRAME             = "wireframe";
/**
* @const
* @type {string}
*/
var PROP_WIREFRAME_LINEWIDTH   = "wireframeLinewidth";
/**
* @const
* @type {string}
*/
var PROP_VECTOR                = "vector";
/**
* @const
* @type {string}
*/
var PROP_W                     = "w";
/**
* @const
* @type {string}
*/
var PROP_X                     = "x";
/**
* @const
* @type {string}
*/
var PROP_Y                     = "y";
/**
* @const
* @type {string}
*/
var PROP_Z                     = "z";
/**
* @const
* @type {string}
*/
var PROP_XY                    = "xy";
/**
* @const
* @type {string}
*/
var PROP_YZ                    = "yz";
/**
* @const
* @type {string}
*/
var PROP_ZX                    = "zx";
/**
* @const
* @type {string}
*/
var PROP_XYZ                   = "xyz";
/**
* @const
* @type {string}
*/
var METHOD_ROTATE_ON_AXIS      = "rotateOnAxis";
/**
* @const
* @type {string}
*/
var METHOD_ROTATE_X            = "rotateX";
/**
* @const
* @type {string}
*/
var METHOD_ROTATE_Y            = "rotateY";
/**
* @const
* @type {string}
*/
var METHOD_ROTATE_Z            = "rotateZ";
/**
* @const
* @type {string}
*/
var METHOD_SET_X               = "setX";
/**
* @const
* @type {string}
*/
var METHOD_SET_Y               = "setY";
/**
* @const
* @type {string}
*/
var METHOD_SET_Z               = "setZ";
/**
* @const
* @type {string}
*/
var METHOD_GET_COMPONENT       = "getComponent";
/**
* @const
* @type {string}
*/
var METHOD_SET_COMPONENT       = "setComponent";
/**
* @const
* @type {string}
*/
var METHOD_SET_GEOMETRY        = "setGeometry";
/**
* @const
* @type {string}
*/
var METHOD_TRANSLATE_ON_AXIS   = "translateOnAxis";
/**
* @const
* @type {string}
*/
var METHOD_TRANSLATE_X         = "translateX";
/**
* @const
* @type {string}
*/
var METHOD_TRANSLATE_Y         = "translateY";
/**
* @const
* @type {string}
*/
var METHOD_TRANSLATE_Z         = "translateZ";
/**
* @const
* @type {string}
*/
var METHOD_UPDATE_MATRIX       = "updateMatrix";
/**
* @const
* @type {string}
*/
var METHOD_ADD                 = "add";
/**
* @const
* @type {string}
*/
var METHOD_CROSS               = "cross";
/**
* @const
* @type {string}
*/
var METHOD_DOT                 = "dot";
/**
 * @const
 * @type {string}
 */
var METHOD_LOOK_AT             = "lookAt";
/**
* @const
* @type {string}
*/
var METHOD_REMOVE              = "remove";
/**
* @const
* @type {string}
*/
var METHOD_SET_RGB             = "setRGB";
/**
 * @const
 * @type {string}
 */
var ARG_AXIS                   = "axis";
/**
 * @const
 * @type {string}
 */
var ARG_VECTOR                 = "vector";

mod[NODE]  = Sk.builtin.buildNodeClass(mod);

/**
 * @param {string} name
 * @param {Object} valuePy
 * @return {boolean} The JavaScript value of the Python argument.
 */
function checkArgBool(name, valuePy) {
  Sk.ffi.checkArgType(name, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
  return Sk.ffi.remapToJs(valuePy);
}

function isBoolean(x)   { return typeof x === 'boolean'; }
function isFunction(x)  { return typeof x === 'function'; }
function isNumber(x)    { return typeof x === 'number'; }
function isObject(x)    { return typeof x === 'object'; }
function isString(x)    { return typeof x === 'string'; }
function isUndefined(x) { return typeof x === 'undefined'; }

function isDefined(x)   { return typeof x !== 'undefined'; }
function isNull(x)      { return typeof x === 'object' && x === null; }

function isEuclidean3Py(valuePy) {return Sk.ffi.isClass(valuePy, EUCLIDEAN_3);}
function isVector3Py(valuePy) {return Sk.ffi.isClass(valuePy, VECTOR_3);}
function isGeometryPy(valuePy) {
  return Sk.ffi.isClass(valuePy) && Sk.ffi.typeName(valuePy) === GEOMETRY; // TODO: GEOMETRIES
}

function vectorToEuclidean3Py(vector) {
  var euclidean = new THREE[EUCLIDEAN_3](vector, new THREE[QUATERNION](0,0,0,0), 0);
  return Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.referenceToPy(euclidean, EUCLIDEAN_3));
}

function setVectorProperty(obj, name, valuePy) {
  Sk.ffi.checkArgType(name, EUCLIDEAN_3, isEuclidean3Py(valuePy), valuePy);
  var vectorPy = Sk.ffi.gattr(valuePy, PROP_VECTOR);
  Sk.ffi.checkArgType(name, VECTOR_3, isVector3Py(vectorPy), vectorPy);
  obj[name] = Sk.ffi.remapToJs(vectorPy);
}

function methodAdd(target) {
  if (!isObject(target)) {
    throw Sk.ffi.assertionError("target must be an object.");
  }
  if (!isFunction(target[METHOD_ADD])) {
    throw Sk.ffi.assertionError("target must have an 'add' function.");
  }
  return Sk.ffi.callableToPy(mod, METHOD_ADD, function(methodPy, childPy) {
    var child = Sk.ffi.remapToJs(childPy);
    target.add(child);
  });
}

function methodLookAt(targetPy) {
  return Sk.ffi.callableToPy(mod, METHOD_LOOK_AT, function(methodPy, euclideanPy) {
    Sk.ffi.checkMethodArgs(METHOD_LOOK_AT, arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_VECTOR, EUCLIDEAN_3, isEuclidean3Py(euclideanPy), euclideanPy);
    var vectorPy = Sk.ffi.gattr(euclideanPy, PROP_VECTOR);
    Sk.ffi.checkArgType(ARG_VECTOR, VECTOR_3, isVector3Py(vectorPy), vectorPy);
    Sk.ffi.remapToJs(targetPy)[METHOD_LOOK_AT](Sk.ffi.remapToJs(vectorPy));
    return targetPy;
  });
}

function methodRemove(target) {
  if (!isObject(target)) {
    throw Sk.ffi.assertionError("target must be an object.");
  }
  if (!isFunction(target[METHOD_REMOVE])) {
    throw Sk.ffi.assertionError("target must have a 'remove' function.");
  }
  return Sk.ffi.callableToPy(mod, METHOD_ADD, function(methodPy, childPy) {
    var child = Sk.ffi.remapToJs(childPy);
    target.remove(child);
  });
}

function verticesPy(vertices) {
  return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.referenceToPy(vertices, PROP_VERTICES, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(verticesPy, name) {
      var METHOD_APPEND = "append";
      switch(name) {
        case METHOD_APPEND: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_APPEND;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, vectorPy) {
              vertices.push(Sk.ffi.remapToJs(vectorPy));
            });
            $loc.__str__ = Sk.ffi.functionPy(function(self) {
              return Sk.ffi.stringToPy(METHOD_APPEND)
            });
            $loc.__repr__ = Sk.ffi.functionPy(function(self) {
              return Sk.ffi.stringToPy(METHOD_APPEND)
            });
          }, METHOD_APPEND, []));
        }
      }
    });
    $loc.__getitem__ = Sk.ffi.functionPy(function(verticesPy, indexPy) {
      var index = Sk.ffi.remapToJs(indexPy);
      return vectorToEuclidean3Py(vertices[index]);
    });
    $loc.mp$length = function() {return vertices.length;};
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_VERTICES)
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(PROP_VERTICES)
    });
  }, PROP_VERTICES, []));
}

/*
 * Deterines whether the argument is a genuine Color reference.
 */
function isColor(x) {
  if (isDefined(x)) {
    if (x.hasOwnProperty("r") && x.hasOwnProperty("g") && x.hasOwnProperty("b")) {
      return isNumber(x["r"]) && isNumber(x["g"]) && isNumber(x["b"]);
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function webGLSupported() {
  try {
    if (window.WebGLRenderingContext) {
      if (document.createElement('canvas').getContext('experimental-webgl')) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  catch(e) {
    return false;
  }
}

function stringFromCoordinates(coordinates, labels) {
  var append, i, sb, str, _i, _ref;
  sb = [];
  append = function(number, label) {
    var n;
    if (number !== 0) {
      if (number >= 0) {
        if (sb.length > 0) {
          sb.push("+");
        }
      } else {
        sb.push("-");
      }
      n = Math.abs(number);
      if (n === 1) {
        return sb.push(label);
      } else {
        sb.push(n.toString());
        if (label !== "1") {
          sb.push("*");
          return sb.push(label);
        }
      }
    }
  };
  for (i = _i = 0, _ref = coordinates.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    append(coordinates[i], labels[i]);
  }
  if (sb.length > 0) {
    str = sb.join("");
  } else {
    str = "0";
  }
  return str;
}

/**
 * @param {boolean=} lax
 */
function numberFromArg(arg, argName, functionName, lax) {
  if (isUndefined(argName)) {
    throw new Error("argName must be specified")
  }
  if (isUndefined(functionName)) {
    throw new Error("functionName must be specified")
  }
  lax = isUndefined(lax) ? true : (isBoolean(lax) ? lax : true);
  if (isUndefined(arg)) {
    if (lax) {
      return arg;
    }
    else {
      throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was Missing.");
    }
  }
  else if (isNull(arg)) {
    if (lax) {
      return arg;
    }
    else {
      throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was None.");
    }
  }
  if (isBoolean(arg)) {
    throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was a Boolean.");
  }

  if (arg.skType) {
    switch(arg.skType) {
      case 'float': {
        return arg.v;
      }
      case 'int': {
        return arg.v;
      }
      default: {
        throw new Sk.builtin.TypeError(functionName + "(" + argName + ": " + arg.skType + ") must be convertible to a number.");
      }
    }
  }
  else if (arg.v) {
    if (isString(arg.v)) {
      throw new Sk.builtin.TypeError(functionName + "." + argName + " must be convertible to a number, but was a String.");
    }
    else {
      throw new Sk.builtin.AssertionError(functionName + "." + argName + " is unknown.");
    }
  }
  else {
    throw new Sk.builtin.AssertionError(functionName + "." + argName + " is unknown.");
  }
}

function numberFromIntegerArg(arg, argName, functionName) {
  // TODO: Maybe need an argument to say whether undefined is acceptable?
  // TODO: Likewise for whether null is acceptable.
  if (isUndefined(arg)) {
    return arg;
  }
  else if (isNull(arg)) {
    return null;
  }
  else {
    if (arg.skType) {
      switch(arg.skType) {
        case 'float': {
          // TODO: Handle coercion to nearest integer.
          return arg.v;
        }
        case 'int': {
          return arg.v;
        }
      }
    }
    throw new Sk.builtin.AssertionError(functionName + "." + argName + " must be an integer.");
  }
}

/**
 * @param {number} w
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
function wxyzToPy(w, x, y, z) {
  var wPy = Sk.builtin.assk$(w, Sk.builtin.nmber.float$);
  var xPy = Sk.builtin.assk$(x, Sk.builtin.nmber.float$);
  var yPy = Sk.builtin.assk$(y, Sk.builtin.nmber.float$);
  var zPy = Sk.builtin.assk$(z, Sk.builtin.nmber.float$);
  return Sk.ffi.callsim(mod[QUATERNION], xPy, yPy, zPy, wPy);
}

function vectorJs(x, y, z) {return new THREE[VECTOR_3](x, y, z);}
function quaternionJs(x, y, z, w) {return new THREE[QUATERNION](x, y, z, w);}

Sk.builtin.defineEuclidean3(mod, {"vector": vectorJs, "quaternion": quaternionJs}, EUCLIDEAN_3, THREE, BLADE);
Sk.builtin.defineVector3(mod, VECTOR_3, vectorJs);
Sk.builtin.defineQuaternion(mod, QUATERNION, quaternionJs);

mod[SCENE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, sceneRefPy) {
    if (Sk.ffi.isUndefined(sceneRefPy)) {
      Sk.ffi.checkMethodArgs(SCENE, arguments, 0, 0);
      Sk.ffi.referenceToPy(new THREE[SCENE](), SCENE, undefined, selfPy);
    }
    else if (Sk.ffi.isClass(sceneRefPy, SCENE)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(sceneRefPy), SCENE, undefined, selfPy);
    }
    else
    {
      Sk.ffi.checkMethodArgs(SCENE, arguments, 0, 0);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(scenePy, name) {
    var scene = Sk.ffi.remapToJs(scenePy);
    switch(name) {
      case PROP_POSITION: {
        return vectorToEuclidean3Py(scene[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(scene[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(scene[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(scene[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(scene[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(scene[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return scene[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(scenePy);}
      case METHOD_ADD:     {return methodAdd(scene);}
      case METHOD_REMOVE:  {return methodRemove(scene);}
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(scenePy, name, valuePy) {
    var scene = Sk.ffi.remapToJs(scenePy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(scene, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        scene[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          scene[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        scene[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Error(name + " is not a write attribute of " + SCENE);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(SCENE);
  });
}, SCENE, []);

mod[CANVAS_RENDERER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_AUTO_CLEAR   = "autoClear";
  var PROP_CLEAR_COLOR  = "clearColor";
  var PROP_DOM_ELEMENT  = "domElement";
  var PROP_GAMMA_INPUT  = "gammaInput";
  var PROP_GAMMA_OUTPUT = "gammaOutput";
  var PROP_SORT_OBJECTS = "sortObjects";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[CANVAS_RENDERER](parameters), CANVAS_RENDERER, undefined, selfPy);
  });
  $loc.setSize = Sk.ffi.functionPy(function(self, width, height) {
    self.v.setSize(Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    var METHOD_RENDER = "render";
    var METHOD_GET_CLEAR_COLOR = "getClearColor";
    var METHOD_SET_CLEAR_COLOR = "setClearColor";
    var METHOD_SET_SIZE        = "setSize";
    var renderer  = Sk.ffi.remapToJs(self);
    switch(name) {
      case PROP_AUTO_CLEAR: {
        return renderer[PROP_AUTO_CLEAR];
      }
      case PROP_GAMMA_INPUT: {
        return renderer[PROP_GAMMA_INPUT];
      }
      case PROP_GAMMA_OUTPUT: {
        return renderer[PROP_GAMMA_OUTPUT];
      }
      case PROP_SORT_OBJECTS: {
        return renderer[PROP_SORT_OBJECTS];
      }
      case PROP_DOM_ELEMENT: {
        // TODO: I think duck-typing means that this will work as long as we don't
        // try to do anything more ambitious.
        // TODO: I think we can access the Node now too.
        return {v: renderer[PROP_DOM_ELEMENT]};
      }
      case METHOD_RENDER: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_RENDER;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, scene, camera) {
            scene  = Sk.ffi.remapToJs(scene);
            camera = Sk.ffi.remapToJs(camera);
            renderer[METHOD_RENDER](scene, camera);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_RENDER);
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_RENDER);
          })
        }, METHOD_RENDER, []));
      }
      case METHOD_GET_CLEAR_COLOR: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_GET_CLEAR_COLOR;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(renderer[METHOD_GET_CLEAR_COLOR](), COLOR));
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_GET_CLEAR_COLOR);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_GET_CLEAR_COLOR);
          });
        }, METHOD_GET_CLEAR_COLOR, []));
      }
      case METHOD_SET_CLEAR_COLOR: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_CLEAR_COLOR;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, color, alpha) {
            color  = Sk.ffi.remapToJs(color);
            alpha = Sk.ffi.remapToJs(alpha);
            renderer[METHOD_SET_CLEAR_COLOR](color, alpha);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_CLEAR_COLOR);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_CLEAR_COLOR);
          });
        }, METHOD_SET_CLEAR_COLOR, []));
      }
      case METHOD_SET_SIZE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_SIZE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, width, height, updateStyle) {
            width  = Sk.ffi.remapToJs(width);
            height = Sk.ffi.remapToJs(height);
            updateStyle = Sk.ffi.remapToJs(updateStyle);
            renderer.setSize(width, height, updateStyle);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
        }, METHOD_SET_SIZE, []));
      }
      default: {
        // The framework will raise an AttributeError exception.
        return /* undefined */;
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(self, name, value) {
    var renderer  = Sk.ffi.remapToJs(self);
    value = Sk.ffi.remapToJs(value);
    switch(name) {
      case PROP_AUTO_CLEAR: {
        if (isBoolean(value)) {
          renderer[PROP_AUTO_CLEAR] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_AUTO_CLEAR + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case PROP_GAMMA_INPUT: {
        if (isBoolean(value)) {
          renderer[PROP_GAMMA_INPUT] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_GAMMA_INPUT + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case PROP_GAMMA_OUTPUT: {
        if (isBoolean(value)) {
          renderer[PROP_GAMMA_OUTPUT] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_GAMMA_OUTPUT + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case PROP_SORT_OBJECTS: {
        if (isBoolean(value)) {
          renderer[PROP_SORT_OBJECTS] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_SORT_OBJECTS + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case "size": {
        var width  = Sk.builtin.asnum$(value[0]);
        var height = Sk.builtin.asnum$(value[1]);
        renderer.setSize(width, height);
      }
      break;
      default: {
        throw new Error(name + " is not an attribute of " + CANVAS_RENDERER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var args = {};
    args[PROP_AUTO_CLEAR] = renderer[PROP_AUTO_CLEAR];
    args[PROP_GAMMA_INPUT] = renderer[PROP_GAMMA_INPUT];
    args[PROP_GAMMA_OUTPUT] = renderer[PROP_GAMMA_OUTPUT];
    return Sk.ffi.stringToPy(CANVAS_RENDERER + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var autoClear = renderer[PROP_AUTO_CLEAR];
    // Note: The WebGLRenderer takes only one argument, but it is a dictionary.
    var args = [{"autoClear": autoClear}];
    return Sk.ffi.stringToPy(CANVAS_RENDERER + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CANVAS_RENDERER, []);

mod[WEBGL_RENDERER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_AUTO_CLEAR   = "autoClear";
  var PROP_CLEAR_COLOR  = "clearColor";
  var PROP_DOM_ELEMENT  = "domElement";
  var PROP_GAMMA_INPUT  = "gammaInput";
  var PROP_GAMMA_OUTPUT = "gammaOutput";
  var PROP_SORT_OBJECTS = "sortObjects";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parametersPy) {
    if (Sk.ffi.checkMethodArgs(WEBGL_RENDERER, arguments, 0, 1) > 0) {
      Sk.ffi.checkArgType("parameters", Sk.ffi.PyType.DICT, Sk.ffi.isDict(parametersPy), parametersPy);
    }
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[WEBGL_RENDERER](parameters), WEBGL_RENDERER, undefined, selfPy);
  });
  $loc.setSize = Sk.ffi.functionPy(function(self, width, height) {
    self.v.setSize(Sk.builtin.asnum$(width), Sk.builtin.asnum$(height));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    var METHOD_RENDER = "render";
    var METHOD_GET_CLEAR_COLOR = "getClearColor";
    var METHOD_SET_CLEAR_COLOR = "setClearColor";
    var METHOD_SET_SIZE        = "setSize";
    var renderer  = Sk.ffi.remapToJs(self);
    switch(name) {
      case PROP_AUTO_CLEAR: {
        return Sk.ffi.booleanToPy(renderer[PROP_AUTO_CLEAR]);
      }
      case PROP_GAMMA_INPUT: {
        return Sk.ffi.booleanToPy(renderer[PROP_GAMMA_INPUT]);
      }
      case PROP_GAMMA_OUTPUT: {
        return Sk.ffi.booleanToPy(renderer[PROP_GAMMA_OUTPUT]);
      }
      case PROP_SORT_OBJECTS: {
        return renderer[PROP_SORT_OBJECTS];
      }
      case PROP_DOM_ELEMENT: {
        // TODO: I think duck-typing means that this will work as long as we don't
        // try to do anything more ambitious.
        return {v: renderer[PROP_DOM_ELEMENT]};
      }
      case METHOD_RENDER: {
        return Sk.ffi.callableToPy(mod, METHOD_RENDER, function(methodPy, scenePy, cameraPy) {
          Sk.ffi.checkMethodArgs(METHOD_GET_CLEAR_COLOR, arguments, 2, 2);
          var scene  = Sk.ffi.remapToJs(scenePy);
          var camera = Sk.ffi.remapToJs(cameraPy);
          return Sk.ffi.remapToPy(renderer[METHOD_RENDER](scene, camera));
        });
      }
      case METHOD_GET_CLEAR_COLOR: {
        return Sk.ffi.callableToPy(mod, METHOD_GET_CLEAR_COLOR, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_GET_CLEAR_COLOR, arguments, 0, 0);
          return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(renderer[METHOD_GET_CLEAR_COLOR](), COLOR));
        });
      }
      case METHOD_SET_CLEAR_COLOR: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_CLEAR_COLOR, function(methodPy, color, alpha) {
          Sk.ffi.checkMethodArgs(METHOD_GET_CLEAR_COLOR, arguments, 2, 2);
          color  = Sk.ffi.remapToJs(color);
          alpha = Sk.ffi.remapToJs(alpha);
          return Sk.ffi.remapToPy(renderer[METHOD_SET_CLEAR_COLOR](color, alpha));
        });
      }
      case METHOD_SET_SIZE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_SIZE;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, width, height, updateStyle) {
            width  = Sk.ffi.remapToJs(width);
            height = Sk.ffi.remapToJs(height);
            updateStyle = Sk.ffi.remapToJs(updateStyle);
            renderer.setSize(width, height, updateStyle);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_SIZE);
          });
        }, METHOD_SET_SIZE, []));
      }
      default: {
        // The framework will raise an AttributeError exception.
        return /* undefined */;
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(self, name, value) {
    var renderer  = Sk.ffi.remapToJs(self);
    value = Sk.ffi.remapToJs(value);
    switch(name) {
      case PROP_AUTO_CLEAR: {
        if (isBoolean(value)) {
          renderer[PROP_AUTO_CLEAR] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_AUTO_CLEAR + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case PROP_GAMMA_INPUT: {
        if (isBoolean(value)) {
          renderer[PROP_GAMMA_INPUT] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_GAMMA_INPUT + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case PROP_GAMMA_OUTPUT: {
        if (isBoolean(value)) {
          renderer[PROP_GAMMA_OUTPUT] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_GAMMA_OUTPUT + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case PROP_SORT_OBJECTS: {
        if (isBoolean(value)) {
          renderer[PROP_SORT_OBJECTS] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_SORT_OBJECTS + "' attribute must be a <type 'bool'>.");
        }
      }
      break;
      case "size": {
        var width  = Sk.builtin.asnum$(value[0]);
        var height = Sk.builtin.asnum$(value[1]);
        renderer.setSize(width, height);
      }
      break;
      default: {
        throw new Error(name + " is not an attribute of " + WEBGL_RENDERER);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var args = {};
    args[PROP_AUTO_CLEAR] = renderer[PROP_AUTO_CLEAR];
    args[PROP_GAMMA_INPUT] = renderer[PROP_GAMMA_INPUT];
    args[PROP_GAMMA_OUTPUT] = renderer[PROP_GAMMA_OUTPUT];
    return Sk.ffi.stringToPy(WEBGL_RENDERER + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var renderer = self.v;
    var autoClear = renderer[PROP_AUTO_CLEAR];
    // Note: The WebGLRenderer takes only one argument, but it is a dictionary.
    var args = [{"autoClear": autoClear}];
    return Sk.ffi.stringToPy(WEBGL_RENDERER + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, WEBGL_RENDERER, []);

mod[COLOR] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_R = "r";
  var PROP_G = "g";
  var PROP_B = "b";
  $loc.__init__ = Sk.ffi.functionPy(function(self, value) {
    value = Sk.ffi.remapToJs(value);
    self.tp$name = COLOR;
    if (isUndefined(value)) {
      self.v = new THREE[COLOR]();
    }
    else {
      if (isNumber(value) || isString(value)) {
        self.v = new THREE[COLOR](value);
      }
      else if (isColor(value)) {
        self.v = new THREE[COLOR](value);
      }
      else {
        throw new Sk.builtin.AssertionError("value must be either a number, string or Color.");
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(colorPy, name) {
    var color = Sk.ffi.remapToJs(colorPy);
    switch(name) {
      case PROP_R: {
        return Sk.builtin.assk$(color[PROP_R], Sk.builtin.nmber.float$);
      }
      case PROP_G: {
        return Sk.builtin.assk$(color[PROP_G], Sk.builtin.nmber.float$);
      }
      case PROP_B: {
        return Sk.builtin.assk$(color[PROP_B], Sk.builtin.nmber.float$);
      }
      case METHOD_SET_RGB: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_RGB;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, rPy, gPy, bPy) {
            var r  = Sk.ffi.remapToJs(rPy);
            var g  = Sk.ffi.remapToJs(gPy);
            var b  = Sk.ffi.remapToJs(bPy);
            color[METHOD_SET_RGB](r, g, b);
            return colorPy;
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_RGB);
          });
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_RGB);
          });
        }, METHOD_SET_RGB, []));
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(colorPy, name, valuePy) {
    var color = Sk.ffi.remapToJs(colorPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_R: {
        color[PROP_R] = value;
      }
      break;
      case PROP_G: {
        color[PROP_G] = value;
      }
      break;
      case PROP_B: {
        color[PROP_B] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AttributeError(name + " is not an attribute of " + COLOR);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var color = self.v;
    var args = {};
    args[PROP_R] = color[PROP_R];
    args[PROP_G] = color[PROP_G];
    args[PROP_B] = color[PROP_B];
    return Sk.ffi.stringToPy(COLOR + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var color = self.v;
    var r = color[PROP_R];
    var g = color[PROP_G];
    var b = color[PROP_B];
    var args = [r, g, b];
    return Sk.ffi.stringToPy(COLOR + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, COLOR, []);

mod[PERSPECTIVE_CAMERA] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, fov, aspect, near, far) {
    var fieldOfView = Sk.builtin.asnum$(fov)
    var aspectRatio = Sk.builtin.asnum$(aspect)
    var nearPlane = Sk.builtin.asnum$(near)
    var farPlane = Sk.builtin.asnum$(far)
    self.v = new THREE[PERSPECTIVE_CAMERA](fieldOfView, aspectRatio, nearPlane, farPlane);
    self.tp$name = PERSPECTIVE_CAMERA;
  });

  $loc.__getattr__ = Sk.ffi.functionPy(function(cameraPy, name) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
    switch(name) {
      case "aspect": {
        return Sk.builtin.assk$(camera.aspect, Sk.builtin.nmber.float$);
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(camera[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(camera[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(camera[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(camera[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(camera[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return camera[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(cameraPy);}
      case UPDATE_PROJECTION_MATRIX: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = UPDATE_PROJECTION_MATRIX;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            camera[name]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
        }, UPDATE_PROJECTION_MATRIX, []));
      }
      default: {
        return;
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(cameraPy, name, valuePy) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case "aspect": {
        camera.aspect = value;
      }
      break;
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(camera, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        camera[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          camera[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        camera[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AssertionError(name + " is not an attribute of " + PERSPECTIVE_CAMERA);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(PERSPECTIVE_CAMERA);
  });
}, PERSPECTIVE_CAMERA, []);

mod[ORTHOGRAPHIC_CAMERA] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, leftPy, rightPy, topPy, bottomPy, nearPy, farPy) {
    var left = Sk.builtin.asnum$(leftPy)
    var right = Sk.builtin.asnum$(rightPy)
    var top = Sk.builtin.asnum$(topPy)
    var bottom = Sk.builtin.asnum$(bottomPy)
    var near = Sk.builtin.asnum$(nearPy)
    var far = Sk.builtin.asnum$(farPy)
    self.v = new THREE[ORTHOGRAPHIC_CAMERA](left, right, top, bottom, near, far);
    self.tp$name = ORTHOGRAPHIC_CAMERA;
  });

  $loc.__getattr__ = Sk.ffi.functionPy(function(cameraPy, name) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var UPDATE_PROJECTION_MATRIX = "updateProjectionMatrix"
    switch(name) {
      case "aspect": {
        return Sk.ffi.numberToFloatPy(camera.aspect);
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(camera[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(camera[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(camera[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(camera[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(camera[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(camera[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return camera[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(cameraPy);}
      case UPDATE_PROJECTION_MATRIX: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = UPDATE_PROJECTION_MATRIX;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            camera[name]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(UPDATE_PROJECTION_MATRIX)
          })
        }, UPDATE_PROJECTION_MATRIX, []));
      }
      default: {
        return;
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(cameraPy, name, valuePy) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_LEFT: {
        camera[PROP_LEFT] = value;
      }
      break;
      case PROP_RIGHT: {
        camera[PROP_RIGHT] = value;
      }
      break;
      case PROP_TOP: {
        camera[PROP_TOP] = value;
      }
      break;
      case PROP_BOTTOM: {
        camera[PROP_BOTTOM] = value;
      }
      break;
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(camera, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        camera[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          camera[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        camera[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AssertionError(name + " is not an attribute of " + ORTHOGRAPHIC_CAMERA);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(cameraPy) {
    var camera = Sk.ffi.remapToJs(cameraPy);
    var args = [camera[PROP_LEFT], camera[PROP_RIGHT], camera[PROP_TOP], camera[PROP_BOTTOM], camera[PROP_NEAR], camera[PROP_FAR]];
    return Sk.ffi.stringToPy(ORTHOGRAPHIC_CAMERA + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(ORTHOGRAPHIC_CAMERA);
  });
}, ORTHOGRAPHIC_CAMERA, []);

mod[ARROW_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scalePy, attitudePy, segmentsPy, lengthPy, radiusShaft, radiusCone, lengthCone) {
    Sk.ffi.checkMethodArgs(ARROW_GEOMETRY, arguments, 0, 6);
    var scale;
    var quaternion;
    var length;
    if (Sk.ffi.isDefined(scalePy)) {
      Sk.ffi.checkArgType(PROP_SCALE, NUMBER, Sk.ffi.isNumber(scalePy), scalePy);
      scale = Sk.ffi.remapToJs(scalePy);
    }
    else {
      scale = 1;
    }
    if (Sk.ffi.isDefined(attitudePy)) {
      Sk.ffi.checkArgType(PROP_ATTITUDE, EUCLIDEAN_3, Sk.ffi.isClass(attitudePy, EUCLIDEAN_3), attitudePy);
      quaternion = Sk.ffi.remapToJs(attitudePy).quaternion;
    }
    else {
      quaternion = new THREE[QUATERNION](0, 0, 0, 1);
    }
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, INT, Sk.ffi.isNumber(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(lengthPy)) {
      Sk.ffi.checkArgType(PROP_SCALE, NUMBER, Sk.ffi.isNumber(lengthPy), lengthPy);
      length = Sk.ffi.remapToJs(lengthPy) * scale;
    }
    else {
      length = scale;
    }
    var segments = Sk.ffi.remapToJs(segmentsPy);
    radiusShaft  = (Sk.ffi.remapToJs(radiusShaft) || 0.01) * scale;
    radiusCone   = (Sk.ffi.remapToJs(radiusCone) || 0.08) * scale;
    lengthCone   = (Sk.ffi.remapToJs(lengthCone) || 0.2) * scale;
    var lengthShaft = length - lengthCone;
    var a = new THREE[VECTOR_3](0, 0, length);
    var b = new THREE[VECTOR_3](radiusCone, 0, lengthShaft);
    var c = new THREE[VECTOR_3](radiusShaft, 0, lengthShaft);
    var d = new THREE[VECTOR_3](radiusShaft, 0, 0);
    var e = new THREE[VECTOR_3](0, 0, 0);
    var points = [a, b, c, d, e];
    Sk.ffi.referenceToPy(new THREE[REVOLUTION_GEOMETRY](points, segments, 0, 2 * Math.PI, quaternion), ARROW_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_UUID: {
        return Sk.ffi.stringToPy(geometry[PROP_UUID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ARROW_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_NAME:
      {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(ARROW_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(ARROW_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(ARROW_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, ARROW_GEOMETRY, []);

 mod[CIRCLE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, segmentsPy, thetaStartPy, thetaLengthPy) {
    Sk.ffi.checkMethodArgs(CIRCLE_GEOMETRY, arguments, 0, 4);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, NUMBER, Sk.ffi.isNumber(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, INT, Sk.ffi.isInt(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(thetaStartPy)) {
      Sk.ffi.checkArgType(PROP_THETA_START, NUMBER, Sk.ffi.isNumber(thetaStartPy), thetaStartPy);
    }
    if (Sk.ffi.isDefined(thetaLengthPy)) {
      Sk.ffi.checkArgType(PROP_THETA_LENGTH, NUMBER, Sk.ffi.isNumber(thetaLengthPy), thetaLengthPy);
    }
    Sk.ffi.referenceToPy(new THREE[CIRCLE_GEOMETRY](Sk.ffi.remapToJs(radiusPy), Sk.ffi.remapToJs(segmentsPy), Sk.ffi.remapToJs(thetaStartPy), Sk.ffi.remapToJs(thetaLengthPy)), CIRCLE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var geometry = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_UUID: {
        return Sk.ffi.stringToPy(geometry[PROP_UUID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CIRCLE_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_NAME:
      {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(CIRCLE_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(CIRCLE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(CIRCLE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CIRCLE_GEOMETRY, []);

 mod[CUBE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, widthPy, heightPy, depthPy, widthSegmentsPy, heightSegmentsPy, depthSegmentsPy) {
    Sk.ffi.checkMethodArgs(CUBE_GEOMETRY, arguments, 3, 6);
    Sk.ffi.checkArgType(PROP_WIDTH,  NUMBER, Sk.ffi.isNumber(widthPy),  widthPy);
    Sk.ffi.checkArgType(PROP_HEIGHT, NUMBER, Sk.ffi.isNumber(heightPy), heightPy);
    Sk.ffi.checkArgType(PROP_DEPTH,  NUMBER, Sk.ffi.isNumber(depthPy),  depthPy);
    if (Sk.ffi.isDefined(widthSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_WIDTH_SEGMENTS, INT, Sk.ffi.isInt(widthSegmentsPy), widthSegmentsPy);
    }
    if (Sk.ffi.isDefined(heightSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, INT, Sk.ffi.isInt(heightSegmentsPy), heightSegmentsPy);
    }
    if (Sk.ffi.isDefined(depthSegmentsPy)) {
      Sk.ffi.checkArgType(PROP_DEPTH_SEGMENTS, INT, Sk.ffi.isInt(depthSegmentsPy), depthSegmentsPy);
    }
    var width  = Sk.ffi.remapToJs(widthPy);
    var height = Sk.ffi.remapToJs(heightPy);
    var depth  = Sk.ffi.remapToJs(depthPy);
    var widthSegments  = Sk.ffi.remapToJs(widthSegmentsPy);
    var heightSegments = Sk.ffi.remapToJs(heightSegmentsPy);
    var depthSegments  = Sk.ffi.remapToJs(depthSegmentsPy);
    Sk.ffi.referenceToPy(new THREE[CUBE_GEOMETRY](width, height, depth, widthSegments, heightSegments, depthSegments), CUBE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cube = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_WIDTH:
      case PROP_HEIGHT:
      case PROP_DEPTH: {
        return Sk.ffi.numberToFloatPy(cube[name]);
      }
      case PROP_WIDTH_SEGMENTS:
      case PROP_HEIGHT_SEGMENTS:
      case PROP_DEPTH_SEGMENTS: {
        return Sk.ffi.numberToIntPy(cube[name]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CUBE_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(CUBE_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var cube = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_WIDTH]  = cube[PROP_WIDTH];
    args[PROP_HEIGHT] = cube[PROP_HEIGHT];
    args[PROP_DEPTH]  = cube[PROP_DEPTH];
    return Sk.ffi.stringToPy(CUBE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var cube = Sk.ffi.remapToJs(selfPy);
    var width          = cube[PROP_WIDTH];
    var height         = cube[PROP_HEIGHT];
    var depth          = cube[PROP_DEPTH];
    var widthSegments  = cube[PROP_WIDTH_SEGMENTS];
    var heightSegments = cube[PROP_HEIGHT_SEGMENTS];
    var depthSegments  = cube[PROP_DEPTH_SEGMENTS];
    var args = [width, height, depth, widthSegments, heightSegments, depthSegments];
    return Sk.ffi.stringToPy(CUBE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CUBE_GEOMETRY, []);

mod[CYLINDER_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusTopPy, radiusBottomPy, heightPy, radialSegmentsPy, heightSegmentsPy, openEndedPy) {
    if (Sk.ffi.isClass(radiusTopPy, CYLINDER_GEOMETRY)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(radiusTopPy), CYLINDER_GEOMETRY, undefined, selfPy);
    }
    else {
      Sk.ffi.checkMethodArgs(CYLINDER_GEOMETRY, arguments, 0, 6);
      Sk.ffi.checkArgType(PROP_RADIUS_TOP, NUMBER, Sk.ffi.isNumber(radiusTopPy)||Sk.ffi.isUndefined(radiusTopPy), radiusTopPy);
      Sk.ffi.checkArgType(PROP_RADIUS_BOTTOM, NUMBER, Sk.ffi.isNumber(radiusBottomPy)||Sk.ffi.isUndefined(radiusBottomPy), radiusBottomPy);
      Sk.ffi.checkArgType(PROP_HEIGHT, NUMBER, Sk.ffi.isNumber(heightPy)||Sk.ffi.isUndefined(heightPy), heightPy);
      Sk.ffi.checkArgType(PROP_RADIAL_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(radialSegmentsPy)||Sk.ffi.isUndefined(radialSegmentsPy), radialSegmentsPy);
      Sk.ffi.checkArgType(PROP_HEIGHT_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(heightSegmentsPy)||Sk.ffi.isUndefined(heightSegmentsPy), heightSegmentsPy);
      Sk.ffi.checkArgType(PROP_OPEN_ENDED, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(openEndedPy)||Sk.ffi.isUndefined(openEndedPy), openEndedPy);
      var radiusTop = Sk.ffi.remapToJs(radiusTopPy);
      var radiusBottom = Sk.ffi.remapToJs(radiusBottomPy);
      var height = Sk.ffi.remapToJs(heightPy);
      var radialSegments = Sk.ffi.remapToJs(radialSegmentsPy);
      var heightSegments = Sk.ffi.remapToJs(heightSegmentsPy);
      var openEnded = Sk.ffi.remapToJs(openEndedPy);
      Sk.ffi.referenceToPy(new THREE[CYLINDER_GEOMETRY](radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded), CYLINDER_GEOMETRY, undefined, selfPy);
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS_TOP: {
        return Sk.ffi.numberToFloatPy(cylinder[PROP_RADIUS_TOP]);
      }
      case PROP_RADIUS_BOTTOM: {
        return Sk.ffi.numberToFloatPy(cylinder[PROP_RADIUS_BOTTOM]);
      }
      case PROP_HEIGHT: {
        return Sk.ffi.numberToFloatPy(cylinder[PROP_HEIGHT]);
      }
      case PROP_RADIAL_SEGMENTS: {
        return Sk.ffi.numberToIntPy(cylinder[PROP_RADIAL_SEGMENTS]);
      }
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.ffi.numberToIntPy(cylinder[PROP_HEIGHT_SEGMENTS]);
      }
      case PROP_OPEN_ENDED: {
        return Sk.ffi.booleanToPy(cylinder[PROP_OPEN_ENDED]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(CYLINDER_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(CYLINDER_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS_TOP] = cylinder[PROP_RADIUS_TOP];
    args[PROP_RADIUS_BOTTOM] = cylinder[PROP_RADIUS_BOTTOM];
    args[PROP_HEIGHT] = cylinder[PROP_HEIGHT];
    args[PROP_OPEN_ENDED] = cylinder[PROP_OPEN_ENDED];
    // TODO: Need a Python.stringify because Boolean is {True, False} etc.
    return Sk.ffi.stringToPy(CYLINDER_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var cylinder = Sk.ffi.remapToJs(selfPy);
    var radiusTop      = cylinder[PROP_RADIUS_TOP];
    var radiusBottom   = cylinder[PROP_RADIUS_BOTTOM];
    var height         = cylinder[PROP_HEIGHT];
    var radialSegments = cylinder[PROP_RADIAL_SEGMENTS];
    var heightSegments = cylinder[PROP_HEIGHT_SEGMENTS];
    var openEnded      = cylinder[PROP_OPEN_ENDED];
    var args = [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded];
    return Sk.ffi.stringToPy(CYLINDER_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, CYLINDER_GEOMETRY, []);

mod[LATHE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, pointsPy, segmentsPy, phiStartPy, phiLengthPy) {
    Sk.ffi.checkMethodArgs(LATHE_GEOMETRY, arguments, 1, 4);
    // Temporary workaround until the THREE.LatheGeometry is fixed...
    Sk.ffi.referenceToPy(new THREE[REVOLUTION_GEOMETRY](Sk.ffi.remapToJs(pointsPy), Sk.ffi.remapToJs(segmentsPy), Sk.ffi.remapToJs(phiStartPy), Sk.ffi.remapToJs(phiLengthPy)), LATHE_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(LATHE_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_NAME:
      {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(LATHE_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(LATHE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(LATHE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, LATHE_GEOMETRY, []);

mod[ICOSAHEDRON_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, detailPy) {
    Sk.ffi.checkMethodArgs(ICOSAHEDRON_GEOMETRY, arguments, 0, 2);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, NUMBER, Sk.ffi.isNumber(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(detailPy)) {
      Sk.ffi.checkArgType(PROP_DETAIL, INT, Sk.ffi.isInt(detailPy), detailPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    var detail = Sk.ffi.remapToJs(detailPy);
    Sk.ffi.referenceToPy(new THREE[ICOSAHEDRON_GEOMETRY](radius, detail), ICOSAHEDRON_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(self[PROP_RADIUS]);
      }
      case PROP_DETAIL: {
        return Sk.ffi.numberToIntPy(self[PROP_DETAIL]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ICOSAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(ICOSAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var icosahedron = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS] = icosahedron[PROP_RADIUS];
    args[PROP_DETAIL] = icosahedron[PROP_DETAIL];
    return Sk.ffi.stringToPy(ICOSAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var icosahedron = Sk.ffi.remapToJs(selfPy);
    var radius = icosahedron[PROP_RADIUS];
    var detail = icosahedron[PROP_DETAIL];
    var args = [radius, detail];
    return Sk.ffi.stringToPy(ICOSAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, ICOSAHEDRON_GEOMETRY, []);

mod[OCTAHEDRON_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_DETAIL = "detail";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, radiusPy, detailPy) {
    Sk.ffi.checkMethodArgs(OCTAHEDRON_GEOMETRY, arguments, 0, 2);
    if (Sk.ffi.isDefined(radiusPy)) {
      Sk.ffi.checkArgType(PROP_RADIUS, NUMBER, Sk.ffi.isNumber(radiusPy), radiusPy);
    }
    if (Sk.ffi.isDefined(detailPy)) {
      Sk.ffi.checkArgType(PROP_DETAIL, INT, Sk.ffi.isInt(detailPy), detailPy);
    }
    var radius = Sk.ffi.remapToJs(radiusPy);
    var detail = Sk.ffi.remapToJs(detailPy);
    var octahedron = new THREE[OCTAHEDRON_GEOMETRY](radius, detail);
    octahedron.radius = radius; // workaround for THREE not caching radius.
    octahedron.detail = detail; // workaround for THREE not caching detail.
    Sk.ffi.referenceToPy(octahedron, OCTAHEDRON_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_RADIUS: {
        return Sk.ffi.numberToFloatPy(self[PROP_RADIUS]);
      }
      case PROP_DETAIL: {
        return Sk.ffi.numberToIntPy(self[PROP_DETAIL]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(OCTAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(OCTAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var octahedron = Sk.ffi.remapToJs(selfPy);
    var args = {};
    args[PROP_RADIUS] = octahedron[PROP_RADIUS];
    args[PROP_DETAIL] = octahedron[PROP_DETAIL];
    return Sk.ffi.stringToPy(OCTAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var octahedron = Sk.ffi.remapToJs(selfPy);
    var radius = octahedron[PROP_RADIUS];
    var detail = octahedron[PROP_DETAIL];
    var args = [radius, detail];
    return Sk.ffi.stringToPy(OCTAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, OCTAHEDRON_GEOMETRY, []);

 mod[PLANE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_WIDTH           = "width";
  var PROP_HEIGHT          = "height";
  var PROP_WIDTH_SEGMENTS  = "widthSegments";
  var PROP_HEIGHT_SEGMENTS = "heightSegments";
  $loc.__init__ = Sk.ffi.functionPy(function(self, width, height, widthSegments, heightSegments) {
    width          = numberFromArg(width,                 PROP_WIDTH,           PLANE_GEOMETRY);
    height         = numberFromArg(height,                PROP_HEIGHT,          PLANE_GEOMETRY);
    widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  PLANE_GEOMETRY);
    heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, PLANE_GEOMETRY);
    self.v = new THREE[PLANE_GEOMETRY](width, height, widthSegments, heightSegments);
    self.tp$name = PLANE_GEOMETRY;
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      case PROP_WIDTH: {
        return Sk.builtin.assk$(self.v[PROP_WIDTH], Sk.builtin.nmber.float$);
      }
      case PROP_HEIGHT: {
        return Sk.builtin.assk$(self.v[PROP_HEIGHT], Sk.builtin.nmber.float$);
      }
      case PROP_WIDTH_SEGMENTS: {
        return Sk.builtin.assk$(self.v[PROP_WIDTH_SEGMENTS], Sk.builtin.nmber.int$);
      }
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.builtin.assk$(self.v[PROP_HEIGHT_SEGMENTS], Sk.builtin.nmber.int$);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + PLANE_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var plane = self.v;
    var args = {};
    args[PROP_WIDTH]  = plane[PROP_WIDTH];
    args[PROP_HEIGHT] = plane[PROP_HEIGHT];
    return Sk.ffi.stringToPy(PLANE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var plane = self.v;
    var width          = plane[PROP_WIDTH];
    var height         = plane[PROP_HEIGHT];
    var widthSegments  = plane[PROP_WIDTH_SEGMENTS];
    var heightSegments = plane[PROP_HEIGHT_SEGMENTS];
    var args = [width, height, widthSegments, heightSegments];
    return Sk.ffi.stringToPy(PLANE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, PLANE_GEOMETRY, []);

/**
 * @constructor
 * @param {!Array.<number>} points
 * @param {number=} segments
 * @param {number=} phiStart
 * @param {number=} phiLength
 * @param {Object=} attitude
 */
THREE.RevolutionGeometry = function (points, segments, phiStart, phiLength, attitude) {

  THREE[GEOMETRY].call( this );

  segments = segments || 12;
  phiStart = phiStart || 0;
  phiLength = phiLength || 2 * Math.PI;
  attitude = attitude || new THREE[QUATERNION](0, 0, 0, 1);

  // Determine heuristically whether the user intended to make a complete revolution.
  var isClosed = Math.abs(2 * Math.PI - Math.abs(phiLength - phiStart)) < 0.0001;

  // The number of vertical half planes (phi constant).
  var halfPlanes = isClosed ? segments : segments + 1;
  var inverseSegments = 1.0 / segments;
  var phiStep = (phiLength - phiStart) * inverseSegments;

  for ( var i = 0, il = halfPlanes; i < il; i ++ ) {

    var phi = phiStart + i * phiStep;

    var c = Math.cos( phi );
    var s = Math.sin( phi );

    for ( var j = 0, jl = points.length; j < jl; j ++ ) {

      var pt = points[ j ];

      var vertex = new THREE[VECTOR_3]();

      vertex.x = c * pt.x - s * pt.y;
      vertex.y = s * pt.x + c * pt.y;
      vertex.z = pt.z;

      vertex['applyQuaternion'](attitude);

      this['vertices'].push( vertex );

    }

  }

  var inversePointLength = 1.0 / ( points.length - 1 );
  var np = points.length;

  // The denominator for modulo index arithmetic.
  var wrap = np * halfPlanes;

  for ( var i = 0, il = segments; i < il; i ++ ) {

    for ( var j = 0, jl = points.length - 1; j < jl; j ++ ) {

      var base = j + np * i;
      var a = base % wrap;
      var b = (base + np) % wrap;
      var c = (base + 1 + np) % wrap;
      var d = (base + 1) % wrap;

      var u0 = i * inverseSegments;
      var v0 = j * inversePointLength;
      var u1 = u0 + inverseSegments;
      var v1 = v0 + inversePointLength;

      this['faces'].push(new THREE[FACE_3](d, b, a));
      this['faceVertexUvs'][ 0 ].push([
        new THREE[VECTOR_2](u0, v0),
        new THREE[VECTOR_2](u1, v0),
        new THREE[VECTOR_2](u0, v1)
      ]);

      this['faces'].push(new THREE[FACE_3](d, c, b));
      this['faceVertexUvs'][ 0 ].push([
        new THREE[VECTOR_2](u1, v0),
        new THREE[VECTOR_2](u1, v1), 
        new THREE[VECTOR_2](u0, v1)
      ]);
    }
  }

  this['computeCentroids']();
  this['computeFaceNormals']();
  this['computeVertexNormals']();
};

THREE.RevolutionGeometry.prototype = Object.create( THREE[GEOMETRY].prototype );

mod[REVOLUTION_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, pointsPy, segmentsPy, phiStartPy, phiLengthPy, attitudePy) {
    Sk.ffi.checkMethodArgs(REVOLUTION_GEOMETRY, arguments, 1, 5);
    Sk.ffi.checkArgType(PROP_POINTS, Sk.ffi.PyType.LIST, Sk.ffi.isList(pointsPy), pointsPy);
    if (Sk.ffi.isDefined(segmentsPy)) {
      Sk.ffi.checkArgType(PROP_SEGMENTS, Sk.ffi.PyType.INT, Sk.ffi.isInt(segmentsPy), segmentsPy);
    }
    if (Sk.ffi.isDefined(phiStartPy)) {
      Sk.ffi.checkArgType(PROP_PHI_START, NUMBER, Sk.ffi.isNumber(phiStartPy), phiStartPy);
    }
    if (Sk.ffi.isDefined(phiLengthPy)) {
      Sk.ffi.checkArgType(PROP_PHI_LENGTH, NUMBER, Sk.ffi.isNumber(phiLengthPy), phiLengthPy);
    }
    if (Sk.ffi.isDefined(attitudePy)) {
      Sk.ffi.checkArgType(PROP_ATTITUDE, EUCLIDEAN_3, Sk.ffi.isClass(attitudePy, EUCLIDEAN_3), attitudePy);
    }
    var attitude   = Sk.ffi.remapToJs(attitudePy);
    var quaternion = attitude ? attitude.quaternion : undefined;
    Sk.ffi.referenceToPy(new THREE[REVOLUTION_GEOMETRY](
      Sk.ffi.remapToJs(pointsPy),
      Sk.ffi.remapToJs(segmentsPy),
      Sk.ffi.remapToJs(phiStartPy),
      Sk.ffi.remapToJs(phiLengthPy),
      quaternion), REVOLUTION_GEOMETRY, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(REVOLUTION_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_NAME: {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        geometry[PROP_NAME] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(REVOLUTION_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = {};
    return Sk.ffi.stringToPy(REVOLUTION_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [];
    return Sk.ffi.stringToPy(REVOLUTION_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, REVOLUTION_GEOMETRY, []);

 mod[SPHERE_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_WIDTH_SEGMENTS  = "widthSegments";
  var PROP_HEIGHT_SEGMENTS = "heightSegments";
  var PROP_PHI_START       = "phiStart";
  var PROP_PHI_LENGTH      = "phiLength";
  $loc.__init__ = Sk.ffi.functionPy(function(self, radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {
    radius         = numberFromArg(radius,                PROP_RADIUS,          SPHERE_GEOMETRY);
    widthSegments  = numberFromIntegerArg(widthSegments,  PROP_WIDTH_SEGMENTS,  SPHERE_GEOMETRY);
    heightSegments = numberFromIntegerArg(heightSegments, PROP_HEIGHT_SEGMENTS, SPHERE_GEOMETRY);
    phiStart       = numberFromArg(phiStart,              PROP_PHI_START,       SPHERE_GEOMETRY);
    phiLength      = numberFromArg(phiLength,             PROP_PHI_LENGTH,      SPHERE_GEOMETRY);
    thetaStart     = numberFromArg(thetaStart,            PROP_THETA_START,     SPHERE_GEOMETRY);
    thetaLength    = numberFromArg(thetaLength,           PROP_THETA_LENGTH,    SPHERE_GEOMETRY);
    self.v = new THREE[SPHERE_GEOMETRY](radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
    self.tp$name = SPHERE_GEOMETRY;
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      case PROP_RADIUS: {
        return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
      }
      case PROP_WIDTH_SEGMENTS: {
        return Sk.builtin.assk$(self.v[PROP_WIDTH_SEGMENTS], Sk.builtin.nmber.int$);
      }
      case PROP_HEIGHT_SEGMENTS: {
        return Sk.builtin.assk$(self.v[PROP_HEIGHT_SEGMENTS], Sk.builtin.nmber.int$);
      }
      case PROP_PHI_START: {
        return Sk.builtin.assk$(self.v[PROP_PHI_START], Sk.builtin.nmber.float$);
      }
      case PROP_PHI_LENGTH: {
        return Sk.builtin.assk$(self.v[PROP_PHI_LENGTH], Sk.builtin.nmber.float$);
      }
      case PROP_THETA_START: {
        return Sk.builtin.assk$(self.v[PROP_THETA_START], Sk.builtin.nmber.float$);
      }
      case PROP_THETA_LENGTH: {
        return Sk.builtin.assk$(self.v[PROP_THETA_LENGTH], Sk.builtin.nmber.float$);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + SPHERE_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var sphere = self.v;
    var radius = sphere[PROP_RADIUS];
    var args = {};
    args[PROP_RADIUS] = radius;
    return Sk.ffi.stringToPy(SPHERE_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var sphere = self.v;
    var radius         = sphere[PROP_RADIUS];
    var widthSegments  = sphere[PROP_WIDTH_SEGMENTS];
    var heightSegments = sphere[PROP_HEIGHT_SEGMENTS];
    var phiStart       = sphere[PROP_PHI_START];
    var phiLength      = sphere[PROP_PHI_LENGTH];
    var thetaStart     = sphere[PROP_THETA_START];
    var thetaLength    = sphere[PROP_THETA_LENGTH];
    var args = [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength];
    return Sk.ffi.stringToPy(SPHERE_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, SPHERE_GEOMETRY, []);

mod[TETRAHEDRON_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_DETAIL = "detail";
  $loc.__init__ = Sk.ffi.functionPy(function(self, radius, detail) {
    radius = numberFromArg(radius,        PROP_RADIUS, TETRAHEDRON_GEOMETRY);
    detail = numberFromIntegerArg(detail, PROP_DETAIL, TETRAHEDRON_GEOMETRY);
    self.v = new THREE[TETRAHEDRON_GEOMETRY](radius, detail);
    self.v.radius = radius; // workaround for THREE not caching radius.
    self.v.detail = detail; // workaround for THREE not caching detail.
    self.tp$name = TETRAHEDRON_GEOMETRY;
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      case PROP_RADIUS: {
        return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
      }
      case PROP_DETAIL: {
        return Sk.builtin.assk$(self.v[PROP_DETAIL], Sk.builtin.nmber.int$);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + TETRAHEDRON_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var tetrahedron = self.v;
    var args = {};
    args[PROP_RADIUS] = tetrahedron[PROP_RADIUS];
    args[PROP_DETAIL] = tetrahedron[PROP_DETAIL];
    return Sk.ffi.stringToPy(TETRAHEDRON_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var tetrahedron = self.v;
    var radius = tetrahedron[PROP_RADIUS];
    var detail = tetrahedron[PROP_DETAIL];
    var args = [radius, detail];
    return Sk.ffi.stringToPy(TETRAHEDRON_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, TETRAHEDRON_GEOMETRY, []);

 mod[TEXT_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, text, parameters) {
    text = Sk.ffi.remapToJs(text);
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[TEXT_GEOMETRY](text, parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(TEXT_GEOMETRY);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + TEXT_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var text = Sk.ffi.remapToJs(self);
    var args = {};
    return Sk.ffi.stringToPy(TEXT_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var text = Sk.ffi.remapToJs(self);
    var args = [];
    return Sk.ffi.stringToPy(TEXT_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, TEXT_GEOMETRY, []);

 mod[TORUS_GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_TUBE             = "tube";
  var PROP_RADIAL_SEGMENTS  = "radialSegments";
  var PROP_TUBULAR_SEGMENTS = "tubularSegments";
  var PROP_ARC              = "arc";
  $loc.__init__ = Sk.ffi.functionPy(function(self, radius, tube, radialSegments, tubularSegments, arc) {
    radius = numberFromArg(radius,                          PROP_RADIUS,           TORUS_GEOMETRY);
    tube = numberFromArg(tube,                              PROP_TUBE,             TORUS_GEOMETRY);
    radialSegments = numberFromIntegerArg(radialSegments,   PROP_RADIAL_SEGMENTS,  TORUS_GEOMETRY);
    tubularSegments = numberFromIntegerArg(tubularSegments, PROP_TUBULAR_SEGMENTS, TORUS_GEOMETRY);
    arc = numberFromArg(arc,                                PROP_ARC,              TORUS_GEOMETRY);
    self.v = new THREE[TORUS_GEOMETRY](radius, tube, radialSegments, tubularSegments, arc);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      case PROP_RADIUS: {
        return Sk.builtin.assk$(self.v[PROP_RADIUS], Sk.builtin.nmber.float$);
      }
      case PROP_TUBE: {
        return Sk.builtin.assk$(self.v[PROP_TUBE], Sk.builtin.nmber.float$);
      }
      case PROP_RADIAL_SEGMENTS: {
        return Sk.builtin.assk$(self.v[PROP_RADIAL_SEGMENTS], Sk.builtin.nmber.int$);
      }
      case PROP_TUBULAR_SEGMENTS: {
        return Sk.builtin.assk$(self.v[PROP_TUBULAR_SEGMENTS], Sk.builtin.nmber.int$);
      }
      case PROP_ARC: {
        return Sk.builtin.assk$(self.v[PROP_ARC], Sk.builtin.nmber.float$);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + TORUS_GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    var torus = self.v;
    var args = {};
    args[PROP_RADIUS] = torus[PROP_RADIUS];
    args[PROP_TUBE]   = torus[PROP_TUBE];
    args[PROP_ARC]    = torus[PROP_ARC];
    return Sk.ffi.stringToPy(TORUS_GEOMETRY + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    var torus = self.v;
    var radius          = torus[PROP_RADIUS];
    var tube            = torus[PROP_TUBE];
    var radialSegments  = torus[PROP_RADIAL_SEGMENTS];
    var tubularSegments = torus[PROP_TUBULAR_SEGMENTS];
    var arc             = torus[PROP_ARC];
    var args = [radius, tube, radialSegments, tubularSegments, arc];
    return Sk.ffi.stringToPy(TORUS_GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, TORUS_GEOMETRY, []);

 mod[GEOMETRY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, geometryPy) {
    if (isDefined(geometryPy)) {
      self.v = Sk.ffi.remapToJs(geometryPy);
      self.tp$name = geometryPy.tp$name;
    }
    else {
      self.v = new THREE[GEOMETRY]();
      self.tp$name = GEOMETRY;
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(geometryPy, name) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(geometry[PROP_ID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(geometry[PROP_NAME]);
      }
      case PROP_VERTICES: {
        return verticesPy(geometry[PROP_VERTICES]);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(geometryPy, name, valuePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + GEOMETRY);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(geometryPy) {
    var geometry = Sk.ffi.remapToJs(geometryPy);
    if (isDefined(geometry)) {
      var args = {};
      return Sk.ffi.stringToPy(GEOMETRY + "(" + JSON.stringify(args) + ")");
    }
    else {
      return Sk.ffi.stringToPy("<type '" + GEOMETRY + "'>");
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(geometry) {
    geometry = Sk.ffi.remapToJs(geometry);
    var args = [];
    return Sk.ffi.stringToPy(GEOMETRY + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, GEOMETRY, []);

mod[OBJECT_3D] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self) {
    self.tp$name = OBJECT_3D;
    self.v = new THREE[OBJECT_3D]();
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(objPy, name) {
    var obj = Sk.ffi.remapToJs(objPy);
    switch(name) {
      case PROP_POSITION: {
        return vectorToEuclidean3Py(obj[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(obj[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(obj[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(obj[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(obj[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(obj[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return obj[PROP_USE_QUATERNION];
      }
      case METHOD_ADD: {
        return methodAdd(obj);
      }
      case METHOD_REMOVE: {
        return methodRemove(obj);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(obj, name, valuePy) {
    obj = Sk.ffi.remapToJs(obj);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(obj, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        obj[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          obj[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        obj[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Error(name + " is not an settable attribute of " + OBJECT_3D);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(obj) {
    obj = Sk.ffi.remapToJs(obj);
    if (isDefined(obj)) {
      var args = {};
      return Sk.ffi.stringToPy(OBJECT_3D + "(" + JSON.stringify(args) + ")");
    }
    else {
      return Sk.ffi.stringToPy("<type '" + OBJECT_3D + "'>");
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(obj) {
    obj = Sk.ffi.remapToJs(obj);
    var args = [];
    return Sk.ffi.stringToPy(OBJECT_3D + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, OBJECT_3D, []);

mod[AMBIENT_LIGHT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, color) {
    self.tp$name = AMBIENT_LIGHT;
    color = Sk.ffi.remapToJs(color);
    self.v = new THREE[AMBIENT_LIGHT](color);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(lightPy, name) {
    var light = Sk.ffi.remapToJs(lightPy);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR], COLOR));
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(lightPy, name, valuePy) {
    var light = Sk.ffi.remapToJs(lightPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_COLOR: {
        light[PROP_COLOR] = new THREE[COLOR](value);
      }
      break;
      default: {
        throw new Error(name + " is not an settable attribute of " + AMBIENT_LIGHT);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(light) {
    light = Sk.ffi.remapToJs(light);
    if (isDefined(light)) {
      var args = {};
      args[PROP_COLOR] = light[PROP_COLOR];
      return Sk.ffi.stringToPy(AMBIENT_LIGHT + "(" + JSON.stringify(args) + ")");
    }
    else {
      return Sk.ffi.stringToPy("<type '" + AMBIENT_LIGHT + "'>");
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(light) {
    light = Sk.ffi.remapToJs(light);
    var args = [light[PROP_COLOR]];
    return Sk.ffi.stringToPy(AMBIENT_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, AMBIENT_LIGHT, []);

mod[DIRECTIONAL_LIGHT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_INTENSITY = "intensity";
  $loc.__init__ = Sk.ffi.functionPy(function(self, color, intensity, distance) {
    self.tp$name = DIRECTIONAL_LIGHT;
    color = Sk.ffi.remapToJs(color);
    intensity = Sk.ffi.remapToJs(intensity);
    distance = Sk.ffi.remapToJs(distance);
    self.v = new THREE[DIRECTIONAL_LIGHT](color, intensity, distance);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(lightPy, name) {
    var light = Sk.ffi.remapToJs(lightPy);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR], COLOR));
      }
      case PROP_DISTANCE: {
        return Sk.ffi.numberToFloatPy(light[PROP_DISTANCE]);
      }
      case PROP_INTENSITY: {
        return Sk.ffi.numberToFloatPy(light[PROP_INTENSITY]);
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(light[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(light[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(light[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(light[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(light[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(light[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return light[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(lightPy);}
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(light, name, valuePy) {
    light = Sk.ffi.remapToJs(light);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_COLOR: {
        light[PROP_COLOR] = new THREE[COLOR](value);
      }
      break;
      case PROP_DISTANCE: {
        if (isNumber(value)) {
          light[PROP_DISTANCE] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_DISTANCE + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      case PROP_INTENSITY: {
        if (isNumber(value)) {
          light[PROP_INTENSITY] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_INTENSITY + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(light, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        light[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          light[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        light[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Error(name + " is not an settable attribute of " + DIRECTIONAL_LIGHT);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(light) {
    light = Sk.ffi.remapToJs(light);
    if (isDefined(light)) {
      var args = {};
      args[PROP_COLOR] = light[PROP_COLOR];
      args[PROP_INTENSITY] = light[PROP_INTENSITY];
      args[PROP_DISTANCE] = light[PROP_DISTANCE];
      return Sk.ffi.stringToPy(DIRECTIONAL_LIGHT + "(" + JSON.stringify(args) + ")");
    }
    else {
      return Sk.ffi.stringToPy("<type '" + DIRECTIONAL_LIGHT + "'>");
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(light) {
    light = Sk.ffi.remapToJs(light);
    var args = [light[PROP_COLOR], light[PROP_INTENSITY], light[PROP_DISTANCE]];
    return Sk.ffi.stringToPy(DIRECTIONAL_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, DIRECTIONAL_LIGHT, []);

mod[POINT_LIGHT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var PROP_INTENSITY = "intensity";
  $loc.__init__ = Sk.ffi.functionPy(function(self, color, intensity, distance) {
    self.tp$name = POINT_LIGHT;
    color = Sk.ffi.remapToJs(color);
    intensity = Sk.ffi.remapToJs(intensity);
    distance = Sk.ffi.remapToJs(distance);
    self.v = new THREE[POINT_LIGHT](color, intensity, distance);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(lightPy, name) {
    var light = Sk.ffi.remapToJs(lightPy);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(light[PROP_COLOR], COLOR));
      }
      case PROP_DISTANCE: {
        return Sk.ffi.numberToFloatPy(light[PROP_DISTANCE]);
      }
      case PROP_INTENSITY: {
        return Sk.ffi.numberToFloatPy(light[PROP_INTENSITY]);
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(light[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(light[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(light[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(light[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(light[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(light[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return light[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(lightPy);}
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(light, name, valuePy) {
    light = Sk.ffi.remapToJs(light);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_COLOR: {
        light[PROP_COLOR] = new THREE[COLOR](value);
      }
      break;
      case PROP_DISTANCE: {
        if (isNumber(value)) {
          light[PROP_DISTANCE] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_DISTANCE + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      case PROP_INTENSITY: {
        if (isNumber(value)) {
          light[PROP_INTENSITY] = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_INTENSITY + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(light, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        light[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          light[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        light[PROP_USE_QUATERNION] = value;
      }
      break;
      default: {
        throw new Error(name + " is not an settable attribute of " + POINT_LIGHT);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(light) {
    light = Sk.ffi.remapToJs(light);
    var args = {};
    args[PROP_COLOR] = light[PROP_COLOR];
    args[PROP_INTENSITY] = light[PROP_INTENSITY];
    args[PROP_DISTANCE] = light[PROP_DISTANCE];
    return Sk.ffi.stringToPy(POINT_LIGHT + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(light) {
    light = Sk.ffi.remapToJs(light);
    var args = [light[PROP_COLOR], light[PROP_INTENSITY], light[PROP_DISTANCE]];
    return Sk.ffi.stringToPy(POINT_LIGHT + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, POINT_LIGHT, []);

mod[LINE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, geometryPy, materialPy, typePy) {
    var geometry = Sk.ffi.remapToJs(geometryPy)
    var material = Sk.ffi.remapToJs(materialPy)
    var type = Sk.ffi.remapToJs(typePy)
    self.v = new THREE[LINE](geometry, material, type);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(linePy, name) {
    var line = Sk.ffi.remapToJs(linePy);
    switch(name) {
      case PROP_POSITION: {
        return vectorToEuclidean3Py(line[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(line[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(line[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(line[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(line[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(line[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return line[PROP_USE_QUATERNION];
      }
      case METHOD_LOOK_AT: {return methodLookAt(linePy);}
      case PROP_TYPE: {
        return Sk.ffi.numberToIntPy(line[PROP_TYPE]);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(linePy, name, value) {
    var line = Sk.ffi.remapToJs(linePy);
    value = Sk.ffi.remapToJs(value);
    switch(name) {
      case PROP_TYPE: {
        if (isNumber(value)) {
          line[PROP_TYPE] = value;
        }
        else {
          throw new Error(PROP_TYPE + " must be either LineStrip or LinePieces");
        }
      }
      break;
      default: {
        throw new Error(name + " is not an attribute of " + LINE);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(LINE);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(self) {
    return Sk.ffi.stringToPy(LINE);
  });
}, LINE, []);

mod[LINE_BASIC_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = LINE_BASIC_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[LINE_BASIC_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(material, name) {
    material = Sk.ffi.remapToJs(material);
    switch(name) {
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR], COLOR));
      }
      case PROP_OPACITY: {
        return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(material, name, value) {
    material = Sk.ffi.remapToJs(material);
    value = Sk.ffi.remapToJs(value);
    switch(name) {
      case PROP_COLOR: {
        if (isColor(value)) {
          material.color = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type '" + COLOR + "'>.");
        }
      }
      break;
      case PROP_OPACITY: {
        if (isNumber(value)) {
          material.opacity = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      default: {
        throw new Error(name + " is not an attribute of " + LINE_BASIC_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    args[PROP_COLOR] = material[PROP_COLOR];
    args[PROP_OPACITY] = material[PROP_OPACITY];
    return Sk.ffi.stringToPy(LINE_BASIC_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = [{}];
    return Sk.ffi.stringToPy(LINE_BASIC_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, LINE_BASIC_MATERIAL, []);

mod[MESH] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, geometryPy, materialPy) {
    Sk.ffi.checkMethodArgs(MESH, arguments, 1, 2);
    Sk.ffi.checkArgType(PROP_GEOMETRY, GEOMETRY, Sk.ffi.isClass(geometryPy), geometryPy); // TODO GEOMETRIES
    var custom = {};
    custom[PROP_GEOMETRY] = Sk.ffi.typeName(geometryPy);
    Sk.ffi.referenceToPy(new THREE[MESH](Sk.ffi.remapToJs(geometryPy), Sk.ffi.remapToJs(materialPy)), MESH, custom, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(meshPy, name) {
    var mesh = Sk.ffi.remapToJs(meshPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(mesh[PROP_ID]);
      }
      case PROP_GEOMETRY: {
        var geometry = mesh[PROP_GEOMETRY];
        var className = meshPy.custom[PROP_GEOMETRY];
        return Sk.ffi.callsim(mod[className], Sk.ffi.referenceToPy(geometry, className));
      }
      case PROP_MATRIX_AUTO_UPDATE: {
        return mesh[PROP_MATRIX_AUTO_UPDATE];
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(mesh[PROP_NAME]);
      }
      case PROP_OVERDRAW: {
        if (isBoolean(mesh[PROP_OVERDRAW])) {
          return mesh[PROP_OVERDRAW];
        }
        else {
          return null;
        }
      }
      case PROP_POSITION: {
        return vectorToEuclidean3Py(mesh[PROP_POSITION]);
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(mesh[PROP_QUATERNION], QUATERNION));
      }
      case PROP_ROTATION: {
        return vectorToEuclidean3Py(mesh[PROP_ROTATION]);
      }
      case PROP_EULER_ORDER: {
        return Sk.ffi.stringToPy(mesh[PROP_EULER_ORDER]);
      }
      case PROP_SCALE: {
        return vectorToEuclidean3Py(mesh[PROP_SCALE]);
      }
      case PROP_UP: {
        return vectorToEuclidean3Py(mesh[PROP_UP]);
      }
      case PROP_USE_QUATERNION: {
        return mesh[PROP_USE_QUATERNION];
      }
      case PROP_VISIBLE: {
        return mesh[PROP_VISIBLE];
      }
      case METHOD_LOOK_AT: {return methodLookAt(meshPy);}
      case METHOD_ROTATE_ON_AXIS: {
        return Sk.ffi.callableToPy(mod, METHOD_ROTATE_ON_AXIS, function(methodPy, axisPy, anglePy) {
          Sk.ffi.checkMethodArgs(METHOD_ROTATE_ON_AXIS, arguments, 2, 2);
          Sk.ffi.checkArgType(ARG_AXIS, VECTOR_3, isVector3Py(axisPy), axisPy);
          Sk.ffi.checkArgType("angle", NUMBER, Sk.ffi.isNumber(anglePy), anglePy);
          mesh[METHOD_ROTATE_ON_AXIS](Sk.ffi.remapToJs(axisPy), Sk.ffi.remapToJs(anglePy));
          return meshPy;
        });
      }
      case METHOD_ROTATE_X:
      case METHOD_ROTATE_Y:
      case METHOD_ROTATE_Z: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, axisPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_AXIS, NUMBER, Sk.ffi.isNumber(axisPy), axisPy);
          mesh[name](Sk.ffi.remapToJs(axisPy));
          return meshPy;
        });
      }
      case METHOD_SET_GEOMETRY: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_SET_GEOMETRY;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, geometryPy) {
            var geometry = Sk.ffi.remapToJs(geometryPy);
            mesh[METHOD_SET_GEOMETRY](geometry);
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_GEOMETRY)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_SET_GEOMETRY)
          })
        }, METHOD_SET_GEOMETRY, []));
      }
      case METHOD_TRANSLATE_ON_AXIS: {
        return Sk.ffi.callableToPy(mod, METHOD_TRANSLATE_ON_AXIS, function(methodPy, axisPy, distancePy) {
          Sk.ffi.checkMethodArgs(METHOD_TRANSLATE_ON_AXIS, arguments, 2, 2);
          Sk.ffi.checkArgType(ARG_AXIS, VECTOR_3, isVector3Py(axisPy), axisPy);
          Sk.ffi.checkArgType(PROP_DISTANCE, NUMBER, Sk.ffi.isNumber(distancePy), distancePy);
          mesh[METHOD_TRANSLATE_ON_AXIS](Sk.ffi.remapToJs(axisPy), Sk.ffi.remapToJs(distancePy));
          return meshPy;
        });
      }
      case METHOD_TRANSLATE_X:
      case METHOD_TRANSLATE_Y:
      case METHOD_TRANSLATE_Z: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, distancePy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_DISTANCE, NUMBER, Sk.ffi.isNumber(distancePy), distancePy);
          mesh[name](Sk.ffi.remapToJs(distancePy));
          return meshPy;
        });
      }
      case METHOD_UPDATE_MATRIX: {
        return Sk.ffi.callableToPy(mod, METHOD_UPDATE_MATRIX, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_UPDATE_MATRIX, arguments, 0, 0);
          mesh[METHOD_UPDATE_MATRIX]();
        });
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(meshPy, name, valuePy) {
    var mesh = Sk.ffi.remapToJs(meshPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_MATRIX_AUTO_UPDATE: {
        mesh[PROP_MATRIX_AUTO_UPDATE] = checkArgBool(PROP_MATRIX_AUTO_UPDATE, valuePy);
      }
      break;
      case PROP_NAME: {
        Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(valuePy), valuePy);
        mesh[PROP_NAME] = value;
      }
      break;
      case PROP_OVERDRAW: {
        if (isBoolean(value)) {
          mesh[PROP_OVERDRAW] = value;
        }
        else if (isNull(value)) {
          mesh[PROP_OVERDRAW] = null;
        }
        else {
          throw new Error(name + " must be either Boolean or None");
        }
      }
      break;
      case PROP_POSITION:
      case PROP_ROTATION:
      case PROP_SCALE:
      case PROP_UP: {
        setVectorProperty(mesh, name, valuePy);
      }
      break;
      case PROP_QUATERNION: {
        mesh[PROP_QUATERNION] = value;
      }
      break;
      case PROP_EULER_ORDER: {
        if (isString(value)) {
          mesh[PROP_EULER_ORDER] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_USE_QUATERNION: {
        mesh[PROP_USE_QUATERNION] = value;
      }
      break;
      case PROP_VISIBLE: {
        Sk.ffi.checkArgType(PROP_VISIBLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(valuePy), valuePy);
        mesh[PROP_VISIBLE] = value;
      }
      break;
      default: {
        throw new Sk.builtin.AssertionError(name + " is not an attribute of " + MESH);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(mesh) {
    mesh = Sk.ffi.remapToJs(mesh);
    var args = {};
    args[PROP_ID] = mesh[PROP_ID];
    args[PROP_NAME] = mesh[PROP_NAME];
    return Sk.ffi.stringToPy(MESH + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(mesh) {
    mesh = Sk.ffi.remapToJs(mesh);
    var args = [/*mesh[PROP_GEOMETRY], mesh[PROP_MATERIAL]*/];
    return Sk.ffi.stringToPy(MESH + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH, []);

mod[MESH_BASIC_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = MESH_BASIC_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[MESH_BASIC_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(materialPy, name) {
    var material = Sk.ffi.remapToJs(materialPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(material[PROP_ID]);
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(material[PROP_NAME]);
      }
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR], COLOR));
      }
      case PROP_NEEDS_UPDATE: {
        return material[PROP_NEEDS_UPDATE];
      }
      case PROP_OPACITY: {
        return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
      }
      case PROP_OVERDRAW: {
        return material[PROP_OVERDRAW];
      }
      case PROP_TRANSPARENT: {
        return material[PROP_TRANSPARENT];
      }
      case PROP_WIREFRAME: {
        return material[PROP_WIREFRAME];
      }
      case PROP_WIREFRAME_LINEWIDTH: {
        return Sk.ffi.numberToFloatPy(material[PROP_WIREFRAME_LINEWIDTH]);
      }
      case PROP_VISIBLE: {
        return material[PROP_VISIBLE];
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_COLOR: {
        material[PROP_COLOR] = new THREE[COLOR](value);
      }
      break;
      case PROP_NAME: {
        if (isString(value)) {
          material[PROP_NAME] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_NEEDS_UPDATE: {
        if (isBoolean(value)) {
          material[PROP_NEEDS_UPDATE] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_OPACITY: {
        if (isNumber(value)) {
          material.opacity = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      case PROP_OVERDRAW: {
        if (isBoolean(value)) {
          material[PROP_OVERDRAW] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_TRANSPARENT: {
        if (isBoolean(value)) {
          material[PROP_TRANSPARENT] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_WIREFRAME: {
        if (isBoolean(value)) {
          material[PROP_WIREFRAME] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_WIREFRAME_LINEWIDTH: {
        if (isNumber(value)) {
          material[PROP_WIREFRAME_LINEWIDTH] = value;
        }
        else {
          throw new Error(name + " must be a number");
        }
      }
      break;
      case PROP_VISIBLE: {
        if (isBoolean(value)) {
          material[PROP_VISIBLE] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      default: {
        throw new Error(name + " is not an attribute of " + MESH_BASIC_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(materialPy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var args = {};
    args[PROP_COLOR] = material[PROP_COLOR];
    args[PROP_WIREFRAME] = material[PROP_WIREFRAME];
    args[PROP_WIREFRAME_LINEWIDTH] = material[PROP_WIREFRAME_LINEWIDTH];
    return Sk.ffi.stringToPy(MESH_BASIC_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var parameters = {};
    parameters[PROP_COLOR] = material[PROP_COLOR];
    parameters[PROP_WIREFRAME] = material[PROP_WIREFRAME];
    parameters[PROP_WIREFRAME_LINEWIDTH] = material[PROP_WIREFRAME_LINEWIDTH];
    var args = [parameters];
    return Sk.ffi.stringToPy(MESH_BASIC_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_BASIC_MATERIAL, []);

mod[MESH_LAMBERT_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parametersPy) {
    Sk.ffi.checkMethodArgs(MESH_LAMBERT_MATERIAL, arguments, 0, 1);
    var parameters = Sk.ffi.remapToJs(parametersPy);
    Sk.ffi.referenceToPy(new THREE[MESH_LAMBERT_MATERIAL](parameters), MESH_LAMBERT_MATERIAL, undefined, self);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(materialPy, name) {
    var material = Sk.ffi.remapToJs(materialPy);
    switch(name) {
      case PROP_ID: {
        return Sk.ffi.numberToIntPy(material[PROP_ID]);
      }
      case PROP_COLOR: {
        return Sk.ffi.callsim(mod[COLOR], Sk.ffi.referenceToPy(material[PROP_COLOR], COLOR));
      }
      case PROP_NAME: {
        return Sk.ffi.stringToPy(material[PROP_NAME]);
      }
      case PROP_NEEDS_UPDATE: {
        return material[PROP_NEEDS_UPDATE];
      }
      case PROP_OPACITY: {
        return Sk.ffi.numberToFloatPy(material[PROP_OPACITY]);
      }
      case PROP_OVERDRAW: {
        return material[PROP_OVERDRAW];
      }
      case PROP_TRANSPARENT: {
        return material[PROP_TRANSPARENT];
      }
      case PROP_VISIBLE: {
        return material[PROP_VISIBLE];
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_COLOR: {
        material[PROP_COLOR] = new THREE[COLOR](value);
      }
      break;
      case PROP_NAME: {
        if (isString(value)) {
          material[PROP_NAME] = value;
        }
        else {
          throw new Error(name + " must be a string");
        }
      }
      break;
      case PROP_NEEDS_UPDATE: {
        if (isBoolean(value)) {
          material[PROP_NEEDS_UPDATE] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_OPACITY: {
        if (isNumber(value)) {
          material.opacity = value;
        }
        else {
          throw new Sk.builtin.TypeError("'" + PROP_OPACITY + "' attribute must be a <type 'float'>.");
        }
      }
      break;
      case PROP_OVERDRAW: {
        if (isBoolean(value)) {
          material[PROP_OVERDRAW] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_TRANSPARENT: {
        if (isBoolean(value)) {
          material[PROP_TRANSPARENT] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_WIREFRAME: {
        if (isBoolean(value)) {
          material[PROP_WIREFRAME] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      case PROP_WIREFRAME_LINEWIDTH: {
        if (isNumber(value)) {
          material[PROP_WIREFRAME_LINEWIDTH] = value;
        }
        else {
          throw new Error(name + " must be a number");
        }
      }
      break;
      case PROP_VISIBLE: {
        if (isBoolean(value)) {
          material[PROP_VISIBLE] = value;
        }
        else {
          throw new Error(name + " must be Boolean");
        }
      }
      break;
      default: {
        throw new Error(name + " is not an attribute of " + MESH_LAMBERT_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    return Sk.ffi.stringToPy(MESH_LAMBERT_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var parameters = {};
    parameters[PROP_COLOR] = material[PROP_COLOR];
    var args = [parameters];
    return Sk.ffi.stringToPy(MESH_LAMBERT_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_LAMBERT_MATERIAL, []);

mod[MESH_NORMAL_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = MESH_NORMAL_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[MESH_NORMAL_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + MESH_NORMAL_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    return Sk.ffi.stringToPy(MESH_NORMAL_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = [{}];
    return Sk.ffi.stringToPy(MESH_NORMAL_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_NORMAL_MATERIAL, []);

mod[MESH_PHONG_MATERIAL] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(self, parameters) {
    self.tp$name = MESH_PHONG_MATERIAL;
    parameters = Sk.ffi.remapToJs(parameters);
    self.v = new THREE[MESH_PHONG_MATERIAL](parameters);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(self, name) {
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + MESH_PHONG_MATERIAL);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(materialPy, name, valuePy) {
    var material = Sk.ffi.remapToJs(materialPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      default: {
        throw new Error(name + " is not an attribute of " + MESH_PHONG_MATERIAL);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = {};
    return Sk.ffi.stringToPy(MESH_PHONG_MATERIAL + "(" + JSON.stringify(args) + ")");
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(material) {
    material = Sk.ffi.remapToJs(material);
    var args = [{}];
    return Sk.ffi.stringToPy(MESH_PHONG_MATERIAL + "(" + args.map(function(x) {return JSON.stringify(x);}).join(", ") + ")");
  });
}, MESH_PHONG_MATERIAL, []);

if (typeof THREE !== 'undefined') {
  mod.LineStrip  = Sk.builtin.assk$(THREE.LineStrip,  Sk.builtin.nmber.int$);
  mod.LinePieces = Sk.builtin.assk$(THREE.LinePieces, Sk.builtin.nmber.int$);

  mod.FlatShading   = Sk.builtin.assk$(THREE.FlatShading,   Sk.builtin.nmber.int$);
  mod.NoShading     = Sk.builtin.assk$(THREE.NoShading,     Sk.builtin.nmber.int$);
  mod.SmoothShading = Sk.builtin.assk$(THREE.SmoothShading, Sk.builtin.nmber.int$);
}
};
}).call(this);
