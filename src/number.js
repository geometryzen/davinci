/**
 * @param {number} x
 * @param {string|undefined} skType
 */
Sk.builtin.numberPy = function(x, skType)
{
  goog.asserts.assertNumber(x);

  if (skType === undefined)
  {
    if (x > Sk.builtin.NumberPy.threshold$ || x < -Sk.builtin.NumberPy.threshold$ || x % 1 != 0)
    {
      return new Sk.builtin.NumberPy(x, Sk.builtin.NumberPy.float$);
    }
    else
    {
      return new Sk.builtin.NumberPy(x, Sk.builtin.NumberPy.int$);
    }
  }
  else
  {
    if (x > Sk.builtin.NumberPy.threshold$ || x < -Sk.builtin.NumberPy.threshold$)
    {
      return new Sk.builtin.lng(x);
    }
    else
    {
      return new Sk.builtin.NumberPy(x, skType);
    }
  }
}

/**
 * @constructor
 */
Sk.builtin.NumberPy = function(valueJs, skType)
{
  goog.asserts.assertNumber(valueJs);
  goog.asserts.assert(typeof skType !== 'undefined');
  this.v = valueJs;
  this.skType = skType;
};

Sk.builtin.NumberPy.prototype.tp$index = function()
{
    return this.v;
};

Sk.builtin.NumberPy.prototype.tp$hash = function()
{
    return this.v;
};

Sk.builtin.NumberPy.prototype.tp$name = "number";
Sk.builtin.NumberPy.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('number', Sk.builtin.NumberPy);

//  Threshold to determine when types should be converted to long
Sk.builtin.NumberPy.threshold$ = Math.pow(2, 53);
Sk.builtin.NumberPy.float$ = "float";
Sk.builtin.NumberPy.int$ = "int";

Sk.builtin.NumberPy.fromInt$ = function(ival)
{
  return Sk.builtin.numberPy(ival, undefined);
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

  var res = Sk.builtin.numberPy(0, undefined);

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

  goog.asserts.assertNumber(s1);
  res.v = s1;
  res.skType = Sk.builtin.NumberPy.int$;
  return res;
};
goog.exportSymbol("Sk.numberFromStr", Sk.numberFromStr);

Sk.builtin.NumberPy.prototype.clone = function()
{
  return new Sk.builtin.NumberPy(this.v, this.skType);
};

Sk.builtin.NumberPy.prototype.toFixed = function(x) {
  x = Sk.builtin.asnum$(x);
  return this.v.toFixed(x)
}

Sk.builtin.NumberPy.prototype.nb$add = function(other)
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
      if (sumJs > Sk.builtin.NumberPy.threshold$ || sumJs < -Sk.builtin.NumberPy.threshold$)
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


Sk.builtin.NumberPy.prototype.nb$subtract = function(other)
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
      if (diff > Sk.builtin.NumberPy.threshold$ || diff < -Sk.builtin.NumberPy.threshold$)
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

Sk.builtin.NumberPy.prototype.nb$multiply = function(other)
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
      if (prodJs > Sk.builtin.NumberPy.threshold$ || prodJs < -Sk.builtin.NumberPy.threshold$)
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

Sk.builtin.NumberPy.prototype.nb$divide = function(other)
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
      if (flooredJs > Sk.builtin.NumberPy.threshold$ || flooredJs < -Sk.builtin.NumberPy.threshold$)
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

