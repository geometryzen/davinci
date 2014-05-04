// long aka "bignumber" implementation
//
//  Using javascript BigInteger by Tom Wu
/**
 * @constructor
 * @param {*} x
 * @param {number=} base
 */
Sk.builtin.lng = function(x, base)  /* long is a reserved word */
{
    base = Sk.builtin.asnum$(base);
    if (!(this instanceof Sk.builtin.lng)) return new Sk.builtin.lng(x, base);

    if (x === undefined)
    {
      this.biginteger = new Sk.builtin.biginteger(0);
    }
    else if (Sk.ffi.isLong(x))
    {
      this.biginteger = x.biginteger.clone();
    }
    else if (x instanceof Sk.builtin.biginteger)
    {
      this.biginteger = x;
    }
    else if (typeof x === 'string')
    {
      return Sk.ffi.longFromString(x, base);
    }
    else if (Sk.ffi.isStr(x))
    {
      return Sk.ffi.longFromString(Sk.ffi.remapToJs(x), base);
    }
    else
    {
      if ((x !== undefined) && (!Sk.builtin.checkString(x) && !Sk.builtin.checkNumber(x)))
      {
          // Not sure what the intention is here!
          if (x === true)
          {
            x = 1;
          }
          else if (x === false)
          {
            x = 0;
          }
          else
          {
            throw new Sk.builtin.TypeError("long() argument must be a string or a number, not '" + Sk.ffi.typeName(x) + "'");
          }
      }

      x = Sk.builtin.asnum$nofloat(x);
      this.biginteger = new Sk.builtin.biginteger(x);
    }

    return this;
};

Sk.builtin.lng.prototype.tp$index = function()
{
    return parseInt(this.str$(10, true), 10);
};

Sk.builtin.lng.prototype.tp$hash = function()
{
    return this.tp$index();
};

Sk.builtin.lng.prototype.tp$name = "long";
Sk.builtin.lng.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('long', Sk.builtin.lng);

//  Threshold to determine when types should be converted to long
Sk.builtin.lng.threshold$ = Math.pow(2, 53);

//Sk.builtin.lng.LONG_DIVIDE$ = 0;
//Sk.builtin.lng.FLOAT_DIVIDE$ = -1;
//Sk.builtin.lng.VARIABLE_DIVIDE$ = -2;
//// Positive values reserved for scaled, fixed precision big number implementations where mode = number of digits to the right of the decimal
//Sk.builtin.lng.dividemode$ = Sk.builtin.lng.LONG_DIVIDE$;

Sk.builtin.lng.prototype.cantBeInt = function()
{
  return (this.longCompare(Sk.ffi.MAX_INT) > 0) || (this.longCompare(Sk.ffi.MIN_INT) < 0);
}

//Sk.builtin.lng.longDivideMode = function(m) 
//{
//  if (m) {
//    if (m instanceof Sk.builtin.str) {
//      if (m.v == 'float') m = Sk.builtin.lng.FLOAT_DIVIDE$;
//      else if (m.v == 'long')  m = Sk.builtin.lng.LONG_DIVIDE$;
//      else if (m.v == 'variable') m = Sk.builtin.lng.VARIABLE_DIVIDE$;
//      else goog.asserts.assert(true, "Invalid long division mode.");
//    }
//    Sk.builtin.lng.dividemode$ = m;
//  }
//  if (Sk.builtin.lng.dividemode$ == Sk.builtin.lng.FLOAT_DIVIDE$)
//    return Sk.ffi.stringToPy('float');
//  if (Sk.builtin.lng.dividemode$ == Sk.builtin.lng.VARIABLE_DIVIDE$)
//    return Sk.ffi.stringToPy('variable');
//  return Sk.ffi.stringToPy('long'); 
//};

Sk.builtin.lng.fromInt$ = function(ival) 
{
  return new Sk.builtin.lng(ival);
};

