var $builtinmodule = function(name)
{
    var mod = {};

    var FUNCTION_PARSE     = "parse";
    var FUNCTION_STRINGIFY = "stringify";

    mod[FUNCTION_PARSE] = Sk.ffi.functionPy(function(textPy, reviverPy) {
        Sk.ffi.checkFunctionArgs(FUNCTION_PARSE, arguments, 1, 1);
        Sk.ffi.checkArgType("text",    Sk.ffi.PyType.STR,   Sk.ffi.isStr(textPy));
        Sk.ffi.checkArgType("reviver", Sk.ffi.PyType.FUNCTION, Sk.ffi.isUndefined(reviverPy) || isFunction(reviverPy));
        var text = Sk.ffi.remapToJs(textPy);
        var reviver = Sk.ffi.remapToJs(reviverPy);
        return Sk.ffi.remapToPy(JSON.parse(text, reviver));
    });

    mod[FUNCTION_STRINGIFY] = Sk.ffi.functionPy(function(valuePy, replacerPy, spacePy) {
        Sk.ffi.checkFunctionArgs(FUNCTION_STRINGIFY, arguments, 1, 3);
        Sk.ffi.checkArgType("value", Sk.ffi.PyType.DICT, Sk.ffi.isDict(valuePy));
        Sk.ffi.checkArgType("replacer", [Sk.ffi.PyType.FUNCTION, Sk.ffi.PyType.NONE, Sk.ffi.PyType.UNDEFINED], Sk.ffi.isUndefined(replacerPy) || Sk.ffi.isNone(replacerPy) || Sk.ffi.isFunction(replacerPy));
        Sk.ffi.checkArgType("space", [Sk.ffi.PyType.INT, Sk.ffi.PyType.UNDEFINED], Sk.ffi.isUndefined(spacePy) || Sk.ffi.isInt(spacePy));
        var value = Sk.ffi.remapToJs(valuePy);
        var replacer = Sk.ffi.remapToJs(replacerPy);
        var space = Sk.ffi.remapToJs(spacePy);
        return Sk.ffi.stringToPy(JSON.stringify(value, replacer, space));
    });

    return mod;
}