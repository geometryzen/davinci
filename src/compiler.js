var astnodes = davinciPy.astnodes;
var symtable = davinciPy.symtable;
var parser   = davinciPy.parser;
var builder  = davinciPy.builder;
var LOCAL           = symtable.LOCAL;
var GLOBAL_EXPLICIT = symtable.GLOBAL_EXPLICIT;
var GLOBAL_IMPLICIT = symtable.GLOBAL_IMPLICIT;
var FREE            = symtable.FREE;
var CELL            = symtable.CELL;
var FunctionBlock   = symtable.FunctionBlock;

/** @param {...*} x */
var out;

Sk.gensymcount = 0;

/**
 * @constructor
 * @param {string} fileName
 * @param {Object} st
 * @param {number} flags
 * @param {string=} sourceCodeForAnnotation used to add original source to listing if desired
 */
function Compiler(fileName, st, flags, sourceCodeForAnnotation)
{
    this.fileName = fileName;
    /**
     * @type {Object}
     * @private
     */
    this.st = st;
    this.flags = flags;
    this.interactive = false;
    this.nestlevel = 0;

    this.u = null;
    /**
     * @type Array.<CompilerUnit>
     * @private
     */
    this.stack = [];

    this.result = [];

    // this.gensymcount = 0;

    /**
     * @type Array.<CompilerUnit>
     * @private
     */
    this.allUnits = [];

    this.source = sourceCodeForAnnotation ? sourceCodeForAnnotation.split("\n") : false;
}

/**
 * @constructor
 *
 * Stuff that changes on entry/exit of code blocks. must be saved and restored
 * when returning to a block.
 *
 * Corresponds to the body of a module, class, or function.
 */

function CompilerUnit()
{
    /**
     * @type {?Object}
     */
    this.ste = null;
    this.name = null;

    this.private_ = null;
    this.firstlineno = 0;
    this.lineno = 0;
    this.linenoSet = false;
    this.localnames = [];

    this.blocknum = 0;
    this.blocks = [];
    this.curblock = 0;

    this.scopename = null;

    this.prefixCode = '';
    this.varDeclsCode = '';
    this.switchCode = '';
    this.suffixCode = '';

    // stack of where to go on a break
    this.breakBlocks = [];
    // stack of where to go on a continue
    this.continueBlocks = [];
    this.exceptBlocks = [];
    this.finallyBlocks = [];
}

CompilerUnit.prototype.activateScope = function()
{
    var self = this;

    out = function() {
        var b = self.blocks[self.curblock];
        for (var i = 0; i < arguments.length; ++i)
            b.push(arguments[i]);
    };
};

Compiler.prototype.getSourceLine = function(lineno)
{
    goog.asserts.assert(this.source);
    return this.source[lineno - 1];
};

Compiler.prototype.annotateSource = function(ast)
{
    if (this.source)
    {
        var lineno = ast.lineno;
        var col_offset = ast.col_offset;
        out('\n//');
        out('\n// line ', lineno, ':');
        out('\n// ', this.getSourceLine(lineno));

        //
        out('\n// ');
        for (var i = 0; i < col_offset; ++i)
        {
            out(" ");
        }
        out("^");

        out("\n//");

        out('\nSk.currLineNo = ', lineno, ';Sk.currColNo = ', col_offset, ';');
        out("\nSk.currFilename = '", this.fileName, "';\n\n");
    }
};

Compiler.prototype.gensym = function(hint)
{
    hint = hint || '';
    hint = '$' + hint;
    hint += Sk.gensymcount++;
    return hint;
};

Compiler.prototype.niceName = function(roughName)
{
    return this.gensym(roughName.replace("<", "").replace(">", "").replace(" ", "_"));
}

var reservedWords_ = { 'abstract': true, 'as': true, 'boolean': true,
    'break': true, 'byte': true, 'case': true, 'catch': true, 'char': true,
    'class': true, 'continue': true, 'const': true, 'debugger': true,
    'default': true, 'delete': true, 'do': true, 'double': true, 'else': true,
    'enum': true, 'export': true, 'extends': true, 'false': true,
    'final': true, 'finally': true, 'float': true, 'for': true,
    'function': true, 'goto': true, 'if': true, 'implements': true,
    'import': true, 'in': true, 'instanceof': true, 'int': true,
    'interface': true, 'is': true, 'long': true, 'namespace': true,
    'native': true, 'new': true, 'null': true, 'package': true,
    'private': true, 'protected': true, 'public': true, 'return': true,
    'short': true, 'static': true, 'super': false, 'switch': true,
    'synchronized': true, 'this': true, 'throw': true, 'throws': true,
    'transient': true, 'true': true, 'try': true, 'typeof': true, 'use': true,
    'var': true, 'void': true, 'volatile': true, 'while': true, 'with': true
};

function fixReservedWords(name)
{
    if (reservedWords_[name] !== true)
        return name;
    return name + "_$rw$";
}

var reservedNames_ = { '__defineGetter__': true, '__defineSetter__': true, 
    'apply': true, 'call': true, 'eval': true, 'hasOwnProperty': true, 
    'isPrototypeOf': true, 
    '__lookupGetter__': true, '__lookupSetter__': true, 
    '__noSuchMethod__': true, 'propertyIsEnumerable': true,
    'toSource': true, 'toLocaleString': true, 'toString': true,
    'unwatch': true, 'valueOf': true, 'watch': true, 'length': true
};

function fixReservedNames(name)
{
    if (reservedNames_[name])
        return name + "_$rn$";
    return name;
}
/**
 * @param {string} name
 * @return {string} The mangled name.
 */
Sk.mangleName = function(name)
{
    return fixReservedNames(name)
};
goog.exportSymbol("Sk.mangleName", Sk.mangleName);

/**
 * @param {string} priv
 * @param {string} name
 * @return {string} The mangled name.
 */
function mangleName(priv, name)
{
    var strpriv = null;

    if (priv === null || name === null || name.charAt(0) !== '_' || name.charAt(1) !== '_')
        return name;
    // don't mangle __id__
    if (name.charAt(name.length - 1) === '_' && name.charAt(name.length - 2) === '_')
        return name;
    // don't mangle classes that are all _ (obscure much?)
    strpriv = priv;
    strpriv.replace(/_/g, '');
    if (strpriv === '')
        return name;

    strpriv = priv;
    strpriv.replace(/^_*/, '');
    return '_' + strpriv + name;
}

/**
 * @param {string} hint basename for gensym
 * @param {...*} rest
 */
Compiler.prototype._gr = function(hint, rest)
{
    var v = this.gensym(hint);
    out("var ", v, "=");
    for (var i = 1; i < arguments.length; ++i)
    {
        out(arguments[i]);
    }
    out(";");
    return v;
}

/**
* Function to test if an interrupt should occur if the program has been running for too long.
* This function is executed at every test/branch operation.
*/
Compiler.prototype._interruptTest = function()
{
    out("if (Sk.execStart === undefined) {Sk.execStart=new Date()}");
    out("if (Sk.execLimit != null && new Date() - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}");
}

Compiler.prototype._jumpfalse = function(test, block)
{
    var cond = this._gr('jfalse', "(", test, "===false||!Sk.misceval.isTrue(", test, "))");
    this._interruptTest();
    out("if(", cond, "){/*test failed */$blk=", block, ";continue;}");
};

Compiler.prototype._jumpundef = function(test, block)
{
    this._interruptTest();
    out("if(", test, "===undefined){$blk=", block, ";continue;}");
};

Compiler.prototype._jumptrue = function(test, block)
{
    var cond = this._gr('jtrue', "(", test, "===true||Sk.misceval.isTrue(", test, "))");
    this._interruptTest();
    out("if(", cond, "){/*test passed */$blk=", block, ";continue;}");
};