Sk.builtin.lng.prototype.toInt$ = function()
{
    return this.biginteger.intValue();
};

Sk.builtin.lng.prototype.clone = function()
{
  return new Sk.builtin.lng(this);
};

Sk.builtin.lng.prototype.nb$add = function(other)
{
  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    if (Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(parseFloat(this.str$(10, true))).nb$add(other);
    }
    else
    {
      other = Sk.ffi.promoteIntToLong(other);
    }
  }

  if (Sk.ffi.isLong(other))
  {
    return new Sk.builtin.lng(this.biginteger.add(other.biginteger));
  }

  if (other instanceof Sk.builtin.biginteger)
  {
    return new Sk.builtin.lng(this.biginteger.add(other));
  }

  return new Sk.builtin.lng(this.biginteger.add(new Sk.builtin.biginteger(other)));
};

Sk.builtin.lng.prototype.nb$inplace_add = Sk.builtin.lng.prototype.nb$add;

Sk.builtin.lng.prototype.nb$subtract = function(other)
{
  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    if (Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(parseFloat(this.str$(10, true))).nb$subtract(other);
    }
    else
    {
      other = Sk.ffi.promoteIntToLong(other);
    }
  }

  if (other instanceof Sk.builtin.lng)
  {
    return new Sk.builtin.lng(this.biginteger.subtract(other.biginteger));
  }

  if (other instanceof Sk.builtin.biginteger)
  {
    return new Sk.builtin.lng(this.biginteger.subtract(other));
  }

  return new Sk.builtin.lng(this.biginteger.subtract(new Sk.builtin.biginteger(other)));
};

Sk.builtin.lng.prototype.nb$inplace_subtract = Sk.builtin.lng.prototype.nb$subtract;

Sk.builtin.lng.prototype.nb$multiply = function(other)
{
  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    if (Sk.ffi.isFloat(other))
    {
      return Sk.ffh.multiply(Sk.ffh.promoteLongToFloat(this), other);
    }
    else
    {
      other = Sk.ffi.promoteIntToLong(other);
    }
  }

  if (other instanceof Sk.builtin.lng)
  {
    return new Sk.builtin.lng(this.biginteger.multiply(other.biginteger));
  }

  if (other instanceof Sk.builtin.biginteger)
  {
    return new Sk.builtin.lng(this.biginteger.multiply(other));
  }

  return new Sk.builtin.lng(this.biginteger.multiply(new Sk.builtin.biginteger(other)));
};

Sk.builtin.lng.prototype.nb$inplace_multiply = Sk.builtin.lng.prototype.nb$multiply;

Sk.builtin.lng.prototype.nb$divide = function(other)
{
  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    if (Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(parseFloat(this.str$(10, true))).nb$divide(other);
    }
    else
    {
      other = Sk.ffi.promoteIntToLong(other);
    }
  }

  var result;
//  if (Sk.builtin.lng.dividemode$ == Sk.builtin.lng.FLOAT_DIVIDE$ || Sk.builtin.lng.dividemode$ == Sk.builtin.lng.VARIABLE_DIVIDE$) {
//    if (other instanceof Sk.builtin.lng) {
//      result = this.biginteger.divideAndRemainder(other.biginteger);
//    } else if (other instanceof Sk.builtin.biginteger) {
//      result = this.biginteger.divideAndRemainder(other);
//    } else {
//      result = this.biginteger.divideAndRemainder(new Sk.builtin.biginteger(other));
//    }
//
//    //  result = Array of quotient [0], remainder [1]
//
//    if (result [1].compare(Sk.builtin.biginteger.ZERO) != 0) {
//      //  Non-zero remainder -- this will be a float no matter what
//      return parseFloat(this.biginteger.toString()) / parseFloat(other.biginteger.toString());
//    } else {
//      //  No remainder
//      if (Sk.builtin.lng.dividemode$ == Sk.builtin.lng.FLOAT_DIVIDE$)
//        return parseFloat(result [0].toString());   //  Float option with no remainder, return quotient as float
//      else
//        return new Sk.builtin.lng(result [0]);      //  Variable option with no remainder, return new long from quotient
//    }
//  }

