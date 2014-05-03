// long aka "bignumber" implementation
//
//  Using javascript BigInteger by Tom Wu
/**
 * @constructor
 */
Sk.builtin.nmber = function(x, skType)  /* number is a reserved word */
{
  if (!(this instanceof Sk.builtin.nmber))
  {
    return new Sk.builtin.nmber(x, skType);
  } 

  if (x instanceof Sk.builtin.str)
    x = x.v;

  if (x instanceof Sk.builtin.nmber)
  {
    this.v = x.v;
    this.skType = x.skType;
  }
  else if (typeof x === "number")
  {
    this.v = x;
    if (skType === undefined)
    {
      if (x > Sk.builtin.nmber.threshold$ || x < -Sk.builtin.nmber.threshold$ || x % 1 != 0)
        this.skType = Sk.builtin.nmber.float$;
      else
        this.skType = Sk.builtin.nmber.int$;
    }
    else
    {
      this.skType = skType;
      if (skType === Sk.builtin.nmber.int$)
      if (x > Sk.builtin.nmber.threshold$ || x < -Sk.builtin.nmber.threshold$)
        return new Sk.builtin.lng(x);
    }
  }
  else if (typeof x === "string")
  {
    var result = Sk.numberFromStr(x);
    if (skType !== undefined)
      result.skType = skType;
    if (skType === Sk.builtin.nmber.int$)
      if (result.v > Sk.builtin.nmber.threshold$ || result.v < -Sk.builtin.nmber.threshold$)
        return new Sk.builtin.lng(x);
    return result;
  }
  else if (x instanceof Sk.builtin.lng)
  {
    return Sk.numberFromStr(x.str$(10, true));
  }
  else if (x instanceof Sk.builtin.biginteger)
  {
    var result = Sk.numberFromStr(x.toString());
    if (skType !== undefined)
      result.skType = skType;
    if (skType === Sk.builtin.nmber.int$)
      if (result.v > Sk.builtin.nmber.threshold$ || result.v < -Sk.builtin.nmber.threshold$)
        return new Sk.builtin.lng(x);
  }
  else
  {
    this.v = 0;
    if (skType === undefined)
      this.skType = Sk.builtin.nmber.int$;
    else
      this.skType = skType;
  }

  return this;
};

Sk.builtin.nmber.prototype.tp$index = function()
{
    return this.v;
};

Sk.builtin.nmber.prototype.tp$hash = function()
{
    return this.v;
};

Sk.builtin.nmber.prototype.tp$name = "number";
Sk.builtin.nmber.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('number', Sk.builtin.nmber);

//  Threshold to determine when types should be converted to long
Sk.builtin.nmber.threshold$ = Math.pow(2, 53);
Sk.builtin.nmber.float$ = "float";
Sk.builtin.nmber.int$ = "int";

Sk.builtin.nmber.fromInt$ = function(ival)
{
  return new Sk.builtin.nmber(ival, undefined);
};

// js string (not Sk.builtin.str) -> long. used to create longs in transformer, respects
// 0x, 0o, 0b, etc.
Sk.numberFromStr = function(s)
{
  if (s == 'inf')
  {
    return Sk.ffi.numberToPy(Infinity);
  }
  if (s == '-inf')
  {
    return Sk.ffi.numberToPy(-Infinity);
  }

  var res = new Sk.builtin.nmber(0, undefined);

  if (s.indexOf('.') !== -1 || s.indexOf('e') !== -1 || s.indexOf('E') !== -1)
  {
    return Sk.ffi.numberToPy(parseFloat(s));
  }

  // ugly gunk to placate an overly-nanny closure-compiler:
  // http://code.google.com/p/closure-compiler/issues/detail?id=111
  // this is all just to emulate "parseInt(s)" with no radix.
  var tmp = s;
  var s1;
    if (s.charAt(0) === '-') tmp = s.substr(1);
    if (tmp.charAt(0) === '0' && (tmp.charAt(1) === 'x' || tmp.charAt(1) === 'X'))
        s1 = parseInt(s, 16);
    else if (tmp.charAt(0) === '0' && (tmp.charAt(1) === 'b' || tmp.charAt(1) === 'B'))
        s1 = parseInt(s, 2);
    else if (tmp.charAt(0) === '0')
        s1 = parseInt(s, 8);
    else
        s1 = parseInt(s, 10);

//return new Sk.builtin.nmber(s1, Sk.builtin.nmber.int$);
//return Sk.ffi.numberToIntPy(s1);
  goog.asserts.assertNumber(s1);
  res.v = s1;
  res.skType = Sk.builtin.nmber.int$;
  return res;
};
goog.exportSymbol("Sk.numberFromStr", Sk.numberFromStr);

