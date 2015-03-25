goog.provide('Sk.builtin');


// todo; these should all be func objects too, otherwise str() of them won't
// work, etc.

Sk.builtin.range = function range(start, stop, step)
{
    var ret = [];
    var i;

    Sk.ffi.checkFunctionArgs("range(stop) or range(start, stop[, step])", arguments, 1, 3);

    Sk.builtin.pyCheckType("start", "integer", Sk.builtin.checkInt(start));
    if (stop !== undefined)
    {
        Sk.builtin.pyCheckType("stop", "integer", Sk.builtin.checkInt(stop));
    }
    if (step !== undefined)
    {
        Sk.builtin.pyCheckType("step", "integer", Sk.builtin.checkInt(step));
    }

    start = Sk.ffi.remapToJs(start);
    stop = Sk.ffi.remapToJs(stop);
    step = Sk.ffi.remapToJs(step);

    if ((stop === undefined) && (step === undefined))
    {
        stop = start;
        start = 0;
        step = 1;
    }
    else if (step === undefined)
    {
        step = 1;
    }

    if (step === 0)
    {
        throw new Sk.builtin.ValueError("range() step argument must not be zero");
    }

    if (step > 0)
    {
        for (i=start; i<stop; i+=step)
        {
            ret.push(Sk.ffi.numberToIntPy(i));
        }
    }
    else
    {
        for (i=start; i>stop; i+=step)
        {
            ret.push(Sk.ffi.numberToIntPy(i));
        }
    }

    return new Sk.builtin.list(ret);
};

Sk.builtin.asnum$ = function(a)
{
    if (a === undefined) return a;
    if (a === null) return a;
    if (a === Sk.builtin.none.none$) return null;
    if (a.constructor === Sk.builtin.bool)
    {
        if (a.v)
        return 1;
        return 0;
    }
    if (typeof a === "number") return a;
    if (typeof a === "string") return a;
    if (a.constructor === Sk.builtin.NumberPy) return a.v;
    if (a.constructor === Sk.builtin.lng)
    {
        if (a.cantBeInt())
        return a.str$(10, true);
        return a.toInt$();
    }
    if (a.constructor === Sk.builtin.biginteger)
    {
        if ((a.trueCompare(new Sk.builtin.biginteger(Sk.builtin.lng.threshold$)) > 0)
        || (a.trueCompare(new Sk.builtin.biginteger(-Sk.builtin.lng.threshold$)) < 0))
        {
            return a.toString();
        }
        return a.intValue();
    }

    return a;
};

goog.exportSymbol("Sk.builtin.asnum$", Sk.builtin.asnum$);

Sk.builtin.asnum$nofloat = function(a)
{
    if (a === undefined) return a;
    if (a === null) return a;
    if (a === Sk.builtin.none.none$) return null;
    if (a.constructor === Sk.builtin.bool)
    {
        if (a.v)
        return 1;
        return 0;
    }
    if (typeof a === "number") a = a.toString();
    if (Sk.ffi.isFloat(a))
    {
        a = Sk.ffi.remapToJs(a).toString();
    }
    if (Sk.ffi.isInt(a))
    {
        a = Sk.ffi.remapToJs(a).toString();
    }
    if (a.constructor === Sk.builtin.lng)   a = a.str$(10, true);
    if (a.constructor === Sk.builtin.biginteger) a = a.toString();

    //  If not a float, great, just return this
    if (a.indexOf('.') < 0 && a.indexOf('e') < 0 && a.indexOf('E') < 0)
        return a;

    var expon=0;
    var mantissa;

    if (a.indexOf('e') >= 0)
    {
        mantissa = a.substr(0,a.indexOf('e'));
        expon = a.substr(a.indexOf('e')+1);
    }
    else if (a.indexOf('E') >= 0)
    {
        mantissa = a.substr(0,a.indexOf('e'));
        expon = a.substr(a.indexOf('E')+1);
    }
    else
    {
        mantissa = a;
    }

    expon = parseInt(expon, 10);

    var decimal = mantissa.indexOf('.');

    //  Simplest case, no decimal
    if (decimal < 0) {
        if (expon >= 0) {
            // Just add more zeroes and we're done
            while (expon-- > 0)
                mantissa += "0";
            return mantissa;
        } else {
            if (mantissa.length > -expon)
                return mantissa.substr(0,mantissa.length + expon);
            else
                return 0;
        }
    }

    //  Negative exponent OR decimal (neg or pos exp)
    if (decimal == 0)
        mantissa = mantissa.substr(1);
    else if (decimal < mantissa.length)
        mantissa = mantissa.substr(0,decimal) + mantissa.substr(decimal+1);
    else
        mantissa = mantissa.substr(0,decimal);

    decimal = decimal + expon;

    while (decimal > mantissa.length)
        mantissa += "0";

    if (decimal <= 0)
    {
        mantissa = 0;
    }
    else
    {
        mantissa = mantissa.substr(0,decimal);
    }

    return mantissa;
}
goog.exportSymbol("Sk.builtin.asnum$nofloat", Sk.builtin.asnum$nofloat);