//  Standard, long result mode

  if (! (other instanceof Sk.builtin.lng) ) {
    other = new Sk.builtin.lng(other);
  }

  //  Special logic to round DOWN towards negative infinity for negative results
  var thisneg = this.nb$isnegative();
  var otherneg = other.nb$isnegative();
  if ((thisneg && !otherneg) || (otherneg && !thisneg)) {
    result = this.biginteger.divideAndRemainder(other.biginteger);
    //  If remainder is zero or positive, just return division result
    if (result[1].trueCompare(Sk.builtin.biginteger.ZERO) == 0) {
      //  No remainder, just return result
      return new Sk.builtin.lng(result[0]);
    } else {
      //  Reminder... subtract 1 from the result (like rounding to neg infinity)
      result = result[0].subtract(Sk.builtin.biginteger.ONE);
      return new Sk.builtin.lng(result);
    }
  } else {
    return new Sk.builtin.lng(this.biginteger.divide(other.biginteger));
  }
};

Sk.builtin.lng.prototype.nb$inplace_divide = Sk.builtin.lng.prototype.nb$divide;

Sk.builtin.lng.prototype.nb$floor_divide = function(other)
{
  if (Sk.ffi.isFloat(other))
  {
    return Sk.ffi.numberToPy(parseFloat(this.str$(10, true))).nb$floor_divide(other);
  }
  else
  {
    return this.nb$divide(other);
  }
};

Sk.builtin.lng.prototype.nb$inplace_floor_divide = Sk.builtin.lng.prototype.nb$floor_divide;

Sk.builtin.lng.prototype.nb$remainder = function(other)
{
  if (this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO) === 0)
  {
    if ((Sk.ffi.isFloat(other) || Sk.ffi.isInt(other)) && Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(0);
    }
    else
    {
      return new Sk.builtin.lng(0);
    }
  }

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    if (Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(parseFloat(this.str$(10, true))).nb$remainder(other);
    }
    else
    {
      other = Sk.ffi.promoteIntToLong(other);
    }
  }

  if (! (other instanceof Sk.builtin.lng) )
  {
    other = new Sk.builtin.lng(other);
  }

  var tmp = new Sk.builtin.lng(this.biginteger.remainder(other.biginteger));
  if (this.nb$isnegative())
  {
    if (other.nb$ispositive() && tmp.nb$nonzero())
      tmp = tmp.nb$add(other).nb$remainder(other);
  }
  else
  {
    if (other.nb$isnegative() && tmp.nb$nonzero())
      tmp = tmp.nb$add(other);
  }
  return tmp;

};

Sk.builtin.lng.prototype.nb$inplace_remainder = Sk.builtin.lng.prototype.nb$remainder;

/**
 * @param {number|Object} n
 * @param {number|Object=} mod
 * @suppress {checkTypes}
 */
