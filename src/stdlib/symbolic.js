(function() {
Sk.builtin.defineSymbolic = function(mod, SYMBOLIC) {
Sk.ffi.checkFunctionArgs("defineSymbolic", arguments, 2, 2);
/**
 * @const
 * @type {string}
 */
var BINDING            = "Binding";
/**
 * @const
 * @type {string}
 */
var ENVIRONMENT        = "Environment";
/**
 * @const
 * @type {string}
 */
var POINT_E2           = "PointE2";
/**
 * @const
 * @type {string}
 */
var VARIABLE           = "Variable";
/**
 * @const
 * @type {string}
 */
var ADD                = "Add";
/**
 * @const
 * @type {string}
 */
var SUBTRACT           = "Subtract";
/**
 * @const
 * @type {string}
 */
var MULTIPLY           = "Multiply";
/**
 * @const
 * @type {string}
 */
var PROP_BINDINGS      = "bindings";
/**
 * @const
 * @type {string}
 */
var PROP_ENV           = "env";
/**
 * @const
 * @type {string}
 */
var PROP_EXPR          = "expr";
/**
 * @const
 * @type {string}
 */
var PROP_NAME          = "name";
/**
 * @const
 * @type {string}
 */
var PROP_PARENT        = "parent";
/**
 * @const
 * @type {string}
 */
var PROP_LHS           = "lhs";
/**
 * @const
 * @type {string}
 */
var PROP_RHS           = "rhs";
/**
 * @const
 * @type {string}
 */
var PROP_X             = "x";
/**
 * @const
 * @type {string}
 */
var PROP_Y             = "y";
/**
 * @const
 * @type {string}
 */
var METHOD_EVALUATE    = "evaluate";
/**
 * @const
 * @type {string}
 */
var METHOD_LOOKUP      = "lookup";
/**
 * @const
 * @type {string}
 */
var ARG_BINDING        = "binding";
/**
 * @const
 * @type {string}
 */
var OP_SYMBOL_ADD      = "+";
/**
 * @const
 * @type {string}
 */
var OP_SYMBOL_SUBTRACT = "-";
/**
 * @const
 * @type {string}
 */
var OP_SYMBOL_MULTIPLY = "*";
/**
 * @const
 * @type {string}
 */
var COMMA              = ",";
/**
 * @const
 * @type {string}
 */
var SPACE              = " ";
/**
 * Environment
 */
mod[ENVIRONMENT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, parentPy, bindingPy) {
    Sk.ffi.checkMethodArgs(ENVIRONMENT, arguments, 0, 2);
    var env = {};
    env[PROP_BINDINGS] = {};
    if (typeof parentPy !== 'undefined' && !Sk.ffi.isNone(parentPy)) {
      Sk.ffi.checkArgType(PROP_PARENT, ENVIRONMENT, Sk.ffi.isInstance(parentPy, ENVIRONMENT), parentPy);
      env[PROP_PARENT] = parentPy;
    }
    if (typeof bindingPy !== 'undefined' && !Sk.ffi.isNone(bindingPy)) {
      Sk.ffi.checkArgType(ARG_BINDING, BINDING, Sk.ffi.isInstance(bindingPy, BINDING), bindingPy);
      var namePy = Sk.ffi.gattr(bindingPy, PROP_NAME);
      Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
      var exprPy = Sk.ffi.gattr(bindingPy, PROP_EXPR);
      env[PROP_BINDINGS][Sk.ffi.remapToJs(namePy)] = exprPy;
    }
    Sk.ffi.referenceToPy(env, ENVIRONMENT, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ENVIRONMENT], selfPy, otherPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var env = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_LOOKUP: {
        return Sk.ffi.callableToPy(mod, METHOD_LOOKUP, function(methodPy, namePy) {
          Sk.ffi.checkMethodArgs(METHOD_LOOKUP, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
          var name = Sk.ffi.remapToJs(namePy);
          if (typeof env[PROP_BINDINGS][name] !== 'undefined') {
            return env[PROP_BINDINGS][name];
          }
          else if (typeof env[PROP_PARENT] !== 'undefined') {
            return Sk.ffi.callsim(Sk.ffi.gattr(env[PROP_PARENT], METHOD_LOOKUP), namePy);
          }
          else {
            return Sk.ffi.none.None;
          }
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ENVIRONMENT);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy(ENVIRONMENT + '(' + ')');
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy(ENVIRONMENT);
  });
}, ENVIRONMENT, []);
/**
 * Variable
 */
mod[VARIABLE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, namePy) {
    Sk.ffi.checkMethodArgs(VARIABLE, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
    Sk.ffi.referenceToPy({"name": namePy}, VARIABLE, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ADD], selfPy, otherPy);
  });
  $loc.__radd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ADD], otherPy, selfPy);
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_SUBTRACT, arguments, 1, 1);
    return Sk.ffi.callsim(mod[SUBTRACT], selfPy, otherPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_MULTIPLY, arguments, 1, 1);
    return Sk.ffi.callsim(mod[MULTIPLY], selfPy, otherPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EVALUATE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, envPy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_ENV, ENVIRONMENT, Sk.ffi.isInstance(envPy, ENVIRONMENT), envPy);
          var lookup = Sk.ffi.gattr(envPy, METHOD_LOOKUP);
          var valuePy = Sk.ffi.callsim(lookup, self[PROP_NAME]);
          if (!Sk.ffi.isNone(valuePy)) {
            return valuePy;
          }
          else {
            return selfPy;
          }
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(VARIABLE);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy(VARIABLE + '("' + Sk.ffi.remapToJs(self[PROP_NAME]) + '")');
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return self[PROP_NAME];
  });
}, VARIABLE, []);
/**
 * Binding
 */