Compiler.prototype._jump = function(block)
{
    this._interruptTest();
    out("$blk=", block, ";/* jump */continue;");
};

Compiler.prototype.ctupleorlist = function(e, data, tuporlist)
{
    goog.asserts.assert(tuporlist === 'tuple' || tuporlist === 'list');
    if (e.ctx === astnodes.Store)
    {
        for (var i = 0; i < e.elts.length; ++i)
        {
            this.vexpr(e.elts[i], "Sk.abstr.objectGetItem(" + data + "," + i + ")");
        }
    }
    else if (e.ctx === astnodes.Load)
    {
        var items = [];
        for (var i = 0; i < e.elts.length; ++i)
        {
            items.push(this._gr('elem', this.vexpr(e.elts[i])));
        }
        return this._gr('load'+tuporlist, "new Sk.builtins['", tuporlist, "']([", items, "])");
    }
};

Compiler.prototype.cdict = function(e)
{
    goog.asserts.assert(e.values.length === e.keys.length);
    var items = [];
    for (var i = 0; i < e.values.length; ++i)
    {
        var v = this.vexpr(e.values[i]); // "backwards" to match order in cpy
        items.push(this.vexpr(e.keys[i]));
        items.push(v);
    }
    return this._gr('loaddict', "new Sk.builtins['dict']([", items, "])");
};

Compiler.prototype.clistcompgen = function(tmpname, generators, genIndex, elt)
{
    var start = this.newBlock('list gen start');
    var skip = this.newBlock('list gen skip');
    var anchor = this.newBlock('list gen anchor');

    var l = generators[genIndex];
    var toiter = this.vexpr(l.iter);
    var iter = this._gr("iter", "Sk.abstr.iter(", toiter, ")");
    this._jump(start);
    this.setBlock(start);

    // load targets
    var nexti = this._gr('next', "Sk.abstr.iternext(", iter, ")");
    this._jumpundef(nexti, anchor); // todo; this should be handled by StopIteration
    var target = this.vexpr(l.target, nexti);

    var n = l.ifs.length;
    for (var i = 0; i < n; ++i)
    {
        var ifres = this.vexpr(l.ifs[i]);
        this._jumpfalse(ifres, start);
    }

    if (++genIndex < generators.length)
    {
        this.clistcompgen(tmpname, generators, genIndex, elt);
    }

    if (genIndex >= generators.length)
    {
        var velt = this.vexpr(elt);
        out(tmpname, ".v.push(", velt, ");");
        this._jump(skip);
        this.setBlock(skip);
    }

    this._jump(start);

    this.setBlock(anchor);

    return tmpname;
};

Compiler.prototype.clistcomp = function(e)
{
    goog.asserts.assert(e instanceof astnodes.ListComp);
    var tmp = this._gr("_compr", "new Sk.builtins['list']([])");
    return this.clistcompgen(tmp, e.generators, 0, e.elt);
};

Compiler.prototype.cyield = function(e)
{
    if (this.u.ste.blockType !== FunctionBlock)
        throw new SyntaxError("'yield' outside function");
    var val = 'null';
    if (e.value)
        val = this.vexpr(e.value);
    var nextBlock = this.newBlock('after yield');
    // return a pair: resume target block and yielded value
    out("return [/*resume*/", nextBlock, ",/*ret*/", val, "];");
    this.setBlock(nextBlock);
    return '$gen.gi$sentvalue'; // will either be null if none sent, or the value from gen.send(value)
}

Compiler.prototype.ccompare = function(e)
{
    goog.asserts.assert(e.ops.length === e.comparators.length);
    var cur = this.vexpr(e.left);
    var n = e.ops.length;
    var done = this.newBlock("done");
    var fres = this._gr('compareres', 'null');

    for (var i = 0; i < n; ++i)
    {
        var rhs = this.vexpr(e.comparators[i]);
        var res = this._gr('compare', "Sk.builtin.bool(Sk.misceval.richCompareBool(", cur, ",", rhs, ",'", e.ops[i].prototype._astname, "'))");
        out(fres, '=', res, ';');
        this._jumpfalse(res, done);
        cur = rhs;
    }
    this._jump(done);
    this.setBlock(done);
    return fres;
};

Compiler.prototype.ccall = function(e)
{
    var func = this.vexpr(e.func);
    var args = this.vseqexpr(e.args);

    if (e.keywords.length > 0 || e.starargs || e.kwargs)
    {
        var kwarray = [];
        for (var i = 0; i < e.keywords.length; ++i)
        {
            kwarray.push("'" + e.keywords[i].arg + "'");
            kwarray.push(this.vexpr(e.keywords[i].value));
        }
        var keywords = "[" + kwarray.join(",") + "]";
        var starargs = "undefined";
        var kwargs = "undefined";
        if (e.starargs)
            starargs = this.vexpr(e.starargs);
        if (e.kwargs)
            kwargs = this.vexpr(e.kwargs);
        return this._gr('call', "Sk.misceval.call(", func, "," , kwargs, ",", starargs, ",", keywords, args.length > 0 ? "," : "", args, ")");
    }
    else
    {
        return this._gr('call', "Sk.misceval.callsim(", func, args.length > 0 ? "," : "", args, ")");
    }
};

Compiler.prototype.cslice = function(s)
{
    goog.asserts.assert(s instanceof astnodes.Slice);
    var low = s.lower ? this.vexpr(s.lower) : 'null';
    var high = s.upper ? this.vexpr(s.upper) : 'null';
    var step = s.step ? this.vexpr(s.step) : 'null';
    return this._gr('slice', "new Sk.builtins['slice'](", low, ",", high, ",", step, ")");
};

Compiler.prototype.vslicesub = function(s)
{
    var subs;
    switch (s.constructor)
    {
        case Number:
        case String:
            // Already compiled, should only happen for augmented assignments
            subs = s;
            break;
        case astnodes.Index:
            subs = this.vexpr(s.value);
            break;
        case astnodes.Slice:
            subs = this.cslice(s);
            break;
        case astnodes.Ellipsis:
        case astnodes.ExtSlice:
            goog.asserts.fail("todo;");
            break;
        default:
            goog.asserts.fail("invalid subscript kind");
    }
    return subs;
}

Compiler.prototype.vslice = function(s, ctx, obj, dataToStore)
{
    var subs = this.vslicesub(s);
    return this.chandlesubscr(ctx, obj, subs, dataToStore);
};

Compiler.prototype.chandlesubscr = function(ctx, obj, subs, data)
{
    if (ctx === astnodes.Load || ctx === astnodes.AugLoad)
        return this._gr('lsubscr', "Sk.abstr.objectGetItem(", obj, ",", subs, ")");
    else if (ctx === astnodes.Store || ctx === astnodes.AugStore)
        out("Sk.abstr.objectSetItem(", obj, ",", subs, ",", data, ");");
    else if (ctx === astnodes.Del)
        out("Sk.abstr.objectDelItem(", obj, ",", subs, ");");
    else
        goog.asserts.fail("handlesubscr fail");
};

Compiler.prototype.cboolop = function(e)
{
    goog.asserts.assert(e instanceof astnodes.BoolOp);
    var jtype;
    var ifFailed;
    if (e.op === astnodes.And)
        jtype = this._jumpfalse;
    else
        jtype = this._jumptrue;
    var end = this.newBlock('end of boolop');
    var s = e.values;
    var n = s.length;
    var retval;
    for (var i = 0; i < n; ++i)
    {
        var expres = this.vexpr(s[i])
        if (i === 0)
        {
            retval = this._gr('boolopsucc', expres);
        }
        out(retval, "=", expres, ";");
        jtype.call(this, expres, end);
    }
    this._jump(end);
    this.setBlock(end);
    return retval;
};

