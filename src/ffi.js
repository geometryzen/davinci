goog.provide('Sk.ffi');


/**
 * Sk.ffi is the Foreign Function Interface.
 */


/**
 * AssertionError
 * @typedef {!Sk.builtin.AssertionError}
 */
Sk.ffi.AssertionError;
goog.exportSymbol('Sk.ffi.AssertionError', Sk.ffi.AssertionError);


/**
 * Returns a new AssertionError.
 * @param {string} message The message string.
 * @return {Sk.ffi.AssertionError} The AssertionError.
 */
Sk.ffi.assertionError = function(message) {
    return new Sk.builtin.AssertionError(message);
};
goog.exportSymbol('Sk.ffi.assertionError', Sk.ffi.assertionError);


/**
 * AttributeError
 * @typedef {!Sk.builtin.AttributeError}
 */
Sk.ffi.AttributeError;
goog.exportSymbol('Sk.ffi.AttributeError', Sk.ffi.AttributeError);


/**
 * Returns a new AttributeError.
 * @param {string} message The message string.
 * @return {Sk.ffi.AttributeError}
 */
Sk.ffi.attributeError = function(message) {
    return new Sk.builtin.AttributeError(message);
};
goog.exportSymbol('Sk.ffi.attributeError', Sk.ffi.attributeError);


/**
 * NotImplementedError
 * @typedef {!Sk.builtin.NotImplementedError}
 */
Sk.ffi.NotImplementedError;
goog.exportSymbol('Sk.ffi.NotImplementedError', Sk.ffi.NotImplementedError);


/**
 * Returns a new NotImplementedError.
 * @param {string} message The message string.
 * @return {Sk.ffi.NotImplementedError} The NotImplementedError.
 */
Sk.ffi.notImplementedError = function(message) {
    return new Sk.builtin.NotImplementedError(message);
};
goog.exportSymbol('Sk.ffi.notImplementedError', Sk.ffi.notImplementedError);


/**
 * @typedef {!Sk.builtin.TypeError}
 */
Sk.ffi.TypeError;
goog.exportSymbol('Sk.ffi.TypeError', Sk.ffi.TypeError);


/**
 * Returns a new TypeError.
 * @param {string} message The message string.
 * @return {Sk.ffi.TypeError} The TypeError.
 */
Sk.ffi.typeError = function(message) {
    return new Sk.builtin.TypeError(message);
};
goog.exportSymbol('Sk.ffi.typeError', Sk.ffi.typeError);


/**
 * FIXME: Having some problems using this to observe the type of a klass.
 * @nosideeffects
 * @param {*} valuePy
 * @return {Sk.builtin.type}
 */
Sk.ffi.type = function(valuePy) {

    if (Sk.flyweight)
    {
        if (typeof valuePy === Sk.builtin.JsType.NUMBER)
        {
            return Sk.builtin.float_.prototype.ob$type;
        }
    }
    if (valuePy.constructor === Sk.builtin.NumberPy)
    {
        if (valuePy.skType === Sk.builtin.NumberPy.int$)
        {
            return Sk.builtin.int_.prototype.ob$type;
        }
        else
        {
            return Sk.builtin.float_.prototype.ob$type;
        }
    }
    return valuePy.ob$type;
};
goog.exportSymbol('Sk.ffi.type', Sk.ffi.type);


/**
 * Enumeration for Python bool values.
 *
 * @enum {!Object}
 */
Sk.ffi.bool = {True: Sk.builtin.bool.true$, False: Sk.builtin.bool.false$};
goog.exportSymbol('Sk.ffi.bool', Sk.ffi.bool);


/**
 * Converts a JavaScript boolean or null to the Python bool representation.
 *
 * @param {boolean|undefined} valueJs
 * @param {boolean=} opt_defaultJs
 * @return {Sk.ffi.bool|Sk.builtin.none|undefined}
 */
Sk.ffi.booleanToPy = function(valueJs, opt_defaultJs) {

  var t = typeof valueJs;
  if (t === Sk.builtin.JsType.BOOLEAN)
  {
    return valueJs ? Sk.ffi.bool.True : Sk.ffi.bool.False;
  }
  else if (t === Sk.builtin.JsType.OBJECT && valueJs === null)
  {
    return Sk.builtin.none.none$;
  }
  else if (t === Sk.builtin.JsType.UNDEFINED)
  {
    var d = typeof opt_defaultJs;
    if (d === Sk.builtin.JsType.BOOLEAN)
    {
      return Sk.ffi.booleanToPy(Boolean(opt_defaultJs));
    }
    else if (d === Sk.builtin.JsType.UNDEFINED)
    {
      return undefined;
    }
    else if (d === Sk.builtin.JsType.OBJECT && opt_defaultJs === null)
    {
      return Sk.builtin.none.none$;
    }
    else
    {
      throw Sk.ffi.err.
          argument('defaultJs').
          inFunction('Sk.ffi.booleanToPy').
          mustHaveType([Sk.builtin.JsType.BOOLEAN, 'null', Sk.builtin.JsType.UNDEFINED].join(' or '));
    }
  }
  else
  {
    throw Sk.ffi.err.
        argument('valueJs').
            inFunction('Sk.ffi.booleanToPy').
            mustHaveType([Sk.builtin.JsType.BOOLEAN, 'null', Sk.builtin.JsType.UNDEFINED].join(' or '));
  }
};
goog.exportSymbol('Sk.ffi.booleanToPy', Sk.ffi.booleanToPy);


/**
 * Converts a JavaScript number or null to the internal Python float representation.
 *
 * @param {?number=} valueJs
 * @param {number=} defaultJs
 * @return {(Sk.builtin.NumberPy|number)|Sk.builtin.none|undefined}
 */
Sk.ffi.numberToFloatPy = function(valueJs, defaultJs) {

  var t = typeof valueJs;
  if (t === Sk.builtin.JsType.NUMBER)
  {
    return Sk.builtin.numberToPy(/** @type {number} */ (valueJs));
  }
  else if (t === Sk.builtin.JsType.OBJECT && valueJs === null)
  {
    return Sk.builtin.none.none$;
  }
  else if (t === Sk.builtin.JsType.UNDEFINED)
  {
    var d = typeof defaultJs;
    if (d === Sk.builtin.JsType.NUMBER)
    {
      return Sk.ffi.numberToFloatPy(Number(defaultJs));
    }
    else if (d === Sk.builtin.JsType.UNDEFINED)
    {
      return undefined;
    }
    else if (d === Sk.builtin.JsType.OBJECT && defaultJs === null)
    {
      return Sk.builtin.none.none$;
    }
    else
    {
      throw Sk.ffi.err.
          argument('defaultJs').
          inFunction('Sk.ffi.numberToFloatPy').
          mustHaveType([Sk.builtin.JsType.NUMBER, 'null', Sk.builtin.JsType.UNDEFINED].join(' or '));
    }
  }
  else
  {
    throw Sk.ffi.err.
        argument('valueJs').
            inFunction('Sk.ffi.numberToFloatPy').
            mustHaveType([Sk.builtin.JsType.NUMBER, 'null', Sk.builtin.JsType.UNDEFINED].join(' or '));
  }
};
goog.exportSymbol('Sk.ffi.numberToFloatPy', Sk.ffi.numberToFloatPy);


