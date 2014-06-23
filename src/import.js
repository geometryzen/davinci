// this is stored into sys specially, rather than created by sys
Sk.sysmodules = new Sk.builtin.dict([]);
Sk.realsyspath = undefined;

/**
 * @param {string} name to look for
 * @param {string} ext extension to use (.py or .js)
 * @param {boolean} failok will throw if not true
 *
 * @return {string}
 */
Sk.importSearchPathForName = function(name, ext, failok)
{
    /**
     * @type {Sk.builtin.list}
     */
    var L = Sk.realsyspath ? Sk.realsyspath : new Sk.builtin.list([]);
    for (var it = L.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext())
    {
        var nameAsPath = name.replace(/\./g, "/");
        var fns = [
            i.v + "/" + nameAsPath + ext,                 // module
            i.v + "/" + nameAsPath + "/__init__" + ext    // package
                ];

        for (var j = 0; j < fns.length; ++j)
        {
            var fn = fns[j];
            try
            {
                // TODO: lame, this is the only way we have to test existence right now
                Sk.read(fn);
                return fn;
            }
            catch (e)
            {

            };
        }
    }
   
    if (!failok)
    {
        throw new Sk.builtin.ImportError("No module named " + name);
    }
};

Sk.doOneTimeInitialization = function()
{
    // can't fill these out when making the type because tuple/dict aren't defined yet.
    Sk.builtin.type.basesStr_ = Sk.builtin.stringToPy("__bases__");
    Sk.builtin.type.mroStr_ = Sk.builtin.stringToPy("__mro__");
    Sk.builtin.object['$d'] = new Sk.builtin.dict([]);
    Sk.builtin.object['$d'].mp$ass_subscript(Sk.builtin.type.basesStr_, new Sk.builtin.tuple([]));
    Sk.builtin.object['$d'].mp$ass_subscript(Sk.builtin.type.mroStr_, new Sk.builtin.tuple([Sk.builtin.object]));
};

/**
 * Currently only pull once from Sk.syspath. User might want to change from js or from py.
 */
Sk.importSetUpPath = function()
{
    if (!Sk.realsyspath)
    {
        var paths =
        [
            Sk.builtin.stringToPy("src/builtin"),
            Sk.builtin.stringToPy("src/lib"),
            Sk.builtin.stringToPy(".")
        ];
        for (var i = 0; i < Sk.syspath.length; ++i)
        {
            paths.push(Sk.builtin.stringToPy(Sk.syspath[i]));
        }
        Sk.realsyspath = new Sk.builtin.list(paths);

        Sk.doOneTimeInitialization();
    }
};

/**
 * @param {string} name name of module to import
 * @param {boolean} dumpJS whether to output the generated js code
 * @param {string|undefined} overrideName what to call the module after it's imported if it's to be renamed (i.e. __main__)
 * @param {string} body use as the body of the text for the module rather than Sk.read'ing it.
 *
 * @return {!Sk.builtin.module}
 */
Sk.importModuleInternalFromBody_ = function(name, dumpJS, overrideName, body)
{
    Sk.importSetUpPath();
    /**
     * @const
     * @type {string}
     */
    var modname = (function()
    {
        if (typeof overrideName === 'string')
        {
            return overrideName;
        }
        else
        {
            return name;
        }
    })();

    var modNameSplit = modname.split(".");

    if (modNameSplit.length > 1)
    {
        try
        {
            return Sk.sysmodules.mp$subscript(modNameSplit[0]);
        }
        catch (x)
        {
            // not in sys.modules, continue
            // if we're a module inside a package (i.e. a.b.c), then we'll need to return the
            // top-level package ('a'). recurse upwards on our parent, importing
            // all parent packages. so, here we're importing 'a.b', which will in
            // turn import 'a', and then return 'a' eventually.
            var parentModName = modNameSplit.slice(0, modNameSplit.length - 1).join(".");
            var parentModule = Sk.importModuleInternalNoBody_(parentModName, dumpJS, undefined);
            var childModule = new Sk.builtin.module();
            Sk.sysmodules.mp$ass_subscript(name, childModule);
            var co = davinciPy.skCompiler.compile(body, name + ".py", "exec");
            Sk.evaluateModule(childModule, co, dumpJS, modname);
            Sk.storeModuleInParent(childModule, parentModName, modNameSplit);
            return parentModule;
        }
    }
    else
    {
        try
        {
            return Sk.sysmodules.mp$subscript(modname);
        }
        catch (x)
        {
            // not in sys.modules, continue
            var module = new Sk.builtin.module();
            Sk.sysmodules.mp$ass_subscript(name, module);
            var co = davinciPy.skCompiler.compile(body, name + ".py", "exec");
            Sk.evaluateModule(module, co, dumpJS, modname);
            return module;
        }
    }
};

