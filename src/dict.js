/**
 * @constructor
 * @param {Array.<Object>} L
 */
Sk.builtin.dict = function dict(L)
{
    if (!(this instanceof Sk.builtin.dict)) return new Sk.builtin.dict(L);

    if (L === undefined)
    {
        L = [];
    }

    this.size = 0;

    if (Object.prototype.toString.apply(L) === '[object Array]')
    {
        // Handle dictionary literals
        for (var i = 0; i < L.length; i += 2)
        {
            this.mp$ass_subscript(L[i], L[i+1]);
        }
    }
    else if (L instanceof Sk.builtin.dict) {
        // Handle calls of type "dict(mapping)" from Python code
        for (var it = L.tp$iter(), k = it.tp$iternext(); k !== undefined; k = it.tp$iternext())
        {
            /**
             * @const
             */
            var v = L.mp$subscript(k);
            if (v === undefined)
            {
                this.mp$ass_subscript(k, Sk.builtin.none.none$);
            }
            else
            {
                this.mp$ass_subscript(k, v);
            }
        }
    }
    else if (L.tp$iter)
    {
        // Handle calls of type "dict(iterable)" from Python code
        for (var it = L.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext())
        {
            if (i.mp$subscript)
            {
                this.mp$ass_subscript(i.mp$subscript(0), i.mp$subscript(1));
            }
            else
            {
                throw new Sk.builtin.TypeError("element " + this.size + " is not a sequence");    
            }
        }
    }
    else
    {
        throw new Sk.builtin.TypeError("object is not iterable");
    }

    this.__class__ = Sk.builtin.dict;

    return this;
};

Sk.builtin.dict.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('dict', Sk.builtin.dict);

var kf = Sk.builtin.hash;

Sk.builtin.dict.prototype.key$lookup = function(bucket, keyPy)
{
    for (var i=0; i < bucket.items.length; i++)
    {
        /**
         * @const
         */
        var item = bucket.items[i];
        if (Sk.misceval.richCompareBool(item.lhs, keyPy, Sk.misceval.compareOp.Eq))
        {
            return item;
        }
    }
    return undefined;
}   

Sk.builtin.dict.prototype.key$pop = function(bucket, key)
{
    var item;
    var eq;
    var i;

    for (i=0; i<bucket.items.length; i++)
    {
        item = bucket.items[i];
        eq = Sk.misceval.richCompareBool(item.lhs, key, Sk.misceval.compareOp.Eq);
        if (eq)
        {
            bucket.items.splice(i, 1);
            this.size -= 1;
            return item;
        }
    }
    return undefined;
}

// Perform dictionary lookup, either return value or undefined if key not in dictionary
Sk.builtin.dict.prototype.mp$lookup = function(key)
{
    var bucket = this[kf(key)];
    var item;

    // todo; does this need to go through mp$ma_lookup

    if (bucket !== undefined)
    {
        item = this.key$lookup(bucket, key);
        if (item)
        {
            return item.rhs;
        };
    }

    // Not found in dictionary     
    return undefined;
}

Sk.builtin.dict.prototype.mp$subscript = function(key)
{
    var res = this.mp$lookup(key);

    if (res !== undefined)
    {
        // Found in dictionary
        return res;
    }
    else
    {
        // Not found in dictionary
        throw new Sk.builtin.KeyError(Sk.ffi.remapToJs(Sk.ffh.str(key)));
    }
};

/**
 * Expects Python arguments but returns a JavaScript response.
 *
 * @param {*} objectPy
 * @return {boolean}
 */
Sk.builtin.dict.prototype.sq$contains = function(objectPy)
{
    var res = this.mp$lookup(objectPy);

    return (res !== undefined);
}

Sk.builtin.dict.prototype.mp$ass_subscript = function(keyPy, wPy)
{
    /**
     * @const
     */
    var k = kf(keyPy);
    /**
     * @const
     */
    var bucket = this[k];

    if (bucket === undefined)
    {
        // New bucket
        this[k] = {$hash: k, items: [{lhs: keyPy, rhs: wPy}]};
        this.size += 1;
    }
    else
    {
        /**
         * @const
         */
        var item = this.key$lookup(bucket, keyPy);
        if (item)
        {
            item.rhs = wPy;
        }
        else
        {
            // Not found in dictionary
            bucket.items.push({lhs: keyPy, rhs: wPy});
            this.size += 1;
        }
    }
};

Sk.builtin.dict.prototype.mp$del_subscript = function(key)
{
    var bucket = this[kf(key)];
    var item;
    var s;

    // todo; does this need to go through mp$ma_lookup

    if (bucket !== undefined)
    {
        item = this.key$pop(bucket, key);
        if (item !== undefined)
        {
            return;
        };
    }

    // Not found in dictionary
    throw new Sk.builtin.KeyError(Sk.ffi.remapToJs(Sk.ffh.str(key)));
}

Sk.builtin.dict.prototype.tp$iter = function()
{
    var allkeys = [];
    for (var k in this)
    {
        if (this.hasOwnProperty(k))
        {
            var bucket = this[k];
            if (bucket && bucket.$hash !== undefined) // skip internal stuff. todo; merge pyobj and this
            {
                for (var i=0; i<bucket.items.length; i++)
                {
                    allkeys.push(bucket.items[i].lhs);
                }
            }
        }
    }
    //print(allkeys);

    var ret =
    {
        tp$iter: function() { return ret; },
        $obj: this,
        $index: 0,
        $keys: allkeys,
        tp$iternext: function()
        {
            // todo; StopIteration
            if (ret.$index >= ret.$keys.length) return undefined;
            return ret.$keys[ret.$index++];
            // return ret.$obj[ret.$keys[ret.$index++]].lhs;
        }
    };
    return ret;
};