/**
 * Converts a JavaScript number or null to the internal Python int representation.
 *
 * @param {?number} valueJs
 * @param {number=} defaultJs
 * @return {Object|Sk.builtin.none|undefined}
 */
Sk.ffi.numberToIntPy = function(valueJs, defaultJs) {

  var t = typeof valueJs;
  if (t === Sk.builtin.JsType.NUMBER)
  {
    // This provides the canonical implementation for int.
    return new Sk.builtin.NumberPy(valueJs, Sk.builtin.NumberPy.int$);
  }
  else if (t === Sk.builtin.JsType.OBJECT && valueJs === null)
  {
    return Sk.builtin.none.none$;
  }
  else if (t === Sk.builtin.JsType.UNDEFINED)
  {
    var d = typeof defaultJs;
    if (d === Sk.builtin.JsType.NUMBER)
    {
      return Sk.ffi.numberToIntPy(Number(defaultJs));
    }
    else if (d === Sk.builtin.JsType.UNDEFINED)
    {
      return undefined;
    }
    else if (d === Sk.builtin.JsType.OBJECT && defaultJs === null)
    {
      return Sk.builtin.none.none$;
    }
    else
    {
      throw Sk.ffi.err.
          argument('defaultJs').
          inFunction('Sk.ffi.numberToIntPy').
          mustHaveType([Sk.builtin.JsType.NUMBER, 'null', Sk.builtin.JsType.UNDEFINED].join(' or '));
    }
  }
  else
  {
    throw Sk.ffi.err.
        argument('valueJs').
            inFunction('Sk.ffi.numberToIntPy').
            mustHaveType([Sk.builtin.JsType.NUMBER, 'null', Sk.builtin.JsType.UNDEFINED].join(' or '));
  }
};
goog.exportSymbol('Sk.ffi.numberToIntPy', Sk.ffi.numberToIntPy);


/**
 * Wraps a JavaScript class
 * Usage:
 *
 * valuePy = Sk.ffi.referenceToPy(valueJs, "Classname", custom);
 *
 * - This form is useful when calling a constructor to wrap a JavaScript object.
 *
 * or
 *
 * Sk.ffi.referenceToPy(valueJs, "Classname", custom, selfPy);
 *
 * - This form is useful in initialization functions.
 *
 * @param {Object|string|number|boolean} valueJs
 * @param {string} className
 * @param {Object=} custom Custom metadata that the caller wishes to retain.
 * @param {Object=} targetPy An optional destination for mapping reference types.
 *
 * @return {{v:?,tp$name:string,custom:(Object|null|undefined)}}
 */
Sk.ffi.referenceToPy = function(valueJs, className, custom, targetPy) {

  var t = typeof valueJs;
  if (t === Sk.builtin.JsType.OBJECT || t === Sk.builtin.JsType.FUNCTION)
  {
    if (typeof className === Sk.builtin.JsType.STRING)
    {
      if (targetPy)
      {
        targetPy.v = valueJs;
        targetPy.tp$name = className;
        targetPy.custom = custom;
      }
      else
      {
        return {'v': valueJs, 'tp$name': className, 'custom': custom};
      }
    }
    else
    {
      throw Sk.ffi.assertionError('9fad4b9e-4845-4a06-9bce-0aa7c68e1f03 [className is ' + className + ']');
    }
  }
  else
  {
    throw Sk.ffi.assertionError('306f31df-f0a9-40a0-895b-d01308df8d6e typeof valueJs => ' + t);
  }
};
goog.exportSymbol('Sk.ffi.referenceToPy', Sk.ffi.referenceToPy);


/**
 * Constructs a Python function.
 *
 * Implementations should expect Python arguments and return Python values.
 *
 * @param {Function} code The implementation of the function.
 *
 * @return {Sk.builtin.func}
 */
Sk.ffi.functionPy = function(code) {
  return new Sk.builtin.func(code);
};
goog.exportSymbol('Sk.ffi.functionPy', Sk.ffi.functionPy);


/**
 * Constructs a Python list.
 *
 * @param {Array.<Object>=} valuesPy A JavaScript array of Python values.
 *
 * @return {Sk.builtin.list}
 */
Sk.ffi.listPy = function(valuesPy) {
  return new Sk.builtin.list(valuesPy);
};
goog.exportSymbol('Sk.ffi.listPy', Sk.ffi.listPy);


/**
 * Constructs a Python tuple.
 *
 * @param {Array.<Object>|Object} valuesPy A JavaScript array of Python values.
 *
 * @return {Sk.builtin.tuple}
 */
Sk.ffi.tuplePy = function(valuesPy) {
  return new Sk.builtin.tuple(valuesPy);
};
goog.exportSymbol('Sk.ffi.tuplePy', Sk.ffi.tuplePy);


/**
 * Wraps a JavaScript Object instance.
 *
 * Usage:
 *
 * valuePy = Sk.ffi.remapToPy(valueJs, className);
 *
 * @param {Object|string|number|boolean|Function} valueJs The JavaScript value that must be represented in Python.
 * @param {string=} className The name of the class when wrapping a JavaScript object.
 * @param {Object=} custom Custom metadata that the caller wishes to retain.
 *
 * @return {?}
 */
Sk.ffi.remapToPy = function(valueJs, className, custom)
    {
  var t = typeof valueJs;
  if (t === Sk.builtin.JsType.OBJECT) {
    if (Object.prototype.toString.call(valueJs) === '[object Array]')
    {
      return new Sk.ffi.ObjectPy(/** @type {Object} */ (valueJs));
    /*
            var valuesPy = [];
            for (var i = 0; i < valueJs.length; ++i) {
                valuesPy.push(Sk.ffi.remapToPy(valueJs[i]));
            }
            return Sk.ffi.listPy(valuesPy);
            */
    }
    else if (typeof className === Sk.builtin.JsType.STRING)
    {
      return Sk.ffi.referenceToPy(valueJs, className.toString(), custom);
    }
    else if (t === Sk.builtin.JsType.OBJECT && valueJs === null)
    {
      return Sk.builtin.none.none$;
    }
    else
    {
      // When presented with a vanilla JavaScript object,
      // we can no longer treat it as a dictionary.
      return new Sk.ffi.ObjectPy(/** @type {Object} */ (valueJs));
      /*
            var kvsPy = [];
            for (var k in valueJs)
            {
                kvsPy.push(Sk.ffi.remapToPy(k));
                kvsPy.push(Sk.ffi.remapToPy(valueJs[k]));
            }
            return new Sk.builtin.dict(kvsPy);
            */
    }
  }
  else if (t === Sk.builtin.JsType.STRING)
  {
    return Sk.builtin.stringToPy(/** @type {string} */ (valueJs));
  }
  else if (t === Sk.builtin.JsType.NUMBER)
  {
    return Sk.builtin.numberToPy(/** @type {number} */ (valueJs));
  }
  else if (t === Sk.builtin.JsType.BOOLEAN)
  {
    return Sk.ffi.booleanToPy(/** @type {boolean} */ (valueJs));
  }
  else if (t === Sk.builtin.JsType.FUNCTION)
  {
    return Sk.ffi.functionPy(/** @type {Function} */ (valueJs));
  }
  else if (t === Sk.builtin.JsType.UNDEFINED)
  {
    return Sk.builtin.none.none$;
  }
  else
  {
    throw Sk.ffi.assertionError('d39f7c01-213e-4ded-9e5c-209a2dc94b4c, typeof valueJs => ' + t);
  }
};
goog.exportSymbol('Sk.ffi.remapToPy', Sk.ffi.remapToPy);


