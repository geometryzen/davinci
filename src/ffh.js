Sk.ffh = Sk.ffh || {};

var SPECIAL_METHOD_ADD     = '__add__';
var SPECIAL_METHOD_CLIFFORD_CONJUGATE = '__cliffordConjugate__';
var SPECIAL_METHOD_CONJUGATE = '__conjugate__';
var SPECIAL_METHOD_DIV     = '__div__';
var SPECIAL_METHOD_EQ      = '__eq__';
var SPECIAL_METHOD_COS     = '__cos__';
var SPECIAL_METHOD_EXP     = '__exp__';
var SPECIAL_METHOD_GETITEM = '__getitem__';
var SPECIAL_METHOD_INVERT  = '__invert__';
var SPECIAL_METHOD_LSHIFT  = '__lshift__';
var SPECIAL_METHOD_MUL     = '__mul__';
var SPECIAL_METHOD_NEG     = '__neg__';
var SPECIAL_METHOD_NONZERO = '__nonzero__';
var SPECIAL_METHOD_POS     = '__pos__';
var SPECIAL_METHOD_REPR    = '__repr__';
var SPECIAL_METHOD_RMUL    = '__rmul__';
var SPECIAL_METHOD_RSHIFT  = '__rshift__';
var SPECIAL_METHOD_SIN     = '__sin__';
var SPECIAL_METHOD_SQRT    = '__sqrt__';
var SPECIAL_METHOD_STR     = '__str__';
var SPECIAL_METHOD_SUB     = '__sub__';
var SPECIAL_METHOD_TAN     = '__tan__';
var SPECIAL_METHOD_XOR     = '__xor__';

/**
 * @param {string} name
 * @param {string} specialMethod
 * @param {Object} valuePy
 * @param {string=} internalMethod
 */
Sk.ffh.unaryExec = function(name, specialMethod, valuePy, internalMethod)
{
  if (valuePy[specialMethod])
  {
    return Sk.ffi.callsim(valuePy[specialMethod], valuePy);
  }
  else if (typeof internalMethod !== 'undefined' && valuePy[internalMethod])
  {
    return valuePy[internalMethod].call(valuePy);
  }
  else
  {
    throw Sk.ffi.typeError(name + "(" + Sk.ffi.remapToJs(Sk.ffh.repr(valuePy)) + ")");
  }
};
goog.exportSymbol("Sk.ffh.unaryExec", Sk.ffh.unaryExec);
/**
 * @param {Object} objPy
 * @param {number} index
 */
Sk.ffh.getitem = function(objPy, index)
{
  if (objPy[SPECIAL_METHOD_GETITEM])
  {
    return Sk.ffi.callsim(objPy[SPECIAL_METHOD_GETITEM], objPy, Sk.ffi.numberToIntPy(index));
  }
  else
  {
    throw Sk.ffi.notImplementedError(SPECIAL_METHOD_GETITEM);
  }
};
goog.exportSymbol("Sk.ffh.getitem", Sk.ffh.getitem);

Sk.ffh.add = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "Add");
};
goog.exportSymbol("Sk.ffh.add", Sk.ffh.add);

Sk.ffh.subtract = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "Sub");
};
goog.exportSymbol("Sk.ffh.subtract", Sk.ffh.subtract);

Sk.ffh.multiply = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "Mult");
};
goog.exportSymbol("Sk.ffh.multiply", Sk.ffh.multiply);

Sk.ffh.divide = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "Div");
};
goog.exportSymbol("Sk.ffh.divide", Sk.ffh.divide);

Sk.ffh.mod = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "Mod");
};
goog.exportSymbol("Sk.ffh.mod", Sk.ffh.mod);

Sk.ffh.xor = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "BitXor");
};
goog.exportSymbol("Sk.ffh.xor", Sk.ffh.xor);

Sk.ffh.lshift = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "LShift");
};
goog.exportSymbol("Sk.ffh.lshift", Sk.ffh.lshift);

Sk.ffh.rshift = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "RShift");
};
goog.exportSymbol("Sk.ffh.rshift", Sk.ffh.rshift);

Sk.ffh.pow = function(lhsPy, rhsPy) {
  return Sk.abstr.numberBinOp(lhsPy, rhsPy, "Pow");
};
goog.exportSymbol("Sk.ffh.rshift", Sk.ffh.rshift);

Sk.ffh.eq = function(lhsPy, rhsPy)
{
    return Sk.builtin.bool(Sk.misceval.richCompareBool(lhsPy, rhsPy, Sk.misceval.compareOp.Eq));
};
goog.exportSymbol("Sk.ffh.eq", Sk.ffh.eq);

Sk.ffh.lt = function(lhsPy, rhsPy)
{
    return Sk.builtin.bool(Sk.misceval.richCompareBool(lhsPy, rhsPy, Sk.misceval.compareOp.Lt));
};
goog.exportSymbol("Sk.ffh.lt", Sk.ffh.lt);