mod[BINDING] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, namePy, exprPy) {
    Sk.ffi.checkMethodArgs(BINDING, arguments, 2, 2);
    Sk.ffi.checkArgType(PROP_NAME, Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
    var binding = {};
    binding[PROP_NAME] = namePy;
    binding[PROP_EXPR] = exprPy;
    Sk.ffi.referenceToPy(binding, BINDING, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_NAME: {
        return self[PROP_NAME];
      }
      case PROP_EXPR: {
        return self[PROP_EXPR];
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(BINDING);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = ['"' + Sk.ffi.remapToJs(self[PROP_NAME]) + '"', Sk.ffi.remapToJs(Sk.ffh.repr(self[PROP_EXPR]))].join(", ");
    return Sk.ffi.stringToPy(BINDING + '(' + args + ')');
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var s = [Sk.ffi.remapToJs(self[PROP_NAME]), Sk.ffi.remapToJs(Sk.ffh.str(self[PROP_EXPR]))].join(" => ");
    return Sk.ffi.stringToPy(s);
  });
}, BINDING, []);
/**
 * Add
 */
mod[ADD] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, lhs, rhs) {
    Sk.ffi.checkMethodArgs(ADD, arguments, 2, 2);
    Sk.ffi.referenceToPy({"lhs": lhs, "rhs": rhs}, ADD, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ADD], selfPy, otherPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_MULTIPLY, arguments, 1, 1);
    return Sk.ffi.callsim(mod[MULTIPLY], selfPy, otherPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EVALUATE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, envPy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_ENV, ENVIRONMENT, Sk.ffi.isInstance(envPy, ENVIRONMENT), envPy);
          var lhs = Sk.ffh.evaluate(self[PROP_LHS], envPy);
          var rhs = Sk.ffh.evaluate(self[PROP_RHS], envPy);
          return Sk.ffh.add(lhs, rhs);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(VARIABLE);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self[PROP_LHS], self[PROP_RHS]].map(function(coord) {return Sk.ffi.remapToJs(Sk.ffh.repr(coord));}).join(", ");
    return Sk.ffi.stringToPy(ADD + "(" + args + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self[PROP_LHS], self[PROP_RHS]].map(function(arg) {return Sk.ffi.remapToJs(Sk.ffh.str(arg));}).join(" + ");
    return Sk.ffi.stringToPy(args);
  });
}, ADD, []);
/**
 * Subtract
 */