/**
 * @nosideeffects
 * @param {*} valuePy
 * @return {boolean}
 */
Sk.ffi.isBool = function(valuePy)
    {
  return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.BOOL;
};
goog.exportSymbol('Sk.ffi.isBool', Sk.ffi.isBool);


/**
 * Determines whether the Python value is an instance of a class with a specified class name.
 *
 * @nosideeffects
 * @param {Object} valuePy
 * @param {Sk.ffi.UnionType=} className An optional class name.
 * @return {boolean} Returns true if the value has the type Sk.ffi.PyType.INSTANCE
 * and if the name matches the type name.
 */
Sk.ffi.isInstance = function(valuePy, className)
    {
  if (Sk.ffi.getType(valuePy) === Sk.ffi.PyType.INSTANCE)
  {
    var t = typeof className;
    if (t === Sk.builtin.JsType.STRING)
    {
      return Sk.ffi.typeName(valuePy) === className;
    }
    else if (t === Sk.builtin.JsType.UNDEFINED)
    {
      return true;
    }
    else if (Object.prototype.toString.call(className) === '[object Array]') {
      var name = Sk.ffi.typeName(valuePy);
      return className.some(function(x) {return name === x;});
    }
    else
    {
      throw Sk.ffi.assertionError('caa41602-62da-4850-8f76-38d013f45a6c, typeof className => ' + t);
    }
  }
  else
  {
    return false;
  }
};
goog.exportSymbol('Sk.ffi.isInstance', Sk.ffi.isInstance);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isDefined = function(valuePy) {return Sk.ffi.getType(valuePy) !== Sk.ffi.PyType.UNDEFINED;};
goog.exportSymbol('Sk.ffi.isDefined', Sk.ffi.isDefined);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isObjectPy = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.OBJECT;};
goog.exportSymbol('Sk.ffi.isObjectPy', Sk.ffi.isObjectPy);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isDict = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.DICT;};
goog.exportSymbol('Sk.ffi.isDict', Sk.ffi.isDict);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isList = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.LIST;};
goog.exportSymbol('Sk.ffi.isList', Sk.ffi.isList);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isTuple = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.TUPLE;};
goog.exportSymbol('Sk.ffi.isTuple', Sk.ffi.isTuple);


/**
 * @nosideeffects
 * @param {*} valuePy
 * @return {boolean}
 */
Sk.ffi.isFloat = function(valuePy)
    {
  return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.FLOAT;
};
goog.exportSymbol('Sk.ffi.isFloat', Sk.ffi.isFloat);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isFunction = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.FUNCTION;};
goog.exportSymbol('Sk.ffi.isFunction', Sk.ffi.isFunction);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isFunctionRef = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.FUNREF;};
goog.exportSymbol('Sk.ffi.isFunctionRef', Sk.ffi.isFunctionRef);


/**
 * @nosideeffects
 * @param {*} valuePy
 * @return {boolean}
 */
Sk.ffi.isInt = function(valuePy) {
  return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.INT;
};
goog.exportSymbol('Sk.ffi.isInt', Sk.ffi.isInt);


/**
 * @nosideeffects
 * @param {*} valuePy
 * @return {boolean}
 */
Sk.ffi.isLong = function(valuePy) {
  return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.LONG;
};
goog.exportSymbol('Sk.ffi.isLong', Sk.ffi.isLong);


/**
 * @nosideeffects
 * @param {Object} valuePy
 * @return {boolean}
 */
Sk.ffi.isBigInteger = function(valuePy) {
  return valuePy instanceof Sk.builtin.biginteger;
};
goog.exportSymbol('Sk.ffi.isBigInteger', Sk.ffi.isBigInteger);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isNone = function(valuePy) {
  return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.NONE;
};
goog.exportSymbol('Sk.ffi.isNone', Sk.ffi.isNone);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isNum = function(valuePy) {
  if (valuePy instanceof Sk.builtin.NumberPy)
  {
    return true;
  }
  else
  {
    return Sk.ffi.isFloat(valuePy) || Sk.ffi.isInt(valuePy) || Sk.ffi.isLong(valuePy);
  }
};
goog.exportSymbol('Sk.ffi.isNum', Sk.ffi.isNum);


/**
 * @param {?} valuePy
 *
 * @return {boolean}
 */
Sk.ffi.isUndefined = function(valuePy) {return Sk.ffi.getType(valuePy) === Sk.ffi.PyType.UNDEFINED;};
goog.exportSymbol('Sk.ffi.isUndefined', Sk.ffi.isUndefined);


/**
 * Convenience function for asserting the number of arguments to a function.
 *
 * Returns the number of arguments if within the specified bounds.
 *
 * Use this function whenever there is no self argument.
 *
 * @param {string} prototype The prototype of the function.
 * @param {{length: number}} args The args passed to the function.
 * @param {number} minargs The minimum number of allowable arguments.
 * @param {number=} maxargs Optional maximum number of allowable arguments (default: Infinity).
 * @param {boolean=} kwargs Optional true if kwargs, false otherwise (default: false).
 * @param {boolean=} free Optional true if free vars, false otherwise (default: false).
 * @return {number} The number of arguments.
 */
Sk.ffi.checkFunctionArgs = function(prototype, args, minargs, maxargs, kwargs, free)
    {
  var nargs = args.length;
  var msg = '';

  if (maxargs === undefined) { maxargs = Infinity; }
  if (kwargs) { nargs -= 1; }
  if (free) { nargs -= 1; }
  if (nargs < minargs || nargs > maxargs)
  {
    if (minargs === maxargs)
    {
      msg = prototype + ' takes exactly ' + minargs + ' arguments';
    }
    else if (nargs < minargs)
    {
      msg = prototype + ' takes at least ' + minargs + ' arguments';
    }
    else
    {
      msg = prototype + ' takes at most ' + maxargs + ' arguments';
    }
    msg += ' (' + nargs + ' given)';
    throw Sk.ffi.assertionError(msg);
  }
  else
  {
    return nargs;
  }
};
goog.exportSymbol('Sk.ffi.checkFunctionArgs', Sk.ffi.checkFunctionArgs);


/**
 * Convenience function for asserting the number of arguments to a method (callable attribute).
 *
 * Returns the number of arguments if within the specified bounds.
 *
 * Use this function whenever you want to ignore the first (self) argument.
 *
 * @param {string} prototype The prototype of the callable attribute or class.
 * @param {{length: number}} args the arguments passed to the attribute.
 * @param {number} minargs the minimum number of allowable arguments.
 * @param {number=} maxargs optional maximum number of allowable arguments (default: Infinity).
 * @param {boolean=} kwargs optional true if kwargs, false otherwise (default: false).
 * @param {boolean=} free optional true if free vars, false otherwise (default: false).
 *
 * @return {number} The number of arguments.
 */