Sk.builtin.round = function round(number, ndigits)
{
    var result, multiplier;

    Sk.builtin.pyCheckArgs("round", arguments, 1, 2);
    if (!Sk.builtin.checkNumber(number)) {
        throw new Sk.builtin.TypeError("a float is required");
    }
    if ((ndigits !== undefined) && !Sk.misceval.isIndex(ndigits))
    {
        throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(ndigits) + "' object cannot be interpreted as an index");
    };

    if (ndigits === undefined)
    {
        ndigits = 0;
    };

    number = Sk.ffi.remapToJs(number);
    ndigits = Sk.misceval.asIndex(ndigits);

    multiplier = Math.pow(10, ndigits);
    result = Math.round(number * multiplier) / multiplier;

    return Sk.builtin.numberToPy(result);
};

Sk.builtin.len = function len(item)
{
    Sk.builtin.pyCheckArgs("len", arguments, 1, 1);

    if (item.sq$length)
        return Sk.ffi.numberToIntPy(item.sq$length());
    
    if (item.mp$length)
        return Sk.ffi.numberToIntPy(item.mp$length());

    if (item.tp$length)
    {
        var lenPy = item.tp$length();
        return lenPy;
//      return Sk.builtin.numberPy(item.tp$length(), Sk.builtin.NumberPy.int$);
    }

    throw new Sk.builtin.TypeError("object of type '" + Sk.ffi.typeName(item) + "' has no len()");
};

Sk.builtin.min = function min()
{
    Sk.builtin.pyCheckArgs("min", arguments, 1);

    var argArray = Sk.misceval.arrayFromArguments(arguments);
    var lowest = argArray[0];
    for (var i = 1; i < argArray.length; ++i)
    {
        if (Sk.misceval.richCompareBool(argArray[i], lowest, Sk.misceval.compareOp.Lt))
        {
            lowest = argArray[i];
        }
    }
    return lowest;
};

Sk.builtin.max = function max()
{
    Sk.builtin.pyCheckArgs("max", arguments, 1);

    var argArray = Sk.misceval.arrayFromArguments(arguments);
    var highest = argArray[0];
    for (var i = 1; i < argArray.length; ++i)
    {
        if (Sk.misceval.richCompareBool(argArray[i], highest, Sk.misceval.compareOp.Gt))
        {
            highest = argArray[i];
        }
    }
    return highest;
};

Sk.builtin.any = function any(iter)
{
    var it, i;

    Sk.builtin.pyCheckArgs("any", arguments, 1);
    if (!Sk.builtin.checkIterable(iter)) {
        throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(iter) + "' object is not iterable");
    }

    it = iter.tp$iter();
    for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
        if (Sk.misceval.isTrue(i)) {
            return true;
        }
    }

    return false;
}

Sk.builtin.all = function all(iter)
{
    var it, i;

    Sk.builtin.pyCheckArgs("all", arguments, 1);
    if (!Sk.builtin.checkIterable(iter))
    {
        throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(iter) + "' object is not iterable");
    }

    it = iter.tp$iter();
    for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext())
    {
        if (!Sk.misceval.isTrue(i))
        {
            return false;
        }
    }

    return true;
}

