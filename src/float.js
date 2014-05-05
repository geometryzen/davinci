/**
 * @param {*} xPy
 * @return {Sk.builtin.NumberPy|number}
 */
Sk.builtin.float_ = function(xPy)
{
    if (xPy === undefined)
    {
        return Sk.builtin.numberToPy(0);
    }

    if (Sk.builtin.isStringPy(xPy))
    {
        /**
         * @const
         */
        var stringJs = Sk.builtin.stringToJs(xPy);

        if (stringJs.match(/^-inf$/i))
        {
            return Sk.builtin.numberToPy(-Infinity);
        }
        else if (stringJs.match(/^[+]?inf$/i))
        {
            return Sk.builtin.numberToPy(Infinity);
        }
        else if (stringJs.match(/^[-+]?nan$/i)) {
            return Sk.builtin.numberToPy(NaN);
        }
        else if (!isNaN(stringJs))
        {
            return Sk.builtin.numberToPy(parseFloat(stringJs));
        }
        else
        {
            throw new Sk.builtin.ValueError("float: Argument: " + stringJs + " is not number");
        }
    }

    // Floats are just numbers
    if (typeof xPy === "number" || xPy instanceof Sk.builtin.NumberPy || xPy instanceof Sk.builtin.lng)
    {
        xPy = Sk.builtin.asnum$(xPy);
        return Sk.builtin.numberToPy(xPy);
    }

    // Convert booleans
    if (xPy instanceof Sk.builtin.bool)
    {
        xPy = Sk.builtin.asnum$(xPy);
        return Sk.builtin.numberToPy(xPy);
    }

    throw new Sk.builtin.TypeError("float() argument must be a string or a number");
};

Sk.builtin.float_.prototype.tp$name = "float";
Sk.builtin.float_.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('float', Sk.builtin.float_);