Sk.builtin.nmber.prototype.clone = function()
{
  return new Sk.builtin.nmber(this, undefined);
};

Sk.builtin.nmber.prototype.toFixed = function(x) {
  x = Sk.builtin.asnum$(x);
  return this.v.toFixed(x)
}

Sk.builtin.nmber.prototype.nb$add = function(other)
{
  if (typeof other === "number")
  {
    other = Sk.ffi.numberToPy(other);
  }

  var thisJs = Sk.ffi.remapToJs(this);

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    var otherJs = Sk.ffi.remapToJs(other);
    var sumJs = thisJs + otherJs;
    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
    {
      // Result type is a float.
      return Sk.ffi.numberToPy(sumJs);
    }
    else
    {
      if (sumJs > Sk.builtin.nmber.threshold$ || sumJs < -Sk.builtin.nmber.threshold$)
      {
        //  Promote to long
        return new Sk.builtin.lng(thisJs).nb$add(otherJs);
      }
      else
      {
        // Result type is an int.
        return Sk.ffi.numberToIntPy(sumJs);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (Sk.ffi.isFloat(this))
    {
      // float + long --> float
      return Sk.ffi.numberToPy(thisJs + parseFloat(other.str$(10, true)));
    }
    else
    {
      //  int + long --> long
      return new Sk.builtin.lng(thisJs).nb$add(other);
    }
  }

  return undefined;
};


Sk.builtin.nmber.prototype.nb$subtract = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  if (typeof other === "number")
  {
    other = Sk.ffi.numberToPy(other);
  }

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    /**
     * @const
     * @type {number}
     */
    var otherJs = Sk.ffi.remapToJs(other);

    /**
     * @const
     * @type {number}
     */
    var diff = selfJs - otherJs;
    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(diff);
    }
    else
    {
      if (diff > Sk.builtin.nmber.threshold$ || diff < -Sk.builtin.nmber.threshold$)
      {
        //  Promote to long
        return new Sk.builtin.lng(selfJs).nb$subtract(otherJs);
      }
      else
      {
        return Sk.ffi.numberToIntPy(diff);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (Sk.ffi.isFloat(this))
    {
      // float + long --> float
      return Sk.ffi.numberToPy(selfJs - parseFloat(other.str$(10, true)));
    }
    else
    {
      //  int - long --> long
      return new Sk.builtin.lng(selfJs).nb$subtract(other);
    }
  }

  return undefined;
};

Sk.builtin.nmber.prototype.nb$multiply = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  if (typeof other === "number")
  {
    other = Sk.ffi.numberToPy(other);
  }

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    /**
     * @const
     * @type {number}
     */
    var otherJs = Sk.ffi.remapToJs(other);

    /**
     * @const
     * @type {number}
     */
    var prodJs = selfJs * otherJs;

    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(prodJs);
    }
    else
    {
      if (prodJs > Sk.builtin.nmber.threshold$ || prodJs < -Sk.builtin.nmber.threshold$)
      {
        //  Promote to long
        return new Sk.builtin.lng(selfJs).nb$multiply(otherJs);
      }
      else
      {
        return Sk.ffi.numberToIntPy(prodJs);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (Sk.ffi.isFloat(this))
    {
      // float + long --> float
      return Sk.ffi.numberToPy(selfJs * parseFloat(other.str$(10, true)));
    }
    else
    {
      //  int - long --> long
      return new Sk.builtin.lng(selfJs).nb$multiply(other);
    }
  }

  return undefined;
};