Sk.builtin.sum = function sum(iter,start)
{
    var tot;
    var it, i;
    var has_float;

    Sk.builtin.pyCheckArgs("sum", arguments, 1, 2);
    Sk.builtin.pyCheckType("iter", "iterable", Sk.builtin.checkIterable(iter));
    if (start !== undefined && Sk.builtin.isStringPy(start))
    {
        throw new Sk.builtin.TypeError("sum() can't sum strings [use ''.join(seq) instead]");
    };

    if (start === undefined )
    {
        tot = Sk.ffi.numberToIntPy(0);
    }
    else
    {
        tot = start;
    }

    it = iter.tp$iter();
    for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext())
    {
        if (Sk.ffi.isFloat(i))
        {
            has_float = true;
            if (!Sk.ffi.isFloat(tot))
            {
                tot = Sk.builtin.numberToPy(Sk.builtin.asnum$(tot));
            }
        }
        else if (i instanceof Sk.builtin.lng)
        {
            if (!has_float)
            {
                if (!(tot instanceof Sk.builtin.lng))
                {
                    tot = new Sk.builtin.lng(tot);
                }
            }
        }

        if (tot.nb$add(i) !== undefined)
        {
            tot = tot.nb$add(i);
        }
        else
        {
            throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + Sk.ffi.typeName(tot) + "' and '" + Sk.ffi.typeName(i)+"'");
        }
    }
    return tot;
};

Sk.builtin.zip = function zip()
{
    if (arguments.length === 0)
    {
        return new Sk.builtin.list([]);
    }

    var iters = [];
    for (var i = 0; i < arguments.length; i++)
    {
        if (arguments[i].tp$iter)
        {
            iters.push(arguments[i].tp$iter());
        }
        else
        {
            throw "TypeError: argument " + i + " must support iteration";
        }
    }
    var res = [];
    var done = false;
    while (!done)
    {
        var tup = [];
        for (i = 0; i < arguments.length; i++)
        {
            var el = iters[i].tp$iternext();
            if (el === undefined)
            {
                done = true;
                break;
            }
            tup.push(el);
        }
        if (!done)
        {
            res.push(new Sk.builtin.tuple(tup));
        }
    }
    return new Sk.builtin.list(res);
}

Sk.builtin.abs = function abs(xPy)
{
    return Sk.ffh.abs(xPy);
};

Sk.builtin.ord = function ord(x)
{
    Sk.builtin.pyCheckArgs("ord", arguments, 1, 1);

    if (!Sk.builtin.isStringPy(x))
    {
        throw new Sk.builtin.TypeError("ord() expected a string of length 1, but " + Sk.ffi.typeName(x) + " found");
    }
    else if (Sk.builtin.stringToJs(x).length !== 1)
    {
        throw new Sk.builtin.TypeError("ord() expected a character, but string of length " + Sk.builtin.stringToJs(x).length + " found");
    }
    return Sk.ffi.numberToIntPy(Sk.builtin.stringToJs(x).charCodeAt(0));
};

Sk.builtin.chr = function chr(xPy)
{
    Sk.builtin.pyCheckArgs("chr", arguments, 1, 1);
    if (!Sk.builtin.checkInt(xPy))
    {
        throw new Sk.builtin.TypeError("an integer is required");
    }
    /**
     * @const
     * @type {number}
     */
    var x = Sk.builtin.asnum$(xPy);


    if ((x < 0) || (x > 255))
    {
        throw new Sk.builtin.ValueError("chr() arg not in range(256)");
    }

    return Sk.builtin.stringToPy(String.fromCharCode(x));
};

Sk.builtin.int2str_ = function helper_(x, radix, prefix)
{
    var str = '';
    if (Sk.ffi.isLong(x))
    {
        var suffix = '';
        if (radix !== 2)
            suffix = 'L';

        str = x.str$(radix, false);
        if (x.nb$isnegative())
        {
            return Sk.builtin.stringToPy('-'+prefix+str+suffix);
        }
        return Sk.builtin.stringToPy(prefix+str+suffix);
    }
    else
    {
        x = Sk.misceval.asIndex(x);
        str = x.toString(radix);
        if (x < 0)
        {
            return Sk.builtin.stringToPy('-'+prefix+str.slice(1));
        }
        return Sk.builtin.stringToPy(prefix+str);
    }
};

Sk.builtin.hex = function hex(x)
{
    Sk.builtin.pyCheckArgs("hex", arguments, 1, 1);
    if (!Sk.misceval.isIndex(x))
    {
        throw new Sk.builtin.TypeError("hex() argument can't be converted to hex");
    }
    return Sk.builtin.int2str_(x, 16, "0x");
};

