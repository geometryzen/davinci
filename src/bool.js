Sk.builtin.bool = function(x)
{
    Sk.ffi.checkFunctionArgs("bool", arguments, 1);
    if (Sk.misceval.isTrue(x))
    {
        return Sk.builtin.bool.true$;
    }
    else
    {
        return Sk.builtin.bool.false$;
    }
};

Sk.builtin.bool.prototype.tp$name = "bool";
Sk.builtin.bool.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj('bool', Sk.builtin.bool);

Sk.builtin.bool.true$ = Object.create(Sk.builtin.bool.prototype, {v: {value: true, enumerable: true}});
Sk.builtin.bool.false$ = Object.create(Sk.builtin.bool.prototype, {v: {value: false, enumerable: true}});

Sk.builtin.bool.prototype.tp$str = function()
{
    if (Sk.ffi.remapToJs(this))
    {
        return Sk.builtin.stringToPy("True");
    }
    else
    {
        return Sk.builtin.stringToPy("False");
    }
};

Sk.builtin.bool.prototype.tp$repr = function()
{
    if (Sk.ffi.remapToJs(this))
    {
        return Sk.builtin.stringToPy("True");
    }
    else
    {
        return Sk.builtin.stringToPy("False");
    }
};

goog.exportSymbol("Sk.builtin.bool", Sk.builtin.bool);