var toStringLiteralJS = function(value)
{
    // single is preferred
    var quote = "'";
    if (value.indexOf("'") !== -1 && value.indexOf('"') === -1)
    {
        quote = '"';
    }
    var len = value.length;
    var ret = quote;
    for (var i = 0; i < len; ++i)
    {
        var c = value.charAt(i);
        if (c === quote || c === '\\')
            ret += '\\' + c;
        else if (c === '\t')
            ret += '\\t';
        else if (c === '\n')
            ret += '\\n';
        else if (c === '\r')
            ret += '\\r';
        else if (c < ' ' || c >= 0x7f)
        {
            var ashex = c.charCodeAt(0).toString(16);
            if (ashex.length < 2) ashex = "0" + ashex;
            ret += "\\x" + ashex;
        }
        else
            ret += c;
    }
    ret += quote;
    return ret;
};

/**
 *
 * compiles an expression. to 'return' something, it'll gensym a var and store
 * into that var so that the calling code doesn't have avoid just pasting the
 * returned name.
 *
 * @param {Object} e
 * @param {string=} data data to store in a store operation
 * @param {Object=} augstoreval value to store to for an aug operation (not
 * vexpr'd yet)
 */
Compiler.prototype.vexpr = function(e, data, augstoreval)
{
    if (e.lineno > this.u.lineno)
    {
        this.u.lineno = e.lineno;
        this.u.linenoSet = false;
    }
    //this.annotateSource(e);
    switch (e.constructor)
    {
        case astnodes.BoolOp:
            return this.cboolop(e);
        case astnodes.BinOp:
            return this._gr('binop', "Sk.abstr.numberBinOp(", this.vexpr(e.left), ",", this.vexpr(e.right), ",'", e.op.prototype._astname, "')");
        case astnodes.UnaryOp:
            return this._gr('unaryop', "Sk.abstr.numberUnaryOp(", this.vexpr(e.operand), ",'", e.op.prototype._astname, "')");
        case astnodes.Lambda:
            return this.clambda(e);
        case astnodes.IfExp:
            return this.cifexp(e);
        case astnodes.Dict:
            return this.cdict(e);
        case astnodes.ListComp:
            return this.clistcomp(e);
        case astnodes.GeneratorExp:
            return this.cgenexp(e);
        case astnodes.Yield:
            return this.cyield(e);
        case astnodes.Compare:
            return this.ccompare(e);
        case astnodes.Call:
            var result = this.ccall(e);
            // After the function call, we've returned to this line
            this.annotateSource(e);
            return result;
        case astnodes.Num:
        {
            if (e.n.isFloat())
            {
                return 'Sk.builtin.numberToPy(' + e.n.value + ')';
            }
            else if (e.n.isInt())
            {
                return "Sk.ffi.numberToIntPy(" + e.n.value + ")";
            }
            else if (e.n.isLong())
            {
                return "Sk.ffi.longFromString('" + e.n.text + "', " + e.n.radix + ")";
            }
            goog.asserts.fail("unhandled Num type");
        }
        case astnodes.Str:
        {
            return this._gr('str', 'Sk.builtin.stringToPy(', toStringLiteralJS(e.s), ')');
        }
        case astnodes.Attribute:
            var val;
            if (e.ctx !== astnodes.AugStore)
                val = this.vexpr(e.value);
            var mangled = toStringLiteralJS(e.attr);
            mangled = mangled.substring(1, mangled.length-1);
            mangled = mangleName(this.u.private_, mangled);
            mangled = fixReservedWords(mangled);
            mangled = fixReservedNames(mangled);
            switch (e.ctx)
            {
                case astnodes.AugLoad:
                case astnodes.Load:
                    return this._gr("lattr", "Sk.abstr.gattr(", val, ",'", mangled, "')");
                case astnodes.AugStore:
                    out("if(", data, "!==undefined){"); // special case to avoid re-store if inplace worked
                    val = this.vexpr(augstoreval || null); // the || null can never happen, but closure thinks we can get here with it being undef
                    out("Sk.abstr.sattr(", val, ",'", mangled, "',", data, ");");
                    out("}");
                    break;
                case astnodes.Store:
                    out("Sk.abstr.sattr(", val, ",'", mangled, "',", data, ");");
                    break;
                case astnodes.Del:
                    goog.asserts.fail("todo;");
                    break;
                case astnodes.Param:
                default:
                    goog.asserts.fail("invalid attribute expression");
            }
            break;
        case astnodes.Subscript:
            var val;
            switch (e.ctx)
            {
                case astnodes.AugLoad:
                case astnodes.Load:
                case astnodes.Store:
                case astnodes.Del:
                    return this.vslice(e.slice, e.ctx, this.vexpr(e.value), data);
                case astnodes.AugStore:
                    out("if(", data, "!==undefined){"); // special case to avoid re-store if inplace worked
                    val = this.vexpr(augstoreval || null); // the || null can never happen, but closure thinks we can get here with it being undef
                    this.vslice(e.slice, e.ctx, val, data);
                    out("}");
                    break;
                case astnodes.Param:
                default:
                    goog.asserts.fail("invalid subscript expression");
            }
            break;
        case astnodes.Name:
            return this.nameop(e.id, e.ctx, data);
        case astnodes.List:
            return this.ctupleorlist(e, data, 'list');
        case astnodes.Tuple:
            return this.ctupleorlist(e, data, 'tuple');
        default:
            goog.asserts.fail("unhandled case in vexpr");
    }
};

/**
 * @param {Array.<Object>} exprs
 * @param {Array.<string>=} data
 */
Compiler.prototype.vseqexpr = function(exprs, data)
{
    goog.asserts.assert(data === undefined || exprs.length === data.length);
    var ret = [];
    for (var i = 0; i < exprs.length; ++i)
        ret.push(this.vexpr(exprs[i], data === undefined ? undefined : data[i]));
    return ret;
};

Compiler.prototype.caugassign = function(s)
{
    goog.asserts.assert(s instanceof astnodes.AugAssign);
    var e = s.target;
    switch (e.constructor)
    {
        case astnodes.Attribute:
            var auge = new astnodes.Attribute(e.value, e.attr, astnodes.AugLoad, e.lineno, e.col_offset);
            var aug = this.vexpr(auge);
            var val = this.vexpr(s.value);
            var res = this._gr('inplbinopattr', "Sk.abstr.numberInplaceBinOp(", aug, ",", val, ",'", s.op.prototype._astname, "')");
            auge.ctx = astnodes.AugStore;
            return this.vexpr(auge, res, e.value)
        case astnodes.Subscript:
            // Only compile the subscript value once
            var augsub = this.vslicesub(e.slice);
            var auge = new astnodes.Subscript(e.value, augsub, astnodes.AugLoad, e.lineno, e.col_offset);
            var aug = this.vexpr(auge);
            var val = this.vexpr(s.value);
            var res = this._gr('inplbinopsubscr', "Sk.abstr.numberInplaceBinOp(", aug, ",", val, ",'", s.op.prototype._astname, "')");
            auge.ctx = astnodes.AugStore;
            return this.vexpr(auge, res, e.value)
        case astnodes.Name:
            var to = this.nameop(e.id, astnodes.Load);
            var val = this.vexpr(s.value);
            var res = this._gr('inplbinop', "Sk.abstr.numberInplaceBinOp(", to, ",", val, ",'", s.op.prototype._astname, "')");
            return this.nameop(e.id, astnodes.Store, res);
        default:
            goog.asserts.fail("unhandled case in augassign");
    }
};