Sk.builtin.oct = function oct(x)
{
    Sk.builtin.pyCheckArgs("oct", arguments, 1, 1);
    if (!Sk.misceval.isIndex(x))
    {
        throw new Sk.builtin.TypeError("oct() argument can't be converted to hex");
    }
    return Sk.builtin.int2str_(x, 8, "0");
};

Sk.builtin.bin = function bin(x)
{
    Sk.builtin.pyCheckArgs("bin", arguments, 1, 1);
    if (!Sk.misceval.isIndex(x))
    {
        throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(x) + "' object can't be interpreted as an index");
    }
    return Sk.builtin.int2str_(x, 2, "0b");
};

Sk.builtin.dir = function dir(x)
{
    Sk.builtin.pyCheckArgs("dir", arguments, 1, 1);

    /**
     * @param {string} k
     * @return {string|null}
     */
    var getName = function (k)
    {
        goog.asserts.assertString(k);
        var s = null;
        var internal = ["__bases__", "__mro__", "__class__"];
        if (internal.indexOf(k) !== -1)
            return null;
        if (k.indexOf('$') !== -1)
            s = Sk.builtin.dir.slotNameToRichName(k);
        else if (k.charAt(k.length - 1) !== '_')
            s = k;
        else if (k.charAt(0) === '_')
            s = k;
        return s;
    };

    var names = [];
    var k;
    /**
     * @type {string|null}
     */
    var s;
    var i;
    var mro;
    var base;
    var prop;

    // Add all object properties
    for (k in x.constructor.prototype)
    {
        s = getName(k);
        if (s)
            names.push(Sk.builtin.stringToPy(s));
    }

    // Add all attributes
    if (x['$d']) 
    {
        if (x['$d'].tp$iter)
        {
            // Dictionary
            var it = x['$d'].tp$iter();
            var i;
            for (i = it.tp$iternext(); i !== undefined; i = it.tp$iternext())
            {
                // TODO: This looks like a coercion.
                s = getName(Sk.ffi.remapToJs(new Sk.builtin.StringPy(i)));
                if (s)
                    names.push(Sk.builtin.stringToPy(s));
            }
        }
        else
        {
            // Object
            for (s in x['$d'])
            {
                // TODO: Is this a coercion?
                names.push(new Sk.builtin.StringPy(s));
            }
        }
    }

    // Add all class attributes
    mro = x.tp$mro;
    if (mro)
    {
        mro = x.tp$mro;
        for (i = 0; i < mro.v.length; ++i)
        {
            base = mro.v[i];
            for (prop in base)
            {
                if (base.hasOwnProperty(prop))
                {
                    s = getName(prop);
                    if (s)
                        names.push(Sk.builtin.stringToPy(s));
                }
            }
        }
    }
        
    // Sort results
    names.sort(function(a, b) { return (a.v > b.v) - (a.v < b.v); });

    // Get rid of duplicates before returning, as duplicates should
    //  only occur when they are shadowed
    var last = function(value, index, self)
    {
        // Returns true iff the value is not the same as the next value
        return value !== self[index+1];
    };
    return new Sk.builtin.list(names.filter(last));
};

Sk.builtin.dir.slotNameToRichName = function(k)
{
    // todo; map tp$xyz to __xyz__ properly
    return undefined;
};

Sk.builtin.repr = function repr(x)
{
    Sk.builtin.pyCheckArgs("repr", arguments, 1, 1);

    return Sk.misceval.objectRepr(x);
};

Sk.builtin.open = function open(filename, mode, bufsize)
{
    Sk.builtin.pyCheckArgs("open", arguments, 1, 3);
    // We are assuming that Python strings are interned, which is the Python way!
    if (mode === undefined) mode = Sk.builtin.stringToPy("r");
    if (mode.v !== "r" && mode.v !== "rb") throw "todo; haven't implemented non-read opens";
    return new Sk.builtin.file(filename, mode, bufsize);
};