mod[SUBTRACT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, lhs, rhs) {
    Sk.ffi.checkMethodArgs(SUBTRACT, arguments, 2, 2);
    Sk.ffi.referenceToPy({"lhs": lhs, "rhs": rhs}, SUBTRACT, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ADD], selfPy, otherPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_MULTIPLY, arguments, 1, 1);
    return Sk.ffi.callsim(mod[MULTIPLY], selfPy, otherPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EVALUATE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, envPy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_ENV, ENVIRONMENT, Sk.ffi.isInstance(envPy, ENVIRONMENT), envPy);
          var lhs = Sk.ffh.evaluate(self[PROP_LHS], envPy);
          var rhs = Sk.ffh.evaluate(self[PROP_RHS], envPy);
          return Sk.ffh.subtract(lhs, rhs);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(VARIABLE);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self[PROP_LHS], self[PROP_RHS]].map(function(coord) {return Sk.ffi.remapToJs(Sk.ffh.repr(coord));}).join(COMMA + SPACE);
    return Sk.ffi.stringToPy(SUBTRACT + "(" + args + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self[PROP_LHS], self[PROP_RHS]].map(function(arg) {return Sk.ffi.remapToJs(Sk.ffh.str(arg));}).join(SPACE + OP_SYMBOL_SUBTRACT + SPACE);
    return Sk.ffi.stringToPy(args);
  });
}, SUBTRACT, []);
/**
 * Multiply
 */
mod[MULTIPLY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, lhs, rhs) {
    Sk.ffi.checkMethodArgs(MULTIPLY, arguments, 2, 2);
    Sk.ffi.referenceToPy({"lhs": lhs, "rhs": rhs}, MULTIPLY, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ADD], selfPy, otherPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_MULTIPLY, arguments, 1, 1);
    return Sk.ffi.callsim(mod[MULTIPLY], selfPy, otherPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EVALUATE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, envPy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_ENV, ENVIRONMENT, Sk.ffi.isInstance(envPy, ENVIRONMENT), envPy);
          var lhs = Sk.ffh.evaluate(self[PROP_LHS], envPy);
          var rhs = Sk.ffh.evaluate(self[PROP_RHS], envPy);
          return Sk.ffh.multiply(lhs, rhs);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(VARIABLE);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self[PROP_LHS], self[PROP_RHS]].map(function(coord) {return Sk.ffi.remapToJs(Sk.ffh.repr(coord));}).join(", ");
    return Sk.ffi.stringToPy(MULTIPLY + "(" + args + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self[PROP_LHS], self[PROP_RHS]].map(function(arg) {return Sk.ffi.remapToJs(Sk.ffh.str(arg));}).join(" * ");
    return Sk.ffi.stringToPy(args);
  });
}, MULTIPLY, []);
/**
 * PointE2
 */
mod[POINT_E2] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, x, y) {
    Sk.ffi.checkMethodArgs(POINT_E2, arguments, 2, 2);
    var point = {};
    point[PROP_X] = x;
    point[PROP_Y] = y;
    Sk.ffi.referenceToPy(point, POINT_E2, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EVALUATE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, envPy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_ENV, ENVIRONMENT, Sk.ffi.isInstance(envPy, ENVIRONMENT), envPy);
          var x = Sk.ffh.evaluate(point[PROP_X], envPy);
          var y = Sk.ffh.evaluate(point[PROP_Y], envPy);
          return Sk.ffi.callsim(mod[POINT_E2], x, y);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(POINT_E2);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self.x, self.y].map(function(coord) {return Sk.ffi.remapToJs(Sk.ffh.repr(coord));}).join(", ");
    return Sk.ffi.stringToPy(POINT_E2 + "(" + args + ")");
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var args = [self.x, self.y].map(function(coord) {return Sk.ffi.remapToJs(Sk.ffh.str(coord));}).join(", ");
    return Sk.ffi.stringToPy("[" + args + "]");
  });
}, POINT_E2, []);

};
}).call(this);