Sk.builtin.dict.prototype['__iter__'] = new Sk.builtin.func(function(self)
{
    Sk.builtin.pyCheckArgs("__iter__", arguments, 1, 1);

    return self.tp$iter();
});

Sk.builtin.dict.prototype.tp$repr = function()
{
    /**
     * @const
     */
    var ret = [];
    for (var iter = this.tp$iter(), keyPy = iter.tp$iternext(); keyPy !== undefined; keyPy = iter.tp$iternext())
    {
        /**
         * @const
         */
        var keyString = Sk.ffi.remapToJs(Sk.misceval.objectRepr(keyPy));
        /**
         * @const
         */
        var valPy = this.mp$subscript(keyPy);
        /**
         * @const
         */
        var valString = Sk.ffi.remapToJs(Sk.misceval.objectRepr((valPy !== undefined) ? valPy : Sk.builtin.none.none$));
        ret.push(keyString + ": " + valString);
    }
    return Sk.builtin.stringToPy("{" + ret.join(", ") + "}");
};

Sk.builtin.dict.prototype.mp$length = function() { return this.size; };

Sk.builtin.dict.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
Sk.builtin.dict.prototype.tp$hash = Sk.builtin.object.prototype.HashNotImplemented;

/**
 * @param {*} other
 * @param {Sk.misceval.compareOp} op
 */
Sk.builtin.dict.prototype.tp$richcompare = function(other, op)
{
    // if the comparison allows for equality then short-circuit it here
    if (this === other && Sk.misceval.opAllowsEquality(op))
        return true;

    // Only support Eq and NotEq comparisons
    switch (op)
    {
        case Sk.misceval.compareOp.Lt: return undefined;
        case Sk.misceval.compareOp.LtE: return undefined;
        case Sk.misceval.compareOp.Eq: break;
        case Sk.misceval.compareOp.NotEq: break;
        case Sk.misceval.compareOp.Gt: return undefined;
        case Sk.misceval.compareOp.GtE: return undefined;
        default:
            goog.asserts.fail();
    }

    if (!(other instanceof Sk.builtin.dict))
    {
        if (op === Sk.misceval.compareOp.Eq)
        {
            return false;
        } else {
            return true;
        }
    }

    var thisl = this.size;
    var otherl = other.size;

    if (thisl !== otherl)
    {
        if (op === Sk.misceval.compareOp.Eq)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    for (var iter = this.tp$iter(), k = iter.tp$iternext();
            k !== undefined;
            k = iter.tp$iternext())
    {
        var v = this.mp$subscript(k);
        var otherv = other.mp$subscript(k);

        if (!Sk.misceval.richCompareBool(v, otherv, Sk.misceval.compareOp.Eq))
        {
            if (op === Sk.misceval.compareOp.Eq)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }

    if (op === Sk.misceval.compareOp.Eq)
    {
        return true;
    }
    else
    {
        return false;
    }
}

Sk.builtin.dict.prototype['get'] = new Sk.builtin.func(function(selfPy, keyPy, defaultPy)
{
    /**
     * @const
     */
    var valuePy = selfPy.mp$lookup(keyPy);
    if (valuePy === undefined)
    {
        return (defaultPy === undefined) ? Sk.builtin.none.none$ : defaultPy;
    }
    else
    {
        return valuePy;
    }
});

Sk.builtin.dict.prototype['has_key'] = new Sk.builtin.func(function(selfPy, keyPy)
{
    return Sk.ffi.booleanToPy(selfPy.sq$contains(keyPy));
});

Sk.builtin.dict.prototype['items'] = new Sk.builtin.func(function(selfPy)
{
    var ret = [];
    for (var iter = selfPy.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext())
    {
        /**
         * @const
         */
        var v = selfPy.mp$subscript(k);
        if (v === undefined)
        {
            ret.push(new Sk.builtin.tuple([k, Sk.builtin.none.none$]));
        }
        else
        {
            ret.push(new Sk.builtin.tuple([k, v]));
        }
    }
    return new Sk.builtin.list(ret);
});

Sk.builtin.dict.prototype['keys'] = new Sk.builtin.func(function(self)
{
    var ret = [];
    for (var iter = self.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext())
    {
        ret.push(k);
    }
    return new Sk.builtin.list(ret);
});

Sk.builtin.dict.prototype['values'] = new Sk.builtin.func(function(self)
{
    var ret = [];
    for (var iter = self.tp$iter(), k = iter.tp$iternext(); k !== undefined; k = iter.tp$iternext())
    {
        /**
         * @const
         */
        var v = self.mp$subscript(k);
        if (v === undefined)
        {
            ret.push(Sk.builtin.none.none$);
        }
        else
        {
            ret.push(v);
        }
    }
    return new Sk.builtin.list(ret);
});

Sk.builtin.dict.prototype.tp$name = "dict";

goog.exportSymbol("Sk.builtin.dict", Sk.builtin.dict);