Sk.builtin.lng.prototype.nb$power = function(n, mod)
{
  if (mod !== undefined)
  {
    n = new Sk.builtin.biginteger(Sk.builtin.asnum$(n));
    mod = new Sk.builtin.biginteger(Sk.builtin.asnum$(mod));
    return new Sk.builtin.lng(this.biginteger.modPowInt(n, mod));
  }
  if (typeof n === "number")
  {
    if (n < 0)
    {
      var thisAsFloat = Sk.ffi.numberToPy(this.str$(10, true));
      return thisAsFloat.nb$power(n);
    }
    else
      return new Sk.builtin.lng(this.biginteger.pow(new Sk.builtin.biginteger(n)));
  }

  if (n instanceof Sk.builtin.NumberPy)
  {
    if (Sk.ffi.isFloat(n) || n.v < 0)
    {
      return Sk.ffi.numberToPy(this.str$(10, true)).nb$power(n);
    }
    else
    {
      n = Sk.ffi.promoteIntToLong(n);
    }
  }

  if (Sk.ffi.isLong(n))
  {
    if (n.nb$isnegative())
    {
      return Sk.ffi.numberToPy(this.str$(10, true)).nb$power(n);
    }
    else
    {
      return new Sk.builtin.lng(this.biginteger.pow(n.biginteger));
    }
  }

  if (Sk.ffi.isBigInteger(n))
  {
    if (n.isnegative())
    {
      return Sk.ffi.numberToPy(this.str$(10, true)).nb$power(n);
    }
    else
    {
      return new Sk.builtin.lng(this.biginteger.pow(n));
    }
  }

  return new Sk.builtin.lng(this.biginteger.pow(new Sk.builtin.biginteger(n)));
};

Sk.builtin.lng.prototype.nb$inplace_power = Sk.builtin.lng.prototype.nb$power;

