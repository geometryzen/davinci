Sk.math = Sk.math || {};

Sk.math.PI_TIMES_1_OVER_4 =     Math.PI / 4;
Sk.math.PI_TIMES_2_OVER_4 =     Math.PI / 2;
Sk.math.PI_TIMES_3_OVER_4 = 3 * Math.PI / 4;
Sk.math.PI_TIMES_4_OVER_4 =     Math.PI;
Sk.math.PI_TIMES_5_OVER_4 = 5 * Math.PI / 4;
Sk.math.PI_TIMES_6_OVER_4 = 3 * Math.PI / 2;
Sk.math.PI_TIMES_7_OVER_4 = 7 * Math.PI / 4;
Sk.math.PI_TIMES_8_OVER_4 = 2 * Math.PI;
Sk.math.EPSILON           = 0.000000001

Sk.math.isCloseTo = function(x1, x2, epsilon) {
  return Math.abs(x1 - x2) < epsilon;
}

Sk.math.cos = function(x) {
  if (Sk.math.isCloseTo(Math.abs(x), 0, Sk.math.EPSILON)) {
    return +1;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_1_OVER_4, Sk.math.EPSILON)) {
    return +Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_2_OVER_4, Sk.math.EPSILON)) {
    return 0;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_3_OVER_4, Sk.math.EPSILON)) {
    return -Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_4_OVER_4, Sk.math.EPSILON)) {
    return -1;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_5_OVER_4, Sk.math.EPSILON)) {
    return -Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_6_OVER_4, Sk.math.EPSILON)) {
    return 0;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_7_OVER_4, Sk.math.EPSILON)) {
    return +Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(Math.abs(x), Sk.math.PI_TIMES_8_OVER_4, Sk.math.EPSILON)) {
    return +1;
  }
  else {
    return Math.cos(x);
  }
};

Sk.math.sin = function(x) {
  if (Sk.math.isCloseTo(x, 0, Sk.math.EPSILON)) {
    return 0;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_1_OVER_4, Sk.math.EPSILON)) {
    return Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_2_OVER_4, Sk.math.EPSILON)) {
    return +1;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_3_OVER_4, Sk.math.EPSILON)) {
    return Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_4_OVER_4, Sk.math.EPSILON)) {
    return 0;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_5_OVER_4, Sk.math.EPSILON)) {
    return -Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_6_OVER_4, Sk.math.EPSILON)) {
    return -1;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_7_OVER_4, Sk.math.EPSILON)) {
    return -Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, +Sk.math.PI_TIMES_8_OVER_4, Sk.math.EPSILON)) {
    return 0;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_1_OVER_4, Sk.math.EPSILON)) {
    return -Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_2_OVER_4, Sk.math.EPSILON)) {
    return -1;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_3_OVER_4, Sk.math.EPSILON)) {
    return -Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_4_OVER_4, Sk.math.EPSILON)) {
    return 0;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_5_OVER_4, Sk.math.EPSILON)) {
    return +Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_6_OVER_4, Sk.math.EPSILON)) {
    return +1;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_7_OVER_4, Sk.math.EPSILON)) {
    return +Math.SQRT1_2;
  }
  else if (Sk.math.isCloseTo(x, -Sk.math.PI_TIMES_8_OVER_4, Sk.math.EPSILON)) {
    return 0;
  }
  else {
    return Math.sin(x);
  }
};

(function() {
Sk.builtin.defineMath = function(mod) {
Sk.ffi.checkFunctionArgs("defineMath", arguments, 1, 1);
/**
 * @const
 * @type {string}
 */
var ANGLE = "angle";
/**
 * @const
 * @type {string}
 */
var NUMBER = "Number";
/**
 *
 */
mod.e       = Sk.ffi.numberToPy(Math.E);
mod.pi      = Sk.ffi.numberToPy(Math.PI);
mod.sqrt2   = Sk.ffi.numberToPy(Math.SQRT2);
mod.sqrt1_2 = Sk.ffi.numberToPy(Math.SQRT1_2);
mod.tao     = Sk.ffi.numberToPy(2 * Math.PI);

mod.cliffordConjugate = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("cliffordConjugate", arguments, 1, 1);
  if (Sk.ffi.isNum(x)) {
    // The Clifford Conjugate of a JavaScript number is just itself.
    return x;
  }
  else {
    return Sk.ffh.cliffordConjugate(x);
  }
});

mod.fabs = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("fabs", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return Sk.ffi.numberToPy(Math.abs(Sk.builtin.asnum$(x)));
});

mod.asin = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("asin", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return Sk.ffi.numberToPy(Math.asin(Sk.builtin.asnum$(rad)));
});

mod.acos = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("acos", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return Sk.ffi.numberToPy(Math.acos(Sk.builtin.asnum$(rad)));
});

mod.atan = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("atan", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return Sk.ffi.numberToPy(Math.atan(Sk.builtin.asnum$(rad)));
});

mod.atan2 = Sk.ffi.functionPy(function(y, x) {
  Sk.ffi.checkFunctionArgs("atan2", arguments, 2, 2);
  Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return Sk.ffi.numberToPy(Math.atan2(Sk.builtin.asnum$(y), Sk.builtin.asnum$(x)));
});
/**
 * exp
 */
mod.exp = Sk.ffi.functionPy(function(anglePy) {
  Sk.ffi.checkFunctionArgs("exp", arguments, 1, 1);
  if (Sk.ffi.isNum(anglePy)) {
    return Sk.ffi.numberToPy(Math.exp(Sk.ffi.remapToJs(anglePy)));
  }
  else {
    return Sk.ffh.exp(anglePy);
  }
});