Sk.ffh.le = function(lhsPy, rhsPy)
{
    return Sk.builtin.bool(Sk.misceval.richCompareBool(lhsPy, rhsPy, Sk.misceval.compareOp.LtE));
};
goog.exportSymbol("Sk.ffh.le", Sk.ffh.le);

Sk.ffh.gt = function(lhsPy, rhsPy)
{
    return Sk.builtin.bool(Sk.misceval.richCompareBool(lhsPy, rhsPy, Sk.misceval.compareOp.Gt));
};
goog.exportSymbol("Sk.ffh.gt", Sk.ffh.gt);

Sk.ffh.ge = function(lhsPy, rhsPy)
{
    return Sk.builtin.bool(Sk.misceval.richCompareBool(lhsPy, rhsPy, Sk.misceval.compareOp.GtE));
};
goog.exportSymbol("Sk.ffh.ge", Sk.ffh.ge);

Sk.ffh.ne = function(lhsPy, rhsPy)
{
    return Sk.builtin.bool(Sk.misceval.richCompareBool(lhsPy, rhsPy, Sk.misceval.compareOp.NotEq));
};
goog.exportSymbol("Sk.ffh.ne", Sk.ffh.ne);

Sk.ffh.cliffordConjugate = function(valuePy) {
  return Sk.ffh.unaryExec("", SPECIAL_METHOD_CLIFFORD_CONJUGATE, valuePy, "nb$cliffordConjugate");
};
goog.exportSymbol("Sk.ffh.cliffordConjugate", Sk.ffh.cliffordConjugate);

Sk.ffh.conjugate = function(numberPy) {
  if (Sk.ffi.isNum(numberPy)) {
    return numberPy;
  }
  else {
    return Sk.ffh.unaryExec("", SPECIAL_METHOD_CONJUGATE, numberPy);
  }
};
goog.exportSymbol("Sk.ffh.conjugate", Sk.ffh.conjugate);

Sk.ffh.cos = function(valuePy)
{
  return Sk.ffh.unaryExec("cos", SPECIAL_METHOD_COS, valuePy, "nb$cos");
};
goog.exportSymbol("Sk.ffh.cos", Sk.ffh.cos);

Sk.ffh.sin = function(valuePy)
{
  return Sk.ffh.unaryExec("sin", SPECIAL_METHOD_SIN, valuePy, "nb$sin");
};
goog.exportSymbol("Sk.ffh.sin", Sk.ffh.sin);

Sk.ffh.tan = function(valuePy)
{
  return Sk.ffh.unaryExec("tan", SPECIAL_METHOD_TAN, valuePy, "nb$tan");
};
goog.exportSymbol("Sk.ffh.tan", Sk.ffh.tan);

Sk.ffh.exp = function(valuePy)
{
  return Sk.ffh.unaryExec("exp", SPECIAL_METHOD_EXP, valuePy, "nu$exponential");
};
goog.exportSymbol("Sk.ffh.exp", Sk.ffh.exp);

Sk.ffh.positive = function(valuePy)
{
  if (Sk.ffi.isFloat(valuePy))
  {
    return valuePy;
  }
  return Sk.abstr.numberUnaryOp(valuePy, Sk.abstr.unaryOp.UAdd);
};
goog.exportSymbol("Sk.ffh.positive", Sk.ffh.positive);

Sk.ffh.negative = function(valuePy)
{
  if (Sk.ffi.isFloat(valuePy))
  {
    var valueJs = Sk.ffi.remapToJs(valuePy);
    return Sk.ffi.numberToPy(-valueJs);
  }
  return Sk.abstr.numberUnaryOp(valuePy, Sk.abstr.unaryOp.USub);
};
goog.exportSymbol("Sk.ffh.negative", Sk.ffh.negative);

Sk.ffh.invert = function(valuePy)
{
  // TODO: Make like others?
  return Sk.ffh.unaryExec("~", SPECIAL_METHOD_INVERT, valuePy, "nb$invert");
};
goog.exportSymbol("Sk.ffh.invert", Sk.ffh.invert);

Sk.ffh.nonzero = function(valuePy)
{
  if (Sk.ffi.isFloat(valuePy))
  {
    var valueJs = Sk.ffi.remapToJs(valuePy);
    return Sk.ffi.booleanToPy(valueJs !== 0);
  }
  return Sk.ffh.unaryExec("", SPECIAL_METHOD_NONZERO, valuePy, "nb$nonzero");
};
goog.exportSymbol("Sk.ffh.nonzero", Sk.ffh.nonzero);

Sk.ffh.abs = function(valuePy)
{
  return Sk.ffh.unaryExec("abs", '__abs__', valuePy, "nu$abs");
};
goog.exportSymbol("Sk.ffh.abs", Sk.ffh.abs);

Sk.ffh.magnitude = function(valuePy)
{
  return Sk.ffh.unaryExec("magnitude", '__magnitude__', valuePy, "nu$magnitude");
};
goog.exportSymbol("Sk.ffh.magnitude", Sk.ffh.magnitude);