Sk.builtin.isinstance = function isinstance(obj, type)
{
    Sk.builtin.pyCheckArgs("isinstance", arguments, 2, 2);
    if (!Sk.builtin.checkClass(type) && !(type instanceof Sk.builtin.tuple))
    {
        throw new Sk.builtin.TypeError("isinstance() arg 2 must be a class, type, or tuple of classes and types");
    }

    if (type === Sk.builtin.int_.prototype.ob$type)
    {
        return (obj.tp$name === 'number') && (obj.skType === Sk.builtin.NumberPy.int$);
    }

    if (type === Sk.builtin.float_.prototype.ob$type)
    {
        return (obj.tp$name === 'number') && (Sk.ffi.isFloat(obj)); 
    }

    if (type === Sk.builtin.none.none$.ob$type)
    {
        return (obj === Sk.builtin.none.none$);
    }

    // Normal case
    if (obj.ob$type === type) return true;

    // Handle tuple type argument
    if (type instanceof Sk.builtin.tuple)
    {
        for (var i = 0; i < type.v.length; ++i)
        {
            if (Sk.builtin.isinstance(obj, type.v[i]))
                return true;
        }
        return false;
    }

    var issubclass = function(klass, base)
    {
        if (klass === base) return true;
        if (klass['$d'] === undefined) return false;
        var bases = klass['$d'].mp$subscript(Sk.builtin.type.basesStr_);
        for (var i = 0; i < bases.v.length; ++i)
        {
            if (issubclass(bases.v[i], base))
                return true;
        }
        return false;
    };

    return issubclass(obj.ob$type, type);
};
Sk.builtin.hashCount = 0;
Sk.builtin.hash = function hash(value)
{
    Sk.builtin.pyCheckArgs("hash", arguments, 1, 1);

    // Useless object to get compiler to allow check for __hash__ property
    var junk = {__hash__: function() {return 0;}}

    if ((value instanceof Object) && (value.tp$hash !== undefined))
    {
        if (value.$savedHash_) return value.$savedHash_;
        value.$savedHash_ = value.tp$hash();
        return value.$savedHash_;
    }
    else if ((value instanceof Object) && (value.__hash__ !== undefined))
    {
        return Sk.misceval.callsim(value.__hash__, value);
    }
    else if (value instanceof Sk.builtin.bool)
    {
        if (value.v)
            return 1;
        return 0;
    }
    else if (value === Sk.builtin.none.none$)
    {
        return 0;
    }
    else if (value instanceof Object)
    {
        if (value.__id === undefined)
        {
            Sk.builtin.hashCount += 1;
            value.__id = Sk.builtin.hashCount;
        }
        return value.__id;
    }
    else if (typeof value === "number")
    {
        return value;
    }
    else if (value === null)
    {
        return 0;  // what should this be?
    }
    else if (value === true)
    {
        return 1;
    }
    else if (value === false)
    {
        return 0;
    }

    return (typeof value) + ' ' + String(value);
    // todo; throw properly for unhashable types
};

Sk.builtin.getattr = function getattr(obj, name, default_)
{
    Sk.builtin.pyCheckArgs("getattr", arguments, 2, 3);
    if (!Sk.builtin.isStringPy(name))
    {
        throw new Sk.builtin.TypeError("attribute name must be string");
    }

    var ret = obj.tp$getattr(Sk.builtin.stringToJs(name));
    if (ret === undefined)
    {
        if (default_ !== undefined)
            return default_;
        else
            throw new Sk.builtin.AttributeError("'" + Sk.ffi.typeName(obj) + "' object has no attribute '" + Sk.builtin.stringToJs(name) + "'");
    }
    return ret;
};

Sk.builtin.raw_input = function(obj, name, default_)
{
    // What type are we expeting?
    var x = Sk.inputfun(obj.v);
    // Possibly coercion.
    return new Sk.builtin.StringPy(x);
};

/**
 * @param {Sk.builtin.StringPy} promptPy
 * @param {string} name
 * @param {Object} default_
 */
Sk.builtin.input = function(promptPy, name, default_)
{
    Sk.ffi.checkFunctionArgs("input", arguments, 0, 1);
    if (Sk.ffi.isDefined(promptPy))
    {
        Sk.ffi.checkArgType("prompt", Sk.ffi.PyType.STR, Sk.builtin.isStringPy(promptPy), promptPy);
        var x = Sk.inputfun(Sk.builtin.stringToJs(promptPy));
        return Sk.builtin.stringToPy(x);
    }
    else
    {
        var x = Sk.inputfun("");
        return Sk.builtin.stringToPy(x);
    }
};

