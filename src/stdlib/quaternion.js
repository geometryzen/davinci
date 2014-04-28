(function() {
Sk.builtin.defineQuaternion = function(mod, THREE) {
Sk.ffi.checkFunctionArgs("defineQuaternion", arguments, 2, 2);
/**
* @const
* @type {string}
*/
var QUATERNION                 = "Quaternion";
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
var PROP_W                     = "w";
/**
* @const
* @type {!Array.<Sk.ffi.PyType>}
*/
var NUMBER                     = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {string}
 */
var OP_ADD                     = "+";
/**
 * @const
 * @type {string}
 */
var OP_SUB                     = "-";
/**
 * @const
 * @type {string}
 */
var OP_MUL                     = "*";
/**
 * @const
 * @type {string}
 */
var OP_DIV                     = "/";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE               = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_CONJUGATE           = "conjugate";
/**
 * @const
 * @type {string}
 */
var METHOD_COPY                = "copy";
/**
 * @const
 * @type {string}
 */
var METHOD_INVERSE             = "inverse";
/**
 * @const
 * @type {string}
 */
var METHOD_MAGNITUDE           = "magnitude";
/**
 * @const
 * @type {string}
 */
var METHOD_QUADRANCE           = "quadrance";
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
var METHOD_SET_FROM_AXIS_ANGLE = "setFromAxisAngle";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_FROM_EULER      = "setFromEuler";
/**
 * @const
 * @type {string}
 */
var ARG_OTHER                  = "other";
/**
 * @param {Object} valuePy
 * @return {boolean}
 */
function isQuaternionPy(valuePy) {return Sk.ffi.isInstance(valuePy, QUATERNION);};
/**
 * @param {!Array.<number>} coordinates
 * @param {!Array.<string>} labels
 * @param {string=} multiplier
 */
function stringFromCoordinates(coordinates, labels, multiplier) {
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
          sb.push(multiplier);
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
 * @param {number} w
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {!Object}
 */
function wxyzToPy(w, x, y, z) {
  // The arguments to Quaternion in Python are in the order x, y, z, w!
  return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.numberToFloatPy(x), Sk.ffi.numberToFloatPy(y), Sk.ffi.numberToFloatPy(z), Sk.ffi.numberToFloatPy(w));
}
/**
 *
 */
mod[QUATERNION] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, xPy, yPy, zPy, wPy) {
    if (isQuaternionPy(xPy)) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(xPy), QUATERNION, undefined, selfPy);
    }
    else {
      var x = Sk.ffi.remapToJs(xPy);
      var y = Sk.ffi.remapToJs(yPy);
      var z = Sk.ffi.remapToJs(zPy);
      var w = Sk.ffi.remapToJs(wPy);
      Sk.ffi.referenceToPy(new THREE[QUATERNION](x, y, z, w), QUATERNION, undefined, selfPy);
    }
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      return wxyzToPy(a.w + b, a.x, a.y, a.z);
    }
    else {
      var w = a.w + b.w;
      var x = a.x + b.x;
      var y = a.y + b.y;
      var z = a.z + b.z;
      return wxyzToPy(w, x, y, z);
    }
  });
  $loc.__radd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(otherPy);
    var b = Sk.ffi.remapToJs(selfPy);
    if (Sk.ffi.isNum(otherPy)) {
      return wxyzToPy(a + b.w, b.x, b.y, b.z);
    }
    else {
      throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_ADD).mustHaveType(QUATERNION);
    }
  });
  $loc.__iadd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      self.w += other;
    }
    else {
      self.w += other.w;
      self.x += other.x;
      self.y += other.y;
      self.z += other.z;
    }
    return selfPy;
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      return wxyzToPy(a.w - b, a.x, a.y, a.z);
    }
    else {
      var w = a.w - b.w;
      var x = a.x - b.x;
      var y = a.y - b.y;
      var z = a.z - b.z;
      return wxyzToPy(w, x, y, z);
    }
  });
  $loc.__rsub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(otherPy);
    var b = Sk.ffi.remapToJs(selfPy);
    if (Sk.ffi.isNum(otherPy)) {
      return wxyzToPy(a - b.w, -b.x, -b.y, -b.z);
    }
    else {
      throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_SUB).mustHaveType(QUATERNION);
    }
  });
  $loc.__isub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      self.w -= other;
    }
    else {
      self.w -= other.w;
      self.x -= other.x;
      self.y -= other.y;
      self.z -= other.z;
    }
    return selfPy;
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      return wxyzToPy(a.w * b, a.x * b, a.y * b, a.z * b);
    }
    else {
      var ab = new THREE[QUATERNION](0, 0, 0, 1)['multiplyQuaternions'](a, b);
      return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(ab, QUATERNION));
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(otherPy);
    var b = Sk.ffi.remapToJs(selfPy);
    if (Sk.ffi.isNum(otherPy)) {
      return wxyzToPy(a * b.w, a * b.x, a * b.y, a * b.z);
    }
    else {
      throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_MUL).mustHaveType(QUATERNION);
    }
  });
  $loc.__imul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    var a0 = a.w;
    var a1 = a.x;
    var a2 = a.y;
    var a3 = a.z;
    var b0, b1, b2, b3, b4, b5, b6, b7;
    if (Sk.ffi.isNum(otherPy)) {
      a.w *= b;
      a.x *= b;
      a.y *= b;
      a.z *= b;
    }
    else {
      a.multiply(b);
    }
    return selfPy;
  });
  $loc.nb$positive = function() {
    return this;
  };
  $loc.nu$negative = function() {
    var q = Sk.ffi.remapToJs(this);
    return wxyzToPy(-q.w, -q.x, -q.y, -q.z);
  };
  $loc.__eq__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    if (isQuaternionPy(otherPy)) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.booleanToPy(a.w === b.w && a.x === b.x && a.y === b.y && a.z === b.z);
    }
    else {
      return Sk.ffi.bool.False;
    }
  });
  $loc.__ne__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    if (isQuaternionPy(otherPy)) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.booleanToPy(a.w !== b.w || a.x !== b.x || a.y !== b.y || a.z !== b.z);
    }
    else {
      return Sk.ffi.bool.True;
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(quaternionPy, name) {
    var quaternion = Sk.ffi.remapToJs(quaternionPy);
    switch(name) {
      case PROP_X: {
        return Sk.ffi.numberToFloatPy(quaternion.x);
      }
      case PROP_Y: {
        return Sk.ffi.numberToFloatPy(quaternion.y);
      }
      case PROP_Z: {
        return Sk.ffi.numberToFloatPy(quaternion.z);
      }
      case PROP_W: {
        return Sk.ffi.numberToFloatPy(quaternion.w);
      }
      case METHOD_COPY: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_COPY, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy, qPy) {
            Sk.ffi.checkMethodArgs(METHOD_COPY, arguments, 1, 1);
            Sk.ffi.checkArgType("q", QUATERNION, isQuaternionPy(qPy), qPy);
            var q  = Sk.ffi.remapToJs(qPy);
            quaternion.copy(q);
            return quaternionPy;
          });
        }, METHOD_COPY, []));
      }
      case METHOD_SET_FROM_AXIS_ANGLE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_SET_FROM_AXIS_ANGLE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, axisPy, anglePy) {
            var axis = Sk.ffi.remapToJs(axisPy);
            var angle = Sk.ffi.remapToJs(anglePy);
            quaternion[METHOD_SET_FROM_AXIS_ANGLE](axis, angle);
            return quaternionPy;
          });
        }, METHOD_SET_FROM_AXIS_ANGLE, []));
      }
      case METHOD_SET_FROM_EULER: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_SET_FROM_EULER, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, vectorPy, orderPy) {
            var vector = Sk.ffi.remapToJs(vectorPy);
            var order = Sk.ffi.remapToJs(orderPy);
            quaternion[METHOD_SET_FROM_EULER](vector, order);
            return quaternionPy;
          });
        }, METHOD_SET_FROM_EULER, []));
      }
      case METHOD_SET: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_SET, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, z, w) {
            quaternion.x = Sk.ffi.remapToJs(x);
            quaternion.y = Sk.ffi.remapToJs(y);
            quaternion.z = Sk.ffi.remapToJs(z);
            quaternion.w = Sk.ffi.remapToJs(w);
            return quaternionPy;
          });
        }, METHOD_SET, []));
      }
      case METHOD_CLONE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_CLONE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            return wxyzToPy(quaternion.w, quaternion.x, quaternion.y, quaternion.z);
          });
        }, METHOD_CLONE, []));
      }
      case METHOD_CONJUGATE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_CONJUGATE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            quaternion[METHOD_CONJUGATE]();
            return quaternionPy;
          });
        }, METHOD_CONJUGATE, []));
      }
      case METHOD_INVERSE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_INVERSE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            var k = 1.0 / quaternion['lengthSq']();
            quaternion[METHOD_CONJUGATE]();
            quaternion.w *= k;
            quaternion.x *= k;
            quaternion.y *= k;
            quaternion.z *= k;
            return quaternionPy;
          });
        }, METHOD_INVERSE, []));
      }
      case METHOD_MAGNITUDE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_MAGNITUDE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            return Sk.ffi.numberToFloatPy(quaternion.length());
          });
        }, METHOD_MAGNITUDE, []));
      }
      case METHOD_QUADRANCE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_QUADRANCE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            return Sk.ffi.numberToFloatPy(quaternion['lengthSq']());
          });
        }, METHOD_QUADRANCE, []));
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
            Sk.ffi.referenceToPy(null, METHOD_NORMALIZE, null, methodPy);
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            quaternion[METHOD_NORMALIZE]();
            return quaternionPy;
          });
        }, METHOD_NORMALIZE, []));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(QUATERNION);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(quaternionPy, name, valuePy) {
    var quaternion = Sk.ffi.remapToJs(quaternionPy);
    var value = Sk.ffi.remapToJs(valuePy);
    switch(name) {
      case PROP_X: {
        quaternion.x = value;
      }
      break;
      case PROP_Y: {
        quaternion.y = value;
      }
      break;
      case PROP_Z: {
        quaternion.z = value;
      }
      break;
      case PROP_W: {
        quaternion.w = value;
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(QUATERNION);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(quaternionPy) {
    var quaternion = Sk.ffi.remapToJs(quaternionPy);
    var args = [quaternion.x, quaternion.y, quaternion.z, quaternion.w];
    return Sk.ffi.stringToPy(QUATERNION + "(" + args.join(", ") + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(quaternionPy) {
    var quaternion = Sk.ffi.remapToJs(quaternionPy);
    return Sk.ffi.stringToPy(stringFromCoordinates([quaternion.w, quaternion.x, quaternion.y, quaternion.z], ["1", "i", "j", "k"]));
  });
}, QUATERNION, []);
};
}).call(this);