Sk.ffi.checkMethodArgs = function(prototype, args, minargs, maxargs, kwargs, free)
    {
  return Sk.ffi.checkFunctionArgs(prototype, Array.prototype.slice.call(args, 1), minargs, maxargs, kwargs, free);
};
goog.exportSymbol('Sk.ffi.checkMethodArgs', Sk.ffi.checkMethodArgs);


/**
 * @typedef {(string|Sk.ffi.PyType)}
 */
Sk.ffi.SimpleType;
goog.exportSymbol('Sk.ffi.SimpleType', Sk.ffi.SimpleType);


/**
 * @typedef {(Sk.ffi.SimpleType|!Array.<Sk.ffi.SimpleType>)}
 */
Sk.ffi.UnionType;
goog.exportSymbol('Sk.ffi.UnionType', Sk.ffi.UnionType);


/**
 * @typedef {function(Sk.ffi.UnionType): Sk.ffi.TypeError}
 */
Sk.ffi.FunctionReturningTypeError;


/**
 * Convenience function for asserting the type of an argument.
 *
 * @param {string} name The argument name.
 * @param {Sk.ffi.UnionType} expectedType A string representation of the expected type or types.
 * @param {boolean} condition The condition that must be true for the check to pass.
 * @param {Object} valuePy The actual value of the operand.
 */
Sk.ffi.checkArgType = function(name, expectedType, condition, valuePy)
    {
  if (!condition)
  {
    throw Sk.ffi.err.argument(name).mustHaveType(expectedType);
  }
};
goog.exportSymbol('Sk.ffi.checkArgType', Sk.ffi.checkArgType);


/**
 * Convenience function for asserting the type of the LHS operand to a binary operator.
 *
 * @param {string} opName The operator name.
 * @param {Sk.ffi.UnionType} expectedType A string representation of the expected type or types.
 * @param {boolean} condition The condition that must be true for the check to pass.
 * @param {Object} valuePy The actual value of the operand.
 */
Sk.ffi.checkLhsOperandType = function(opName, expectedType, condition, valuePy)
    {
  if (!condition)
  {
    // TODO: Push string literal down into the Sk.ffi.err structure.
    throw Sk.ffi.err.operand('Left').toOperation(opName).mustHaveType(expectedType);
  }
};
goog.exportSymbol('Sk.ffi.checkLhsOperandType', Sk.ffi.checkLhsOperandType);


/**
 * Convenience function for asserting the type of the RHS operand to a binary operator.
 *
 * @param {string} opName The operator name.
 * @param {Sk.ffi.UnionType} expectedType A string representation of the expected type or types.
 * @param {boolean} condition The condition that must be true for the check to pass.
 * @param {Object} valuePy The actual value of the operand.
 */
Sk.ffi.checkRhsOperandType = function(opName, expectedType, condition, valuePy)
    {
  if (!condition)
  {
    // TODO: Push string literal down into the Sk.ffi.err structure.
    throw Sk.ffi.err.operand('Right').toOperation(opName).mustHaveType(expectedType);
  }
};
goog.exportSymbol('Sk.ffi.checkRhsOperandType', Sk.ffi.checkRhsOperandType);


/**
 * Enumeration for internal Python types.
 *
 * @enum {number}
 */
Sk.ffi.PyType = {
  'OBJECT': 1, // A (wrapper around a) JavaScript Object.
  'DICT': 2,
  'LIST': 3,
  'TUPLE': 4,
  'BOOL': 5,
  'FLOAT': 6,
  'INT': 7,
  'LONG': 8,
  'STR': 9,
  'NONE': 10,
  'FUNCTION': 11,
  'INSTANCE': 12,
  'UNDEFINED': -1,
  'FUNREF': -2
};


/**
 * @param {Sk.ffi.UnionType} kind
 * @param {string=} name
 * @return {string}
 */
Sk.ffi.typeString = function(kind, name)
    {
  /**
     * @param {string} s
     * @return {string}
     */
  function typeBrackets(s) {
    return "<type '" + s + "'>";
  }
  /**
     * @param {Sk.ffi.PyType} kind
     * @return {string}
     */
  function typePy(kind) {
    switch (kind)
    {
      case Sk.ffi.PyType.OBJECT: {return typeBrackets('object');}
      case Sk.ffi.PyType.DICT: {return typeBrackets('dict');}
      case Sk.ffi.PyType.LIST: {return typeBrackets('list');}
      case Sk.ffi.PyType.TUPLE: {return typeBrackets('tuple');}
      case Sk.ffi.PyType.BOOL: {return typeBrackets('bool');}
      case Sk.ffi.PyType.FLOAT: {return typeBrackets('float');}
      case Sk.ffi.PyType.LONG: {return typeBrackets('long');}
      case Sk.ffi.PyType.INT: {return typeBrackets('int');}
      case Sk.ffi.PyType.STR: {return typeBrackets('str');}
      case Sk.ffi.PyType.NONE: {return typeBrackets('NoneType');}
      case Sk.ffi.PyType.FUNCTION: {return typeBrackets('function');}
      default:
        {
          throw Sk.ffi.assertionError('fe2aed99-3b81-4a55-b3e8-61da7e734ac1, kind => ' + kind);
        }
    }
  }
  /**
     * @param {string} name
     * @return {string}
     */
  function classBrackets(name) {
    return "<class '" + name + "'>";
  }

  if (typeof kind === Sk.builtin.JsType.STRING) {
    return classBrackets(String(kind));
  }
  else if (typeof kind === Sk.builtin.JsType.NUMBER) {
    switch (kind)
    {
      case Sk.ffi.PyType.OBJECT:
      case Sk.ffi.PyType.DICT:
      case Sk.ffi.PyType.LIST:
      case Sk.ffi.PyType.TUPLE:
      case Sk.ffi.PyType.BOOL:
      case Sk.ffi.PyType.FLOAT:
      case Sk.ffi.PyType.LONG:
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.STR:
      case Sk.ffi.PyType.NONE:
      case Sk.ffi.PyType.FUNCTION:
        {
          return typePy(kind);
        }
      case Sk.ffi.PyType.INSTANCE:
        {
          return classBrackets(String(name));
        }
      default:
        {
          // TODO: This should convert to Kleene ? for UNDEFINED?
          throw Sk.ffi.assertionError('b15da19c-b080-4695-a157-cfcb740b265b, kind => ' + kind);
        }
    }
  }
  else if (Object.prototype.toString.call(kind) === '[object Array]') {
    return kind.map(function(x) {return Sk.ffi.typeString(x);}).join(' or ');
  }
  else {
    throw Sk.ffi.assertionError('c32e2f75-a391-49aa-b567-b376955b4b4c, typeof kind => ' + typeof kind);
  }
};
goog.exportSymbol('Sk.ffi.typeString', Sk.ffi.typeString);


