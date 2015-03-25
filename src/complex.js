/**
 * FIXME: This implementation of Python complex is incomplete.
 *
 * Notice that the implementation does not care about the mathematical field over which it is defined.
 */
Sk.builtin.complex = function(xPy, yPy)
{
    Sk.ffi.checkFunctionArgs("complex(x,y)", arguments, 2, 2);
    return new Sk.builtin.ComplexPy(xPy, yPy);
};

/**
 * @constructor
 */
Sk.builtin.ComplexPy = function(xPy, yPy)
{
    this.xPy = xPy;
    this.yPy = yPy;
}

Sk.builtin.ComplexPy.prototype.tp$name = "complex";
Sk.builtin.ComplexPy.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('complex', Sk.builtin.ComplexPy);

Sk.builtin.ComplexPy.prototype.tp$getattr = function(name)
{
    goog.asserts.assertString(name);

    var xPy = this.xPy;
    var yPy = this.yPy;

    switch(name)
    {
        case "real":
        {
            return this.xPy;
        }
        case "imag":
        {
            return this.yPy;
        }
        case "conjugate":
        {
            return new Sk.builtin.func(function(methodPy) {
                Sk.ffi.checkMethodArgs("conjugate()", arguments, 0, 0);
                return new Sk.builtin.ComplexPy(xPy, Sk.ffh.negative(yPy));
            });
        }
        default:
        {
            return undefined;
        }
    }
}

Sk.builtin.ComplexPy.prototype.tp$str = function()
{
    if (Sk.ffh.nonzero(this.xPy))
    {
        if (Sk.ffh.nonzero(this.yPy))
        {
            var x = Sk.builtin.stringToJs(Sk.ffh.str(this.xPy));
            var y = Sk.builtin.stringToJs(Sk.ffh.str(this.yPy));
            return Sk.builtin.stringToPy("(" + x + "+" + y + "j)");
        }
        else
        {
        }
    }
    else
    {
        if (Sk.ffh.nonzero(this.yPy))
        {
        }
        else
        {
        }
    }
    var x = Sk.builtin.stringToJs(Sk.ffh.str(this.xPy));
    var y = Sk.builtin.stringToJs(Sk.ffh.str(this.yPy));
    return Sk.builtin.stringToPy("Hello, I'm very complex!");
};

Sk.builtin.ComplexPy.prototype.nb$add = function(otherPy)
{
    if (otherPy instanceof Sk.builtin.ComplexPy)
    {
        var a = this.xPy;
        var b = this.yPy;
        var c = otherPy.xPy;
        var d = otherPy.yPy
        var xPy = Sk.ffh.add(a, c);
        var yPy = Sk.ffh.add(b, d);
        return Sk.builtin.complex(xPy, yPy);
    }
    else
    {
        return undefined;
    }
};

Sk.builtin.ComplexPy.prototype.nb$sub = function(otherPy)
{
    if (otherPy instanceof Sk.builtin.ComplexPy)
    {
        var a = this.xPy;
        var b = this.yPy;
        var c = otherPy.xPy;
        var d = otherPy.yPy
        var xPy = Sk.ffh.sub(a, c);
        var yPy = Sk.ffh.sub(b, d);
        return Sk.builtin.complex(xPy, yPy);
    }
    else
    {
        return undefined;
    }
};

Sk.builtin.ComplexPy.prototype.nb$mul = function(otherPy)
{
    if (otherPy instanceof Sk.builtin.ComplexPy)
    {
        var a = this.xPy;
        var b = this.yPy;
        var c = otherPy.xPy;
        var d = otherPy.yPy
        var xPy = Sk.ffh.sub(Sk.ffh.mul(a, c), Sk.ffh.mul(b, d));
        var yPy = Sk.ffh.add(Sk.ffh.mul(b, c), Sk.ffh.mul(a, d));
        return Sk.builtin.complex(xPy, yPy);
    }
    else
    {
        return undefined;
    }
};

Sk.builtin.ComplexPy.prototype.nb$div = function(otherPy)
{
    if (otherPy instanceof Sk.builtin.ComplexPy)
    {
        var a = this.xPy;
        var b = this.yPy;
        var c = otherPy.xPy;
        var d = otherPy.yPy
        var e = Sk.ffh.add(Sk.ffh.mul(c, c), Sk.ffh.mul(d, d));
        var xPy = Sk.ffh.div(Sk.ffh.add(Sk.ffh.mul(a, c), Sk.ffh.mul(b, d)), e);
        var yPy = Sk.ffh.div(Sk.ffh.sub(Sk.ffh.mul(b, c), Sk.ffh.mul(a, d)), e);
        return Sk.builtin.complex(xPy, yPy);
    }
    else
    {
        return undefined;
    }
};
