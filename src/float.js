Sk.builtin.float_ = function(x)
{
    if (x === undefined)
    {
        return Sk.ffi.numberToPy(0);
    }

    if (x instanceof Sk.builtin.str)
    {
        var tmp;

        if (x.v.match(/^-inf$/i)) {
            tmp = -Infinity;
        }
        else if (x.v.match(/^[+]?inf$/i)) {
            tmp = Infinity;
        }
        else if (x.v.match(/^[-+]?nan$/i)) {
            tmp = NaN;
        }
        else if (!isNaN(x.v))
        {
            tmp = parseFloat(x.v);
        }
        else
        {
            throw new Sk.builtin.ValueError("float: Argument: " + x.v + " is not number");
        }
        return Sk.ffi.numberToPy(tmp);
    }

    // Floats are just numbers
    if (typeof x === "number" || x instanceof Sk.builtin.nmber || x instanceof Sk.builtin.lng)
    {
        x = Sk.builtin.asnum$(x);
        return Sk.ffi.numberToPy(x);
    }

    // Convert booleans
    if (x instanceof Sk.builtin.bool)
    {
        x = Sk.builtin.asnum$(x);
        return Sk.ffi.numberToPy(x);
    }

    throw new Sk.builtin.TypeError("float() argument must be a string or a number");
};

Sk.builtin.float_.prototype.tp$name = "float";
Sk.builtin.float_.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('float', Sk.builtin.float_);