Sk.builtin.NumberPy.prototype.nb$floor_divide = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  var result;

  if (typeof other === "number")
  {
    other = Sk.ffi.numberToPy(other);
  }

  if (selfJs === Infinity || selfJs === -Infinity)
  {
    return Sk.ffi.numberToPy(NaN);
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

    if (otherJs === Infinity)
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
    if (otherJs === -Infinity)
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

    /**
     * @const
     * @type {number}
     */
    var resultJs = Math.floor(selfJs / otherJs);
    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
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
      if (flooredJs > Sk.builtin.NumberPy.threshold$ || flooredJs < -Sk.builtin.NumberPy.threshold$) {
        //  Promote to long
        return new Sk.builtin.lng(selfJs).nb$floor_divide(otherJs);
      }
      else
      {
        return Sk.ffi.numberToIntPy(flooredJs);
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

Sk.builtin.NumberPy.prototype.nb$remainder = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  if (typeof other === "number")
  {
    other = Sk.builtin.numberPy(other, undefined);
  }

  if (Sk.ffi.isFloat(other) || Sk.ffi.isInt(other))
  {
    /**
     * @const
     * @type {number}
     */
    var otherJs = Sk.ffi.remapToJs(other);

    if (otherJs == 0)
    {
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");
    }

    if (selfJs == 0)
    {
      if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
      {
        return Sk.ffi.numberToPy(0);
      }
      else
      {
        return Sk.ffi.numberToIntPy(0);
      }
    }

    if (otherJs === Infinity)
    {
      if (selfJs === Infinity || selfJs === -Infinity)
      {
        return Sk.ffi.numberToPy(NaN);
      }
      else if (this.nb$ispositive())
      {
        return Sk.ffi.numberToPy(selfJs);
      }
      else
      {
        return Sk.ffi.numberToPy(Infinity);
      }
    }

    //  Javacript logic on negatives doesn't work for Python... do this instead
    var tmp = selfJs % otherJs;
    if (selfJs < 0)
    {
      if (otherJs > 0 && tmp < 0)
        tmp = tmp + otherJs;
    }
    else
    {
      if (otherJs < 0 && tmp != 0)
        tmp = tmp + otherJs;
    }

    if (Sk.ffi.isFloat(this) || Sk.ffi.isFloat(other))
    {
      return Sk.ffi.numberToPy(tmp);
    }
    else
    {
      if (tmp > Sk.builtin.NumberPy.threshold$ || tmp < -Sk.builtin.NumberPy.threshold$)
      {
        //  Promote to long
        return new Sk.builtin.lng(selfJs).nb$remainder(otherJs);
      }
      else
      {
        return Sk.ffi.numberToIntPy(tmp);
      }
    }
  }

  if (Sk.ffi.isLong(other))
  {
    if (other.longCompare(Sk.builtin.biginteger.ZERO) == 0)
      throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");

    if (selfJs === 0)
    {
      if (Sk.ffi.isInt(this))
      {
        return new Sk.builtin.lng(0);
      }
      else
      {
        return Sk.ffi.numberToPy(0);
      }
    }

    if (Sk.ffi.isFloat(this))
    {
      // float / long --> float
      var op2 = parseFloat(other.str$(10, true))
      var tmp = selfJs % op2;
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
      return Sk.ffi.numberToPy(tmp);
    }
    else
    {  //  int - long --> long
      return new Sk.builtin.lng(selfJs).nb$remainder(other);
    }
  }
  return undefined;
};

Sk.builtin.NumberPy.prototype.nb$power = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var selfJs = Sk.ffi.remapToJs(this);

  if (typeof other === "number")
  {
    other = Sk.builtin.numberPy(other, undefined);
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
      if (flooredJs > Sk.builtin.NumberPy.threshold$ || flooredJs < -Sk.builtin.NumberPy.threshold$) {
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

Sk.builtin.NumberPy.prototype.nb$and = function(other)
{
  var tmp;
        other = Sk.builtin.asnum$(other);
        tmp = this.v & other;
        if ((tmp !== undefined) && (tmp < 0)) {
            tmp = tmp + 4294967296; // convert back to unsigned
        }

  if (tmp !== undefined)
    return Sk.builtin.numberPy(tmp, undefined);

  return undefined;
}

Sk.builtin.NumberPy.prototype.nb$or = function(other)
{
  var tmp;
  other = Sk.builtin.asnum$(other);
  tmp = this.v | other;
  if ((tmp !== undefined) && (tmp < 0))
  {
      tmp = tmp + 4294967296; // convert back to unsigned
  }

  if (tmp !== undefined)
  {
    // Has to be undefined so as not to break tests!
    return Sk.builtin.numberPy(tmp, undefined);
  }
  return undefined;
}

Sk.builtin.NumberPy.prototype.nb$xor = function(other)
{
  var tmp;
  other = Sk.builtin.asnum$(other);
  tmp = this.v ^ other;
  if ((tmp !== undefined) && (tmp < 0))
  {
      tmp = tmp + 4294967296; // convert back to unsigned
  }

  if (tmp !== undefined)
  {
    return Sk.builtin.numberPy(tmp, undefined);
  }

  return undefined;
}

Sk.builtin.NumberPy.prototype.nb$lshift = function(other)
{
  var shift = Sk.builtin.asnum$(other);

  if (shift !== undefined)
  {
    if (shift < 0)
    {
      throw new Sk.builtin.ValueError("negative shift count");
    }
    /**
     * @const
     * @type {number}
     */
    var tmp = this.v << shift;
    if (tmp <= this.v)
    {
      // Fail, recompute with longs
      return Sk.builtin.lng.fromInt$(this.v).nb$lshift(shift);
    }
    else
    {
      return Sk.builtin.numberPy(tmp, this.skType);
    }
  }
  else
  {
    return undefined;
  }
};

Sk.builtin.NumberPy.prototype.nb$rshift = function(other)
{
  /**
   * @const
   * @type {number}
   */
  var shift = Sk.builtin.asnum$(other);

  if (shift !== undefined)
  {
    if (shift < 0)
    {
      throw new Sk.builtin.ValueError("negative shift count");
    }
    /**
     * @const
     * @type {number}
     */
    var tmp = this.v >> shift;
    if ((this.v > 0) && (tmp < 0))
    {
      // Fix incorrect sign extension.
      return Sk.builtin.numberPy(tmp & (Math.pow(2, 32-shift) - 1), this.skType);
    }
    else
    {
      return Sk.builtin.numberPy(tmp, this.skType);
    }
  }
  else
  {
    return undefined;
  }
};

Sk.builtin.NumberPy.prototype.nb$inplace_add = Sk.builtin.NumberPy.prototype.nb$add;

Sk.builtin.NumberPy.prototype.nb$inplace_subtract = Sk.builtin.NumberPy.prototype.nb$subtract;

Sk.builtin.NumberPy.prototype.nb$inplace_multiply = Sk.builtin.NumberPy.prototype.nb$multiply;

Sk.builtin.NumberPy.prototype.nb$inplace_divide = Sk.builtin.NumberPy.prototype.nb$divide;

Sk.builtin.NumberPy.prototype.nb$inplace_remainder = Sk.builtin.NumberPy.prototype.nb$remainder;

Sk.builtin.NumberPy.prototype.nb$inplace_floor_divide = Sk.builtin.NumberPy.prototype.nb$floor_divide;

Sk.builtin.NumberPy.prototype.nb$inplace_power = Sk.builtin.NumberPy.prototype.nb$power;

Sk.builtin.NumberPy.prototype.nb$inplace_and = Sk.builtin.NumberPy.prototype.nb$and;

Sk.builtin.NumberPy.prototype.nb$inplace_or = Sk.builtin.NumberPy.prototype.nb$or;

Sk.builtin.NumberPy.prototype.nb$inplace_xor = Sk.builtin.NumberPy.prototype.nb$xor;

Sk.builtin.NumberPy.prototype.nb$inplace_lshift = Sk.builtin.NumberPy.prototype.nb$lshift;

Sk.builtin.NumberPy.prototype.nb$inplace_rshift = Sk.builtin.NumberPy.prototype.nb$rshift;

Sk.builtin.NumberPy.prototype.nu$negative = function()
{
    return Sk.builtin.numberPy(-this.v, this.skType);
};

Sk.builtin.NumberPy.prototype.nb$positive = function()
{
    return this;
};

Sk.builtin.NumberPy.prototype.nb$cos = function()
{
    return Sk.builtin.numberPy(Math.cos(this.v), this.skType);
};

Sk.builtin.NumberPy.prototype.nb$sin = function()
{
    return Sk.builtin.numberPy(Math.sin(this.v), this.skType);
};

Sk.builtin.NumberPy.prototype.nb$tan = function()
{
    return Sk.builtin.numberPy(Math.tan(this.v), this.skType);
};

Sk.builtin.NumberPy.prototype.nu$exponential = function()
{
    return Sk.builtin.numberPy(Math.exp(this.v), this.skType);
};

Sk.builtin.NumberPy.prototype.nu$abs = function()
{
    return Sk.builtin.numberPy(Math.abs(this.v), this.skType);
};

Sk.builtin.NumberPy.prototype.nu$magnitude = function()
{
    return Sk.builtin.numberPy(Math.abs(this.v), this.skType);
};

Sk.builtin.NumberPy.prototype.nu$quadrance = function()
{
    return Sk.builtin.numberPy(this.v * this.v, this.skType);
};

Sk.builtin.NumberPy.prototype.nb$nonzero = function()
{
  return this.v !== 0 ? Sk.builtin.bool.true$ : Sk.builtin.bool.false$;
};

Sk.builtin.NumberPy.prototype.nb$isnegative = function() { return this.v < 0 };

Sk.builtin.NumberPy.prototype.nb$ispositive = function() { return this.v >= 0 };

Sk.builtin.NumberPy.prototype.numberCompare = function(other)
{
  if (other instanceof Sk.builtin.bool)
  {
      other = Sk.builtin.asnum$(other);
  }

  if (other instanceof Sk.builtin.none)
  {
    other = 0;
  }

  if (typeof other === "number")
  {
    return this.v - other;
  }

  if (other instanceof Sk.builtin.NumberPy)
  {
    if (this.v == Infinity && other.v == Infinity) return 0;
    if (this.v == -Infinity && other.v == -Infinity) return 0;
    return this.v - other.v;
  }

  if (other instanceof Sk.builtin.lng)
  {
    if (this.skType === Sk.builtin.NumberPy.int$ || this.v % 1 == 0)
    {
      var thisAsLong = new Sk.builtin.lng(this.v);
      var tmp = thisAsLong.longCompare(other);
      return tmp;
    }
    var diff = this.nb$subtract(other);
    if (diff instanceof Sk.builtin.NumberPy)
    {
      return diff.v;
    }
    else if (diff instanceof Sk.builtin.lng)
    {
      return diff.longCompare(Sk.builtin.biginteger.ZERO);
    }
  }

  return undefined;
}

Sk.builtin.NumberPy.prototype.__eq__ = function(me, other)
{
  return (me.numberCompare(other) == 0) && !(other instanceof Sk.builtin.none);
};

Sk.builtin.NumberPy.prototype.__ne__ = function(me, other) {
  return (me.numberCompare(other) != 0) || (other instanceof Sk.builtin.none);
};

Sk.builtin.NumberPy.prototype.__lt__ = function(me, other) {
  return me.numberCompare(other) < 0;
};

Sk.builtin.NumberPy.prototype.__le__ = function(me, other) {
  return me.numberCompare(other) <= 0;
};

Sk.builtin.NumberPy.prototype.__gt__ = function(me, other) {
  return me.numberCompare(other) > 0;
};

Sk.builtin.NumberPy.prototype.__ge__ = function(me, other) {
  return me.numberCompare(other) >= 0;
};

Sk.builtin.NumberPy.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;

Sk.builtin.NumberPy.prototype.tp$repr = function()
{
    return Sk.ffi.stringToPy(this.str$(10, true));
};

Sk.builtin.NumberPy.prototype.tp$str = function()
{
    return Sk.ffi.stringToPy(this.str$(10, true));
};

/**
 * @param {number} radix
 * @param {boolean} sign Determines whether the sign is preserved.
 * @return {string}
 */
Sk.builtin.NumberPy.prototype.str$ = function(radix, sign)
{
  goog.asserts.assertNumber(radix);
  goog.asserts.assertBoolean(sign);

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
  if (radix === undefined || radix === 10)
  {
    if (Sk.ffi.isFloat(this))
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
      tmp = work.toString();
    }
  }
  else
  {
    tmp = work.toString(radix);
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

goog.exportSymbol("Sk.builtin.NumberPy", Sk.builtin.NumberPy);