Sk.builtin.jseval = function jseval(evalcode)
{
    goog.global['eval'](evalcode);
};

Sk.builtin.jsmillis = function jsmillis()
{
    var now = new Date()
    return now.valueOf();
};

Sk.builtin.superbi =  function superbi()
{
    throw new Sk.builtin.NotImplementedError("super is not yet implemented, please report your use case as a github issue.");
}

Sk.builtin.eval_ =  function eval_()
{
    throw new Sk.builtin.NotImplementedError("eval is not yet implemented");
}

Sk.builtin.map = function map(fun, seq)
{
    Sk.ffi.checkFunctionArgs("map(function, iterable, ...)", arguments, 2);

    if (arguments.length > 2)
    {
        // Pack sequences into one list of JavaScript Arrays.
        var combined = [];
        var iterables = Array.prototype.slice.apply(arguments).slice(1);
        for (var i in iterables)
        {
            // TODO: checkIterable
            if (iterables[i].tp$iter === undefined)
            {
                var argnum = parseInt(i,10) + 2;
                throw new Sk.builtin.TypeError("argument " + argnum + " to map() must support iteration");
            }
            iterables[i] = iterables[i].tp$iter()
        }

        while(true)
        {
            var args = [];
            var nones = 0;
            for (var i in iterables)
            {
                var next = iterables[i].tp$iternext()
                if (next === undefined)
                {
                    args.push(Sk.builtin.none.none$);
                    nones++;
                }
                else
                {
                    args.push(next);
                }
            }
            if (nones !== iterables.length)
            {
                combined.push(args);
            }
            else
            {
                // All iterables are done.
                break;
            }
        }
        seq = new Sk.builtin.list(combined);
    }

    if (seq.tp$iter === undefined)
    {
        throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(seq) + "' object is not iterable");
    }

    var retval = [];
    var iter, item;

    for (iter = seq.tp$iter(), item = iter.tp$iternext(); item !== undefined; item = iter.tp$iternext())
    {
        if (fun === Sk.builtin.none.none$)
        {
            if (item instanceof Array)
            {
                // With None function and multiple sequences, 
                // map should return a list of tuples
                item = new Sk.builtin.tuple(item);
            }
            retval.push(item);
        }
        else
        {
            if (!(item instanceof Array))
            {
                // If there was only one iterable, convert to Javascript
                // Array for call to apply.
                item = [item];
            }
            retval.push(Sk.misceval.apply(fun, undefined, undefined, undefined, item));
        }
    }
    
    return new Sk.builtin.list(retval);
}

Sk.builtin.reduce = function reduce(fun, seq, initializer)
{
    Sk.builtin.pyCheckArgs("reduce", arguments, 2, 3);
    var iter = seq.tp$iter();
    if (initializer === undefined)
    {
        initializer = iter.tp$iternext();
        if (initializer === undefined)
        {
            throw new Sk.builtin.TypeError('reduce() of empty sequence with no initial value');
        }
    }
    var accum_value = initializer;
    var next = iter.tp$iternext();
    while (next !== undefined)
    {
        accum_value = fun.func_code(accum_value, next)
        next = iter.tp$iternext();
    }
    return accum_value;
}

Sk.builtin.filter = function filter(fun, iterable)
{
    Sk.builtin.pyCheckArgs("filter", arguments, 2, 2);
    
    //todo: need to find a proper way to tell what type it is.
    if (iterable.tp$iter === undefined)
    {
        throw new Sk.builtin.TypeError("'" + Sk.ffi.typeName(iterable) + "' object is not iterable");
    }
    
    //simulate default identity function
    if (fun === Sk.builtin.none.none$)
    {
        fun = { func_code: function (x) { return Sk.builtin.bool(x); } } 
    }
    
    var ctor = function () { return []; };
    var add = function (iter, item) { iter.push(item); return iter; };
    var ret = function (iter) { return new Sk.builtin.list(iter); };

    // DGH Was iterable.__class__ === Sk.builtin.StringPy
    if (Sk.builtin.isStringPy(iterable))
    {
        ctor = function () { return Sk.builtin.stringToPy(''); }
        add = function (iter, item) { return iter.sq$concat(item); }
        ret = function (iter) { return iter; }
    }
    else if (iterable.__class__ === Sk.builtin.tuple)
    {
        ret = function (iter) { return new Sk.builtin.tuple(iter); }
    }
    
    var iter = iterable.tp$iter(),
        next = iter.tp$iternext(),
        retval = ctor();
    
    if (next === undefined)
    {
        return ret(retval);
    }
    
    while (next !== undefined)
    {
        if (Sk.misceval.isTrue(fun.func_code(next)))
        {
            retval = add(retval, next);
        }
        next = iter.tp$iternext();
    }
    
    return ret(retval);
}

