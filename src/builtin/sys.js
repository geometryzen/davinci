var $builtinmodule = function(name)
{
    var sys = {};

    var args = [];
    var argv = Sk.getSysArgv();
    for (var i = 0; i < argv.length; ++i)
    {
        args.push(Sk.ffi.stringToPy(argv[i]));
    }
    sys.argv = new Sk.builtins['list'](args);

    sys.copyright = Sk.ffi.stringToPy("Copyright 2009-2010 Scott Graham.\nAll Rights Reserved.\n");

    sys.modules = Sk.sysmodules;

    sys.path = Sk.realsyspath;

    sys.getExecutionLimit = Sk.ffi.functionPy(function()
    {
        return Sk.execLimit
    });

    sys.setExecutionLimit = Sk.ffi.functionPy(function(t)
    {
        if (t !==  undefined)
        {
            Sk.execLimit = t
        }
    });

    sys.resetTimeout = Sk.ffi.functionPy(function()
    {
        Sk.execStart = new Date();
    });

    sys.debug = Sk.ffi.functionPy(function()
    {
        debugger;
    });

    return sys;
};