Sk.builtin.lng.prototype.nb$lshift = function(other)
{
    if (other instanceof Sk.builtin.lng) {
  if (other.biginteger.signum() < 0) {
      throw new Sk.builtin.ValueError("negative shift count");
  }
  return new Sk.builtin.lng(this.biginteger.shiftLeft(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
  if (other.signum() < 0) {
      throw new Sk.builtin.ValueError("negative shift count");
  }
  return new Sk.builtin.lng(this.biginteger.shiftLeft(other));
    }
    
    if (other < 0) {
  throw new Sk.builtin.ValueError("negative shift count");
    }
    other = Sk.builtin.asnum$(other);
    return new Sk.builtin.lng(this.biginteger.shiftLeft(new Sk.builtin.biginteger(other)));
}

Sk.builtin.lng.prototype.nb$inplace_lshift = Sk.builtin.lng.prototype.nb$lshift;

Sk.builtin.lng.prototype.nb$rshift = function(other)
{
    if (other instanceof Sk.builtin.lng) {
  if (other.biginteger.signum() < 0) {
      throw new Sk.builtin.ValueError("negative shift count");
  }
  return new Sk.builtin.lng(this.biginteger.shiftRight(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
  if (other.signum() < 0) {
      throw new Sk.builtin.ValueError("negative shift count");
  }
  return new Sk.builtin.lng(this.biginteger.shiftRight(other));
    }
    
    if (other < 0) {
  throw new Sk.builtin.ValueError("negative shift count");
    }
    other = Sk.builtin.asnum$(other);
    return new Sk.builtin.lng(this.biginteger.shiftRight(new Sk.builtin.biginteger(other)));
}

Sk.builtin.lng.prototype.nb$inplace_rshift = Sk.builtin.lng.prototype.nb$rshift;

Sk.builtin.lng.prototype.nb$and = function(other)
{
    if (other instanceof Sk.builtin.lng) {
  return new Sk.builtin.lng(this.biginteger.and(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
  return new Sk.builtin.lng(this.biginteger.and(other));
    }
    
    other = Sk.builtin.asnum$(other);
    return new Sk.builtin.lng(this.biginteger.and(new Sk.builtin.biginteger(other)));
}

Sk.builtin.lng.prototype.nb$inplace_and = Sk.builtin.lng.prototype.nb$and;

Sk.builtin.lng.prototype.nb$or = function(other)
{
    if (other instanceof Sk.builtin.lng) {
  return new Sk.builtin.lng(this.biginteger.or(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
  return new Sk.builtin.lng(this.biginteger.or(other));
    }
    
    other = Sk.builtin.asnum$(other);
    return new Sk.builtin.lng(this.biginteger.or(new Sk.builtin.biginteger(other)));
}

Sk.builtin.lng.prototype.nb$inplace_or = Sk.builtin.lng.prototype.nb$or;

Sk.builtin.lng.prototype.nb$xor = function(other)
{
    if (other instanceof Sk.builtin.lng) {
  return new Sk.builtin.lng(this.biginteger.xor(other.biginteger));
    }
    if (other instanceof Sk.builtin.biginteger) {
  return new Sk.builtin.lng(this.biginteger.xor(other));
    }
    
    other = Sk.builtin.asnum$(other);
    return new Sk.builtin.lng(this.biginteger.xor(new Sk.builtin.biginteger(other)));
}

Sk.builtin.lng.prototype.nb$inplace_xor = Sk.builtin.lng.prototype.nb$xor;

Sk.builtin.lng.prototype.nu$negative = function()
{
  return new Sk.builtin.lng(this.biginteger.negate());
};

Sk.builtin.lng.prototype.nb$positive = function() { return this.clone(); };

Sk.builtin.lng.prototype.nb$nonzero = function()
{
  return this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO) !== 0;
};

Sk.builtin.lng.prototype.nb$isnegative = function()
{
  return this.biginteger.isnegative();
  //return this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO) < 0;
};

Sk.builtin.lng.prototype.nb$ispositive = function()
{
  return ! this.biginteger.isnegative();
  //return this.biginteger.trueCompare(Sk.builtin.biginteger.ZERO) >= 0;
};

Sk.builtin.lng.prototype.longCompare = function(other)
{
  if (typeof other === "boolean")
  {
    if (other)
      other = 1;
    else
      other = 0;
  }

  var tmp;

  if (typeof other === "number")
  {
    other = new Sk.builtin.lng(other);
  }

  if (other instanceof Sk.builtin.NumberPy)
  {
    if (Sk.ffi.isInt(other) || other.v % 1 == 0)
    {
      var otherAsLong = new Sk.builtin.lng(other.v);
      return this.longCompare(otherAsLong);
    }
    else
    {
      return Sk.ffi.numberToPy(parseFloat(this.str$(10, true))).numberCompare(other);
    }
  }
  else if (Sk.ffi.isLong(other))
  {
    return this.biginteger.subtract(other.biginteger);
  }
  else if (Sk.ffi.isBigInteger(other))
  {
    return this.biginteger.subtract(other);
  }
  else
  {
    return this.biginteger.subtract(new Sk.builtin.biginteger(other));
  }
}

Sk.builtin.lng.prototype.__eq__ = function(me, other) {
  return me.longCompare(other) == 0 && !(other === Sk.builtin.none.none$);
};

Sk.builtin.lng.prototype.__ne__ = function(me, other) {
  return me.longCompare(other) != 0 || (other === Sk.builtin.none.none$);
};

Sk.builtin.lng.prototype.__lt__ = function(me, other) {
  return me.longCompare(other) < 0;
};

Sk.builtin.lng.prototype.__le__ = function(me, other) {
  return me.longCompare(other) <= 0;
};

Sk.builtin.lng.prototype.__gt__ = function(me, other) {
  return me.longCompare(other) > 0;
};

Sk.builtin.lng.prototype.__ge__ = function(me, other) {
  return me.longCompare(other) >= 0;
};

Sk.builtin.lng.prototype.tp$repr = function()
{
    return Sk.ffi.stringToPy(this.str$(10, true) + "L");
};

Sk.builtin.lng.prototype.tp$str = function()
{
    return Sk.ffi.stringToPy(this.str$(10, true));
};

/**
 * @param {number} radix
 * @param {boolean} sign Determines whether the sign is preserved.
 * @return {string}
 */
Sk.builtin.lng.prototype.str$ = function(radix, sign)
{
  goog.asserts.assertNumber(radix);
  goog.asserts.assertBoolean(sign);

  if (radix === undefined) radix = 10;
  if (sign === undefined) sign = true;

  var work = sign ? this.biginteger : this.biginteger.abs();

  return work.toString(radix);
};