/**
 * @param {string} name name of module to import
 * @param {boolean} dumpJS whether to output the generated js code
 * @param {string|undefined} overrideName what to call the module after it's imported if it's to be renamed (i.e. __main__)
 *
 * @return {!Sk.builtin.module}
 */
Sk.importModuleInternalNoBody_ = function(name, dumpJS, overrideName)
{
    goog.asserts.assertString(name, "name must be a string, e.g. '<stdin>'");
    goog.asserts.assertBoolean(dumpJS, "dumpJS must be a boolean");

    Sk.importSetUpPath();
    /**
     * @const
     * @type {string}
     */
    var modname = (function()
    {
        if (typeof overrideName === 'string')
        {
            return overrideName;
        }
        else
        {
            return name;
        }
    })();

    var modNameSplit = modname.split(".");

    if (modNameSplit.length > 1)
    {
        try
        {
            return Sk.sysmodules.mp$subscript(modNameSplit[0]);
        }
        catch (x)
        {
            // not in sys.modules, continue
            // if we're a module inside a package (i.e. a.b.c), then we'll need to return the
            // top-level package ('a'). recurse upwards on our parent, importing
            // all parent packages. so, here we're importing 'a.b', which will in
            // turn import 'a', and then return 'a' eventually.
            var parentModName = modNameSplit.slice(0, modNameSplit.length - 1).join(".");
            var parentModule = Sk.importModuleInternalNoBody_(parentModName, dumpJS, undefined);
            var childModule = new Sk.builtin.module();
            Sk.sysmodules.mp$ass_subscript(name, childModule);

            var filename = Sk.importSearchPathForName(name, ".js", true);
            if (filename)
            {
                var co = { funcname: "$builtinmodule", code: Sk.read(filename) };
                Sk.evaluateModule(childModule, co, dumpJS, modname);
                Sk.storeModuleInParent(childModule, parentModName, modNameSplit);
                return parentModule;
            }
            else
            {
                filename = Sk.importSearchPathForName(name, ".py", false);
                var co = davinciPy.skCompiler.compile(Sk.read(filename), filename, "exec");
                Sk.evaluateModule(childModule, co, dumpJS, modname);
                Sk.storeModuleInParent(childModule, parentModName, modNameSplit);
                return parentModule;
            }
        }
    }
    else
    {
        try
        {
            return Sk.sysmodules.mp$subscript(modname);
        }
        catch (x)
        {
            // not in sys.modules, continue
            var module = new Sk.builtin.module();
            Sk.sysmodules.mp$ass_subscript(name, module);

            // if we have it as a builtin (i.e. already in JS) module then load that.
            var filename = Sk.importSearchPathForName(name, ".js", true);
            if (filename)
            {
                var co = { funcname: "$builtinmodule", code: Sk.read(filename) };
                Sk.evaluateModule(module, co, dumpJS, modname);
                return module;
            }
            else
            {
                filename = Sk.importSearchPathForName(name, ".py", false);
                var co = davinciPy.skCompiler.compile(Sk.read(filename), filename, "exec");
                Sk.evaluateModule(module, co, dumpJS, modname);
                return module;
            }
        }
    }
};

/**
 * @param {Sk.builtin.module} module
 * @param {{funcname: string, code: string}} co
 * @param {boolean} dumpJS
 * @param {string} modname
 *
 * @return {undefined}
 */