/**
 * Computes the internal Python representation type for the provided value.
 *
 * @param {?} valuePy
 *
 * @return {Sk.ffi.PyType} The Python type enumeration value.
 */
Sk.ffi.getType = function(valuePy)
    {
  if (Sk.flyweight)
  {
    if (typeof valuePy === Sk.builtin.JsType.NUMBER)
    {
      return Sk.ffi.PyType.FLOAT;
    }
  }

  if (typeof valuePy === Sk.builtin.JsType.UNDEFINED)
  {
    return Sk.ffi.PyType.UNDEFINED;
  }
  else if (valuePy instanceof Sk.ffi.ObjectPy)
  {
    return Sk.ffi.PyType.OBJECT;
  }
  else if (valuePy instanceof Sk.builtin.object)
  {
    throw new Error('Ooch - object');
  //      return Sk.ffi.PyType.DICT;
  }
  else if (valuePy instanceof Sk.builtin.dict)
  {
    return Sk.ffi.PyType.DICT;
  }
  else if (valuePy instanceof Sk.builtin.list)
  {
    return Sk.ffi.PyType.LIST;
  }
  else if (valuePy instanceof Sk.builtin.tuple)
  {
    return Sk.ffi.PyType.TUPLE;
  }
  else if (valuePy instanceof Sk.builtin.NumberPy)
  {
    // This is the legitimate test for a float in non-flyweight mode.
    if (valuePy.skType === Sk.builtin.NumberPy.float$)
    {
      if (Sk.flyweight)
      {
        goog.asserts.assertNumber(valuePy, "You're kidding me?");
      }
      else
      {
        return Sk.ffi.PyType.FLOAT;
      }
    }
    else if (valuePy.skType === Sk.builtin.NumberPy.int$)
    {
      return Sk.ffi.PyType.INT;
    }
    else
    {
      throw Sk.ffi.assertionError('typeofPy(' + valuePy + ') (Sk.builtin.NumberPy) skType=' + valuePy.skType);
    }
  }
  else if (valuePy instanceof Sk.builtin.lng)
  {
    return Sk.ffi.PyType.LONG;
  }
  else if (valuePy === Sk.builtin.bool.true$)
  {
    return Sk.ffi.PyType.BOOL;
  }
  else if (valuePy === Sk.builtin.bool.false$)
  {
    return Sk.ffi.PyType.BOOL;
  }
  else if (valuePy === Sk.builtin.none.none$)
  {
    return Sk.ffi.PyType.NONE;
  }
  else
  {
    // FIXME: This is bad, we can easily get lost.
    var x = typeof valuePy.v;
    if (x !== Sk.builtin.JsType.UNDEFINED)
    {
      if (x === Sk.builtin.JsType.STRING)
      {
        return Sk.ffi.PyType.STR;
      }
      else if (x === Sk.builtin.JsType.OBJECT)
      {
        if (valuePy.tp$name)
        {
          return Sk.ffi.PyType.INSTANCE;
        }
        else
        {
          throw Sk.ffi.assertionError('0a459acc-9540-466b-ba1a-333f8215b61e');
        }
      }
      else if (x === Sk.builtin.JsType.FUNCTION)
      {
        return Sk.ffi.PyType.FUNREF;
      }
      else
      {
        throw Sk.ffi.assertionError("bb971bb0-3751-49bb-ac24-8dab8a4bcd29 (x:'" + x + "')");
      }
    }
    else
    {
      // TODO: It works, but why are there two ways of doing it?
      return Sk.ffi.PyType.FUNCTION;
    }
  }
};
goog.exportSymbol('Sk.ffi.getType', Sk.ffi.getType);


/**
 * @param {?} valuePy
 *
 * @return {string}
 */
Sk.ffi.typeName = function(valuePy)
    {
  if (Sk.flyweight)
  {
    if (typeof valuePy === Sk.builtin.JsType.NUMBER)
    {
      return 'float';
    }
  }
  if (valuePy instanceof Sk.builtin.NumberPy)
  {
    return valuePy.skType;
  }
  else if (valuePy.tp$name !== undefined)
  {
    return valuePy.tp$name;
  }
  else
  {
    return '<invalid type>';
  }
};
goog.exportSymbol('Sk.ffi.typeName', Sk.ffi.typeName);


/**
 * Converts the internal Python string representation to a JavaScript string.
 *
 * Usage:
 *
 * valueJs = Sk.ffi.booleanToJs(valuePy, "foo must be a <type 'bool'>");
 *
 * @param {Object} valuePy
 * @param {string=} message
 *
 * @return {boolean}
 */
Sk.ffi.booleanToJs = function(valuePy, message)
    {
  if (valuePy === Sk.builtin.bool.true$)
  {
    return true;
  }
  else if (valuePy === Sk.builtin.bool.false$)
  {
    return false;
  }
  else
  {
    if (typeof message === Sk.builtin.JsType.STRING)
    {
      throw Sk.ffi.typeError(String(message));
    }
    else
    {
      throw Sk.ffi.err.attribute('value').mustHaveType(Sk.ffi.PyType.BOOL);
    }
  }
};
goog.exportSymbol('Sk.ffi.booleanToJs', Sk.ffi.booleanToJs);


/**
 * @param {?} valuePy
 * @param {string=} message Optional customizable assertion message.
 *
 * @return {number}
 */
Sk.ffi.numberToJs = function(valuePy, message) {

  if (valuePy instanceof Sk.builtin.NumberPy)
  {
    return Sk.builtin.asnum$(valuePy);
  }
  else
  {
    if (typeof message === Sk.builtin.JsType.STRING)
    {
      throw Sk.ffi.typeError(String(message));
    }
    else
    {
      throw Sk.ffi.err.attribute('value').mustHaveType([Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG]);
    }
  }
};
goog.exportSymbol('Sk.ffi.numberToJs', Sk.ffi.numberToJs);


/**
 * Usage:
 *
 * valueJs = Sk.ffi.remapToJs(valuePy);
 *
 * @param {*} valuePy The Python value to be mapped.
 * @param {boolean=} shallow
 *
 * @return {?}
 */