/**
 * optimize some constant exprs. returns 0 if always 0, 1 if always 1 or -1 otherwise.
 */
Compiler.prototype.exprConstant = function(e)
{
    switch (e.constructor)
    {
        case astnodes.Num:
            return Sk.misceval.isTrue(e.n);
        case astnodes.Str:
            return Sk.misceval.isTrue(e.s);
        case astnodes.Name:
            // todo; do __debug__ test here if opt
        default:
            return -1;
    }
};

Compiler.prototype.newBlock = function(name)
{
    var ret = this.u.blocknum++;
    this.u.blocks[ret] = [];
    this.u.blocks[ret]._name = name || '<unnamed>';
    return ret;
};
Compiler.prototype.setBlock = function(n)
{
    goog.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.curblock = n;
};

Compiler.prototype.pushBreakBlock = function(n)
{
    goog.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.breakBlocks.push(n);
};
Compiler.prototype.popBreakBlock = function()
{
    this.u.breakBlocks.pop();
};

Compiler.prototype.pushContinueBlock = function(n)
{
    goog.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.continueBlocks.push(n);
};
Compiler.prototype.popContinueBlock = function()
{
    this.u.continueBlocks.pop();
};

Compiler.prototype.pushExceptBlock = function(n)
{
    goog.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.exceptBlocks.push(n);
};
Compiler.prototype.popExceptBlock = function()
{
    this.u.exceptBlocks.pop();
};

Compiler.prototype.pushFinallyBlock = function(n)
{
    goog.asserts.assert(n >= 0 && n < this.u.blocknum);
    this.u.finallyBlocks.push(n);
};
Compiler.prototype.popFinallyBlock = function()
{
    this.u.finallyBlocks.pop();
};

Compiler.prototype.setupExcept = function(eb)
{
    out("$exc.push(", eb, ");");
    //this.pushExceptBlock(eb);
};

Compiler.prototype.endExcept = function()
{
    out("$exc.pop();");
};

Compiler.prototype.outputLocals = function(unit)
{
    var have = {};
    for (var i = 0; unit.argnames && i < unit.argnames.length; ++i)
        have[unit.argnames[i]] = true;
    unit.localnames.sort();
    var output = [];
    for (var i = 0; i < unit.localnames.length; ++i)
    {
        var name = unit.localnames[i];
        if (have[name] === undefined)
        {
            output.push(name);
            have[name] = true;
        }
    }
    if (output.length > 0)
        return "var " + output.join(",") + "; /* locals */";
    return "";
};

Compiler.prototype.outputAllUnits = function()
{
    var ret = '';
    for (var j = 0; j < this.allUnits.length; ++j)
    {
        var unit = this.allUnits[j];
        ret += unit.prefixCode;
        ret += this.outputLocals(unit);
        ret += unit.varDeclsCode;
        ret += unit.switchCode;
        var blocks = unit.blocks;
        for (var i = 0; i < blocks.length; ++i)
        {
            ret += "case " + i + ": /* --- " + blocks[i]._name + " --- */";
            ret += blocks[i].join('');
            ret += "throw new Sk.builtin.SystemError('internal error: unterminated block');";
        }
        ret += unit.suffixCode;
    }
    return ret;
};

Compiler.prototype.cif = function(s)
{
    goog.asserts.assert(s instanceof astnodes.If_);
    var constant = this.exprConstant(s.test);
    if (constant === 0)
    {
        if (s.orelse)
            this.vseqstmt(s.orelse);
    }
    else if (constant === 1)
    {
        this.vseqstmt(s.body);
    }
    else
    {
        var end = this.newBlock('end of if');
        var next = this.newBlock('next branch of if');

        var test = this.vexpr(s.test);
        this._jumpfalse(test, next);
        this.vseqstmt(s.body);
        this._jump(end);

        this.setBlock(next);
        if (s.orelse)
            this.vseqstmt(s.orelse);
        this._jump(end);
    }
    this.setBlock(end);

};

Compiler.prototype.cwhile = function(s)
{
    var constant = this.exprConstant(s.test);
    if (constant === 0)
    {
        if (s.orelse)
            this.vseqstmt(s.orelse);
    }
    else
    {
        var top = this.newBlock('while test');
        this._jump(top);
        this.setBlock(top);

        var next = this.newBlock('after while');
        var orelse = s.orelse.length > 0 ? this.newBlock('while orelse') : null;
        var body = this.newBlock('while body');

        this._jumpfalse(this.vexpr(s.test), orelse ? orelse : next);
        this._jump(body);

        this.pushBreakBlock(next);
        this.pushContinueBlock(top);

        this.setBlock(body);
        this.vseqstmt(s.body);
        this._jump(top);

        this.popContinueBlock();
        this.popBreakBlock();

        if (s.orelse.length > 0)
        {
            this.setBlock(orelse);
            this.vseqstmt(s.orelse);
            this._jump(next);
        }

        this.setBlock(next);
    }
};

Compiler.prototype.cfor = function(s)
{
    var start = this.newBlock('for start');
    var cleanup = this.newBlock('for cleanup');
    var end = this.newBlock('for end');

    this.pushBreakBlock(end);
    this.pushContinueBlock(start);

    // get the iterator
    var toiter = this.vexpr(s.iter);
    var iter;
    if (this.u.ste.generator)
    {
        // if we're in a generator, we have to store the iterator to a local
        // so it's preserved (as we cross blocks here and assume it survives)
        iter = "$loc." + this.gensym("iter");
        out(iter, "=Sk.abstr.iter(", toiter, ");");
    }
    else
        iter = this._gr("iter", "Sk.abstr.iter(", toiter, ")");

    this._jump(start);

    this.setBlock(start);

    // load targets
    var nexti = this._gr('next', "Sk.abstr.iternext(", iter, ")");
    this._jumpundef(nexti, cleanup); // todo; this should be handled by StopIteration
    var target = this.vexpr(s.target, nexti);

    // execute body
    this.vseqstmt(s.body);
    
    // jump to top of loop
    this._jump(start);

    this.setBlock(cleanup);
    this.popContinueBlock();
    this.popBreakBlock();

    this.vseqstmt(s.orelse);
    this._jump(end);

    this.setBlock(end);
};

Compiler.prototype.craise = function(s)
{
    if (s && s.type && s.type.id && (s.type.id === "StopIteration"))
    {
        // currently, we only handle StopIteration, and all it does it return
        // undefined which is what our iterator protocol requires.
        //
        // totally hacky, but good enough for now.
        out("return undefined;");
    }
    else
    {
        var inst = '';
        if (s.inst)
        {
            // handles: raise Error, arguments
            inst = this.vexpr(s.inst);
            out("throw ", this.vexpr(s.type), "(", inst, ");");
        }
        else if (s.type)
        {
            if (s.type.func)
            {
                // handles: raise Error(arguments)
                out("throw ", this.vexpr(s.type), ";");
            }
            else
            {
                // handles: raise Error
                out("throw ", this.vexpr(s.type), "('');");
            }
        }
        else
        {
            // re-raise
            out("throw $err;");
        }
    }
};