Sk.builtin.nmber.prototype.nb$divide = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  if (typeof other === "number")
  {
    other = Sk.ffi.numberToPy(other);
  }

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    /**
     * @const
     * @type {number}
     */
    var otherJs = Sk.ffi.remapToJs(other);

    if (otherJs === 0)
    {
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
    }

    if (selfJs === Infinity)
    {
      if (otherJs === Infinity || otherJs === -Infinity)
      {
        return Sk.ffi.numberToPy(NaN);
      }
      else if (other.nb$isnegative())
      {
        return Sk.ffi.numberToPy(-Infinity);
      }
      else
      {
        return Sk.ffi.numberToPy(Infinity);
      }
    }
    if (selfJs === -Infinity)
    {
      if (otherJs === Infinity || otherJs === -Infinity)
      {
        return Sk.ffi.numberToPy(NaN);
      }
      else if (other.nb$isnegative())
      {
        return Sk.ffi.numberToPy(Infinity);
      }
      else
      {
        return Sk.ffi.numberToPy(-Infinity);
      }
    }

    /**
     * @const
     * @type {number}
     */
    var resultJs = selfJs / otherJs;

    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other) || Sk.python3)
    {
      return Sk.ffi.numberToPy(resultJs);
    }
    else
    {
      /**
       * @const
       * @type {number}
       */
      var flooredJs = Math.floor(resultJs);
      if (flooredJs > Sk.builtin.nmber.threshold$ || flooredJs < -Sk.builtin.nmber.threshold$)
      {
        //  Promote to long
        return new Sk.builtin.lng(selfJs).nb$divide(otherJs);
      }
      else
      {
        return Sk.ffi.numberToIntPy(flooredJs);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (other.longCompare(Sk.builtin.biginteger.ZERO) === 0)
    {
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
    }

    if (selfJs === Infinity)
    {
      if (other.nb$isnegative())
      {
        return Sk.ffi.numberToPy(-Infinity);
      }
      else
      {
        return Sk.ffi.numberToPy(Infinity);
      }
    }
    if (selfJs === -Infinity)
    {
      if (other.nb$isnegative())
      {
        return Sk.ffi.numberToPy(Infinity);
      }
      else
      {
        return Sk.ffi.numberToPy(-Infinity);
      }
    }

    if (Sk.ffi.isFloat(this))
    {
      // float / long --> float
      return Sk.ffi.numberToPy(selfJs / parseFloat(other.str$(10, true)));
    }
    else
    {
      //  int - long --> long
      return new Sk.builtin.lng(selfJs).nb$divide(other);
    }
  }

  return undefined;
};

