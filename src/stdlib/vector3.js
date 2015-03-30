(function() {
/**
 * @param {Array.<number>} coordinates
 * @param {Array.<string>} labels
 * @return {string}
 */
var stringFromCoordinates = function(coordinates, labels) {
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
};
/**
 * @const
 * @type {string}
 */
var VECTOR_3                   = "Vector3";
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
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUMBER                     = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {Sk.ffi.PyType}
 */
var INT                        = Sk.ffi.PyType.INT;
/**
 * @const
 * @type {string}
 */
var EULER                      = "Euler";
/**
 * @const
 * @type {string}
 */
var QUATERNION                 = "Quaternion";
/**
 * @const
 * @type {string}
 */
var METHOD_APPLY_EULER         = "applyEuler";
/**
 * @const
 * @type {string}
 */
var METHOD_APPLY_QUATERNION    = "applyQuaternion";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE               = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_COMPONENT       = "getComponent";
/**
 * @const
 * @type {string}
 */
var METHOD_MAGNITUDE           = "magnitude";
/**
 * @const
 * @type {string}
 */
var METHOD_NORMALIZE           = "normalize";
/**
 * @const
 * @type {string}
 */
var METHOD_SET                 = "set";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_COMPONENT       = "setComponent";
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
var OP_ADD                     = "add";
/**
 * @const
 * @type {string}
 */
var OP_SUB                     = "subtract";
/**
 * @const
 * @type {string}
 */
var OP_MUL                     = "multiply";
/**
 * @const
 * @type {string}
 */
var OP_DIV                     = "divide";
/**
 * @const
 * @type {string}
 */
var OP_EQ                      = "equal";

Sk.builtin.defineVector3 = function(mod, THREE) {
  Sk.ffi.checkFunctionArgs("defineVector3", arguments, 2, 2);
  /**
   * @param {Object} valuePy
   * @return {boolean} true if the thing is an Euler rotation, otherwise false.
   */
  var isEulerPy = function(valuePy) {return Sk.ffi.isInstance(valuePy, EULER);};
  /**
   * @param {Object} valuePy
   * @return {boolean} true if the thing is a quaternion, otherwise false.
   */
  var isQuaternionPy = function(valuePy) {return Sk.ffi.isInstance(valuePy, QUATERNION);};
  /**
   * @param {Object} valuePy
   * @return {boolean} true if the thing is a vector, otherwise false.
   */
  var isVector3Py = function(valuePy) {return Sk.ffi.isInstance(valuePy, VECTOR_3);};
  /**
   * @param {number} x The x-coordinate of the vector.
   * @param {number} y The y-coordinate of the vector.
   * @param {number} z The z-coordinate of the vector.
   */
  var xyzJsToVector3Py = function(x, y, z) {
    return Sk.ffi.callsim(mod[VECTOR_3], Sk.ffi.numberToFloatPy(x), Sk.ffi.numberToFloatPy(y), Sk.ffi.numberToFloatPy(z));
  };
  mod[VECTOR_3] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy, x, y, z) {
      Sk.ffi.checkMethodArgs(VECTOR_3, arguments, 0, 4);
      if (Sk.ffi.isUndefined(x) && Sk.ffi.isUndefined(y) && Sk.ffi.isUndefined(z)) {
        Sk.ffi.referenceToPy(new THREE[VECTOR_3](), VECTOR_3, undefined, selfPy);
      }
      else {
        switch(Sk.ffi.getType(x)) {
          case Sk.ffi.PyType.INSTANCE: {
            Sk.ffi.checkMethodArgs(VECTOR_3, arguments, 1, 1);
            Sk.ffi.checkArgType(PROP_X, VECTOR_3, isVector3Py(x), x);
            Sk.ffi.referenceToPy(Sk.ffi.remapToJs(x), VECTOR_3, undefined, selfPy);
          }
          break;
          case Sk.ffi.PyType.FLOAT:
          case Sk.ffi.PyType.INT:
          case Sk.ffi.PyType.LONG: {
            Sk.ffi.checkMethodArgs(VECTOR_3, arguments, 3, 3);
            Sk.ffi.checkArgType(PROP_X, NUMBER, Sk.ffi.isNum(x), x);
            Sk.ffi.checkArgType(PROP_Y, NUMBER, Sk.ffi.isNum(y), y);
            Sk.ffi.checkArgType(PROP_Z, NUMBER, Sk.ffi.isNum(z), z);
            Sk.ffi.referenceToPy(new THREE[VECTOR_3](Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y), Sk.ffi.remapToJs(z)), VECTOR_3, undefined, selfPy);
          }
          break
          default: {
            Sk.ffi.checkArgType(PROP_X, [NUMBER, VECTOR_3], false, x);
          }
        }
      }
    });
    $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_ADD, VECTOR_3, isVector3Py(selfPy), selfPy);
      Sk.ffi.checkRhsOperandType(OP_ADD, VECTOR_3, isVector3Py(otherPy), otherPy);
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var x = a.x + b.x;
      var y = a.y + b.y;
      var z = a.z + b.z;
      return xyzJsToVector3Py(x, y, z);
    });
    $loc.__iadd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_ADD, VECTOR_3, isVector3Py(selfPy), selfPy);
      Sk.ffi.checkRhsOperandType(OP_ADD, VECTOR_3, isVector3Py(otherPy), otherPy);
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      a.x += b.x;
      a.y += b.y;
      a.z += b.z;
      return selfPy;
    });
    $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_SUB, VECTOR_3, isVector3Py(selfPy), selfPy);
      Sk.ffi.checkRhsOperandType(OP_SUB, VECTOR_3, isVector3Py(otherPy), otherPy);
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var x = a.x - b.x;
      var y = a.y - b.y;
      var z = a.z - b.z;
      return xyzJsToVector3Py(x, y, z);
    });
    $loc.__isub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_ADD, VECTOR_3, isVector3Py(selfPy), selfPy);
      Sk.ffi.checkRhsOperandType(OP_ADD, VECTOR_3, isVector3Py(otherPy), otherPy);
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      a.x -= b.x;
      a.y -= b.y;
      a.z -= b.z;
      return selfPy;
    });
    $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_MUL, VECTOR_3, isVector3Py(selfPy), selfPy);
      Sk.ffi.checkRhsOperandType(OP_MUL, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var x = a.x * b;
      var y = a.y * b;
      var z = a.z * b;
      return xyzJsToVector3Py(x, y, z);
    });
    $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_MUL, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
      Sk.ffi.checkRhsOperandType(OP_MUL, VECTOR_3, isVector3Py(selfPy), selfPy);
      var a = Sk.ffi.remapToJs(otherPy);
      var b = Sk.ffi.remapToJs(selfPy);
      var x = a * b.x;
      var y = a * b.y;
      var z = a * b.z;
      return xyzJsToVector3Py(x, y, z);
    });
    $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_DIV, VECTOR_3, isVector3Py(selfPy), selfPy);
      Sk.ffi.checkRhsOperandType(OP_DIV, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      var x = a.x / b;
      var y = a.y / b;
      var z = a.z / b;
      return xyzJsToVector3Py(x, y, z);
    });
    $loc.__rdiv__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      Sk.ffi.checkLhsOperandType(OP_DIV, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
      Sk.ffi.checkRhsOperandType(OP_DIV, VECTOR_3, isVector3Py(selfPy), selfPy);
      var a = Sk.ffi.remapToJs(otherPy);
      var b = Sk.ffi.remapToJs(selfPy);
      var x = b.x / a;
      var y = b.y / a;
      var z = b.z / a;
      return xyzJsToVector3Py(x, y, z);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(vectorPy, name) {
      var vector = Sk.ffi.remapToJs(vectorPy);
      switch(name) {
        case PROP_X:
        case PROP_Y:
        case PROP_Z: {
          return Sk.ffi.numberToFloatPy(vector[name]);
        }
        case METHOD_APPLY_EULER:
        {
          return Sk.ffi.callableToPy(mod, METHOD_APPLY_EULER, function(methodPy, eulerPy) {
            Sk.ffi.checkMethodArgs(METHOD_APPLY_EULER, arguments, 1, 1);
            Sk.ffi.checkArgType("euler", EULER, isEulerPy(eulerPy), eulerPy);
            vector[METHOD_APPLY_EULER](Sk.ffi.remapToJs(eulerPy));
            return vectorPy;
          });
        }
        case METHOD_APPLY_QUATERNION:
        {
          return Sk.ffi.callableToPy(mod, METHOD_APPLY_QUATERNION, function(methodPy, qPy) {
            Sk.ffi.checkMethodArgs(METHOD_APPLY_QUATERNION, arguments, 1, 1);
            Sk.ffi.checkArgType("q", QUATERNION, isQuaternionPy(qPy), qPy);
            vector[METHOD_APPLY_QUATERNION](Sk.ffi.remapToJs(qPy));
            return vectorPy;
          });
        }
        case METHOD_CLONE: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_CLONE;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self) {
              return xyzJsToVector3Py(vector.x, vector.y, vector.z);
            });
          }, METHOD_CLONE, []));
        }
        case METHOD_GET_COMPONENT: {
          return Sk.ffi.callableToPy(mod, METHOD_GET_COMPONENT, function(methodPy, indexPy) {
            Sk.ffi.checkMethodArgs(METHOD_GET_COMPONENT, arguments, 1, 1);
            Sk.ffi.checkArgType("index", INT, Sk.ffi.isNum(indexPy), indexPy);
            return Sk.ffi.numberToFloatPy(vector[METHOD_GET_COMPONENT](Sk.ffi.remapToJs(indexPy)));
          });
        }
        case METHOD_MAGNITUDE: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_MAGNITUDE;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self) {
              return Sk.ffi.numberToFloatPy(vector.length());
            });
          }, METHOD_MAGNITUDE, []));
        }
        case METHOD_NORMALIZE: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_NORMALIZE;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self) {
              Sk.ffi.checkMethodArgs(VECTOR_3, arguments, 0, 0);
              vector[METHOD_NORMALIZE]();
              return vectorPy;
            });
          }, METHOD_NORMALIZE, []));
        }
        case METHOD_SET: {
          return Sk.ffi.callableToPy(mod, METHOD_SET, function(methodPy, x, y, z) {
            Sk.ffi.checkMethodArgs(METHOD_SET, arguments, 3, 3);
            Sk.ffi.checkArgType(PROP_X, NUMBER, Sk.ffi.isNum(x), x);
            Sk.ffi.checkArgType(PROP_Y, NUMBER, Sk.ffi.isNum(y), y);
            Sk.ffi.checkArgType(PROP_Z, NUMBER, Sk.ffi.isNum(z), z);
            x  = Sk.ffi.remapToJs(x);
            y  = Sk.ffi.remapToJs(y);
            z  = Sk.ffi.remapToJs(z);
            vector.set(x, y, z);
            return vectorPy;
          });
        }
        case METHOD_SET_COMPONENT: {
          return Sk.ffi.callableToPy(mod, METHOD_SET_COMPONENT, function(methodPy, indexPy, valuePy) {
            Sk.ffi.checkMethodArgs(METHOD_SET_COMPONENT, arguments, 2, 2);
            Sk.ffi.checkArgType("index", INT, Sk.ffi.isInt(indexPy), indexPy);
            Sk.ffi.checkArgType("value", NUMBER, Sk.ffi.isNum(valuePy), valuePy);
            var index = Sk.ffi.remapToJs(indexPy);
            var value = Sk.ffi.remapToJs(valuePy);
            vector[METHOD_SET_COMPONENT](index, value);
            return vectorPy;
          });
        }
        case METHOD_SET_X:
        case METHOD_SET_Y:
        case METHOD_SET_Z: {
          return Sk.ffi.callableToPy(mod, name, function(methodPy, valuePy) {
            Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
            Sk.ffi.checkArgType("value", NUMBER, Sk.ffi.isNum(valuePy), valuePy);
            vector[name](Sk.ffi.remapToJs(valuePy));
            return vectorPy;
          });
        }
        default: {
          throw Sk.ffi.err.attribute(name).isNotGetableOnType(VECTOR_3);
        }
      }
    });
    $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
      switch(name) {
        case PROP_X:
        case PROP_Y:
        case PROP_Z: {
          Sk.ffi.checkArgType(name, NUMBER, Sk.ffi.isNum(valuePy), valuePy);
          var vector = Sk.ffi.remapToJs(selfPy);
          vector[name] = Sk.ffi.remapToJs(valuePy);
        }
        break;
        default: {
          throw Sk.ffi.err.attribute(name).isNotSetableOnType(VECTOR_3);
        }
      }
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
      var vector = Sk.ffi.remapToJs(selfPy);
      var args = [vector.x, vector.y, vector.z];
      return Sk.builtin.stringToPy(VECTOR_3 + "(" + args.join(", ") + ")");
    });
    $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
      var vector = Sk.ffi.remapToJs(selfPy);
      return Sk.builtin.stringToPy(stringFromCoordinates([vector.x, vector.y, vector.z], ["i", "j", "k"]));
    });
  }, VECTOR_3, []);
};
}).call(this);
