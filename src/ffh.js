Sk.ffh = Sk.ffh || {};

var SPECIAL_METHOD_ADD     = '__add__';
var SPECIAL_METHOD_EQ      = '__eq__';
var SPECIAL_METHOD_SUB     = '__sub__';
var SPECIAL_METHOD_MUL     = '__mul__';
var SPECIAL_METHOD_NEG     = '__neg__';
var SPECIAL_METHOD_NONZERO = '__nonzero__';

Sk.ffh.add = function(lhsPy, rhsPy)
{
    if (lhsPy['__add__'])
    {
        return Sk.ffi.callsim(lhsPy["__add__"], lhsPy, rhsPy);
    }
    else if (lhsPy.nb$add)
    {
        return lhsPy.nb$add.call(lhsPy, rhsPy);
    }
    else
    {
        throw Sk.ffi.notImplementedError("add(" + Sk.ffi.repr(lhsPy) + ", " + Sk.ffi.repr(rhsPy) + ")");
    }
};
goog.exportSymbol("Sk.ffh.add", Sk.ffh.add);

Sk.ffh.subtract = function(lhsPy, rhsPy)
{
    if (lhsPy[SPECIAL_METHOD_SUB])
    {
        return Sk.ffi.callsim(lhsPy[SPECIAL_METHOD_SUB], lhsPy, rhsPy);
    }
    else if (lhsPy.nb$subtract)
    {
        return lhsPy.nb$subtract.call(lhsPy, rhsPy);
    }
    else
    {
        throw Sk.ffi.notImplementedError("subtract(" + Sk.ffi.repr(lhsPy) + ", " + Sk.ffi.repr(rhsPy) + ")");
    }
};
goog.exportSymbol("Sk.ffh.add", Sk.ffh.add);

/**
 * @param {Object} lhsPy
 * @param {Object} rhsPy
 */
Sk.ffh.multiply = function(lhsPy, rhsPy)
{
    if (lhsPy[SPECIAL_METHOD_MUL])
    {
        return Sk.ffi.callsim(lhsPy[SPECIAL_METHOD_MUL], lhsPy, rhsPy);
    }
    else if (lhsPy.nb$multiply)
    {
        return lhsPy.nb$multiply.call(lhsPy, rhsPy);
    }
    else
    {
        throw Sk.ffi.notImplementedError("multiply(" + Sk.ffi.repr(lhsPy) + ", " + Sk.ffi.repr(rhsPy) + ")");
    }
};
goog.exportSymbol("Sk.ffh.multiply", Sk.ffh.multiply);

Sk.ffh.equal = function(lhsPy, rhsPy)
{
    if (lhsPy[SPECIAL_METHOD_EQ])
    {
        return Sk.ffi.callsim(lhsPy[SPECIAL_METHOD_EQ], lhsPy, rhsPy);
    }
    else
    {
        throw Sk.ffi.notImplementedError("equal(" + Sk.ffi.repr(lhsPy) + ", " + Sk.ffi.repr(rhsPy) + ")");
    }
};
goog.exportSymbol("Sk.ffh.equal", Sk.ffh.equal);

/**
 * Computes the negative of a value by either invoking the special __neg__ function or the native equivalent.
 */
Sk.ffh.neg = function(valuePy)
{
  if (valuePy[SPECIAL_METHOD_NEG]) {
    return Sk.ffi.callsim(valuePy[SPECIAL_METHOD_NEG], valuePy);
  }
  else if (valuePy.nb$negative) {
    return valuePy.nb$negative.call(valuePy);
  }
  else {
    throw Sk.ffi.notImplementedError("neg(" + Sk.ffi.repr(valuePy) + ")");
  }
};
goog.exportSymbol("Sk.ffh.neg", Sk.ffh.neg);

Sk.ffh.nonzero = function(valuePy)
{
    if (valuePy[SPECIAL_METHOD_NONZERO])
    {
        return Sk.ffi.callsim(valuePy[SPECIAL_METHOD_NONZERO], valuePy);
    }
    else
    {
        throw Sk.ffi.notImplementedError(SPECIAL_METHOD_NONZERO);
    }
};
goog.exportSymbol("Sk.ffh.nonzero", Sk.ffh.nonzero);