Sk.builtin.hasattr = function hasattr(obj,attr)
{
    Sk.builtin.pyCheckArgs("hasattr", arguments, 2, 2);
    if (!Sk.builtin.isStringPy(attr))
    {
        throw new Sk.builtin.TypeError('hasattr(): attribute name must be string');
    }

    if (obj.tp$getattr)
    {
        if (obj.tp$getattr(attr.v))
        {
            return true;
        }
        else
            return false;
    }
    else
        throw new Sk.builtin.AttributeError('Object has no tp$getattr method')
}


Sk.builtin.pow = function pow(a, b, c)
{
    Sk.builtin.pyCheckArgs("pow", arguments, 2, 3);

    var a_num = Sk.ffi.remapToJs(a);
    var b_num = Sk.ffi.remapToJs(b);
    var c_num = Sk.ffi.remapToJs(c);

    if (!Sk.builtin.checkNumber(a) || !Sk.builtin.checkNumber(b))
    {
        if (c === undefined)
        {
            throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.ffi.typeName(a) + "' and '" + Sk.ffi.typeName(b) + "'");
        }
        else
        {
            throw new Sk.builtin.TypeError("unsupported operand type(s) for pow(): '" + Sk.ffi.typeName(a) + "', '" + Sk.ffi.typeName(b) + "', '" + Sk.ffi.typeName(c) + "'");
        }
    }
    if (a_num < 0 && Sk.ffi.isFloat(b))
    {
        throw new Sk.builtin.ValueError("negative number cannot be raised to a fractional power");
    }

    if (c === undefined)
    {
        var res = Math.pow(a_num, b_num);
        if ((Sk.ffi.isFloat(a) || Sk.ffi.isFloat(b)) || (b_num < 0))
        {
            return Sk.builtin.numberToPy(res);
        }
        else if (Sk.ffi.isLong(a) || Sk.ffi.isLong(b))
        {
            return new Sk.builtin.lng(res);
        }
        else
        {
            return Sk.ffi.numberToIntPy(res);
        }
    }
    else
    {
        // FIXME: Over-working this function into using JavaScript number!
        if (!Sk.builtin.checkInt(a) || !Sk.builtin.checkInt(b) || !Sk.builtin.checkInt(c))
        {
            throw new Sk.builtin.TypeError("pow() 3rd argument not allowed unless all arguments are integers");
        }
        if (b_num < 0)
        {
            throw new Sk.builtin.TypeError("pow() 2nd argument cannot be negative when 3rd argument specified");
        }

        if ((a instanceof Sk.builtin.lng || b instanceof Sk.builtin.lng || c instanceof Sk.builtin.lng)
                || (Math.pow(a_num, b_num) === Infinity))
        {
            // convert a to a long so that we can use biginteger's modPowInt method
            return new Sk.builtin.lng(a).nb$power(b, c);
        }
        else
        {
            return Sk.ffi.numberToIntPy(Math.pow(a_num, b_num)).nb$remainder(c);
        }
    }
}

Sk.builtin.quit = function quit(msg)
{
    /**
     * @const
     */
    // Some coercion here
    var s = Sk.builtin.stringToJs(new Sk.builtin.StringPy(msg));
    throw new Sk.builtin.SystemExit(s);
}