Sk.evaluateModule = function(module, co, dumpJS, modname)
{
    module.$js = co.code; // todo; only in DEBUG?
    var finalCode = co.code;
    if (Sk.dateSet == null || !Sk.dateSet)
    {
        finalCode = 'Sk.execStart = new Date();\n' + co.code;
        Sk.dateSet = true;
    }

    {
        if (dumpJS)
        {
            var options =
            {
                indent_size: 2,
                preserve_newlines: false,
                brace_style: 'expand'
            };
            var beautifulCode = js_beautify(co.code, options);
            finalCode = beautifulCode;
            Sk.debugout(finalCode);
        }
    }

    var namestr = "Sk.builtin.stringToPy('" + modname + "')";
    finalCode += "\n" + co.funcname + "(" + namestr + ");";

    var modlocs = goog.global['eval'](finalCode);

    // pass in __name__ so the module can set it (so that the code can access
    // it), but also set it after we're done so that builtins don't have to
    // remember to do it.
    if (!modlocs['__name__'])
    {
        modlocs['__name__'] = Sk.builtin.stringToPy(modname);
    }

    module['$d'] = modlocs;
};

/**
 * @param {Sk.builtin.module} module
 * @param {string} parentModName
 * @param {Array.<string>} modNameSplit
 *
 * @return {undefined}
 */
Sk.storeModuleInParent = function(module, parentModName, modNameSplit)
{
    // if we were a dotted name, then we want to return the top-most
    // package. we store ourselves into our parent as an attribute
    var parentModule = Sk.sysmodules.mp$subscript(parentModName);
    parentModule.tp$setattr(modNameSplit[modNameSplit.length - 1], module);
}

/**
 * @param {string} name the module name
 * @param {boolean} dumpJS print out the js code after compilation for debugging
 *
 * @return {!Sk.builtin.module}
 */
Sk.importModule = function(name, dumpJS)
{
    goog.asserts.assertString(name, "name must be a string, e.g. '<stdin>'");
    goog.asserts.assertBoolean(dumpJS, "dumpJS must be a boolean");
    return Sk.importModuleInternalNoBody_(name, dumpJS, undefined);
};

/**
 * This function is called by the conformance test.
 *
 * @param {string} name the module name
 * @param {boolean|undefined} dumpJS print out the js code after compilation for debugging
 *
 * @return {!Sk.builtin.module}
 */
Sk.importMain = function(name, dumpJS)
{
    goog.asserts.assertString(name, "name must be a string, e.g. '<stdin>'");

    Sk.dateSet = false;
    Sk.filesLoaded = false
    // Reset imports.
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = undefined;

    davinciPy.skCompiler.resetCompiler();

    return Sk.importModuleInternalNoBody_(name, (typeof dumpJS === 'boolean' ? dumpJS : false), "__main__");
};
goog.exportSymbol("Sk.importMain", Sk.importMain);

/**
 * @param {string} name The name of module to import.
 * @param {boolean} dumpJS Whether to output (to Sk.debugout) the generated JavaScript code.
 * @param {string} body Use as the body of the text for the module.
 *
 * @return {!Sk.builtin.module}
 */
Sk.importMainWithBody = function(name, dumpJS, body)
{
    goog.asserts.assertString(name, "name must be a string, e.g. '<stdin>'");
    goog.asserts.assertBoolean(dumpJS, "dumpJS must be a boolean");
    goog.asserts.assertString(body, "body must be a string");

    Sk.dateSet = false;
    Sk.filesLoaded = false
    // Reset imports.
    Sk.sysmodules = new Sk.builtin.dict([]);
    Sk.realsyspath = undefined;

    davinciPy.skCompiler.resetCompiler();

    return Sk.importModuleInternalFromBody_(name, dumpJS, "__main__", body);
};
goog.exportSymbol("Sk.importMainWithBody", Sk.importMainWithBody);

/**
 * This is used by the compiler.
 *
 * @param {string} name The name of module to import.
 *
 * @return {!Sk.builtin.module}
 */
Sk.builtin.__import__ = function(name, globals, locals, fromlist)
{
    var top = Sk.importModuleInternalNoBody_(name, false, undefined);
    if (!fromlist || fromlist.length === 0)
    {
        return top;
    }
    else
    {
        // If there's a fromlist we want to return the actual module, not the toplevel namespace.
        var ret = Sk.sysmodules.mp$subscript(name);
        goog.asserts.assert(ret);
        return ret;
    }
};
goog.exportSymbol("Sk.builtin.__import__", Sk.builtin.__import__);

/**
 * This is used by the compiler.
 */
Sk.importStar = function(module, loc)
{
    var props = Object['getOwnPropertyNames'](module['$d'])
    for(var i in props)
    {
        loc[props[i]] = module['$d'][props[i]];
    }
}
goog.exportSymbol("Sk.importStar", Sk.importStar);