Sk.builtin.nmber.prototype.nb$floor_divide = function(other)
{
  var result;

  if (typeof other === "number")
  {
    other = Sk.ffi.numberToPy(other);
  }

  if (this.v === Infinity || this.v === -Infinity)
  {
    return Sk.ffi.numberToPy(NaN);
  }

  if (other instanceof Sk.builtin.nmber)
  {
    if (other.v === 0)
    {
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
    }

    if (other.v === Infinity)
    {
      if (this.nb$isnegative())
      {
        return Sk.ffi.numberToPy(-1);
      }
      else
      {
        return Sk.ffi.numberToPy(0);
      }
    }
    if (other.v === -Infinity)
    {
      if (this.nb$isnegative() || !this.nb$nonzero())
      {
        return Sk.ffi.numberToPy(0);
      }
      else
      {
        return Sk.ffi.numberToPy(-1);
      }
    }

    result = new Sk.builtin.nmber(Math.floor(this.v / other.v), undefined);
    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(result.v);
    }
    else
    {
      result.v = Math.floor(result.v);
      if (result.v > Sk.builtin.nmber.threshold$ || result.v < -Sk.builtin.nmber.threshold$) {
        //  Promote to long
        return new Sk.builtin.lng(this.v).nb$floor_divide(other.v);
      }
      else
      {
        return Sk.ffi.numberToIntPy(result.v);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (other.longCompare(Sk.builtin.biginteger.ZERO) == 0)
    {
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
    }
    if (Sk.ffi.isFloat(this))
    {
      // float / long --> float
      return Sk.ffi.numberToPy(Math.floor(this.v / parseFloat(other.str$(10, true))));
    }
    else
    {
      //  int - long --> long
      return new Sk.builtin.lng(this.v).nb$floor_divide(other);
    }
  }

  return undefined;
};

Sk.builtin.nmber.prototype.nb$remainder = function(other)
{
  var result;

  if (typeof other === "number")
    other = new Sk.builtin.nmber(other, undefined);

  if (other instanceof Sk.builtin.nmber) {
    if (other.v == 0)
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");

    if (this.v == 0)
      if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
      {
        return Sk.ffi.numberToPy(0);
      }
      else
      {
        return Sk.ffi.numberToIntPy(0);
      }

    if (other.v === Infinity)
      if (this.v === Infinity || this.v === -Infinity)
      {
        return Sk.ffi.numberToPy(NaN);
      }
      else if (this.nb$ispositive())
      {
        return Sk.ffi.numberToPy(this.v);
      }
      else
      {
        return Sk.ffi.numberToPy(Infinity);
      }

    //  Javacript logic on negatives doesn't work for Python... do this instead
    var tmp = this.v % other.v;
    if (this.v < 0) {
      if (other.v > 0 && tmp < 0)
        tmp = tmp + other.v;
    } else {
      if (other.v < 0 && tmp != 0)
        tmp = tmp + other.v;
    }
    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
    {
      result = Sk.ffi.numberToPy(tmp);
    }
    else {
    //  tmp = Math.floor(tmp);
      result = new Sk.builtin.nmber(tmp, Sk.builtin.nmber.int$);
      if (result.v > Sk.builtin.nmber.threshold$ || result.v < -Sk.builtin.nmber.threshold$) {
        //  Promote to long
        result = new Sk.builtin.lng(this.v).nb$remainder(other.v);
      }
    }
    return result;
  }

  if (Sk.ffi.isLong(other))
  {
    if (other.longCompare(Sk.builtin.biginteger.ZERO) == 0)
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");

    if (this.v == 0)
    {
      if (this.skType === Sk.builtin.nmber.int$)
      {
        return new Sk.builtin.lng(0);
      }
      else
      {
        return new Sk.builtin.nmber(0, this.skType);
      }
    }

    if (Sk.ffi.isFloat(this))
    {
      // float / long --> float
      var op2 = parseFloat(other.str$(10, true))
      var tmp = this.v % op2;
      if (tmp < 0)
      {
        if (op2 > 0 && tmp != 0)
          tmp = tmp + op2;
      }
      else
      {
        if (op2 < 0 && tmp != 0)
          tmp = tmp + op2;
      }
      result = Sk.ffi.numberToPy(tmp);
    }
    else
    {  //  int - long --> long
      var thisAsLong = new Sk.builtin.lng(this.v);
      result = thisAsLong.nb$remainder(other);
    }
    return result;
  }

  return undefined;
};

Sk.builtin.nmber.prototype.nb$power = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  if (typeof other === "number")
  {
    other = new Sk.builtin.nmber(other, undefined);
  }

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    /**
     * @const
     * @type {number}
     */
    var otherJs = Sk.ffi.remapToJs(other);

    if (selfJs < 0 && otherJs % 1 !== 0)
    {
      throw new Sk.builtin.NegativePowerError("cannot raise a negative number to a fractional power");
    }
    if (selfJs === 0 && otherJs < 0)
    {
      throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
    }

    /**
     * @const
     * @type {number}
     */
    var resultJs = Math.pow(selfJs, otherJs)
    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other) || other.v < 0)
    {
      if ((Math.abs(resultJs) === Infinity) && (Math.abs(selfJs) !== Infinity) && (Math.abs(otherJs) !== Infinity))
      {
        throw new Sk.builtin.OverflowError("Numerical result out of range");
      }
      return Sk.ffi.numberToPy(resultJs);
    }
    else
    {
      /**
       * @const
       * @type {number}
       */
      var flooredJs = Math.floor(resultJs);
      if (flooredJs > Sk.builtin.nmber.threshold$ || flooredJs < -Sk.builtin.nmber.threshold$) {
        //  Promote to long
        return new Sk.builtin.lng(selfJs).nb$power(otherJs);
      }
      else
      {
        if ((Math.abs(flooredJs) === Infinity) && (Math.abs(selfJs) !== Infinity) && (Math.abs(otherJs) !== Infinity))
        {
          throw new Sk.builtin.OverflowError("Numerical result out of range");
        }
        return Sk.ffi.numberToIntPy(flooredJs);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (selfJs === 0 && other.longCompare(Sk.builtin.biginteger.ZERO) < 0)
    {
      throw new Sk.builtin.NegativePowerError("cannot raise zero to a negative power");
    }
    if (Sk.ffi.isFloat(this) || other.nb$isnegative())
    {
      // float / long --> float
      return Sk.ffi.numberToPy(Math.pow(selfJs, parseFloat(other.str$(10, true))));
    }
    else
    {
      //  int - long --> long
      return new Sk.builtin.lng(selfJs).nb$power(other);
    }
  }

  return undefined;
};

Sk.builtin.nmber.prototype.nb$and = function(other)
{
  var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v & other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

  if (tmp !== undefined)
    return new Sk.builtin.nmber(tmp, undefined);

  return undefined;
}

