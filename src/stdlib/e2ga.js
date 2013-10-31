(function() {
Sk.builtin.defineEuclidean2 = function(mod, BLADE) {
Sk.ffi.checkFunctionArgs("defineEuclidean2", arguments, 2, 2);
Sk.builtin.defineUnits(mod, BLADE);
/**
 * @const
 * @type {string}
 */
var EUCLIDEAN_2         = "Euclidean2";
/**
 * @const
 * @type {string}
 */
var SCALAR_E2           = "ScalarE2";
/**
 * @const
 * @type {string}
 */
var VECTOR_E2           = "VectorE2";
/**
 * @const
 * @type {string}
 */
var PSEUDOSCALAR_E2     = "PseudoscalarE2";
/**
 * @const
 * @type {string}
 */
var UNIT                = "Unit";
/**
 * @const
 * @type {string}
 */
var MEASURE             = "Measure";
/**
 * @const
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUM                 = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {string}
 */
var PROP_W              = "w";
/**
 * @const
 * @type {string}
 */
var PROP_X              = "x";
/**
 * @const
 * @type {string}
 */
var PROP_Y              = "y";
/**
 * @const
 * @type {string}
 */
var PROP_XY             = "xy";
/**
 * @const
 * @type {string}
 */
var METHOD_CLIFFORD_CONJUGATE = "cliffordConjugate";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE        = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_EXP          = "exp";
/**
 * @const
 * @type {string}
 */
var METHOD_MAGNITUDE    = "magnitude";
/**
 * @const
 * @type {string}
 */
var METHOD_SQRT         = "sqrt";
/**
 * @const
 * @type {string}
 */
var OP_ADD              = "add";
/**
 * @const
 * @type {string}
 */
var OP_SUB              = "subtract";
/**
 * @const
 * @type {string}
 */
var OP_MUL              = "multiply";
/**
 * @const
 * @type {string}
 */
var OP_DIV              = "divide";
/**
 * @const
 * @type {string}
 */
var OP_EQ               = "equal";
/**
 * @const
 * @type {string}
 */
var UNIT_VECTOR_NAME_E1  = "e1";
/**
 * @const
 * @type {string}
 */
var UNIT_VECTOR_NAME_E2  = "e2";
/**
 * @const
 * @type {string}
 */
var PSEUDOSCALAR_NAME    = "I";

var E2_OR_NUMBER = [EUCLIDEAN_2, NUM];
var E2_OR_NUMBER_OR_UNIT = [EUCLIDEAN_2, UNIT];

function isNumber(x)    { return typeof x === 'number'; }
  /**
   * @param {Object} valuePy
   * @return {boolean} true if the value is a Euclidean2, otherwise false.
   */
  var isEuclidean2Py = function(valuePy) {return Sk.ffi.isInstance(valuePy, EUCLIDEAN_2);};

function coordsJsToE2Py(s, x, y, xy) {
  return Sk.ffi.callsim(mod[EUCLIDEAN_2], Sk.ffi.numberToFloatPy(s), Sk.ffi.numberToFloatPy(x), Sk.ffi.numberToFloatPy(y), Sk.ffi.numberToFloatPy(xy));
}

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

function divide(a00, a01, a10, a11, b00, b01, b10, b11, m) {
  // r = ~b
  var r00 = +b00;
  var r01 = +b01;
  var r10 = +b10;
  var r11 = -b11;
  // m = b * r
  var m00 = b00 * r00 + b01 * r01 + b10 * r10 - b11 * r11;
  var m01 = 0;
  var m10 = 0;
  var m11 = 0;
  // c = cliffordConjugate(m)
  var c00 = +m00;
  var c01 = -m01;
  var c10 = -m10;
  var c11 = -m11;
  // s = r * c
  var s00 = r00 * c00 + r01 * c01 + r10 * c10 - r11 * c11;
  var s01 = r00 * c01 + r01 * c00 - r10 * c11 + r11 * c10;
  var s10 = r00 * c10 + r01 * c11 + r10 * c00 - r11 * c01;
  var s11 = r00 * c11 + r01 * c10 - r10 * c01 + r11 * c00;
  // k = b * s
  var k00 = b00 * s00 + b01 * s01 + b10 * s10 - b11 * s11;
  // i = inverse(b)
  var i00 = s00/k00;
  var i01 = s01/k00;
  var i10 = s10/k00;
  var i11 = s11/k00;
  // x = a * inverse(b)
  var x00 = a00 * i00 + a01 * i01 + a10 * i10 - a11 * i11;
  var x01 = a00 * i01 + a01 * i00 - a10 * i11 + a11 * i10;
  var x10 = a00 * i10 + a01 * i11 + a10 * i00 - a11 * i01;
  var x11 = a00 * i11 + a01 * i10 - a10 * i01 + a11 * i00;
  if (typeof m !== 'undefined') {
    m[PROP_W]  = x00;
    m[PROP_X]  = x01;
    m[PROP_Y]  = x10;
    m[PROP_XY] = x11;
  }
  else {
    return coordsJsToE2Py(x00, x01, x10, x11);
  }
}

mod[SCALAR_E2] = Sk.ffi.functionPy(function(w) {
  Sk.ffi.checkFunctionArgs(SCALAR_E2, arguments, 1, 1);
  Sk.ffi.checkArgType(PROP_W, NUM, Sk.ffi.isNum(w), w);
  return coordsJsToE2Py(Sk.ffi.remapToJs(w), 0, 0, 0);
});

mod[VECTOR_E2] = Sk.ffi.functionPy(function(x, y) {
  Sk.ffi.checkFunctionArgs(VECTOR_E2, arguments, 2, 2);
  Sk.ffi.checkArgType(PROP_X, NUM, Sk.ffi.isNum(x), x);
  Sk.ffi.checkArgType(PROP_Y, NUM, Sk.ffi.isNum(y), y);
  return coordsJsToE2Py(0, Sk.ffi.remapToJs(x), Sk.ffi.remapToJs(y), 0);
});

mod[PSEUDOSCALAR_E2] = Sk.ffi.functionPy(function(xy) {
  Sk.ffi.checkFunctionArgs(PSEUDOSCALAR_E2, arguments, 1, 1);
  Sk.ffi.checkArgType(PROP_XY, NUM, Sk.ffi.isNum(xy), xy);
  return coordsJsToE2Py(0, 0, 0, Sk.ffi.remapToJs(xy));
});

mod[EUCLIDEAN_2] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, x00, x01, x10, x11) {
    Sk.ffi.checkMethodArgs(EUCLIDEAN_2, arguments, 1, 4);
    switch(Sk.ffi.getType(x00)) {
      case Sk.ffi.PyType.FLOAT:
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.LONG: {
        Sk.ffi.checkMethodArgs(EUCLIDEAN_2, arguments, 4, 4);
        Sk.ffi.checkArgType(PROP_W,  NUM, Sk.ffi.isNum(x00), x00);
        Sk.ffi.checkArgType(PROP_X,  NUM, Sk.ffi.isNum(x01), x01);
        Sk.ffi.checkArgType(PROP_Y,  NUM, Sk.ffi.isNum(x10), x10);
        Sk.ffi.checkArgType(PROP_XY, NUM, Sk.ffi.isNum(x11), x11);
        Sk.ffi.referenceToPy(new BLADE.Euclidean2(Sk.ffi.remapToJs(x00), Sk.ffi.remapToJs(x01), Sk.ffi.remapToJs(x10), Sk.ffi.remapToJs(x11)), EUCLIDEAN_2, undefined, selfPy);
      }
      break;
      case Sk.ffi.PyType.INSTANCE: {
        Sk.ffi.checkMethodArgs(EUCLIDEAN_2, arguments, 1, 1);
        Sk.ffi.checkArgType(PROP_W, NUM, isEuclidean2Py(x00), x00);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(x00), EUCLIDEAN_2, undefined, selfPy);
      }
      break;
      default: {
        Sk.ffi.checkArgType(PROP_W, NUM, false, x00);
      }
    }
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      return coordsJsToE2Py(lhs.w + rhs, lhs.x, lhs.y, lhs.xy);
    }
    else if (isEuclidean2Py(otherPy)) {
      return coordsJsToE2Py(lhs.w + rhs.w, lhs.x + rhs.x, lhs.y + rhs.y, lhs.xy + rhs.xy);
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_ADD, E2_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    }
  });
  $loc.__radd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkLhsOperandType(OP_ADD, E2_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    var lhs = Sk.ffi.remapToJs(otherPy);
    var rhs = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE2Py(lhs + rhs.w, rhs.x, rhs.y, rhs.xy);
  });
  $loc.__iadd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      self.w += other;
      return selfPy;
    }
    else if (isEuclidean2Py(otherPy)) {
      self.w  += other.w;
      self.x  += other.x;
      self.y  += other.y;
      self.xy += other.xy;
      return selfPy;
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_ADD, E2_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    }
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      return coordsJsToE2Py(lhs.w - rhs, lhs.x, lhs.y, lhs.xy);
    }
    else if (isEuclidean2Py(otherPy)) {
      return coordsJsToE2Py(lhs.w - rhs.w, lhs.x - rhs.x, lhs.y - rhs.y, lhs.xy - rhs.xy);
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_SUB, E2_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    }
  });
  $loc.__rsub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkLhsOperandType(OP_ADD, E2_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    var lhs = Sk.ffi.remapToJs(otherPy);
    var rhs = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE2Py(lhs - rhs.w, -rhs.x, -rhs.y, -rhs.xy);
  });
  $loc.__isub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (isNumber(other)) {
      self.w -= other;
      return selfPy;
    }
    else {
      self.w  -= other.w;
      self.x  -= other.x;
      self.y  -= other.y;
      self.xy -= other.xy;
      return selfPy;
    }
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    switch(Sk.ffi.getType(otherPy)) {
      case Sk.ffi.PyType.INSTANCE: {
        switch(Sk.ffi.typeName(otherPy)) {
          case EUCLIDEAN_2: {
            var a = Sk.ffi.remapToJs(selfPy);
            var b = Sk.ffi.remapToJs(otherPy);
            var a00 = a.w;
            var a01 = a.x;
            var a10 = a.y;
            var a11 = a.xy;
            var b00 = b.w;
            var b01 = b.x;
            var b10 = b.y;
            var b11 = b.xy;
            var x00 = a00 * b00 + a01 * b01 + a10 * b10 - a11 * b11;
            var x01 = a00 * b01 + a01 * b00 - a10 * b11 + a11 * b10;
            var x10 = a00 * b10 + a01 * b11 + a10 * b00 - a11 * b01;
            var x11 = a00 * b11 + a01 * b10 - a10 * b01 + a11 * b00;
            return coordsJsToE2Py(x00, x01, x10, x11);
          }
          case UNIT: {
            return Sk.ffi.callsim(mod[MEASURE], selfPy, otherPy);
          }
          default: {
            Sk.ffi.checkLhsOperandType(OP_MUL, E2_OR_NUMBER_OR_UNIT, false, otherPy);
          }
        }
      }
      case Sk.ffi.PyType.FLOAT:
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.LONG: {
        var a = Sk.ffi.remapToJs(selfPy);
        var b = Sk.ffi.remapToJs(otherPy);
        return coordsJsToE2Py(a.w * b, a.x * b, a.y * b, a.xy * b);
      }
      default: {
        Sk.ffi.checkLhsOperandType(OP_MUL, E2_OR_NUMBER_OR_UNIT, false, otherPy);
      }
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordsJsToE2Py(lhs * rhs.w, lhs * rhs.x, lhs * rhs.y, lhs * rhs.xy);
    }
    else {
      throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " * " + JSON.stringify(rhs, null, 2));
    }
  });
  $loc.__imul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (isNumber(other)) {
      self.w  *= other;
      self.x  *= other;
      self.y  *= other;
      self.xy *= other;
      return selfPy;
    }
    else {
      var a00 = self.w;
      var a01 = self.x;
      var a10 = self.y;
      var a11 = self.xy;
      var b00 = other.w;
      var b01 = other.x;
      var b10 = other.y;
      var b11 = other.xy;
      self.w  = a00 * b00 + a01 * b01 + a10 * b10 - a11 * b11;
      self.x  = a00 * b01 + a01 * b00 - a10 * b11 + a11 * b10;
      self.y  = a00 * b10 + a01 * b11 + a10 * b00 - a11 * b01;
      self.xy = a00 * b11 + a01 * b10 - a10 * b01 + a11 * b00;
      return selfPy;
    }
  });
  $loc.__div__ = Sk.ffi.functionPy(function(a, b) {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    if (isNumber(b)) {
      return divide(a.w, a.x, a.y, a.xy, b, 0, 0, 0, undefined);
    }
    else {
      return divide(a.w, a.x, a.y, a.xy, b.w, b.x, b.y, b.xy, undefined);
    }
  });
  $loc.__rdiv__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return divide(lhs, 0, 0, 0, rhs.w, rhs.x, rhs.y, rhs.xy, undefined);
    }
    else {
      throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " / " + JSON.stringify(rhs, null, 2));
    }
  });
  $loc.__idiv__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (isNumber(other)) {
      divide(self.w, self.x, self.y, self.xy, other, 0, 0, 0, self);
      return selfPy;
    }
    else {
      divide(self.w, self.x, self.y, self.xy, other.w, other.x, other.y, other.xy, self);
      return selfPy;
    }
  });
  $loc.__xor__ = Sk.ffi.functionPy(function(a, b) {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    if (isNumber(b)) {
      return coordsJsToE2Py(a.w * b, a.x * b, a.y * b, a.xy * b);
    }
    else {
      var a00 = a.w;
      var a01 = a.x;
      var a10 = a.y;
      var a11 = a.xy;
      var b00 = b.w;
      var b01 = b.x;
      var b10 = b.y;
      var b11 = b.xy;
      var x00 = a00 * b00;
      var x01 = a00 * b01 + a01 * b00;
      var x10 = a00 * b10             + a10 * b00;
      var x11 = a00 * b11 + a01 * b10 - a10 * b01 + a11 * b00;
      return coordsJsToE2Py(x00, x01, x10, x11);
    }
  });
  $loc.__rxor__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordsJsToE2Py(lhs * rhs.w, lhs * rhs.x, lhs * rhs.y, lhs * rhs.xy);
    }
    else {
      throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " ^ " + JSON.stringify(rhs, null, 2));
    }
  });
  $loc.__ixor__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (isNumber(other)) {
      self.w  *= other;
      self.x  *= other;
      self.y  *= other;
      self.xy *= other;
      return selfPy;
    }
    else {
      var a00 = self.w;
      var a01 = self.x;
      var a10 = self.y;
      var a11 = self.xy;
      var b00 = other.w;
      var b01 = other.x;
      var b10 = other.y;
      var b11 = other.xy;
      self.w  = a00 * b00;
      self.x  = a00 * b01 + a01 * b00;
      self.y  = a00 * b10             + a10 * b00;
      self.xy = a00 * b11 + a01 * b10 - a10 * b01 + a11 * b00;
      return selfPy;
    }
  });
  $loc.__lshift__ = Sk.ffi.functionPy(function(a, b) {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    if (isNumber(b)) {
      return coordsJsToE2Py(a.w * b, 0, 0, 0);
    }
    else {
      var a00 = a.w;
      var a01 = a.x;
      var a10 = a.y;
      var a11 = a.xy;
      var b00 = b.w;
      var b01 = b.x;
      var b10 = b.y;
      var b11 = b.xy;
      var x00 = a00 * b00 + a01 * b01 + a10 * b10 - a11 * b11;
      var x01 = a00 * b01             - a10 * b11;
      var x10 = a00 * b10 + a01 * b11;
      var x11 = a00 * b11;
      return coordsJsToE2Py(x00, x01, x10, x11);
    }
  });
  $loc.__rlshift__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordsJsToE2Py(lhs * rhs.w, lhs * rhs.x, lhs * rhs.y, lhs * rhs.xy);
    }
    else {
      throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " << " + JSON.stringify(rhs, null, 2));
    }
  });
  $loc.__ilshift__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (isNumber(other)) {
      self.w *= other;
      self.x  = 0;
      self.y  = 0;
      self.xy = 0;
      return selfPy;
    }
    else {
      var a00 = self.w;
      var a01 = self.x;
      var a10 = self.y;
      var a11 = self.xy;
      var b00 = other.w;
      var b01 = other.x;
      var b10 = other.y;
      var b11 = other.xy;
      self.w  = a00 * b00 + a01 * b01 + a10 * b10 - a11 * b11;
      self.x  = a00 * b01             - a10 * b11;
      self.y  = a00 * b10 + a01 * b11;
      self.xy = a00 * b11;
      return selfPy;
    }
  });
  $loc.__rshift__ = Sk.ffi.functionPy(function(a, b) {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    if (isNumber(b)) {
      return coordsJsToE2Py(a.w * b, -a.x * b, -a.y * b, a.xy * b);
    }
    else {
      var a00 = a.w;
      var a01 = a.x;
      var a10 = a.y;
      var a11 = a.xy;
      var b00 = b.w;
      var b01 = b.x;
      var b10 = b.y;
      var b11 = b.xy;
      var x00 = a00 * b00 + a01 * b01 + a10 * b10 - a11 * b11;
      var x01 =           + a01 * b00             + a11 * b10;
      var x10 =                       + a10 * b00 - a11 * b01;
      var x11 =                                     a11 * b00;
      return coordsJsToE2Py(x00, x01, x10, x11);
    }
  });
  $loc.__rrshift__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordsJsToE2Py(lhs * rhs.w, 0, 0, 0);
    }
    else {
      throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " >> " + JSON.stringify(rhs, null, 2));
    }
  });
  $loc.__irshift__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (isNumber(other)) {
      var a00 = self.w;
      var a01 = self.x;
      var a10 = self.y;
      var a11 = self.xy;
      var b00 = other;
      var b01 = 0;
      var b10 = 0;
      var b11 = 0;
      self.w  *=  other;
      self.x  *= -other;
      self.y  *= -other;
      self.xy *=  other;
      return selfPy;
    }
    else {
      var a00 = self.w;
      var a01 = self.x;
      var a10 = self.y;
      var a11 = self.xy;
      var b00 = other.w;
      var b01 = other.x;
      var b10 = other.y;
      var b11 = other.xy;
      self.w  = a00 * b00 + a01 * b01 + a10 * b10 - a11 * b11;
      self.x  =           + a01 * b00             + a11 * b10;
      self.y  =                       + a10 * b00 - a11 * b01;
      self.xy =                                     a11 * b00;
      return selfPy;
    }
  });
  $loc.nb$negative = function() {
    var self = Sk.ffi.remapToJs(this);
    return coordsJsToE2Py(-self.w, -self.x, -self.y, -self.xy);
  };
  $loc.nb$positive = function() {
    return this;
  };
  $loc.nb$invert = function() {
    var self = Sk.ffi.remapToJs(this);
    return coordsJsToE2Py(self.w, self.x, self.y, -self.xy);
  };
  $loc.__getitem__ = Sk.ffi.functionPy(function(mv, index) {
    mv = Sk.ffi.remapToJs(mv);
    index = Sk.ffi.remapToJs(index);
    switch(index) {
      case 0: {
        return coordsJsToE2Py(mv.w, 0, 0, 0);
      }
      case 1: {
        return coordsJsToE2Py(0, mv.x, mv.y, 0);
      }
      case 2: {
        return coordsJsToE2Py(0, 0, 0, mv.xy);
      }
    }
  });
  $loc.__abs__ = Sk.ffi.functionPy(function(selfPy) {
    var mv = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.numberToFloatPy(Math.sqrt(mv.w * mv.w + mv.x * mv.x + mv.y * mv.y - mv.xy * mv.xy));
  });
  $loc.__cliffordConjugate__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_CLIFFORD_CONJUGATE, arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE2Py(self.w, -self.x, -self.y, -self.xy);
  });
  $loc.__exp__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_EXP, arguments, 0, 0);
    var mv = Sk.ffi.remapToJs(selfPy);
    var e = Math.exp(mv.w);
    var c = Math.cos(mv.xy);
    var s = Math.sin(mv.xy);
    return coordsJsToE2Py(e * c, 0, 0, e * s);
  });
  $loc.__sqrt__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_SQRT, arguments, 0, 0);
    var mv = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE2Py(Math.sqrt(mv.w), 0, 0, 0);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(mv) {
    mv = Sk.ffi.remapToJs(mv);
    return Sk.ffi.stringToPy(EUCLIDEAN_2 + "(" + [mv.w, mv.x, mv.y, mv.xy].map(function(x) {return String(x);}).join(", ") + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(mv) {
    mv = Sk.ffi.remapToJs(mv);
    if (mv.isNaN()) {
      return Sk.ffi.stringToPy("NaN");
    }
    else {
      return Sk.ffi.stringToPy(stringFromCoordinates([mv.w, mv.x, mv.y, mv.xy], ["1", "i", "j", "I"], "*"));
    }
  });
  $loc.__eq__ = Sk.ffi.functionPy(function(a, b) {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    return (a.w === b.w) && (a.x === b.x) && (a.y === b.y) && (a.xy === b.xy);
  });
  $loc.__ne__ = Sk.ffi.functionPy(function(a, b) {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    return (a.w !== b.w) || (a.x !== b.x) || (a.y !== b.y) || (a.xy !== b.xy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(mvPy, name) {
    var mv = Sk.ffi.remapToJs(mvPy);
    switch(name) {
      case PROP_W: {
        return Sk.ffi.numberToFloatPy(mv[PROP_W]);
      }
      case PROP_X: {
        return Sk.ffi.numberToFloatPy(mv[PROP_X]);
      }
      case PROP_Y: {
        return Sk.ffi.numberToFloatPy(mv[PROP_Y]);
      }
      case PROP_XY: {
        return Sk.ffi.numberToFloatPy(mv[PROP_XY]);
      }
      case METHOD_CLONE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            return coordsJsToE2Py(mv.w, mv.x, mv.y, mv.xy);
          });
        }, METHOD_CLONE, []));
      }
      case METHOD_MAGNITUDE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.numberToFloatPy(Math.sqrt(mv.w * mv.w + mv.x * mv.x + mv.y * mv.y - mv.xy * mv.xy));
          });
        }, METHOD_MAGNITUDE, []));
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(EUCLIDEAN_2);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_W:
      case PROP_X:
      case PROP_Y:
      case PROP_XY: {
        Sk.ffi.checkArgType(name, [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG], Sk.ffi.isNum(valuePy), valuePy);
        self[name] = Sk.ffi.remapToJs(valuePy);
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(EUCLIDEAN_2);
      }
    }
  });
}, EUCLIDEAN_2, []);

mod[UNIT_VECTOR_NAME_E1] = coordsJsToE2Py(0, 1, 0, 0);
mod[UNIT_VECTOR_NAME_E2] = coordsJsToE2Py(0, 0, 1, 0);
mod[PSEUDOSCALAR_NAME]   = coordsJsToE2Py(0, 0, 0, 1);

};
}).call(this);
