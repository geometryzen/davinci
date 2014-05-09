Sk.ffh = Sk.ffh || {};

var SPECIAL_METHOD_ADD     = '__add__';
var SPECIAL_METHOD_CLIFFORD_CONJUGATE = '__cliffordConjugate__';
var SPECIAL_METHOD_CONJUGATE = '__conjugate__';
var SPECIAL_METHOD_EQ      = '__eq__';
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
var SPECIAL_METHOD_STR     = '__str__';
var SPECIAL_METHOD_SUB     = '__sub__';
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

Sk.ffh.divide = function(lhsPy, rhsPy)
{
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
  return Sk.ffh.unaryExec("cos", '__cos__', valuePy, "u$cos");
};
goog.exportSymbol("Sk.ffh.cos", Sk.ffh.cos);

Sk.ffh.sin = function(valuePy)
{
  return Sk.ffh.unaryExec("sin", '__sin__', valuePy, "u$sin");
};
goog.exportSymbol("Sk.ffh.sin", Sk.ffh.sin);

Sk.ffh.tan = function(valuePy)
{
  return Sk.ffh.unaryExec("tan", '__tan__', valuePy, "u$tan");
};
goog.exportSymbol("Sk.ffh.tan", Sk.ffh.tan);

Sk.ffh.acos = function(valuePy)
{
  return Sk.ffh.unaryExec("acos", '__acos__', valuePy, "u$acos");
};
goog.exportSymbol("Sk.ffh.acos", Sk.ffh.acos);

Sk.ffh.asin = function(valuePy)
{
  return Sk.ffh.unaryExec("asin", '__asin__', valuePy, "u$asin");
};
goog.exportSymbol("Sk.ffh.asin", Sk.ffh.asin);

Sk.ffh.atan = function(valuePy)
{
  return Sk.ffh.unaryExec("atan", '__atan__', valuePy, "u$atan");
};
goog.exportSymbol("Sk.ffh.atan", Sk.ffh.atan);

Sk.ffh.exp = function(valuePy)
{
  return Sk.ffh.unaryExec("exp", SPECIAL_METHOD_EXP, valuePy, "u$exp");
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
    return Sk.builtin.numberToPy(-valueJs);
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
  return Sk.ffh.unaryExec("abs", '__abs__', valuePy, "u$abs");
};
goog.exportSymbol("Sk.ffh.abs", Sk.ffh.abs);

Sk.ffh.magnitude = function(valuePy)
{
  return Sk.ffh.unaryExec("magnitude", '__magnitude__', valuePy, "u$magnitude");
};
goog.exportSymbol("Sk.ffh.magnitude", Sk.ffh.magnitude);

Sk.ffh.quadrance = function(valuePy)
{
  return Sk.ffh.unaryExec("quadrance", '__quadrance__', valuePy, "u$quadrance");
};
goog.exportSymbol("Sk.ffh.quadrance", Sk.ffh.quadrance);

Sk.ffh.sqrt = function(valuePy)
{
  return Sk.ffh.unaryExec("sqrt", '__sqrt__', valuePy, "u$sqrt");
};
goog.exportSymbol("Sk.ffh.sqrt", Sk.ffh.sqrt);

Sk.ffh.str = function(valuePy)
{
  if (Sk.flyweight && Sk.ffi.isFloat(valuePy))
  {
    return Sk.builtin.stringToPy(Sk.builtin.numberToFloatStringJs(valuePy, 10, true));
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
    return Sk.builtin.stringToPy(Sk.builtin.numberToFloatStringJs(valuePy, 10, true));
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

/**
 * @param {*} longPy
 * @return {Sk.builtin.NumberPy|number}
 */
Sk.ffi.promoteLongToFloat = function(longPy)
{
    goog.asserts.assert(Sk.ffi.isLong(longPy));

    var strPy = Sk.ffh.str(longPy);
    var strJs = Sk.ffi.remapToJs(strPy);
    goog.asserts.assertString(strJs);
    var valueJs = parseFloat(strJs);
    goog.asserts.assertNumber(valueJs);
    return /** @type {Sk.builtin.NumberPy|number} */(Sk.builtin.numberToPy(valueJs));
};
goog.exportSymbol("Sk.ffi.promoteLongToFloat", Sk.ffi.promoteLongToFloat);