Compiler.prototype.ctryexcept = function(s)
{
    var n = s.handlers.length;

    // Create a block for each except clause
    var handlers = [];
    for (var i = 0; i < n; ++i)
    {
        handlers.push(this.newBlock("except_" + i + "_"));
    }

    var unhandled = this.newBlock("unhandled");
    var orelse = this.newBlock("orelse");
    var end = this.newBlock("end");

    this.setupExcept(handlers[0]);
    this.vseqstmt(s.body);
    this.endExcept();
    this._jump(orelse);

    for (var i = 0; i < n; ++i)
    {
        this.setBlock(handlers[i]);
        var handler = s.handlers[i];
        if (!handler.type && i < n - 1)
        {
            throw new SyntaxError("default 'except:' must be last");
        }

        if (handler.type)
        {
            // should jump to next handler if err not isinstance of handler.type
            var handlertype = this.vexpr(handler.type);
            var next = (i == n-1) ? unhandled : handlers[i+1];

            // this check is not right, should use isinstance, but exception objects
            // are not yet proper Python objects
            var check = this._gr('instance', "$err instanceof ", handlertype);
            this._jumpfalse(check, next);
        }

        if (handler.name)
        {
            this.vexpr(handler.name, "$err");
        }

        // Need to execute finally before leaving body if an exception is raised
        this.vseqstmt(handler.body);

        // Should jump to finally, but finally is not implemented yet
        this._jump(end);
    }

    // If no except clause catches exception, throw it again
    this.setBlock(unhandled);
    // Should execute finally first
    out("throw $err;");

    this.setBlock(orelse);
    this.vseqstmt(s.orelse);
    // Should jump to finally, but finally is not implemented yet
    this._jump(end);
    this.setBlock(end);
};

Compiler.prototype.ctryfinally = function(s)
{
    out("/*todo; tryfinally*/");
    // everything but the finally?
    this.ctryexcept(s.body[0]);
};

Compiler.prototype.cassert = function(s)
{
    /* todo; warnings method
    if (s.test instanceof Tuple && s.test.elts.length > 0)
        Sk.warn("assertion is always true, perhaps remove parentheses?");
    */

    var test = this.vexpr(s.test);
    var end = this.newBlock("end");
    this._jumptrue(test, end);
    // todo; exception handling
    // maybe replace with goog.asserts.fail?? or just an alert?
    out("throw new Sk.builtin.AssertionError(", s.msg ? this.vexpr(s.msg) : "", ");");
    this.setBlock(end);
};

/**
 * @param {string} name
 * @param {string} asname
 * @param {string=} mod
 */
Compiler.prototype.cimportas = function(name, asname, mod)
{
    var src = name;
    var dotLoc = src.indexOf(".");
    var cur = mod;
    if (dotLoc !== -1)
    {
        // if there's dots in the module name, __import__ will have returned
        // the top-level module. so, we need to extract the actual module by
        // getattr'ing up through the names, and then storing the leaf under
        // the name it was to be imported as.
        src = src.substr(dotLoc + 1);
        while (dotLoc !== -1)
        {
            dotLoc = src.indexOf(".");
            var attr = dotLoc !== -1 ? src.substr(0, dotLoc) : src;
            cur = this._gr('lattr', "Sk.abstr.gattr(", cur, ",'", attr, "')");
            src = src.substr(dotLoc + 1);
        }
    }
    return this.nameop(asname, astnodes.Store, cur);
};

Compiler.prototype.cimport = function(s)
{
    var n = s.names.length;
    for (var i = 0; i < n; ++i)
    {
        var alias = s.names[i];
        var mod = this._gr('module', 'Sk.builtin.__import__(', toStringLiteralJS(alias.name), ',$gbl,$loc,[])');

        if (alias.asname)
        {
            this.cimportas(alias.name, alias.asname, mod);
        }
        else
        {
            var lastDot = alias.name.indexOf('.');
            if (lastDot !== -1)
            {
                this.nameop(alias.name.substr(0, lastDot), astnodes.Store, mod);
            }
            else
            {
                this.nameop(alias.name, astnodes.Store, mod);
            }
        }
    }
};

Compiler.prototype.cfromimport = function(s)
{
    var n = s.names.length;
    var names = [];
    for (var i = 0; i < n; ++i)
    {
        names[i] = s.names[i].name;
    }
    var namesString = names.map(function(name) {return toStringLiteralJS(name);}).join(', ');
    var mod = this._gr('module', 'Sk.builtin.__import__(', toStringLiteralJS(s.module), ',$gbl,$loc,[', namesString, '])');
    for (var i = 0; i < n; ++i)
    {
        var alias = s.names[i];
        if (i === 0 && alias.name === "*")
        {
            goog.asserts.assert(n === 1);
            out("Sk.importStar(", mod,  ",$loc, $gbl);");
            return;
        }

        var got = this._gr('item', 'Sk.abstr.gattr(', mod, ',', toStringLiteralJS(alias.name), ')');
        var storeName = alias.name;
        if (alias.asname)
            storeName = alias.asname;
        this.nameop(storeName, astnodes.Store, got);
    }
};

/**
 * builds a code object (js function) for various constructs. used by def,
 * lambda, generator expressions. it isn't used for class because it seemed
 * different enough.
 *
 * handles:
 * - setting up a new scope
 * - decorators (if any)
 * - defaults setup
 * - setup for cell and free vars
 * - setup and modification for generators
 *
 * @param {Object} n ast node to build for
 * @param {string} coname name of code object to build
 * @param {Array} decorator_list ast of decorators if any
 * @param {*} args arguments to function, if any
 * @param {Function} callback called after setup to do actual work of function
 *
 * @returns the name of the newly created function or generator object.
 *
 */
