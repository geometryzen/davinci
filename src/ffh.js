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
var SPECIAL_METHOD_XOR     = '__xor__';

/**
 * @param {string} specialMethod
 * @param {Object} valuePy
 * @param {string=} internalMethod
 */
Sk.ffh.unaryExec = function(specialMethod, valuePy, internalMethod)
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
    throw Sk.ffi.notImplementedError(specialMethod);
  }
};
goog.exportSymbol("Sk.ffh.unaryExec", Sk.ffh.unaryExec);
/**
 *
 */
Sk.ffh.binaryExec = function(specialMethod, lhsPy, rhsPy, internalMethod)
{
  if (lhsPy[specialMethod])
  {
    return Sk.ffi.callsim(lhsPy[specialMethod], lhsPy, rhsPy);
  }
  else if (typeof internalMethod !== 'undefined' && lhsPy[internalMethod])
  {
    return lhsPy[internalMethod].call(lhsPy, rhsPy);
  }
  else
  {
    throw Sk.ffi.notImplementedError(specialMethod);
  }
};
goog.exportSymbol("Sk.ffh.binaryExec", Sk.ffh.binaryExec);
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
  return Sk.abstr.binary_op_(lhsPy, rhsPy, "Add");
  /*
  if (lhsPy["__add__"])
  {
    return Sk.ffi.callsim(lhsPy["__add__"], lhsPy, rhsPy);
  }
  else if (lhsPy["nb$add"])
  {
    return lhsPy["nb$add"].call(lhsPy, rhsPy);
  }
  else
  {
    throw Sk.ffi.notImplementedError("add");
  }
  */
};
goog.exportSymbol("Sk.ffh.add", Sk.ffh.add);

Sk.ffh.subtract = function(lhsPy, rhsPy) {
  return Sk.abstr.binary_op_(lhsPy, rhsPy, "Sub");
//return Sk.ffh.binaryExec(SPECIAL_METHOD_SUB, lhsPy, rhsPy, "nb$subtract");
};
goog.exportSymbol("Sk.ffh.subtract", Sk.ffh.subtract);

Sk.ffh.multiply = function(lhsPy, rhsPy) {
  return Sk.abstr.binary_op_(lhsPy, rhsPy, "Mult");
//return Sk.ffh.binaryExec(SPECIAL_METHOD_MUL, lhsPy, rhsPy, "nb$multiply");
};
goog.exportSymbol("Sk.ffh.multiply", Sk.ffh.multiply);

Sk.ffh.rmultiply = function(lhsPy, rhsPy) {return Sk.ffh.binaryExec(SPECIAL_METHOD_RMUL, lhsPy, rhsPy, "nb$multiply");};
goog.exportSymbol("Sk.ffh.rmultiply", Sk.ffh.rmultiply);

Sk.ffh.divide = function(lhsPy, rhsPy) {return Sk.ffh.binaryExec(SPECIAL_METHOD_DIV, lhsPy, rhsPy, "nb$divide");};
goog.exportSymbol("Sk.ffh.divide", Sk.ffh.divide);

Sk.ffh.xor = function(lhsPy, rhsPy) {return Sk.ffh.binaryExec(SPECIAL_METHOD_XOR, lhsPy, rhsPy, "nb$xor");};
goog.exportSymbol("Sk.ffh.xor", Sk.ffh.xor);

Sk.ffh.lshift = function(lhsPy, rhsPy) {return Sk.ffh.binaryExec(SPECIAL_METHOD_LSHIFT, lhsPy, rhsPy, "nb$lshift");};
goog.exportSymbol("Sk.ffh.lshift", Sk.ffh.lshift);

Sk.ffh.rshift = function(lhsPy, rhsPy) {return Sk.ffh.binaryExec(SPECIAL_METHOD_RSHIFT, lhsPy, rhsPy, "nb$rshift");};
goog.exportSymbol("Sk.ffh.rshift", Sk.ffh.rshift);

Sk.ffh.equal = function(lhsPy, rhsPy)
{
    if (lhsPy[SPECIAL_METHOD_EQ])
    {
        return Sk.ffi.callsim(lhsPy[SPECIAL_METHOD_EQ], lhsPy, rhsPy);
    }
    else
    {
        throw Sk.ffi.notImplementedError("equal(" + Sk.ffh.repr(lhsPy) + ", " + Sk.ffh.repr(rhsPy) + ")");
    }
};
goog.exportSymbol("Sk.ffh.equal", Sk.ffh.equal);

Sk.ffh.cliffordConjugate = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_CLIFFORD_CONJUGATE, valuePy, "nb$cliffordConjugate");};
goog.exportSymbol("Sk.ffh.cliffordConjugate", Sk.ffh.cliffordConjugate);

Sk.ffh.conjugate = function(numberPy) {
  if (Sk.ffi.isNum(numberPy)) {
    return numberPy;
  }
  else {
    return Sk.ffh.unaryExec(SPECIAL_METHOD_CONJUGATE, numberPy);
  }
};
goog.exportSymbol("Sk.ffh.conjugate", Sk.ffh.conjugate);

Sk.ffh.cos = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_COS, valuePy, "nb$cos");};
goog.exportSymbol("Sk.ffh.cos", Sk.ffh.cos);

Sk.ffh.sin = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_SIN, valuePy, "nb$sin");};
goog.exportSymbol("Sk.ffh.sin", Sk.ffh.sin);

Sk.ffh.exp = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_EXP, valuePy, "nb$exp");};
goog.exportSymbol("Sk.ffh.exp", Sk.ffh.exp);

Sk.ffh.positive = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_POS, valuePy, "nb$positive");};
goog.exportSymbol("Sk.ffh.positive", Sk.ffh.positive);

Sk.ffh.negative = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_NEG, valuePy, "nb$negative");};
goog.exportSymbol("Sk.ffh.negative", Sk.ffh.negative);

Sk.ffh.invert = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_INVERT, valuePy, "nb$invert");};
goog.exportSymbol("Sk.ffh.invert", Sk.ffh.invert);

Sk.ffh.nonzero = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_NONZERO, valuePy, "nb$nonzero");};
goog.exportSymbol("Sk.ffh.nonzero", Sk.ffh.nonzero);

Sk.ffh.sqrt = function(valuePy) {return Sk.ffh.unaryExec(SPECIAL_METHOD_SQRT, valuePy);};
goog.exportSymbol("Sk.ffh.sqrt", Sk.ffh.sqrt);

Sk.ffh.str = function(valuePy) {
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
goog.exportSymbol("Sk.ffh.str", Sk.ffh.str);

Sk.ffh.repr = function(valuePy) {
  return Sk.ffh.unaryExec(SPECIAL_METHOD_REPR, valuePy, "tp$repr");
};
goog.exportSymbol("Sk.ffh.repr", Sk.ffh.repr);
/**
 *
 */
Sk.ffh.evaluate = function(exprPy, envPy) {
  if (Sk.ffi.isFloat(exprPy) ||  Sk.ffi.isInt(exprPy) || Sk.ffi.isLong(exprPy)) {
    return exprPy;
  }
  else {
    return Sk.ffi.callsim(Sk.ffi.gattr(exprPy, "evaluate"), envPy);
  }
}
goog.exportSymbol("Sk.ffh.evaluate", Sk.ffh.evaluate);
