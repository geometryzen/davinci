/**
 * Return a new featureless object. object is a base for all classes.
 * It has methods that are common to all instances of Python classes.
 * This (Built-in Function) function does not accept any arguments.
 *
 * @constructor
 */
Sk.builtin.object = function()
{
    if (!(this instanceof Sk.builtin.object)) return new Sk.builtin.object();
    this['$d'] = new Sk.builtin.dict([]);
    return this;
};

Sk.builtin.object.prototype.GenericGetAttr = function(name)
{
    goog.asserts.assert(typeof name === "string");

    var tp = this.ob$type;
    goog.asserts.assert(tp !== undefined, "object has no ob$type!");

    //print("getattr", tp.tp$name, name);

    var descr = Sk.builtin.type.typeLookup(tp, name);

    // otherwise, look in the type for a descr
    var f;
    //print("descr", descr);
    if (descr !== undefined && descr !== null && descr.ob$type !== undefined)
    {
        f = descr.ob$type.tp$descr_get;
        // todo;
        //if (f && descr.tp$descr_set) // is a data descriptor if it has a set
            //return f.call(descr, this, this.ob$type);
    }

    // todo; assert? force?
    if (this['$d'])
    {
        var res;
        if  (this['$d'].mp$lookup)
        {
            res = this['$d'].mp$lookup(Sk.ffi.stringToPy(name));
        }
        else if (this['$d'].mp$subscript)
        {
            try {
                res = this['$d'].mp$subscript(Sk.ffi.stringToPy(name));
            } catch (x) {
                res = undefined;
            }
        }
        else if (typeof this['$d'] === "object") // todo; definitely the wrong place for this. other custom tp$getattr won't work on object -- bnm -- implemented custom __getattr__ in abstract.js
            res = this['$d'][name];
        if (res !== undefined)
            return res;
    }

    if (f)
    {
        // non-data descriptor
        return f.call(descr, this, this.ob$type);
    }

    if (descr !== undefined)
    {
        return descr;
    }

    return undefined;
};
goog.exportSymbol("Sk.builtin.object.prototype.GenericGetAttr", Sk.builtin.object.prototype.GenericGetAttr);

Sk.builtin.object.prototype.GenericSetAttr = function(name, value)
{
    goog.asserts.assert(typeof name === "string");
    // todo; lots o' stuff
    if (this['$d'].mp$ass_subscript)
    {
        this['$d'].mp$ass_subscript(Sk.ffi.stringToPy(name), value);
    }
    else if (typeof this['$d'] === "object")
    {
        this['$d'][name] = value;
    }
};
goog.exportSymbol("Sk.builtin.object.prototype.GenericSetAttr", Sk.builtin.object.prototype.GenericSetAttr);

Sk.builtin.object.prototype.HashNotImplemented = function()
{
    throw new Sk.builtin.TypeError("unhashable type: '" + Sk.ffi.typeName(this) + "'");
};

Sk.builtin.object.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
Sk.builtin.object.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
Sk.builtin.object.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('object', Sk.builtin.object);

/**
 * Singleton enumeration for Python None value.
 *
 * @enum {!Object}
 */
Sk.builtin.none = {none$:
    (function(){
        /**
         * @constructor
         */
        var None = function() {};
        None.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('NoneType', None);
        None.prototype.tp$name = "NoneType";
        None.prototype.tp$repr = function()
        {
            return Sk.ffi.stringToPy("None");
        }
        None.prototype.tp$str = function()
        {
            return Sk.ffi.stringToPy("None");
        }
        return Object.create(None.prototype, {v: {value: null, enumerable: true}});
    })()
};
goog.exportSymbol("Sk.builtin.none", Sk.builtin.none);