Sk.ffi.remapToJs = function(valuePy, shallow) {

  Sk.ffi.checkFunctionArgs('Sk.ffi.remapToJs', arguments, 1, 2);
  if (Sk.flyweight)
  {
    if (typeof valuePy === Sk.builtin.JsType.NUMBER) {
      return valuePy;
    }
  }
  switch (Sk.ffi.getType(valuePy))
  {
    case Sk.ffi.PyType.STR:
      {
        return Sk.builtin.stringToJs(valuePy);
      }
    case Sk.ffi.PyType.OBJECT:
      {
        return valuePy.v;
      }
    case Sk.ffi.PyType.DICT:
      {
        var ret = {};
        for (var iter = valuePy.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext())
        {
          var v = valuePy.mp$subscript(k);
          if (v === undefined) {
            v = null;
          }
          var kAsJs = Sk.ffi.remapToJs(k);
          ret[kAsJs] = Sk.ffi.remapToJs(v);
        }
        return ret;
      }
    case Sk.ffi.PyType.LIST:
      {
        if (shallow) {
          return valuePy.v;
        }
        else {
          var ret = [];
          for (var i = 0; i < valuePy.v.length; ++i)
          {
            ret.push(Sk.ffi.remapToJs(valuePy.v[i]));
          }
          return ret;
        }
      }
    case Sk.ffi.PyType.TUPLE:
      {
        var ret = [];
        for (var i = 0; i < valuePy.v.length; ++i)
        {
          ret.push(Sk.ffi.remapToJs(valuePy.v[i]));
        }
        return ret;
      }
    case Sk.ffi.PyType.BOOL:
      {
        if (valuePy === Sk.builtin.bool.true$)
        {
          return true;
        }
        else if (valuePy === Sk.builtin.bool.false$)
        {
          return false;
        }
        else
        {
          throw Sk.ffi.assertionError('5fd1f529-f9b2-4d0c-9775-36e782973986');
        }
      }
    case Sk.ffi.PyType.FLOAT:
      {
        if (Sk.flyweight)
        {
          goog.asserts.assertNumber(valuePy, '5fd1f529-f9b2-4d0c-9775-36e782973986');
        }
        else
        {
          return Sk.builtin.asnum$(valuePy);
        }
      }
    case Sk.ffi.PyType.INT:
    case Sk.ffi.PyType.LONG:
      {
        return Sk.builtin.asnum$(valuePy);
      }
    case Sk.ffi.PyType.INSTANCE:
      {
        // TODO: This is being exercised, but we should assert the tp$name.
        // I think the pattern here suggests that we have a Sk.builtin.something
        return valuePy.v;
      }
    case Sk.ffi.PyType.FUNREF:
      {
        return valuePy.v;
      }
    case Sk.ffi.PyType.UNDEFINED:
      {
        return undefined;
      }
    case Sk.ffi.PyType.NONE:
      {
        return null;
      }
    case Sk.ffi.PyType.FUNCTION: {
      return function() {
        var argsJs = Array.prototype.slice.call(arguments, 0);
        var argsPy = argsJs.map(function(argJs) {return Sk.ffi.remapToPy(argJs);});
        return Sk.ffi.remapToJs(Sk.misceval.apply(valuePy, undefined, undefined, undefined, argsPy));
      };
    }
    default:
      {
        throw Sk.ffi.assertionError('20be4da2-63e8-4fff-9359-7ab46eba4702 ' + Sk.ffi.getType(valuePy));
      }
  }
};
goog.exportSymbol('Sk.ffi.remapToJs', Sk.ffi.remapToJs);


/**
 *
 * @param {Object} valuePy The Python value containing the custom JavaScript object.
 *
 * @return {Object}
 */
Sk.ffi.customToJs = function(valuePy) {
  return valuePy.custom;
};
goog.exportSymbol('Sk.ffi.customToJs', Sk.ffi.customToJs);


/**
 * @param {?} globals
 * @param {?} func
 * @param {string} name
 * @param {?} bases
 *
 * @return {?}
 */
Sk.ffi.buildClass = function(globals, func, name, bases) {
  return Sk.misceval.buildClass(globals, func, name, bases);
};
goog.exportSymbol('Sk.ffi.buildClass', Sk.ffi.buildClass);


/**
 *
 * @param {Object} func the thing to call
 * @param {...*} var_args stuff to pass it
 *
 * @return {?}
 */
Sk.ffi.callsim = function(func, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return Sk.misceval.apply(func, undefined, undefined, undefined, args);
};
goog.exportSymbol('Sk.ffi.callsim', Sk.ffi.callsim);


/**
 * Convenience function for implementing callable attributes.
 *
 * @param {Object} mod The module object.
 * @param {string} nameJs The name of the attribute.
 * @param {function()} functionJs A JavaScript function in which the
 * arguments and return type are in the Python value space.
 *
 * @return {?}
 */
Sk.ffi.callableToPy = function(mod, nameJs, functionJs) {
  return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {Sk.ffi.referenceToPy(null, nameJs, null, selfPy);});
    $loc.__call__ = Sk.ffi.functionPy(functionJs);
    $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {return Sk.builtin.stringToPy(nameJs);});
    $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {return Sk.builtin.stringToPy(nameJs);});
  }, nameJs, []));
};
goog.exportSymbol('Sk.ffi.callableToPy', Sk.ffi.callableToPy);


/**
 * @param {Object} objectPy The Python object containing the attribute.
 * @param {string} name The name of the attribute.
 *
 * @return {?}
 */
Sk.ffi.gattr = function(objectPy, name) {
  return Sk.abstr.gattr(objectPy, name);
};
goog.exportSymbol('Sk.ffi.gattr', Sk.ffi.gattr);


/**
 * @param {Object} objectPy The Python object containing the attribute.
 * @param {string} name The name of the attribute.
 * @param {?} valuePy
 *
 * @return {?}
 */
Sk.ffi.sattr = function(objectPy, name, valuePy) {
  return Sk.abstr.sattr(objectPy, name, valuePy);
};
goog.exportSymbol('Sk.ffi.sattr', Sk.ffi.sattr);


/**
 * @param {...*} var_args
 *
 * @return {!Sk.builtin.IndexError}
 */
Sk.ffi.indexError = function(var_args) {
  return new Sk.builtin.IndexError(var_args);
};
goog.exportSymbol('Sk.ffi.indexError', Sk.ffi.indexError);


/**
 * @param {...*} var_args
 * @return {!Sk.builtin.ValueError}
 */
Sk.ffi.valueError = function(var_args) {
  return new Sk.builtin.ValueError(var_args);
};
goog.exportSymbol('Sk.ffi.valueError', Sk.ffi.valueError);


/**
 * Fluid API for building messages.
 *
 * @type
 * {
 *   {
 *     argument: function (string): {
 *       inFunction: function (string): {
 *         mustHaveType: function ((!Array.<string>|Sk.ffi.PyType|string)): Sk.ffi.TypeError
 *       },
 *       mustHaveType: function ((!Array.<string>|Sk.ffi.PyType|string)): Sk.ffi.TypeError
 *     },
 *     attribute: function (string): {
 *       isNotGetableOnType: function (string): Sk.ffi.AttributeError,
 *       isNotSetableOnType: function (string): Sk.ffi.AttributeError
 *     }
 *   }
 * }
 */