Compiler.prototype.buildcodeobj = function(n, coname, decorator_list, args, callback)
{
    var decos = [];
    var defaults = [];
    var vararg = null;
    var kwarg = null;

    // decorators and defaults have to be evaluated out here before we enter
    // the new scope. we output the defaults and attach them to this code
    // object, but only once we know the name of it (so we do it after we've
    // exited the scope near the end of this function).
    if (decorator_list)
        decos = this.vseqexpr(decorator_list);
    if (args && args.defaults)
        defaults = this.vseqexpr(args.defaults);
    if (args && args.vararg)
        vararg = args.vararg;
    if (args && args.kwarg)
        kwarg = args.kwarg;

    /**
     * @const
     * @type {boolean}
     */
    var containingHasFree = this.u.ste.hasFree;
    /**
     * @const
     * @type {boolean}
     */
    var containingHasCell = this.u.ste.childHasFree;

    /**
     * enter the new scope, and create the first block
     * @const
     * @type {string}
     */
    var scopename = this.enterScope(coname, n, n.lineno);

    var isGenerator = this.u.ste.generator;
    /**
     * @const
     * @type {boolean}
     */
    var hasFree = this.u.ste.hasFree;
    /**
     * @const
     * @type {boolean}
     */
    var hasCell = this.u.ste.childHasFree;
    /**
     * @const
     * @type {boolean}
     */
    var descendantOrSelfHasFree = this.u.ste.hasFree/* || this.u.ste.childHasFree*/;

    var entryBlock = this.newBlock('codeobj entry');

    //
    // the header of the function, and arguments
    //
    this.u.prefixCode = "var " + scopename + "=(function " + this.niceName(coname) + "$(";

    var funcArgs = [];
    if (isGenerator)
    {
        if (kwarg)
        {
            throw new SyntaxError(coname + "(): keyword arguments in generators not supported");
        }
        if (vararg)
        {
            throw new SyntaxError(coname + "(): variable number of arguments in generators not supported");
        }
        funcArgs.push("$gen");
    }
    else
    {
        if (kwarg)
            funcArgs.push("$kwa");
        for (var i = 0; args && i < args.args.length; ++i)
            funcArgs.push(this.nameop(args.args[i].id, astnodes.Param));
    }
    if (descendantOrSelfHasFree)
    {
        funcArgs.push("$free");
    }
    this.u.prefixCode += funcArgs.join(",");

    this.u.prefixCode += "){";

    if (isGenerator) this.u.prefixCode += "\n// generator\n";
    if (containingHasFree) this.u.prefixCode += "\n// containing has free\n";
    if (containingHasCell) this.u.prefixCode += "\n// containing has cell\n";
    if (hasFree) this.u.prefixCode += "\n// has free\n";
    if (hasCell) this.u.prefixCode += "\n// has cell\n";

    //
    // set up standard dicts/variables
    //
    var locals = "{}";
    if (isGenerator)
    {
        entryBlock = "$gen.gi$resumeat";
        locals = "$gen.gi$locals";
    }
    var cells = "";
    if (hasCell)
        cells = ",$cell={}";

    // note special usage of 'this' to avoid having to slice globals into
    // all function invocations in call
    this.u.varDeclsCode += "var $blk=" + entryBlock + ",$exc=[],$loc=" + locals + cells + ",$gbl=this,$err=undefined;";

    //
    // copy all parameters that are also cells into the cells dict. this is so
    // they can be accessed correctly by nested scopes.
    //
    for (var i = 0; args && i < args.args.length; ++i)
    {
        var id = args.args[i].id;
        if (this.isCell(id))
        {
            this.u.varDeclsCode += "$cell." + id + "=" + id + ";";
        }
    }

    //
    // make sure correct number of arguments were passed (generators handled below)
    //
    if (!isGenerator) {
        var minargs = args ? args.args.length - defaults.length : 0;
        var maxargs = vararg ? Infinity : (args ? args.args.length : 0);
        var kw = kwarg ? true : false;
        this.u.varDeclsCode += "Sk.builtin.pyCheckArgs(\"" + coname + 
            "\", arguments, " + minargs + ", " + maxargs + ", " + kw + 
            ", " + descendantOrSelfHasFree + ");";
    }

    //
    // initialize default arguments. we store the values of the defaults to
    // this code object as .$defaults just below after we exit this scope.
    //
    if (defaults.length > 0)
    {
        // defaults have to be "right justified" so if there's less defaults
        // than args we offset to make them match up (we don't need another
        // correlation in the ast)
        var offset = args.args.length - defaults.length;
        for (var i = 0; i < defaults.length; ++i)
        {
            var argname = this.nameop(args.args[i + offset].id, astnodes.Param);
            this.u.varDeclsCode += "if(" + argname + "===undefined)" + argname +"=" + scopename+".$defaults[" + i + "];";
        }
    }

    //
    // initialize vararg, if any
    //
    if (vararg)
    {
        var start = funcArgs.length;
        this.u.varDeclsCode += vararg + "=new Sk.builtins['tuple'](Array.prototype.slice.call(arguments," + start + ")); /*vararg*/";
    }

    //
    // initialize kwarg, if any
    //
    if (kwarg)
    {
        this.u.varDeclsCode += kwarg + "=new Sk.builtins['dict']($kwa);";
    }

    //
    // finally, set up the block switch that the jump code expects
    //
    // Old switch code
    // this.u.switchCode += "while(true){switch($blk){";
    // this.u.suffixCode = "}break;}});";

    // New switch code to catch exceptions
    this.u.switchCode = "while(true){try{ switch($blk){";
    this.u.suffixCode = "} }catch(err){if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} }});";

    //
    // jump back to the handler so it can do the main actual work of the
    // function
    //
    callback.call(this, scopename);

    //
    // get a list of all the argument names (used to attach to the code
    // object, and also to allow us to declare only locals that aren't also
    // parameters).
    var argnames;
    if (args && args.args.length > 0)
    {
        var argnamesarr = [];
        for (var i = 0; i < args.args.length; ++i)
        {
            argnamesarr.push(args.args[i].id);
        }

        argnames = argnamesarr.join("', '");
        // store to unit so we know what local variables not to declare
        this.u.argnames = argnamesarr;
    }

    //
    // and exit the code object scope
    //
    this.exitScope();

    //
    // attach the default values we evaluated at the beginning to the code
    // object so that it can get at them to set any arguments that are left
    // unset.
    //
    if (defaults.length > 0)
        out(scopename, ".$defaults=[", defaults.join(','), "];");


    //
    // attach co_varnames (only the argument names) for keyword argument
    // binding.
    //
    if (argnames)
    {
        out(scopename, ".co_varnames=['", argnames, "'];");
    }

    //
    // attach flags
    //
    if (kwarg)
    {
        out(scopename, ".co_kwargs=1;");
    }

    //
    // build either a 'function' or 'generator'. the function is just a simple
    // constructor call. the generator is more complicated. it needs to make a
    // new generator every time it's called, so the thing that's returned is
    // actually a function that makes the generator (and passes arguments to
    // the function onwards to the generator). this should probably actually
    // be a function object, rather than a js function like it is now. we also
    // have to build the argument names to pass to the generator because it
    // needs to store all locals into itself so that they're maintained across
    // yields.
    //
    // todo; possibly this should be outside?
    //
    var frees = "";
    if (hasFree)
    {
        frees = ",$cell";
        // if the scope we're in where we're defining this one has free
        // vars, they may also be cell vars, so we pass those to the
        // closure too.
        if (containingHasFree)
            frees += ",$free";
    }
    if (isGenerator)
        // Keyword and variable arguments are not currently supported in generators.
        // The call to pyCheckArgs assumes they can't be true.
        if (args && args.args.length > 0)
        {
            return this._gr("gener", "new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgs(\"", 
                                     coname, "\",arguments,", args.args.length - defaults.length, ",", args.args.length, 
                                     ");return new Sk.builtins['generator'](", scopename, ",$gbl,$origargs", frees, ");}))");
        }
        else
        {
            return this._gr("gener", "new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgs(\"", coname, 
                                     "\",arguments,0,0);return new Sk.builtins['generator'](", scopename, ",$gbl,[]", frees, ");}))");
        }
    else
    {
        return this._gr("funcobj", "new Sk.builtins['function'](", scopename, ",$gbl", frees ,")");
    }
};

Compiler.prototype.cfunction = function(s)
{
    goog.asserts.assert(s instanceof astnodes.FunctionDef);
    var funcorgen = this.buildcodeobj(s, s.name, s.decorator_list, s.args, 
        function(scopename)
        {
            this.vseqstmt(s.body);
            out("return Sk.builtin.none.none$;"); // if we fall off the bottom, we want the ret to be None
        }
    );
    this.nameop(s.name, astnodes.Store, funcorgen);
};

Compiler.prototype.clambda = function(e)
{
    goog.asserts.assert(e instanceof astnodes.Lambda);
    var func = this.buildcodeobj(e, "<lambda>", null, e.args, function(scopename)
            {
                var val = this.vexpr(e.body);
                out("return ", val, ";");
            });
    return func;
};

Compiler.prototype.cifexp = function(e)
{
    var next = this.newBlock('next of ifexp');
    var end = this.newBlock('end of ifexp');
    var ret = this._gr('res', 'null');

    var test = this.vexpr(e.test);
    this._jumpfalse(test, next);

    out(ret, '=', this.vexpr(e.body), ';');
    this._jump(end);

    this.setBlock(next);
    out(ret, '=', this.vexpr(e.orelse), ';');
    this._jump(end);

    this.setBlock(end);
    return ret;
};