Sk.ffh.quadrance = function(valuePy)
{
  return Sk.ffh.unaryExec("quadrance", '__quadrance__', valuePy, "nu$quadrance");
};
goog.exportSymbol("Sk.ffh.quadrance", Sk.ffh.quadrance);

Sk.ffh.sqrt = function(valuePy)
{
  return Sk.ffh.unaryExec("sqrt", SPECIAL_METHOD_SQRT, valuePy);
};
goog.exportSymbol("Sk.ffh.sqrt", Sk.ffh.sqrt);

/**
 * @param {number} thisJs
 * @param {number} radix
 * @param {boolean} sign
 * @return {string}
 */
Sk.ffh.numberToFloatString = function(thisJs, radix, sign)
{
  goog.asserts.assertNumber(radix);
  goog.asserts.assertBoolean(sign);

  if (isNaN(thisJs))
  {
    return "nan";
  }

  if (sign === undefined) sign = true;

  if (thisJs == Infinity)
    return 'inf';
  if (thisJs == -Infinity && sign)
    return '-inf';
  if (thisJs == -Infinity && !sign)
    return 'inf';

  var work = sign ? thisJs : Math.abs(thisJs);

  var tmp;
  if (radix === undefined || radix === 10)
  {
    tmp = work.toPrecision(12);

    // transform fractions with 4 or more leading zeroes into exponents
    var idx = tmp.indexOf('.');
    var pre = work.toString().slice(0,idx);
    var post = work.toString().slice(idx);
    if (pre.match(/^-?0$/) && post.slice(1).match(/^0{4,}/))
    {
      if (tmp.length < 12)
          tmp = work.toExponential();
      else
          tmp = work.toExponential(11);
    }

    while (tmp.charAt(tmp.length-1) == "0" && tmp.indexOf('e') < 0)
    {
      tmp = tmp.substring(0,tmp.length-1)
    }
    if (tmp.charAt(tmp.length-1) == ".")
    {
      tmp = tmp + "0";
    }
    tmp = tmp.replace(new RegExp('\\.0+e'),'e',"i");
    // make exponent two digits instead of one (ie e+09 not e+9)
    tmp = tmp.replace(/(e[-+])([1-9])$/, "$10$2");
    // remove trailing zeroes before the exponent
    tmp = tmp.replace(/0+(e.*)/,'$1');
  }
  else
  {
    tmp = work.toString(radix);
  }

  if (tmp.indexOf('.') < 0 && tmp.indexOf('E') < 0 && tmp.indexOf('e') < 0)
  {
    tmp = tmp + '.0';
  }
  return tmp;
}
goog.exportSymbol("Sk.ffh.numberToFloatString", Sk.ffh.numberToFloatString);

Sk.ffh.str = function(valuePy)
{
  if (Sk.flyweight && Sk.ffi.isFloat(valuePy))
  {
    return Sk.ffi.stringToPy(Sk.ffh.numberToFloatString(valuePy, 10, true));
  }

  if (valuePy[SPECIAL_METHOD_STR])
  {
    return Sk.ffi.callsim(valuePy[SPECIAL_METHOD_STR], valuePy);
  }
  else if (valuePy["tp$str"])
  {
    return valuePy["tp$str"].call(valuePy);
  }
  else if (valuePy["tp$repr"])
  {
    return valuePy["tp$repr"].call(valuePy);
  }
  else
  {
    throw Sk.ffi.notImplementedError("str");
  }
};
/* FIXME: Apparently, not everything distinguishes str and repr.
Sk.ffh.str = function(valuePy)
{
  return Sk.ffh.unaryExec("str", SPECIAL_METHOD_STR, valuePy, "tp$str");
};
*/
goog.exportSymbol("Sk.ffh.str", Sk.ffh.str);

Sk.ffh.repr = function(valuePy)
{
  if (Sk.flyweight && Sk.ffi.isFloat(valuePy))
  {
    return Sk.ffi.stringToPy(Sk.ffh.numberToFloatString(valuePy, 10, true));
  }

  if (valuePy[SPECIAL_METHOD_REPR])
  {
    return Sk.ffi.callsim(valuePy[SPECIAL_METHOD_REPR], valuePy);
  }
  else if (valuePy["tp$repr"])
  {
    return valuePy["tp$repr"].call(valuePy);
  }
  else
  {
    throw Sk.ffi.notImplementedError("repr");
  }
};
goog.exportSymbol("Sk.ffh.repr", Sk.ffh.repr);

/**
 *
 */
Sk.ffh.evaluate = function(exprPy, envPy)
{
  if (Sk.ffi.isFloat(exprPy) ||  Sk.ffi.isInt(exprPy) || Sk.ffi.isLong(exprPy))
  {
    return exprPy;
  }
  else {
    return Sk.ffi.callsim(Sk.ffi.gattr(exprPy, "evaluate"), envPy);
  }
}
goog.exportSymbol("Sk.ffh.evaluate", Sk.ffh.evaluate);