Sk.ffi.err = {
  /**
   * @param {string} name The name of the attribute.
   * @return
   * {
   *   {
   *     isNotGetableOnType: function(string): Sk.ffi.AttributeError,
   *     isNotSetableOnType: function(string): Sk.ffi.AttributeError
   *   }
   * }
   */
  attribute: function(name) {
    return {
      /**
         * @param {Sk.ffi.UnionType} targetType The name of the type.
         * @return {Sk.ffi.AttributeError}
         */
      isNotGetableOnType: function(targetType) {
        return Sk.ffi.attributeError(name + ' is not an attribute of ' + Sk.ffi.typeString(targetType));
      },
      /**
         * @param {string} targetType The name of the type.
         * @return {Sk.ffi.AttributeError}
         */
      isNotSetableOnType: function(targetType) {
        return Sk.ffi.attributeError(name + ' is not an attribute of ' + Sk.ffi.typeString(targetType));
      }
    };
  },
  /**
   * @param {string} name The name of the argument.
   * @return
   * {
   *   {
   *     inFunction: function(string):{
   *       mustHaveType: function(Sk.ffi.UnionType): Sk.ffi.TypeError
   *     },
   *     mustHaveType: function(Sk.ffi.UnionType): Sk.ffi.TypeError
   *   }
   * }
   */
  argument: function(name) {
    return {
      /**
         * @param {string} functionName The name of the function.
         * @return {{mustHaveType: Sk.ffi.FunctionReturningTypeError}}
         */
      inFunction: function(functionName) {
        return {
          /**
                 * @param {Sk.ffi.UnionType} expectedType The name of the type.
                 * @return {Sk.ffi.TypeError}
                 */
          mustHaveType: function(expectedType) {
            return Sk.ffi.typeError("Expecting argument '" + name + "' in function '" + functionName + "' to have type " + Sk.ffi.typeString(expectedType) + '.');
          }
        };
      },
      /**
         * @param {Sk.ffi.UnionType} expectedType The name of the type.
         * @return {Sk.ffi.TypeError}
         */
      mustHaveType: function(expectedType) {
        return Sk.ffi.typeError(name + ' must be a ' + Sk.ffi.typeString(expectedType));
      }
    };
  },
  /**
 * @param {string} name The name of the operand.
 * @return
 * {
 *   {
 *     toOperator: function(string):{
 *       mustHaveType: function(Sk.ffi.UnionType): Sk.ffi.TypeError
 *     }
 *   }
 * }
 */
  operand: function(name) {
    return {
      /**
         * @param {string} opName The name of the function.
         * @return {{mustHaveType: Sk.ffi.FunctionReturningTypeError}}
         */
      toOperation: function(opName) {
        return {
          /**
                 * @param {Sk.ffi.UnionType} expectedType The name of the type.
                 * @return {Sk.ffi.TypeError}
                 */
          mustHaveType: function(expectedType) {
            return Sk.ffi.typeError("Expecting operand '" + name + "' to operation '" + opName + "' to have type " + Sk.ffi.typeString(expectedType) + '.');
          }
        };
      }
    };
  }
};
goog.exportSymbol('Sk.ffi.err', Sk.ffi.err);



/**
 * @constructor
 * @param {Object} objectJs The JavaScript object.
 */
Sk.ffi.ObjectPy = function(objectJs) {
  this.v = objectJs;
};


/**
 * @param {string} name The name of the attribute.
 *
 * @return {?}
 */
Sk.ffi.ObjectPy.prototype.tp$getattr = function(name) {
  goog.asserts.assertString(name);
  goog.asserts.assert(this.ob$type !== undefined, 'object has no ob$type!');
  var selfJs = this.v;
  var propJs = this.v[name];
  switch (typeof propJs)
  {
    case 'function':
      {
        return new Sk.ffi.CallablePy(this.v, name);
      }
    case 'number':
      {
        return Sk.ffi.numberToFloatPy(propJs);
      }
    case 'object':
      {
        // It may be that JavaScript clients have added methods to the prototype.
        // e.g. d3 added append to an array.
        return new Sk.ffi.ObjectPy(propJs);
      /*
      if (Object.prototype.toString.apply(propJs) === '[object Array]')
      {
        var valuesPy = [];
        for (var i = 0; i < propJs.length; i++)
        {
          // FIXME: Is the remapToPy correct?
          valuesPy.push(Sk.ffi.remapToPy(propJs[i]));
        }
        return Sk.ffi.listPy(valuesPy);
      }
      else
      {
        return new Sk.ffi.ObjectPy(propJs);
      }
      */
      }
    case 'boolean':
      {
        return Sk.ffi.booleanToPy(propJs);
      }
    case 'undefined':
      {
        switch (name)
        {
          case 'append':
            {
              return new Sk.builtin.func(function(itemPy)
                  {
                    Sk.builtin.pyCheckArgs('append', arguments, 1, 1);
                    selfJs.push(Sk.ffi.remapToJs(itemPy));
                    return Sk.builtin.none.none$;
                  });
            }
          default:
            {
              return Sk.builtin.none.none$;
            }
        }
      }
    default:
      {
        goog.asserts.assertString(propJs);
        return Sk.builtin.stringToPy(propJs);
      }
  }
};


/**
 * @param {string} name The name of the attribute.
 * @param {?} valuePy
 *
 * @return {undefined}
 */
Sk.ffi.ObjectPy.prototype.tp$setattr = function(name, valuePy) {
  goog.asserts.assert(typeof name === 'string');
  this.v[name] = Sk.ffi.remapToJs(valuePy);
};


/**
 * @param {?} index
 *
 * @return {?}
 */
Sk.ffi.ObjectPy.prototype.mp$subscript = function(index) {
  if (!Array.isArray(this.v))
  {
    throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(this) + "' object does not support indexing.");
  }
  if (Sk.misceval.isIndex(index))
  {
    var i = Sk.misceval.asIndex(index);
    if (i !== undefined)
    {
      if (i < 0)
      {
        i = this.v.length + i;
      }
      if (i < 0 || i >= this.v.length)
      {
        throw new Sk.builtin.IndexError('list index out of range');
      }
      return Sk.ffi.remapToPy(this.v[i]);
    }
    else
    {
      // Fall through
    }
  }
  else if (index instanceof Sk.builtin.slice)
  {
    var ret = [];
    index.sssiter$(this, function(i, wrt) {ret.push(wrt.v[i]);});
    return new Sk.builtin.list(ret);
  }
  throw new Sk.builtin.TypeError('list indices must be integers, not ' + Sk.ffi.typeName(index));
};


/**
 *
 * @return {{tp$iter:?,$obj:?,$index:number,tp$iternext:?}}
 */
Sk.ffi.ObjectPy.prototype.tp$iter = function() {
  var ret =
      {
        tp$iter: function() { return ret; },
        $obj: this,
        $index: 0,
        tp$iternext: function()
        {
          // todo; StopIteration
          if (ret.$index >= ret.$obj.v.length) return undefined;
          return Sk.ffi.remapToPy(ret.$obj.v[ret.$index++]);
        }
      };
  return ret;
};


/**
 * @return {number}
 */
Sk.ffi.ObjectPy.prototype.sq$length = function() {
  if (!Array.isArray(this.v))
  {
    throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(this) + "' object does not support len().");
  }
  return this.v.length;
};


/**
 * We will masquerade as a Python object created using object().
 */
Sk.ffi.ObjectPy.prototype.tp$name = 'ObjectPy';


/**
 *
 */
Sk.ffi.ObjectPy.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('ObjectPy', Sk.ffi.ObjectPy);


/**
 * @return {Sk.builtin.StringPy}
 */
Sk.ffi.ObjectPy.prototype.tp$str = function() {
  return Sk.builtin.stringToPy('' + this.v);
};


/**
 * @return {Sk.builtin.StringPy}
 */
Sk.ffi.ObjectPy.prototype.tp$repr = function() {
  return Sk.builtin.stringToPy('' + this.v);
};