Compiler.prototype.cgenexpgen = function(generators, genIndex, elt)
{
    var start = this.newBlock('start for ' + genIndex);
    var skip = this.newBlock('skip for ' + genIndex);
    var ifCleanup = this.newBlock('if cleanup for ' + genIndex);
    var end = this.newBlock('end for ' + genIndex);

    var ge = generators[genIndex];

    var iter;
    if (genIndex === 0)
    {
        // the outer most iterator is evaluated in the scope outside so we
        // have to evaluate it outside and store it into the generator as a
        // local, which we retrieve here.
        iter = "$loc.$iter0";
    }
    else
    {
        var toiter = this.vexpr(ge.iter);
        iter = "$loc." + this.gensym("iter");
        out(iter, "=", "Sk.abstr.iter(", toiter, ");");
    }
    this._jump(start);
    this.setBlock(start);

    // load targets
    var nexti = this._gr('next', "Sk.abstr.iternext(", iter, ")");
    this._jumpundef(nexti, end); // todo; this should be handled by StopIteration
    var target = this.vexpr(ge.target, nexti);

    var n = ge.ifs.length;
    for (var i = 0; i < n; ++i)
    {
        var ifres = this.vexpr(ge.ifs[i]);
        this._jumpfalse(ifres, start);
    }

    if (++genIndex < generators.length)
    {
        this.cgenexpgen(generators, genIndex, elt);
    }

    if (genIndex >= generators.length)
    {
        var velt = this.vexpr(elt);
        out("return [", skip, "/*resume*/,", velt, "/*ret*/];");
        this.setBlock(skip);
    }

    this._jump(start);

    this.setBlock(end);

    if (genIndex === 1)
        out("return null;");
};

Compiler.prototype.cgenexp = function(e)
{
    var gen = this.buildcodeobj(e, "<genexpr>", null, null,
        function(scopename)
        {
            this.cgenexpgen(e.generators, 0, e.elt);
        });

    // call the generator maker to get the generator. this is kind of dumb,
    // but the code builder builds a wrapper that makes generators for normal
    // function generators, so we just do it outside (even just new'ing it
    // inline would be fine).
    var gener = this._gr("gener", "Sk.misceval.callsim(", gen, ");");
    // stuff the outermost iterator into the generator after evaluating it
    // outside of the function. it's retrieved by the fixed name above.
    out(gener, ".gi$locals.$iter0=Sk.abstr.iter(", this.vexpr(e.generators[0].iter), ");");
    return gener;
};



Compiler.prototype.cclass = function(s)
{
    goog.asserts.assert(s instanceof astnodes.ClassDef);
    var decos = s.decorator_list;

    // decorators and bases need to be eval'd out here
    //this.vseqexpr(decos);
    
    var bases = this.vseqexpr(s.bases);

    /**
     * @const
     * @type {string}
     */
    var scopename = this.enterScope(s.name, s, s.lineno);
    var entryBlock = this.newBlock('class entry');

    this.u.prefixCode = "var " + scopename + "=(function $" + s.name + "$class_outer($globals,$locals,$rest){var $gbl=$globals,$loc=$locals;";
    this.u.switchCode += "return(function " + s.name + "(){";
    this.u.switchCode += "var $blk=" + entryBlock + ",$exc=[];while(true){switch($blk){";
    this.u.suffixCode = "}break;}}).apply(null,$rest);});";

    this.u.private_ = s.name;
    
    this.cbody(s.body);
    out("break;");

    // build class

    // apply decorators

    this.exitScope();

    var wrapped = this._gr('built', 'Sk.misceval.buildClass($gbl,', scopename, ',', toStringLiteralJS(s.name), ',[', bases, '])');

    // store our new class under the right name
    this.nameop(s.name, astnodes.Store, wrapped);
};

Compiler.prototype.ccontinue = function(s)
{
    if (this.u.continueBlocks.length === 0)
        throw new SyntaxError("'continue' outside loop");
    // todo; continue out of exception blocks
    this._jump(this.u.continueBlocks[this.u.continueBlocks.length - 1]);
};

/**
 * compiles a statement
 */
Compiler.prototype.vstmt = function(s)
{
    this.u.lineno = s.lineno;
    this.u.linenoSet = false;

    this.annotateSource(s);

    switch (s.constructor)
    {
        case astnodes.FunctionDef:
            this.cfunction(s);
            break;
        case astnodes.ClassDef:
            this.cclass(s);
            break;
        case astnodes.Return_:
            if (this.u.ste.blockType !== FunctionBlock)
                throw new SyntaxError("'return' outside function");
            if (s.value)
                out("return ", this.vexpr(s.value), ";");
            else
                out("return null;");
            break;
        case astnodes.Delete_:
            this.vseqexpr(s.targets);
            break;
        case astnodes.Assign:
            var n = s.targets.length;
            var val = this.vexpr(s.value);
            for (var i = 0; i < n; ++i)
                this.vexpr(s.targets[i], val);
            break;
        case astnodes.AugAssign:
            return this.caugassign(s);
        case astnodes.Print:
            this.cprint(s);
            break;
        case astnodes.For_:
            return this.cfor(s);
        case astnodes.While_:
            return this.cwhile(s);
        case astnodes.If_:
            return this.cif(s);
        case astnodes.Raise:
            return this.craise(s);
        case astnodes.TryExcept:
            return this.ctryexcept(s);
        case astnodes.TryFinally:
            return this.ctryfinally(s);
        case astnodes.Assert:
            return this.cassert(s);
        case astnodes.Import_:
            return this.cimport(s);
        case astnodes.ImportFrom:
            return this.cfromimport(s);
        case astnodes.Global:
            break;
        case astnodes.Expr:
            this.vexpr(s.value);
            break;
        case astnodes.Pass:
            break;
        case astnodes.Break_:
            if (this.u.breakBlocks.length === 0)
                throw new SyntaxError("'break' outside loop");
            this._jump(this.u.breakBlocks[this.u.breakBlocks.length - 1]);
            break;
        case astnodes.Continue_:
            this.ccontinue(s);
            break;
        default:
            goog.asserts.fail("unhandled case in vstmt");
    }
};

Compiler.prototype.vseqstmt = function(stmts)
{
    for (var i = 0; i < stmts.length; ++i) this.vstmt(stmts[i]);
};

var OP_FAST = 0;
var OP_GLOBAL = 1;
var OP_DEREF = 2;
var OP_NAME = 3;
var D_NAMES = 0;
var D_FREEVARS = 1;
var D_CELLVARS = 2;

Compiler.prototype.isCell = function(name)
{
    var mangled = mangleName(this.u.private_, name);
    var scope = this.u.ste.getScope(mangled);
    var dict = null;
    if (scope === symtable.CELL)
        return true;
    return false;
};

/**
 * @param {string} name
 * @param {Object} ctx
 * @param {string=} dataToStore
 */