Sk.builtin.nmber.prototype.nb$or = function(other)
{
  var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v | other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

  if (tmp !== undefined)
    return new Sk.builtin.nmber(tmp, undefined);

  return undefined;
}

Sk.builtin.nmber.prototype.nb$xor = function(other)
{
  var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v ^ other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

  if (tmp !== undefined)
    return new Sk.builtin.nmber(tmp, undefined);

  return undefined;
}

Sk.builtin.nmber.prototype.nb$lshift = function(other)
{
    var tmp;
    var shift = Sk.builtin.asnum$(other);

    if (shift !== undefined) {
        if (shift < 0)
      throw new Sk.builtin.ValueError("negative shift count");
  tmp = this.v << shift;
  if (tmp <= this.v) {
      // Fail, recompute with longs
      return Sk.builtin.lng.fromInt$(this.v).nb$lshift(shift);
  }
    }

  if (tmp !== undefined)
    return new Sk.builtin.nmber(tmp, this.skType);

  return undefined;
}

Sk.builtin.nmber.prototype.nb$rshift = function(other)
{
    var tmp;
    var shift = Sk.builtin.asnum$(other);

    if (shift !== undefined) {
        if (shift < 0)
      throw new Sk.builtin.ValueError("negative shift count");
  tmp = this.v >> shift;
  if ((this.v > 0) && (tmp < 0)) {
      // Fix incorrect sign extension
      tmp = tmp & (Math.pow(2, 32-shift) - 1);
  }
    }

  if (tmp !== undefined)
    return new Sk.builtin.nmber(tmp, this.skType);

  return undefined;
}

Sk.builtin.nmber.prototype.nb$inplace_add = Sk.builtin.nmber.prototype.nb$add;

Sk.builtin.nmber.prototype.nb$inplace_subtract = Sk.builtin.nmber.prototype.nb$subtract;

Sk.builtin.nmber.prototype.nb$inplace_multiply = Sk.builtin.nmber.prototype.nb$multiply;

Sk.builtin.nmber.prototype.nb$inplace_divide = Sk.builtin.nmber.prototype.nb$divide;

Sk.builtin.nmber.prototype.nb$inplace_remainder = Sk.builtin.nmber.prototype.nb$remainder;

Sk.builtin.nmber.prototype.nb$inplace_floor_divide = Sk.builtin.nmber.prototype.nb$floor_divide;

Sk.builtin.nmber.prototype.nb$inplace_power = Sk.builtin.nmber.prototype.nb$power;

Sk.builtin.nmber.prototype.nb$inplace_and = Sk.builtin.nmber.prototype.nb$and;

Sk.builtin.nmber.prototype.nb$inplace_or = Sk.builtin.nmber.prototype.nb$or;

Sk.builtin.nmber.prototype.nb$inplace_xor = Sk.builtin.nmber.prototype.nb$xor;

Sk.builtin.nmber.prototype.nb$inplace_lshift = Sk.builtin.nmber.prototype.nb$lshift;

Sk.builtin.nmber.prototype.nb$inplace_rshift = Sk.builtin.nmber.prototype.nb$rshift;

Sk.builtin.nmber.prototype.nu$negative = function()
{
    return new Sk.builtin.nmber(-this.v, this.skType);
};

Sk.builtin.nmber.prototype.nb$positive = function()
{
    return this;
};

Sk.builtin.nmber.prototype.nb$cos = function()
{
    return new Sk.builtin.nmber(Math.cos(this.v), this.skType);
};

Sk.builtin.nmber.prototype.nb$sin = function()
{
    return new Sk.builtin.nmber(Math.sin(this.v), this.skType);
};

Sk.builtin.nmber.prototype.nb$tan = function()
{
    return new Sk.builtin.nmber(Math.tan(this.v), this.skType);
};

Sk.builtin.nmber.prototype.nu$exponential = function()
{
    return new Sk.builtin.nmber(Math.exp(this.v), this.skType);
};

Sk.builtin.nmber.prototype.nu$abs = function()
{
    return new Sk.builtin.nmber(Math.abs(this.v), this.skType);
};

Sk.builtin.nmber.prototype.nu$magnitude = function()
{
    return new Sk.builtin.nmber(Math.abs(this.v), this.skType);
};

