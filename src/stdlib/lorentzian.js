/**
 * Experimental implementation of Spacetime algebra.
 */
(function() {
Sk.builtin.defineLorentzian = function(mod, BLADE) {
Sk.ffi.checkFunctionArgs("defineLorentzian", arguments, 2, 2);
Sk.builtin.defineUnits(mod, BLADE);
/**
 * @const
 * @type {string}
 */
var LORENTZIAN      = "Lorentzian";
/**
 * @const
 * @type {string}
 */
var SCALAR_L4        = "ScalarL4";
/**
 * @const
 * @type {string}
 */
var VECTOR_L4        = "VectorL4";
/**
 * @const
 * @type {string}
 */
var PSEUDOSCALAR_L4  = "PseudoscalarE2";
/**
 * @const
 * @type {string}
 */
var UNIT             = "Unit";
/**
 * @const
 * @type {string}
 */
var MEASURE          = "Measure";
/**
 * @const
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUM              = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {string}
 */
var PROP_W           = "w";
/**
 * @const
 * @type {string}
 */
var PROP_X           = "x";
/**
 * @const
 * @type {string}
 */
var PROP_Y           = "y";
/**
 * @const
 * @type {string}
 */
var PROP_Z           = "z";
/**
 * @const
 * @type {string}
 */
var PROP_T           = "t";
/**
 * @const
 * @type {string}
 */
var PROP_TX          = "tx";
/**
 * @const
 * @type {string}
 */
var PROP_TY          = "ty";
/**
 * @const
 * @type {string}
 */
var PROP_TZ          = "tz";
/**
 * @const
 * @type {string}
 */
var PROP_XT          = "xt";
/**
 * @const
 * @type {string}
 */
var PROP_XY          = "xy";
/**
 * @const
 * @type {string}
 */
var PROP_XYT         = "xyt";
/**
 * @const
 * @type {string}
 */
var PROP_XYZ         = "xyz";
/**
 * @const
 * @type {string}
 */
var PROP_XYZT        = "xyzt";
/**
 * @const
 * @type {string}
 */
var PROP_XZ          = "xz";
/**
 * @const
 * @type {string}
 */
var PROP_XZT         = "xzt";
/**
 * @const
 * @type {string}
 */
var PROP_YT          = "yt";
/**
 * @const
 * @type {string}
 */
var PROP_YX          = "yx";
/**
 * @const
 * @type {string}
 */
var PROP_YZ          = "yz";
/**
 * @const
 * @type {string}
 */
var PROP_YZT         = "yzt";
/**
 * @const
 * @type {string}
 */
var PROP_ZT          = "zt";
/**
 * @const
 * @type {string}
 */
var PROP_ZX          = "zx";
/**
 * @const
 * @type {string}
 */
var PROP_ZXT         = "zxt";
/**
 * @const
 * @type {string}
 */
var PROP_ZY          = "zy";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE     = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_MAGNITUDE = "magnitude";
/**
 * @const
 * @type {string}
 */
var METHOD_QUADRANCE = "quadrance";
/**
 * @const
 * @type {string}
 */
var OP_ADD           = "add";
/**
 * @const
 * @type {string}
 */
var OP_SUB           = "subtract";
/**
 * @const
 * @type {string}
 */
var OP_MUL           = "multiply";
/**
 * @const
 * @type {string}
 */
var OP_DIV           = "divide";
/**
 * @const
 * @type {string}
 */
var OP_EQ            = "equal";

var LORENTZIAN_OR_NUMBER = [LORENTZIAN, NUM];
var LORENTZIAN_OR_NUMBER_OR_UNIT = [LORENTZIAN, UNIT];

function isNumber(x)    { return typeof x === 'number'; }
/**
 * @param {Object} valuePy
 * @return {boolean} true if the value is a Lorentzian, otherwise false.
 */
var isLorentzianPy = function(valuePy) {return Sk.ffi.isClass(valuePy, LORENTZIAN);};

function coordJsToLorentzianPy(x00, x01, x10, x11) {
  return Sk.ffi.callsim(mod[LORENTZIAN], Sk.ffi.numberToFloatPy(x00), Sk.ffi.numberToFloatPy(x01), Sk.ffi.numberToFloatPy(x10), Sk.ffi.numberToFloatPy(x11));
}
function coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF) {
  return Sk.ffi.callsim(mod[LORENTZIAN], x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
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
    return coordJsToLorentzianPy(x00, x01, x10, x11);
  }
}

mod[SCALAR_L4] = Sk.ffi.functionPy(function(valuePy) {
  Sk.ffi.checkFunctionArgs(SCALAR_L4, arguments, 1, 1);
  var zero = Sk.ffi.numberToFloatPy(0);
  var x0 = valuePy;
  var x1 = zero;
  var x2 = zero;
  var x3 = zero;
  var x4 = zero;
  var x5 = zero;
  var x6 = zero;
  var x7 = zero;
  var x8 = zero;
  var x9 = zero;
  var xA = zero;
  var xB = zero;
  var xC = zero;
  var xD = zero;
  var xE = zero;
  var xF = zero;
  return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
});

mod[VECTOR_L4] = Sk.ffi.functionPy(function(x, y, z, t) {
  Sk.ffi.checkFunctionArgs(VECTOR_L4, arguments, 4, 4);
  var zero = Sk.ffi.numberToFloatPy(0);
  var x0 = zero;
  var x1 = x;
  var x2 = y;
  var x3 = zero;
  var x4 = z;
  var x5 = zero;
  var x6 = zero;
  var x7 = zero;
  var x8 = t;
  var x9 = zero;
  var xA = zero;
  var xB = zero;
  var xC = zero;
  var xD = zero;
  var xE = zero;
  var xF = zero;
  return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
});

mod[PSEUDOSCALAR_L4] = Sk.ffi.functionPy(function(xy) {
  Sk.ffi.checkFunctionArgs(PSEUDOSCALAR_L4, arguments, 1, 1);
  Sk.ffi.checkArgType(PROP_XY, NUM, Sk.ffi.isNum(xy), xy);
  return coordJsToLorentzianPy(0, 0, 0, Sk.ffi.remapToJs(xy));
});

mod[LORENTZIAN] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF) {
    Sk.ffi.checkMethodArgs(LORENTZIAN, arguments, 1, 16);
    if (isLorentzianPy(x0)) {
      Sk.ffi.checkMethodArgs(LORENTZIAN, arguments, 1, 1);
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(x0), LORENTZIAN, undefined, selfPy);
    }
    else {
      Sk.ffi.checkMethodArgs(LORENTZIAN, arguments, 16, 16);
      var mv = {};
      mv[0x0] = x0;
      mv[0x1] = x1;
      mv[0x2] = x2;
      mv[0x3] = x3;
      mv[0x4] = x4;
      mv[0x5] = x5;
      mv[0x6] = x6;
      mv[0x7] = x7;
      mv[0x8] = x8;
      mv[0x9] = x9;
      mv[0xA] = xA;
      mv[0xB] = xB;
      mv[0xC] = xC;
      mv[0xD] = xD;
      mv[0xE] = xE;
      mv[0xF] = xF;
      Sk.ffi.referenceToPy(mv, LORENTZIAN, undefined, selfPy);
    }
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    if (isLorentzianPy(otherPy)) {
      var zero = Sk.ffi.numberToFloatPy(0);
      var x0 = Sk.ffh.add(lhs[0x0], rhs[0x0]);
      var x1 = Sk.ffh.add(lhs[0x1], rhs[0x1]);
      var x2 = Sk.ffh.add(lhs[0x2], rhs[0x2]);
      var x3 = zero;
      var x4 = Sk.ffh.add(lhs[0x4], rhs[0x4]);
      var x5 = zero;
      var x6 = zero;
      var x7 = zero;
      var x8 = Sk.ffh.add(lhs[0x8], rhs[0x8]);
      var x9 = zero;
      var xA = zero;
      var xB = zero;
      var xC = zero;
      var xD = zero;
      var xE = zero;
      var xF = zero;
      return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
    }
    else if (Sk.ffi.isNum(otherPy)) {
      var zero = Sk.ffi.numberToFloatPy(0);
      var x0 = Sk.ffh.add(lhs[0x0], rhs);
      var x1 = lhs[0x1];
      var x2 = lhs[0x2];
      var x3 = zero;
      var x4 = lhs[0x4];
      var x5 = zero;
      var x6 = zero;
      var x7 = zero;
      var x8 = lhs[0x8];
      var x9 = zero;
      var xA = zero;
      var xB = zero;
      var xC = zero;
      var xD = zero;
      var xE = zero;
      var xF = zero;
      return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_ADD, LORENTZIAN_OR_NUMBER, false, otherPy);
    }
  });
  $loc.__radd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkLhsOperandType(OP_ADD, LORENTZIAN_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    var lhs = Sk.ffi.remapToJs(otherPy);
    var rhs = Sk.ffi.remapToJs(selfPy);
      var zero = Sk.ffi.numberToFloatPy(0);
      var x0;
      try {
        x0 = Sk.ffh.add(lhs, rhs[0x0]);
      }
      catch(e) {
        x0 = Sk.ffh.add(rhs[0x0], lhs);
      }
      var x1 = rhs[0x1];
      var x2 = rhs[0x2];
      var x3 = zero;
      var x4 = rhs[0x4];
      var x5 = zero;
      var x6 = zero;
      var x7 = zero;
      var x8 = rhs[0x8];
      var x9 = zero;
      var xA = zero;
      var xB = zero;
      var xC = zero;
      var xD = zero;
      var xE = zero;
      var xF = zero;
      return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
  });
  $loc.__iadd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      self.w += other;
      return selfPy;
    }
    else if (isLorentzianPy(otherPy)) {
      self.w  += other.w;
      self.x  += other.x;
      self.y  += other.y;
      self.xy += other.xy;
      return selfPy;
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_ADD, LORENTZIAN_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    }
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      return coordJsToLorentzianPy(lhs.w - rhs, lhs.x, lhs.y, lhs.xy);
    }
    else if (isLorentzianPy(otherPy)) {
      return coordJsToLorentzianPy(lhs.w - rhs.w, lhs.x - rhs.x, lhs.y - rhs.y, lhs.xy - rhs.xy);
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_SUB, LORENTZIAN_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    }
  });
  $loc.__rsub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkLhsOperandType(OP_ADD, LORENTZIAN_OR_NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    var lhs = Sk.ffi.remapToJs(otherPy);
    var rhs = Sk.ffi.remapToJs(selfPy);
    return coordJsToLorentzianPy(lhs - rhs.w, -rhs.x, -rhs.y, -rhs.xy);
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
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    function sum(numbers) {
      var total = Sk.ffi.numberToIntPy(0);
      for (var i=0; i < numbers.length; i++) {
        total = Sk.ffh.add(total, numbers[i]);
      }
      return total;
    }
    function expand(es) {
      return es.map(function(e) {
        var signum = e[0];
        var a = lhs[e[1]];
        var b = rhs[e[2]];
        var c = Sk.ffh.multiply(a , b);
        if (signum > 0) {
          return c;
        }
        else {
          return Sk.ffh.neg(c);
        }
      });
    }
    if (isLorentzianPy(otherPy)) {
      var zero = Sk.ffi.numberToFloatPy(0);
      var x0 = sum(expand([[+1,0x0,0x0],[+1,0x1,0x1],[+1,0x2,0x2],[-1,0x3,0x3],[+1,0x4,0x4],[-1,0x5,0x5],[-1,0x6,0x6],[-1,0x7,0x7],[+1,0x8,0x8],[-1,0x9,0x9],[-1,0xA,0xA],[+1,0xB,0xB],[-1,0xC,0xC],[+1,0xD,0xD],[+1,0xE,0xE],[-1,0xF,0xF]]));
      var x1 = sum(expand([[+1,0x1,0x0],[+1,0x0,0x1],[+1,0x3,0x2],[-1,0x2,0x3],[+1,0x5,0x4],[-1,0x4,0x5],[-1,0x7,0x6],[-1,0x6,0x7],[-1,0x9,0x8],[+1,0x8,0x9],[-1,0xB,0xA]]));
      var x2 = sum(expand([[+1,0x2,0x0],[-1,0x3,0x1],[+1,0x0,0x2]]));
      var x3 = sum(expand([[+1,0x3,0x0],[-1,0x2,0x1],[+1,0x1,0x2],[+1,0x0,0x3],[+1,0x7,0x4],[+1,0x6,0x5],[-1,0x5,0x6],[+1,0x4,0x7],[-1,0xB,0x8],[-1,0xA,0x9],[+1,0x9,0xA],[-1,0x8,0xB],[-1,0xF,0xC],[-1,0xE,0xD],[+1,0xD,0xE],[+1,0xC,0xF]]));
      var x4 = sum(expand([[+1,0x4,0x0]]));
      var x5 = sum(expand([[+1,0x5,0x0]]));
      var x6 = sum(expand([[+1,0x6,0x0]]));
      var x7 = sum(expand([[+1,0x7,0x0]]));
      var x8 = sum(expand([[+1,0x8,0x0]]));
      var x9 = sum(expand([[+1,0x9,0x0]]));
      var xA = sum(expand([[+1,0xA,0x0]]));
      var xB = sum(expand([[+1,0xB,0x0]]));
      var xC = sum(expand([[+1,0xC,0x0]]));
      var xD = sum(expand([[+1,0xD,0x0]]));
      var xE = sum(expand([[+1,0xE,0x0]]));
      var xF = sum(expand([[+1,0xF,0x0]]));
      return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
    }
    else if (Sk.ffi.isNum(otherPy)) {
      var x0 = Sk.ffh.add(lhs[0x0], rhs);
      var x1 = Sk.ffh.add(lhs[0x1], rhs);
      var x2 = Sk.ffh.add(lhs[0x2], rhs);
      var x3 = Sk.ffh.add(lhs[0x3], rhs);
      var x4 = Sk.ffh.add(lhs[0x4], rhs);
      var x5 = Sk.ffh.add(lhs[0x5], rhs);
      var x6 = Sk.ffh.add(lhs[0x6], rhs);
      var x7 = Sk.ffh.add(lhs[0x7], rhs);
      var x8 = Sk.ffh.add(lhs[0x8], rhs);
      var x9 = Sk.ffh.add(lhs[0x9], rhs);
      var xA = Sk.ffh.add(lhs[0xA], rhs);
      var xB = Sk.ffh.add(lhs[0xB], rhs);
      var xC = Sk.ffh.add(lhs[0xC], rhs);
      var xD = Sk.ffh.add(lhs[0xD], rhs);
      var xE = Sk.ffh.add(lhs[0xE], rhs);
      var xF = Sk.ffh.add(lhs[0xF], rhs);
      return coordPyToLorentzianPy(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, xA, xB, xC, xD, xE, xF);
    }
    else {
      Sk.ffi.checkRhsOperandType(OP_MUL, LORENTZIAN_OR_NUMBER, false, otherPy);
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordJsToLorentzianPy(lhs * rhs.w, lhs * rhs.x, lhs * rhs.y, lhs * rhs.xy);
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
      return coordJsToLorentzianPy(a.w * b, a.x * b, a.y * b, a.xy * b);
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
      return coordJsToLorentzianPy(x00, x01, x10, x11);
    }
  });
  $loc.__rxor__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordJsToLorentzianPy(lhs * rhs.w, lhs * rhs.x, lhs * rhs.y, lhs * rhs.xy);
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
      return coordJsToLorentzianPy(a.w * b, 0, 0, 0);
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
      return coordJsToLorentzianPy(x00, x01, x10, x11);
    }
  });
  $loc.__rlshift__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordJsToLorentzianPy(lhs * rhs.w, lhs * rhs.x, lhs * rhs.y, lhs * rhs.xy);
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
      return coordJsToLorentzianPy(a.w * b, -a.x * b, -a.y * b, a.xy * b);
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
      return coordJsToLorentzianPy(x00, x01, x10, x11);
    }
  });
  $loc.__rrshift__ = Sk.ffi.functionPy(function(rhs, lhs) {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs)) {
      return coordJsToLorentzianPy(lhs * rhs.w, 0, 0, 0);
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
    return coordJsToLorentzianPy(-self.w, -self.x, -self.y, -self.xy);
  };
  $loc.nb$positive = function() {
    return this;
  };
  $loc.nb$invert = function() {
    var self = Sk.ffi.remapToJs(this);
    return coordJsToLorentzianPy(self.w, self.x, self.y, -self.xy);
  };
  $loc.__getitem__ = Sk.ffi.functionPy(function(mv, index) {
    mv = Sk.ffi.remapToJs(mv);
    index = Sk.ffi.remapToJs(index);
    switch(index) {
      case 0: {
        return coordJsToLorentzianPy(mv.w, 0, 0, 0);
      }
      case 1: {
        return coordJsToLorentzianPy(0, mv.x, mv.y, 0);
      }
      case 2: {
        return coordJsToLorentzianPy(0, 0, 0, mv.xy);
      }
    }
  });
  $loc.__abs__ = Sk.ffi.functionPy(function(selfPy) {
    var mv = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.numberToFloatPy(Math.sqrt(mv.w * mv.w + mv.x * mv.x + mv.y * mv.y - mv.xy * mv.xy));
  });
  $loc.__exp__ = Sk.ffi.functionPy(function(selfPy) {
    var mv = Sk.ffi.remapToJs(selfPy);
    var e = Math.exp(mv.w);
    var c = Math.cos(mv.xy);
    var s = Math.sin(mv.xy);
    return coordJsToLorentzianPy(e * c, 0, 0, e * s);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(mv) {
    mv = Sk.ffi.remapToJs(mv);
    return Sk.ffi.stringToPy(LORENTZIAN + "(" + [mv.w, mv.x, mv.y, mv.xy].map(function(x) {return String(x);}).join(", ") + ")");
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
  $loc.__eq__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    return Sk.ffi.bool.True;
//    a = Sk.ffi.remapToJs(a);
//    b = Sk.ffi.remapToJs(b);
//    return (a.w === b.w) && (a.x === b.x) && (a.y === b.y) && (a.xy === b.xy);
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
        return mv[0x0];
      }
      case PROP_X: {
        return mv[0x1];
      }
      case PROP_Y: {
        return mv[0x2];
      }
      case PROP_XY: {
        return mv[0x3];
      }
      case PROP_YX: {
        return Sk.ffh.neg(mv[0x3]);
      }
      case PROP_Z: {
        return mv[0x4];
      }
      case PROP_XZ: {
        return mv[0x5];
      }
      case PROP_ZX: {
        return Sk.ffh.neg(mv[0x5]);
      }
      case PROP_YZ: {
        return mv[0x6];
      }
      case PROP_ZY: {
        return Sk.ffh.neg(mv[0x6]);
      }
      case PROP_XYZ: {
        return mv[0x7];
      }
      case PROP_T: {
        return mv[0x8];
      }
      case PROP_XT: {
        return mv[0x9];
      }
      case PROP_TX: {
        return Sk.ffh.neg(mv[0x9]);
      }
      case PROP_YT: {
        return mv[0xA];
      }
      case PROP_TY: {
        return Sk.ffh.neg(mv[0xA]);
      }
      case PROP_XYT: {
        return mv[0xB];
      }
      case PROP_ZT: {
        return mv[0xC];
      }
      case PROP_TZ: {
        return Sk.ffh.neg(mv[0xC]);
      }
      case PROP_XZT: {
        return mv[0xD];
      }
      case PROP_ZXT: {
        return Sk.ffh.neg(mv[0xD]);
      }
      case PROP_YZT: {
        return mv[0xE];
      }
      case PROP_XYZT: {
        return mv[0xF];
      }
      case METHOD_CLONE: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(methodPy) {
          });
          $loc.__call__ = Sk.ffi.functionPy(function(methodPy) {
            return coordJsToLorentzianPy(mv.w, mv.x, mv.y, mv.xy);
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
      case METHOD_QUADRANCE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          var quadrance = Sk.ffh.multiply(mv[0x0], mv[0x0]);
          quadrance = Sk.ffh.add(quadrance, Sk.ffh.multiply(mv[0x1], mv[0x1]));
          quadrance = Sk.ffh.add(quadrance, Sk.ffh.multiply(mv[0x2], mv[0x2]));
          quadrance = Sk.ffh.add(quadrance, Sk.ffh.multiply(mv[0x4], mv[0x4]));
          quadrance = Sk.ffh.subtract(quadrance, Sk.ffh.multiply(mv[0x8], mv[0x8]));
          return quadrance;
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(LORENTZIAN);
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
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(LORENTZIAN);
      }
    }
  });
}, LORENTZIAN, []);
};
}).call(this);