Compiler.prototype.nameop = function(name, ctx, dataToStore)
{
    if ((ctx === astnodes.Store || ctx === astnodes.AugStore || ctx === astnodes.Del) && name === "__debug__")
    {
        throw new Sk.builtin.SyntaxError("can not assign to __debug__");
    }
    if ((ctx === astnodes.Store || ctx === astnodes.AugStore || ctx === astnodes.Del) && name === "None")
    {
        throw new Sk.builtin.SyntaxError("can not assign to None");
    }

    if (name === "None")  return "Sk.builtin.none.none$";
    if (name === "True")  return "Sk.ffi.bool.True";
    if (name === "False") return "Sk.ffi.bool.False";

    // Have to do this before looking it up in the scope
    var mangled = mangleName(this.u.private_, name);
    var op = 0;
    var optype = OP_NAME;
    var scope = this.u.ste.getScope(mangled);
    var dict = null;
    switch (scope)
    {
        case FREE:
            dict = "$free";
            optype = OP_DEREF;
            break;
        case CELL:
            dict = "$cell";
            optype = OP_DEREF;
            break;
        case LOCAL:
            // can't do FAST in generators or at module/class scope
            if (this.u.ste.blockType === FunctionBlock && !this.u.ste.generator)
                optype = OP_FAST;
            break;
        case GLOBAL_IMPLICIT:
            if (this.u.ste.blockType === FunctionBlock)
                optype = OP_GLOBAL;
            break;
        case GLOBAL_EXPLICIT:
            optype = OP_GLOBAL;
        default:
            break;
    }

    // have to do this after looking it up in the scope
    mangled = fixReservedNames(mangled);
    mangled = fixReservedWords(mangled);

    //print("mangled", mangled);
    // TODO TODO TODO todo; import * at global scope failing here
    goog.asserts.assert(scope || name.charAt(1) === '_');

    // in generator or at module scope, we need to store to $loc, rather that
    // to actual JS stack variables.
    var mangledNoPre = mangled;
    if (this.u.ste.generator || this.u.ste.blockType !== FunctionBlock)
        mangled = "$loc." + mangled;
    else if (optype === OP_FAST || optype === OP_NAME)
        this.u.localnames.push(mangled);

    switch (optype)
    {
        case OP_FAST:
            switch (ctx)
            {
                case astnodes.Load:
                case astnodes.Param:
                    // Need to check that it is bound!
                    out("if (", mangled, " === undefined) { throw new Error('local variable \\\'", mangled, "\\\' referenced before assignment'); }\n");
                    return mangled;
                case astnodes.Store:
                    out(mangled, "=", dataToStore, ";");
                    break;
                case astnodes.Del:
                    out("delete ", mangled, ";");
                    break;
                default:
                    goog.asserts.fail("unhandled");
            }
            break;
        case OP_NAME:
            switch (ctx)
            {
                case astnodes.Load:
                    var v = this.gensym('loadname');
                    // can't be || for loc.x = 0 or null
                    out("var ", v, "=", mangled, "!==undefined?",mangled,":Sk.misceval.loadname('",mangledNoPre,"',$gbl);");
                    return v;
                case astnodes.Store:
                    out(mangled, "=", dataToStore, ";");
                    break;
                case astnodes.Del:
                    out("delete ", mangled, ";");
                    break;
                case astnodes.Param:
                    return mangled;
                default:
                    goog.asserts.fail("unhandled");
            }
            break;
        case OP_GLOBAL:
            switch (ctx)
            {
                case astnodes.Load:
                    return this._gr("loadgbl", "Sk.misceval.loadname('", mangledNoPre, "',$gbl)");
                case astnodes.Store:
                    out("$gbl.", mangledNoPre, "=", dataToStore, ';');
                    break;
                case astnodes.Del:
                    out("delete $gbl.", mangledNoPre);
                    break;
                default:
                    goog.asserts.fail("unhandled case in name op_global");
            }
            break;
        case OP_DEREF:
            switch (ctx)
            {
                case astnodes.Load:
                    return dict + "." + mangledNoPre;
                case astnodes.Store:
                    out(dict, ".", mangledNoPre, "=", dataToStore, ";");
                    break;
                case astnodes.Param:
                    return mangledNoPre;
                default:
                    goog.asserts.fail("unhandled case in name op_deref");
            }
            break;
        default:
            goog.asserts.fail("unhandled case");
    }
};

/**
 * @param {string} name
 * @return {string} The generated name of the scope, usually $scopeN.
 */
Compiler.prototype.enterScope = function(name, key, lineno)
{
    var u = new CompilerUnit();
    u.ste = this.st.getStsForAst(key);
    u.name = name;
    u.firstlineno = lineno;

    if (this.u && this.u.private_)
        u.private_ = this.u.private_;

    this.stack.push(this.u);
    this.allUnits.push(u);
    var scopeName = this.gensym('scope');
    u.scopename = scopeName;

    this.u = u;
    this.u.activateScope();

    this.nestlevel++;

    return scopeName;
};

Compiler.prototype.exitScope = function()
{
    var prev = this.u;
    this.nestlevel--;
    if (this.stack.length - 1 >= 0)
        this.u = this.stack.pop();
    else
        this.u = null;
    if (this.u)
        this.u.activateScope();

    if (prev.name !== "<module>")
    {
        var mangled = prev.name;
        mangled = fixReservedWords(mangled);
        mangled = fixReservedNames(mangled);
        out(prev.scopename, ".co_name=Sk.builtin.stringToPy('", mangled, "');");
    }
};

Compiler.prototype.cbody = function(stmts)
{
    for (var i = 0; i < stmts.length; ++i)
    {
        this.vstmt(stmts[i]);
    }
};

Compiler.prototype.cprint = function(s)
{
    goog.asserts.assert(s instanceof astnodes.Print);
    var dest = 'null';
    if (s.dest)
    {
        dest = this.vexpr(s.dest);
    }

    var n = s.values.length;
    for (var i = 0; i < n; ++i)
    {
        out("Sk.misceval.print_(Sk.ffi.remapToJs(new Sk.builtins['str'](", this.vexpr(s.values[i]), ")));");
    }
    if (s.nl)
    {
        out("Sk.misceval.print_('\\n');");
    }
};

Compiler.prototype.cmod = function(mod)
{
    /**
     * @const
     * @type {string}
     */
    var modf = this.enterScope("<module>", mod, 0);

    var entryBlock = this.newBlock('module entry');
    this.u.prefixCode = "var " + modf + "=(function($modname){";
    this.u.varDeclsCode = "var $blk=" + entryBlock + ",$exc=[],$gbl={},$loc=$gbl,$err=undefined;$gbl.__name__=$modname;Sk.globals=$gbl;";

    // Add the try block that pops the try/except stack if one exists
    // Github Issue #38
    // Google Code Issue: 109 / 114

    // Old code:
    //this.u.switchCode = "while(true){switch($blk){";
    //this.u.suffixCode = "}}});";

    // New Code:
    this.u.switchCode = "try { while(true){try{ switch($blk){";
    this.u.suffixCode = "} }catch(err){if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } }catch(err){ if (err instanceof Sk.builtin.SystemExit && !Sk.throwSystemExit) { Sk.misceval.print_(err.toString() + '\\n'); return $loc; } else { throw err; } } });";

    // Note - this change may need to be adjusted for all the other instances of
    // switchCode and suffixCode in this file.  Not knowing how to test those
    // other cases I left them alone.   At least the changes to
    // setupExcept and endExcept will insure that the generated JavaScript
    // will be syntactically correct.  The worst that will happen is that when
    // code in a try block blows up, we will not know to run the except block.
    // The other problem is that we might catch something that is really an internal
    // error - it might be nice to add code in the above catch block that looked at
    // the kind of exception and only popped the stack for exceptions that are
    // from the original code rather than artifacts of some code generation or
    // exeution environment error.  We at least err on the side of exceptions
    // being revealed to the user.  drchuck - Wed Jan 23 19:20:18 EST 2013

    switch (mod.constructor)
    {
        case astnodes.Module:
            this.cbody(mod.body);
            out("return $loc;");
            break;
        default:
            goog.asserts.fail("todo; unhandled case in compilerMod");
    }
    this.exitScope();

    this.result.push(this.outputAllUnits());
    return modf;
};

/**
 * @param {string} source the code
 * @param {string} fileName where it came from
 * @param {string} mode one of 'exec', 'eval', or 'single'
 *
 * @return {{funcname: string, code: string}}
 */
Sk.compile = function(source, fileName, mode)
{
    var cst = parser.parse(fileName, source);
    var ast = builder.astFromParse(cst, fileName);
    var st = symtable.symbolTable(ast, fileName);
    var c = new Compiler(fileName, st, 0, source);
    return {"funcname": c.cmod(ast), "code": c.result.join('')};
};
goog.exportSymbol("Sk.compile", Sk.compile);

Sk.resetCompiler = function()
{
    Sk.gensymcount = 0;
}
goog.exportSymbol("Sk.resetCompiler", Sk.resetCompiler);