Sk.builtin.nmber.prototype.nu$quadrance = function()
{
    return new Sk.builtin.nmber(this.v * this.v, this.skType);
};

Sk.builtin.nmber.prototype.nb$nonzero = function()
{
  return this.v !== 0 ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
};

Sk.builtin.nmber.prototype.nb$isnegative = function() { return this.v < 0 };

Sk.builtin.nmber.prototype.nb$ispositive = function() { return this.v >= 0 };

Sk.builtin.nmber.prototype.numberCompare = function(other)
{
  if (other instanceof Sk.builtin.bool)
      other = Sk.builtin.asnum$(other);

  if (other instanceof Sk.builtin.none)
    other = 0;

  if (typeof other === "number") {
    return this.v - other;
  }

  if (other instanceof Sk.builtin.nmber) {
    if (this.v == Infinity && other.v == Infinity) return 0;
    if (this.v == -Infinity && other.v == -Infinity) return 0;
    return this.v - other.v;
  }

  if (other instanceof Sk.builtin.lng) {
    if (this.skType === Sk.builtin.nmber.int$ || this.v % 1 == 0) {
      var thisAsLong = new Sk.builtin.lng(this.v);
      var tmp = thisAsLong.longCompare(other);
      return tmp;
    }
    var diff = this.nb$subtract(other);
    if (diff instanceof Sk.builtin.nmber) {
      return diff.v;
    } else if (diff instanceof Sk.builtin.lng) {
      return diff.longCompare(Sk.builtin.biginteger.ZERO);
    }
  }

  return undefined;
}

Sk.builtin.nmber.prototype.__eq__ = function(me, other) {
  return (me.numberCompare(other) == 0) && !(other instanceof Sk.builtin.none);
};

Sk.builtin.nmber.prototype.__ne__ = function(me, other) {
  return (me.numberCompare(other) != 0) || (other instanceof Sk.builtin.none);
};

Sk.builtin.nmber.prototype.__lt__ = function(me, other) {
  return me.numberCompare(other) < 0;
};

Sk.builtin.nmber.prototype.__le__ = function(me, other) {
  return me.numberCompare(other) <= 0;
};

Sk.builtin.nmber.prototype.__gt__ = function(me, other) {
  return me.numberCompare(other) > 0;
};

Sk.builtin.nmber.prototype.__ge__ = function(me, other) {
  return me.numberCompare(other) >= 0;
};

Sk.builtin.nmber.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;

Sk.builtin.nmber.prototype.tp$repr = function()
{
    return Sk.ffi.stringToPy(this.str$(10, true));
};

Sk.builtin.nmber.prototype.tp$str = function()
{
    return Sk.ffi.stringToPy(this.str$(10, true));
};

Sk.builtin.nmber.prototype.str$ = function(base, sign)
{
  var thisJs = Sk.ffi.remapToJs(this);

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
  if (base === undefined || base === 10) {
    if (Sk.ffi.isFloat(this)) {
      tmp = work.toPrecision(12);

        // transform fractions with 4 or more leading zeroes into exponents
        var idx = tmp.indexOf('.');
        var pre = work.toString().slice(0,idx);
        var post = work.toString().slice(idx);
        if (pre.match(/^-?0$/) && post.slice(1).match(/^0{4,}/)) {
      if (tmp.length < 12)
          tmp = work.toExponential();
      else
          tmp = work.toExponential(11);
        }

      while (tmp.charAt(tmp.length-1) == "0" && tmp.indexOf('e') < 0) {
        tmp = tmp.substring(0,tmp.length-1)
      }
      if (tmp.charAt(tmp.length-1) == ".") {
        tmp = tmp + "0"
      }
      tmp = tmp.replace(new RegExp('\\.0+e'),'e',"i")
        // make exponent two digits instead of one (ie e+09 not e+9)
        tmp = tmp.replace(/(e[-+])([1-9])$/, "$10$2");
        // remove trailing zeroes before the exponent
        tmp = tmp.replace(/0+(e.*)/,'$1');
    } else {
      tmp = work.toString()
    }
  } else {
    tmp = work.toString(base);
  }

  if (!Sk.ffi.isFloat(this))
  {
    return tmp;
  }
  if (tmp.indexOf('.') < 0 && tmp.indexOf('E') < 0 && tmp.indexOf('e') < 0)
  {
    tmp = tmp + '.0';
  }
  return tmp;
};

goog.exportSymbol("Sk.builtin.nmber", Sk.builtin.nmber);