/**
 * @param {?} otherPy
 *
 * @return {?}
 */
Sk.ffi.ObjectPy.prototype.nb$add = function(otherPy) {
  return Sk.ffi.remapToPy(this.v.add(Sk.ffi.remapToJs(otherPy)));
};


/**
 * @param {?} otherPy
 *
 * @return {?}
 */
Sk.ffi.ObjectPy.prototype.nb$sub = function(otherPy) {
  return Sk.ffi.remapToPy(this.v.sub(Sk.ffi.remapToJs(otherPy)));
};


/**
 * @param {?} otherPy
 *
 * @return {?}
 */
Sk.ffi.ObjectPy.prototype.nb$mul = function(otherPy) {
  return Sk.ffi.remapToPy(this.v.mul(Sk.ffi.remapToJs(otherPy)));
};


/**
 * @param {?} otherPy
 *
 * @return {?}
 */
Sk.ffi.ObjectPy.prototype.nb$div = function(otherPy) {
  return Sk.ffi.remapToPy(this.v.div(Sk.ffi.remapToJs(otherPy)));
};

goog.exportSymbol('Sk.ffi.ObjectPy', Sk.ffi.ObjectPy);



/**
 * FIXME: Do I really need a new class here. What about using ObjectPy?
 * A callable property, the arguments are not known until the call is made.
 * @constructor
 * @param {Object} objectJs The JavaScript object.
 * @param {string} name The name of the function to call.
 */
Sk.ffi.CallablePy = function(objectJs, name) {
  this.v = objectJs;
  this.name = name;
};


/**
 * @param {Array.<Object>} args A JavaScript array containing Py objects!
 * @param {?} kw
 *
 * @return {?}
 */
Sk.ffi.CallablePy.prototype.tp$call = function(args, kw) {
  var objectJs = this.v;
  var name = this.name;
  var propJs = objectJs[name];
  var argsJs = args.map(function(xPy) {return Sk.ffi.remapToJs(xPy);});
  /**
   * If it's a constructor function then we must call it using the new keyword.
   * The only clue we have got is the naming convention.
   *
   * @param {string} name
   *
   * @return {boolean}
   */
  function isConstructorFunction(name)
  {
    // Hacks for JSXGraph.
    if (name === 'Value' || name === 'X' || name === 'Y')
    {
      return false;
    }
    if (name[0] === name[0].toUpperCase())
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  if (isConstructorFunction(name))
  {
    var createObject = function()
        {
      var that = Object.create(propJs.prototype);
      // Invoke the constructor function, binding this to the new object.
      var other = propJs.apply(that, argsJs);
      // If the return value isn't an object, substitute the new object.
      var valueJs = (typeof other === 'object' && other) || that;
      return Sk.ffi.remapToPy(valueJs);
    };
    try
    {
      switch (argsJs.length)
      {
        case 0:
          {
            var valueJs = new propJs();
            return Sk.ffi.remapToPy(valueJs);
          }
        case 1:
          {
            var valueJs = new propJs(argsJs[0]);
            return Sk.ffi.remapToPy(valueJs);
          }
        case 2:
          {
            var valueJs = new propJs(argsJs[0], argsJs[1]);
            return Sk.ffi.remapToPy(valueJs);
          }
        case 3:
          {
            var valueJs = new propJs(argsJs[0], argsJs[1], argsJs[2]);
            return Sk.ffi.remapToPy(valueJs);
          }
        case 4:
          {
            var valueJs = new propJs(argsJs[0], argsJs[1], argsJs[2], argsJs[3]);
            return Sk.ffi.remapToPy(valueJs);
          }
        case 5:
          {
            var valueJs = new propJs(argsJs[0], argsJs[1], argsJs[2], argsJs[3], argsJs[4]);
            return Sk.ffi.remapToPy(valueJs);
          }
        case 6:
          {
            var valueJs = new propJs(argsJs[0], argsJs[1], argsJs[2], argsJs[3], argsJs[4], argsJs[5]);
            return Sk.ffi.remapToPy(valueJs);
          }
        case 7:
          {
            var valueJs = new propJs(argsJs[0], argsJs[1], argsJs[2], argsJs[3], argsJs[4], argsJs[5], argsJs[6]);
            return Sk.ffi.remapToPy(valueJs);
          }
        default:
          {
            return createObject();
          }
      }
    }
    catch (e)
    {
      return createObject();
    }
  }
  else
  {
    return Sk.ffi.remapToPy(propJs.apply(objectJs, argsJs));
  }
};


/**
 * @param {Sk.builtin.NumberPy} intPy
 *
 * @return {Sk.builtin.lng}
 */
Sk.ffi.promoteIntToLong = function(intPy) {
  goog.asserts.assert(Sk.ffi.isInt(intPy));
  // TODO: Optimize. We know that the argument is the internal int representation.
  var valueJs = Sk.ffi.remapToJs(intPy);
  goog.asserts.assertNumber(valueJs);
  return new Sk.builtin.lng(valueJs);
};
goog.exportSymbol('Sk.ffi.promoteIntToLong', Sk.ffi.promoteIntToLong);


/**
 * Used to create longs in transformer, respects 0x, 0o, 0b, etc.
 *
 * @param {string} s
 * @param {number} radix
 *
 * @return {Sk.builtin.biginteger|Sk.builtin.lng}
 */
Sk.ffi.longFromString = function(s, radix) {
  goog.asserts.assertString(s, 's must be a string');
  //  goog.asserts.assertNumber(radix, "radix must be a number");

  // l/L are valid digits with radix >= 22
  // goog.asserts.assert(s.charAt(s.length - 1) !== "L" && s.charAt(s.length - 1) !== 'l', "L suffix should be removed before here");

  /**
   * @param {string} s
   * @param {number} radix
   * @return {Sk.builtin.biginteger}
   */
  var parser = function(s, radix) {
    if (radix == 10)
    {
      return new Sk.builtin.biginteger(s);
    }
    else
    {
      return new Sk.builtin.biginteger(s, radix);
    }
  };

  /**
   * @param {Sk.builtin.biginteger} x
   *
   * @return {Sk.builtin.biginteger}
   */
  var negater = function(x) {
    return x.negate();
  };

  /**
   * @const
   */
  var biginteger = Sk.str2number(s, radix, parser, negater, 'long');

  return new Sk.builtin.lng(biginteger);
};
goog.exportSymbol('Sk.ffi.longFromString', Sk.ffi.longFromString);


// TODO: These loaded here to prevent circularity issues.
// Can we use Google Closure to help here?
/**
 * @const
 * @type {Sk.builtin.lng}
 */
Sk.ffi.MAX_INT = new Sk.builtin.lng(+Sk.builtin.lng.threshold$);
goog.exportSymbol('Sk.ffi.MIN_INT', Sk.ffi.MIN_INT);


/**
 * @const
 * @type {Sk.builtin.lng}
 */
Sk.ffi.MIN_INT = new Sk.builtin.lng(-Sk.builtin.lng.threshold$);
goog.exportSymbol('Sk.ffi.MAX_INT', Sk.ffi.MAX_INT);