Sk.builtin.sorted = function sorted(iterable, cmp, key, reverse)
{
    var compare_func;
    var list;
    if (key !== undefined && !(key === Sk.builtin.none.none$))
    {
        if (cmp === Sk.builtin.none.none$)
        {
            compare_func = { func_code: 
                function(a,b)
                {
                    return Sk.misceval.richCompareBool(a[0], b[0], Sk.misceval.compareOp.Lt) ? Sk.ffi.numberToIntPy(-1) : Sk.ffi.numberToIntPy(0);
                }
            };
        }
        else
        {
            compare_func = { func_code: function(a,b) { return cmp.func_code(a[0], b[0]); } };
        }
        var iter = iterable.tp$iter();
        var next = iter.tp$iternext();
        var arr = [];
        while (next !== undefined)
        {
            arr.push([key.func_code(next), next]);
            next = iter.tp$iternext();
        }
        list = new Sk.builtin.list(arr);
    }
    else
    {
        if (!(cmp === Sk.builtin.none.none$) && cmp !== undefined)
        {
            compare_func = cmp;
        }
        list = new Sk.builtin.list(iterable);
    }

    if (compare_func !== undefined)
    {
        list.list_sort_(list, compare_func);
    }
    else
    {
        list.list_sort_(list);
    }
    
    if (reverse)
    {
        list.list_reverse_(list);
    }
    
    if (key !== undefined && !(key === Sk.builtin.none.none$))
    {
        var iter = list.tp$iter();
        var next = iter.tp$iternext()
        var arr = [];
        while (next !== undefined)
        {
            arr.push(next[1]);
            next = iter.tp$iternext();
        }
        list = new Sk.builtin.list(arr);
    }
    
    return list;
}

Sk.builtin.bytearray = function bytearray() { throw new Sk.builtin.NotImplementedError("bytearray is not yet implemented")}
Sk.builtin.callable = function callable() { throw new Sk.builtin.NotImplementedError("callable is not yet implemented")}
Sk.builtin.delattr = function delattr() { throw new Sk.builtin.NotImplementedError("delattr is not yet implemented")}
Sk.builtin.divmod = function divmod() { throw new Sk.builtin.NotImplementedError("divmod is not yet implemented")}
Sk.builtin.execfile = function execfile() { throw new Sk.builtin.NotImplementedError("execfile is not yet implemented")}
Sk.builtin.format = function format() { throw new Sk.builtin.NotImplementedError("format is not yet implemented")}
Sk.builtin.frozenset = function frozenset() { throw new Sk.builtin.NotImplementedError("frozenset is not yet implemented")}
Sk.builtin.globals = function globals() { throw new Sk.builtin.NotImplementedError("globals is not yet implemented")}
Sk.builtin.help = function help() { throw new Sk.builtin.NotImplementedError("help is not yet implemented")}
Sk.builtin.issubclass = function issubclass() { throw new Sk.builtin.NotImplementedError("issubclass is not yet implemented")}
Sk.builtin.iter = function iter() { throw new Sk.builtin.NotImplementedError("iter is not yet implemented")}
Sk.builtin.locals = function locals() { throw new Sk.builtin.NotImplementedError("locals is not yet implemented")}
Sk.builtin.memoryview = function memoryview() { throw new Sk.builtin.NotImplementedError("memoryview is not yet implemented")}
Sk.builtin.next_ = function next_() { throw new Sk.builtin.NotImplementedError("next is not yet implemented")}
Sk.builtin.property = function property() { throw new Sk.builtin.NotImplementedError("property is not yet implemented")}
Sk.builtin.reload = function reload() { throw new Sk.builtin.NotImplementedError("reload is not yet implemented")}
Sk.builtin.reversed = function reversed() { throw new Sk.builtin.NotImplementedError("reversed is not yet implemented")}
Sk.builtin.unichr = function unichr() { throw new Sk.builtin.NotImplementedError("unichr is not yet implemented")}
Sk.builtin.vars = function vars() { throw new Sk.builtin.NotImplementedError("vars is not yet implemented")}
Sk.builtin.xrange = Sk.builtin.range;
Sk.builtin.apply_ = function apply_() { throw new Sk.builtin.NotImplementedError("apply is not yet implemented")}
Sk.builtin.buffer = function buffer() { throw new Sk.builtin.NotImplementedError("buffer is not yet implemented")}
Sk.builtin.coerce = function coerce() { throw new Sk.builtin.NotImplementedError("coerce is not yet implemented")}
Sk.builtin.intern = function intern() { throw new Sk.builtin.NotImplementedError("intern is not yet implemented")}