function makeTrigFunction(name, f1, f2) {
  return function(anglePy) {
    Sk.ffi.checkFunctionArgs(name, arguments, 1, 1);
    if (Sk.ffi.isNum(anglePy)) {
      return Sk.ffi.numberToPy(f1(Sk.ffi.remapToJs(anglePy)));
    }
    else {
      return f2(anglePy);
    }
  };
}

/**
 * cos
 */
mod.cos = Sk.ffi.functionPy(makeTrigFunction("cos", Sk.math.cos, Sk.ffh.cos));
/**
 * sin
 */
mod.sin = Sk.ffi.functionPy(makeTrigFunction("sin", Sk.math.sin, Sk.ffh.sin));
/**
 * tan
 */
mod.tan = Sk.ffi.functionPy(makeTrigFunction("tan", Math.tan, Sk.ffh.tan));

mod.asinh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("asinh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var L = x + Math.sqrt(x*x+1);
  return Sk.ffi.numberToPy(Math.log(L));
});

mod.acosh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("acosh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var L = x + Math.sqrt(x*x-1);
  return Sk.ffi.numberToPy(Math.log(L));
});

mod.atanh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("atanh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var L = (1+x)/(1-x);
  return Sk.ffi.numberToPy(Math.log(L)/2);
});

mod.sinh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("sinh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var e = Math.E;
  var p = Math.pow(e, x);
  var n = 1/p;
  var result = (p-n)/2;
  return Sk.ffi.numberToPy(result);
});

mod.cosh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("cosh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var e = Math.E;
  var p = Math.pow(e, x);
  var n = 1/p;
  var result = (p+n)/2;
  return Sk.ffi.numberToPy(result);
});

mod.tanh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("tanh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var e = Math.E;
  var p = Math.pow(e, x);
  var n = 1/p;
  var result = ((p-n)/2)/((p+n)/2);
  return Sk.ffi.numberToPy(result);
});

mod.ceil = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("ceil", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return Sk.ffi.numberToPy(Math.ceil(Sk.builtin.asnum$(x)));
});

mod.floor = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("floor", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return Sk.ffi.numberToPy(Math.floor(Sk.builtin.asnum$(x)));
});

mod.sqrt = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("sqrt", arguments, 1, 1);
  if (Sk.ffi.isNum(x)) {
    return Sk.ffi.numberToPy(Math.sqrt(Sk.ffi.remapToJs(x)));
  }
  else {
    return Sk.ffh.sqrt(x);
  }
});

mod.trunc = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("trunc", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return Sk.ffi.numberToPy(Sk.builtin.asnum$(x)|0);
});

mod.log = Sk.ffi.functionPy(function(x, base) {
  Sk.ffi.checkFunctionArgs("log", arguments, 1, 2);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));

  if (base === undefined)
  {
    return Sk.ffi.numberToPy(Math.log(Sk.builtin.asnum$(x)));
  }
  else
  {
    Sk.builtin.pyCheckType("base", "number", Sk.builtin.checkNumber(base));
    var ret = Math.log(Sk.builtin.asnum$(x)) / Math.log(Sk.builtin.asnum$(base));
    return Sk.ffi.numberToPy(ret);
  }
});

mod.log10 = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("log10", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  var ret = Math.log(Sk.builtin.asnum$(x)) / Math.log(10);
  return Sk.ffi.numberToPy(ret);
});

mod.pow = Sk.ffi.functionPy(function(x,y) {
  Sk.ffi.checkFunctionArgs("pow", arguments, 2, 2);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
  return Sk.ffi.numberToPy(Math.pow(Sk.builtin.asnum$(x), Sk.builtin.asnum$(y)));
});

mod.radians = Sk.ffi.functionPy(function(deg) {
  Sk.ffi.checkFunctionArgs("radians", arguments, 1, 1);
  Sk.builtin.pyCheckType("deg", "number", Sk.builtin.checkNumber(deg));
  var ret = Math.PI / 180.0 * Sk.builtin.asnum$(deg);
  return Sk.ffi.numberToPy(ret);
});

mod.degrees = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("degrees", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  var ret = 180.0 / Math.PI * Sk.builtin.asnum$(rad);
  return Sk.ffi.numberToPy(ret);
});

mod.hypot = Sk.ffi.functionPy(function(x, y) {
  Sk.ffi.checkFunctionArgs("hypot", arguments, 2, 2);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
  x = Sk.builtin.asnum$(x);
  y = Sk.builtin.asnum$(y);
  return Sk.ffi.numberToPy(Math.sqrt((x*x)+(y*y)));
});

mod.factorial = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("factorial", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Math.floor(Sk.builtin.asnum$(x));
  var r = 1;
  for (var i = 2; i <= x; i++)
  {
    r *= i;
  }
  return Sk.ffi.numberToIntPy(r);
});

/**
 * conjugate
 */
mod.conjugate = Sk.ffi.functionPy(function(numberPy) {
  Sk.ffi.checkFunctionArgs("conjugate", arguments, 1, 1);
  if (Sk.ffi.isNum(numberPy)) {
    return numberPy;
  }
  else {
    return Sk.ffh.conjugate(numberPy);
  }
});

/**
 * magnitude
 */
mod.magnitude = Sk.ffi.functionPy(function(numberPy) {
  Sk.ffi.checkFunctionArgs("magnitude", arguments, 1, 1);
  return Sk.ffh.magnitude(numberPy);
});

/**
 * quadrance
 */
mod.quadrance = Sk.ffi.functionPy(function(numberPy) {
  Sk.ffi.checkFunctionArgs("quadrance", arguments, 1, 1);
  return Sk.ffh.quadrance(numberPy);
});

};
}).call(this);
