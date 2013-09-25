(function() {
Sk.builtin.defineMath = function(mod) {
Sk.ffi.checkFunctionArgs("defineMath", arguments, 1, 1);
/**
 * @const
 * @type {string}
 */
var ARG_ANGLE = "angle";
/**
 * @const
 * @type {string}
 */
var DIMENSIONLESS_NUMBER = "dimensionless number";
/**
 * @const
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUMBER = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];

mod.pi = Sk.builtin.assk$(Math.PI, Sk.builtin.nmber.float$);
mod.e =  Sk.builtin.assk$(Math.E, Sk.builtin.nmber.float$);

mod.fabs = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("fabs", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return new Sk.builtin.nmber(Math.abs(Sk.builtin.asnum$(x)), Sk.builtin.nmber.float$);
});

mod.asin = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("asin", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return new Sk.builtin.nmber(Math.asin(Sk.builtin.asnum$(rad)), Sk.builtin.nmber.float$);
});

mod.acos = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("acos", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return new Sk.builtin.nmber(Math.acos(Sk.builtin.asnum$(rad)), Sk.builtin.nmber.float$);
});

mod.atan = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("atan", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return new Sk.builtin.nmber(Math.atan(Sk.builtin.asnum$(rad)), Sk.builtin.nmber.float$);
});

mod.atan2 = Sk.ffi.functionPy(function(y, x) {
  Sk.ffi.checkFunctionArgs("atan2", arguments, 2, 2);
  Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return new Sk.builtin.nmber(Math.atan2(Sk.builtin.asnum$(y), Sk.builtin.asnum$(x)), Sk.builtin.nmber.float$);
});

mod.sin = Sk.ffi.functionPy(function(anglePy) {
  Sk.ffi.checkFunctionArgs("sin", arguments, 1, 1);
  if (Sk.ffi.isNum(anglePy)) {
    return Sk.ffi.numberToFloatPy(Math.sin(Sk.ffi.remapToJs(anglePy)));
  }
  else
  {
    try {
      var methodPy = Sk.ffi.gattr(anglePy, "sin");
      return Sk.ffi.callsim(methodPy);
    }
    catch(e) {
//    throw Sk.ffi.err.argument("angle").inFunction("sin").mustHaveType(DIMENSIONLESS_NUMBER);
      Sk.builtin.pyCheckType("rad", "number", false);
    }
  }
});

mod.cos = Sk.ffi.functionPy(function(anglePy) {
  Sk.ffi.checkFunctionArgs("cos", arguments, 1, 1);
  if (Sk.ffi.isNum(anglePy)) {
    return Sk.ffi.numberToFloatPy(Math.cos(Sk.ffi.remapToJs(anglePy)));
  }
  else
  {
    try {
      var methodPy = Sk.ffi.gattr(anglePy, "cos");
      return Sk.ffi.callsim(methodPy);
    }
    catch(e) {
      throw Sk.ffi.err.argument(ARG_ANGLE).inFunction("cos").mustHaveType(DIMENSIONLESS_NUMBER);
    }
  }
});

mod.tan = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("tan", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  return new Sk.builtin.nmber(Math.tan(Sk.builtin.asnum$(rad)), Sk.builtin.nmber.float$);
});

mod.asinh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("asinh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var L = x + Math.sqrt(x*x+1);
  return new Sk.builtin.nmber(Math.log(L), Sk.builtin.nmber.float$);
});

mod.acosh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("acosh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var L = x + Math.sqrt(x*x-1);
  return new Sk.builtin.nmber(Math.log(L), Sk.builtin.nmber.float$);
});

mod.atanh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("atanh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var L = (1+x)/(1-x);
  return new Sk.builtin.nmber(Math.log(L)/2, Sk.builtin.nmber.float$);
});

mod.sinh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("sinh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var e = Math.E;
  var p = Math.pow(e, x);
  var n = 1/p;
  var result = (p-n)/2;
  return new Sk.builtin.nmber(result, Sk.builtin.nmber.float$);
});

mod.cosh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("cosh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var e = Math.E;
  var p = Math.pow(e, x);
  var n = 1/p;
  var result = (p+n)/2;
  return new Sk.builtin.nmber(result, Sk.builtin.nmber.float$);
});

mod.tanh = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("tanh", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Sk.builtin.asnum$(x);
  var e = Math.E;
  var p = Math.pow(e, x);
  var n = 1/p;
  var result = ((p-n)/2)/((p+n)/2);
  return new Sk.builtin.nmber(result, Sk.builtin.nmber.float$);
});

mod.ceil = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("ceil", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return new Sk.builtin.nmber(Math.ceil(Sk.builtin.asnum$(x)), Sk.builtin.nmber.float$);
});

mod.floor = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("floor", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return new Sk.builtin.nmber(Math.floor(Sk.builtin.asnum$(x)), Sk.builtin.nmber.float$);
});

mod.sqrt = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("sqrt", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return new Sk.builtin.nmber(Math.sqrt(Sk.builtin.asnum$(x)), Sk.builtin.nmber.float$);
});

mod.trunc = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("trunc", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  return new Sk.builtin.nmber(Sk.builtin.asnum$(x)|0, Sk.builtin.nmber.float$);
});

mod.log = Sk.ffi.functionPy(function(x, base) {
  Sk.ffi.checkFunctionArgs("log", arguments, 1, 2);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));

  if (base === undefined) {
    return new Sk.builtin.nmber(Math.log(Sk.builtin.asnum$(x)), Sk.builtin.nmber.float$);
  }
  else {
    Sk.builtin.pyCheckType("base", "number", Sk.builtin.checkNumber(base));
    var ret = Math.log(Sk.builtin.asnum$(x)) / Math.log(Sk.builtin.asnum$(base));
    return new Sk.builtin.nmber(ret, Sk.builtin.nmber.float$);
  }
});

mod.log10 = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("log10", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  var ret = Math.log(Sk.builtin.asnum$(x)) / Math.log(10);
  return new Sk.builtin.nmber(ret, Sk.builtin.nmber.float$);
});

mod.exp = Sk.ffi.functionPy(function(anglePy) {
  Sk.ffi.checkFunctionArgs("exp", arguments, 1, 1);
  if (Sk.ffi.isNum(anglePy)) {
    return Sk.ffi.numberToFloatPy(Math.exp(Sk.ffi.remapToJs(anglePy)));
  }
  else {
    return Sk.ffi.exp(anglePy);
  }
});

mod.pow = Sk.ffi.functionPy(function(x,y) {
  Sk.ffi.checkFunctionArgs("pow", arguments, 2, 2);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
  return new Sk.builtin.nmber(Math.pow(Sk.builtin.asnum$(x), Sk.builtin.asnum$(y)), Sk.builtin.nmber.float$);
});

mod.radians = Sk.ffi.functionPy(function(deg) {
  Sk.ffi.checkFunctionArgs("radians", arguments, 1, 1);
  Sk.builtin.pyCheckType("deg", "number", Sk.builtin.checkNumber(deg));
  var ret = Math.PI / 180.0 * Sk.builtin.asnum$(deg);
  return new Sk.builtin.nmber(ret, Sk.builtin.nmber.float$);
});

mod.degrees = Sk.ffi.functionPy(function(rad) {
  Sk.ffi.checkFunctionArgs("degrees", arguments, 1, 1);
  Sk.builtin.pyCheckType("rad", "number", Sk.builtin.checkNumber(rad));
  var ret = 180.0 / Math.PI * Sk.builtin.asnum$(rad);
  return new Sk.builtin.nmber(ret, Sk.builtin.nmber.float$);
});

mod.hypot = Sk.ffi.functionPy(function(x, y) {
  Sk.ffi.checkFunctionArgs("hypot", arguments, 2, 2);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  Sk.builtin.pyCheckType("y", "number", Sk.builtin.checkNumber(y));
  x = Sk.builtin.asnum$(x);
  y = Sk.builtin.asnum$(y);
  return new Sk.builtin.nmber(Math.sqrt((x*x)+(y*y)), Sk.builtin.nmber.float$);
});

mod.factorial = Sk.ffi.functionPy(function(x) {
  Sk.ffi.checkFunctionArgs("factorial", arguments, 1, 1);
  Sk.builtin.pyCheckType("x", "number", Sk.builtin.checkNumber(x));
  x = Math.floor(Sk.builtin.asnum$(x));
  var r = 1;
  for (var i = 2; i <= x; i++)
    r *= i;
  return new Sk.builtin.nmber(r, Sk.builtin.nmber.int$);
});

};
}).call(this);
