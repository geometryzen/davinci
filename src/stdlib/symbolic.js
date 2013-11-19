Sk.symbolic = Sk.symbolic || {};
/**
 * @const
 * @type {string}
 */
Sk.symbolic.VARIABLE   = "Variable";
/**
 *
 */
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
var PROP_CLASS_NAME    = "className";
/**
 * @const
 * @type {string}
 */
var ASSOC_L            = "AssocL";
/**
 * @const
 * @type {string}
 */
var ASSOC_R            = "AssocR";
/**
 * @const
 * @type {string}
 */
var COMMUTE            = "Commute";
/**
 * @const
 * @type {string}
 */
var DISTRIB_L          = "DistribL";
/**
 * @const
 * @type {string}
 */
var DISTRIB_R          = "DistribR";
/**
 * @const
 * @type {string}
 */
var FACTOR_L           = "FactorL";
/**
 * @const
 * @type {string}
 */
var FACTOR_R           = "FactorR";
/**
 * @const
 * @type {string}
 */
var PROP_ANCESTOR_AXIS = "ancestorAxis";
/**
 * @const
 * @type {string}
 */
var PROP_CHILD_AXIS    = "childAxis";
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
var PROP_CONTEXT_NODE  = "contextNode";
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
var PROP_UUID          = "uuid";
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
var METHOD_EXECUTE     = "execute";
/**
 * @const
 * @type {string}
 */
var METHOD_LOOKUP      = "lookup";
/**
 * @const
 * @type {string}
 */
var METHOD_MOVE_TO_FIRST_CHILD = "moveToFirstChild";
/**
 * @const
 * @type {string}
 */
var METHOD_MOVE_TO_LAST_CHILD  = "moveToLastChild";
/**
 * @const
 * @type {string}
 */
var METHOD_MOVE_TO_PARENT      = "moveToParent";
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
 * @const
 * @type {string}
 */
var LPAREN             = "(";
/**
 * @const
 * @type {string}
 */
var RPAREN             = ")";
/**
 * @const
 * @type {string}
 */
var TREE_WALKER        = "TreeWalker";
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 */
Sk.symbolic.treeGetAttr = function(className, selfPy, name) {
  var self = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    case PROP_CHILD_AXIS: {
      return Sk.ffi.listPy(self[name]);
    }
    case PROP_UUID: {
      return Sk.ffi.stringToPy(self[name]);
    }
    default: {
      throw Sk.ffi.err.attribute(name).isNotGetableOnType(className);
    }
  }
};
/**
 * @param {string} className 
 * @param {!Object} selfPy
 * @param {string} name
 * @param {!Object} valuePy
 */
Sk.symbolic.treeSetAttr = function(className, selfPy, name, valuePy) {
  var self = Sk.ffi.remapToJs(selfPy);
  switch(name) {
    default: {
      throw Sk.ffi.err.attribute(name).isNotSetableOnType(className);
    }
  }
};
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
    var node = {};
    node[PROP_NAME] = namePy;
    node[PROP_UUID] = THREE.Math.generateUUID();
    node[PROP_CHILD_AXIS] = [];
    Sk.ffi.referenceToPy(node, VARIABLE, undefined, selfPy);
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
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_MULTIPLY, arguments, 1, 1);
    return Sk.ffi.callsim(mod[MULTIPLY], otherPy, selfPy);
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
        return Sk.symbolic.treeGetAttr(VARIABLE, selfPy, name);
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
 * TreeWalker FIXME: remapToJs is too aggressive (recursive) for this class. 
 */
mod[TREE_WALKER] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, nodePy) {
    Sk.ffi.checkMethodArgs(TREE_WALKER, arguments, 1, 1);
    var self = {};
    self[PROP_ANCESTOR_AXIS] = [];
    self[PROP_CONTEXT_NODE] = nodePy;
    self[PROP_CHILD_AXIS] = Sk.ffi.gattr(self[PROP_CONTEXT_NODE], PROP_CHILD_AXIS);
    Sk.ffi.referenceToPy(self, TREE_WALKER, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_ANCESTOR_AXIS: {
        return Sk.ffi.listPy(self[name]);
      }
      case PROP_CONTEXT_NODE: {
        return self[name];
      }
      case METHOD_MOVE_TO_FIRST_CHILD: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          var children = Sk.ffi.remapToJs(self[PROP_CHILD_AXIS]);
          if (children.length > 0) {
            var parentNodePy = self[PROP_CONTEXT_NODE];
            self[PROP_ANCESTOR_AXIS].push(parentNodePy);
            self[PROP_CONTEXT_NODE] = children[0];
            self[PROP_CHILD_AXIS] = Sk.ffi.gattr(self[PROP_CONTEXT_NODE], PROP_CHILD_AXIS);
            return Sk.ffi.booleanToPy(true);
          }
          else {
            return Sk.ffi.booleanToPy(false);
          }
        });
      }
      case METHOD_MOVE_TO_LAST_CHILD: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          var children = Sk.ffi.remapToJs(self[PROP_CHILD_AXIS]);
          if (children.length > 0) {
            var parentNodePy = self[PROP_CONTEXT_NODE];
            self[PROP_ANCESTOR_AXIS].push(parentNodePy);
            self[PROP_CONTEXT_NODE] = children[children.length - 1];
            self[PROP_CHILD_AXIS] = Sk.ffi.gattr(self[PROP_CONTEXT_NODE], PROP_CHILD_AXIS);
            return Sk.ffi.booleanToPy(true);
          }
          else {
            return Sk.ffi.booleanToPy(false);
          }
        });
      }
      case METHOD_MOVE_TO_PARENT: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          var children = Sk.ffi.remapToJs(self[PROP_CHILD_AXIS]);
          if (self[PROP_ANCESTOR_AXIS].length > 0) {
            var contextNodePy = self[PROP_ANCESTOR_AXIS].pop();
            self[PROP_CONTEXT_NODE] = contextNodePy;
            self[PROP_CHILD_AXIS] = Sk.ffi.gattr(self[PROP_CONTEXT_NODE], PROP_CHILD_AXIS);
            return Sk.ffi.booleanToPy(true);
          }
          else {
            return Sk.ffi.booleanToPy(false);
          }
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(TREE_WALKER);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy(TREE_WALKER + '(' + ')');
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.stringToPy(TREE_WALKER);
  });
}, TREE_WALKER, []);
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
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, lhsPy, rhsPy) {
    Sk.ffi.checkMethodArgs(ADD, arguments, 2, 2);
    var node = {};
    node[PROP_LHS] = lhsPy;
    node[PROP_RHS] = rhsPy;
    node[PROP_UUID] = THREE.Math.generateUUID();
    node[PROP_CHILD_AXIS] = [lhsPy, rhsPy];
    Sk.ffi.referenceToPy(node, ADD, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkMethodArgs(OP_SYMBOL_ADD, arguments, 1, 1);
    return Sk.ffi.callsim(mod[ADD], selfPy, otherPy);
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
      case PROP_CLASS_NAME: {
        return Sk.ffi.stringToPy(ADD);
      }
      case PROP_LHS:
      case PROP_RHS: {
        return self[name];
      }
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
        return Sk.symbolic.treeGetAttr(ADD, selfPy, name);
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
    return Sk.ffi.stringToPy(LPAREN + args + RPAREN);
  });
}, ADD, []);
/**
 * Subtract
 */
mod[SUBTRACT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, lhsPy, rhsPy) {
    Sk.ffi.checkMethodArgs(SUBTRACT, arguments, 2, 2);
    var node = {};
    node[PROP_LHS] = lhsPy;
    node[PROP_RHS] = rhsPy;
    node[PROP_UUID] = THREE.Math.generateUUID();
    node[PROP_CHILD_AXIS] = [lhsPy, rhsPy];
    Sk.ffi.referenceToPy(node, SUBTRACT, undefined, selfPy);
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
        return Sk.symbolic.treeGetAttr(SUBTRACT, selfPy, name);
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
    return Sk.ffi.stringToPy(LPAREN + args + RPAREN);
  });
}, SUBTRACT, []);
/**
 * Multiply
 */
mod[MULTIPLY] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, lhsPy, rhsPy) {
    Sk.ffi.checkMethodArgs(MULTIPLY, arguments, 2, 2);
    var node = {};
    node[PROP_LHS] = lhsPy;
    node[PROP_RHS] = rhsPy;
    node[PROP_UUID] = THREE.Math.generateUUID();
    node[PROP_CHILD_AXIS] = [lhsPy, rhsPy];
    Sk.ffi.referenceToPy(node, MULTIPLY, undefined, selfPy);
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
      case PROP_CLASS_NAME: {
        return Sk.ffi.stringToPy(MULTIPLY);
      }
      case PROP_LHS:
      case PROP_RHS: {
        return self[name];
      }
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
        return Sk.symbolic.treeGetAttr(MULTIPLY, selfPy, name);
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
    return Sk.ffi.stringToPy(LPAREN + args + RPAREN);
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
/**
 * Commute
 */
mod[COMMUTE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(COMMUTE, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, COMMUTE, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          var className = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var lhsPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var rhsPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          return Sk.ffi.callsim(mod[className], rhsPy, lhsPy);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(COMMUTE);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(COMMUTE);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(COMMUTE);
  });
}, COMMUTE, []);
/**
 *
 */
mod[DISTRIB_L] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(DISTRIB_L, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, DISTRIB_L, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          var nameOne = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var aPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var tempPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          var nameTwo = Sk.ffi.remapToJs(Sk.ffi.gattr(tempPy, PROP_CLASS_NAME));
          var bPy = Sk.ffi.gattr(tempPy, PROP_LHS);
          var cPy = Sk.ffi.gattr(tempPy, PROP_RHS);
          var lhsPy = Sk.ffi.callsim(mod[nameOne], aPy, bPy);
          var rhsPy = Sk.ffi.callsim(mod[nameOne], aPy, cPy);
          return Sk.ffi.callsim(mod[nameTwo], lhsPy, rhsPy);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(DISTRIB_L);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(DISTRIB_L);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(DISTRIB_L);
  });
}, DISTRIB_L, []);
/**
 * (a + b) * c => (a * c) + (b * c)
 */
mod[DISTRIB_R] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(DISTRIB_R, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, DISTRIB_R, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          var nameOne = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var tempPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var nameTwo = Sk.ffi.remapToJs(Sk.ffi.gattr(tempPy, PROP_CLASS_NAME));
          var aPy = Sk.ffi.gattr(tempPy, PROP_LHS);
          var bPy = Sk.ffi.gattr(tempPy, PROP_RHS);
          var cPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          return Sk.ffi.callsim(mod[nameTwo], Sk.ffi.callsim(mod[nameOne], aPy, cPy), Sk.ffi.callsim(mod[nameOne], bPy, cPy));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(DISTRIB_R);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(DISTRIB_R);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(DISTRIB_R);
  });
}, DISTRIB_R, []);
/**
 * (a * b) + (a * c) => a * (b + c)
 */
mod[FACTOR_L] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(FACTOR_L, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, FACTOR_L, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          var nameOne = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var lhsPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var rhsPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          var aPy = Sk.ffi.gattr(lhsPy, PROP_LHS);
          var bPy = Sk.ffi.gattr(lhsPy, PROP_RHS);
          var aPy = Sk.ffi.gattr(rhsPy, PROP_LHS);
          var cPy = Sk.ffi.gattr(rhsPy, PROP_RHS);
          var nameLhs = Sk.ffi.remapToJs(Sk.ffi.gattr(lhsPy, PROP_CLASS_NAME));
          var nameRhs = Sk.ffi.remapToJs(Sk.ffi.gattr(rhsPy, PROP_CLASS_NAME));
          return Sk.ffi.callsim(mod[nameLhs], aPy, Sk.ffi.callsim(mod[nameOne], bPy, cPy));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(FACTOR_L);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(FACTOR_L);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(FACTOR_L);
  });
}, FACTOR_L, []);
/**
 * (a * c) + (b * c) => (a + b) * c
 */
mod[FACTOR_R] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(FACTOR_R, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, FACTOR_R, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          var nameOne = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var lhsPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var rhsPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          var aPy = Sk.ffi.gattr(lhsPy, PROP_LHS);
          var cPy = Sk.ffi.gattr(lhsPy, PROP_RHS);
          var bPy = Sk.ffi.gattr(rhsPy, PROP_LHS);
          var cPy = Sk.ffi.gattr(rhsPy, PROP_RHS);
          var nameLhs = Sk.ffi.remapToJs(Sk.ffi.gattr(lhsPy, PROP_CLASS_NAME));
          var nameRhs = Sk.ffi.remapToJs(Sk.ffi.gattr(rhsPy, PROP_CLASS_NAME));
          return Sk.ffi.callsim(mod[nameLhs], Sk.ffi.callsim(mod[nameOne], aPy, bPy), cPy);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(FACTOR_R);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(FACTOR_R);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(FACTOR_R);
  });
}, FACTOR_R, []);
/**
 * a * (b * c) => (a * b) * c
 */
mod[ASSOC_L] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(ASSOC_L, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, ASSOC_L, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          var nameOne = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var aPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var tempPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          var bPy = Sk.ffi.gattr(tempPy, PROP_LHS);
          var cPy = Sk.ffi.gattr(tempPy, PROP_RHS);
          return Sk.ffi.callsim(mod[nameOne], Sk.ffi.callsim(mod[nameOne], aPy, bPy), cPy);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ASSOC_L);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(ASSOC_L);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(ASSOC_L);
  });
}, ASSOC_L, []);
/**
 * (a * b) * c => a * (b * c)
 */
mod[ASSOC_R] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(ASSOC_R, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, ASSOC_R, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var point = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_EXECUTE: {
        return Sk.ffi.callableToPy(mod, METHOD_EVALUATE, function(methodPy, nodePy) {
          Sk.ffi.checkMethodArgs(METHOD_EVALUATE, arguments, 1, 1);
          var nameOne = Sk.ffi.remapToJs(Sk.ffi.gattr(nodePy, PROP_CLASS_NAME));
          var tempPy = Sk.ffi.gattr(nodePy, PROP_LHS);
          var aPy = Sk.ffi.gattr(tempPy, PROP_LHS);
          var bPy = Sk.ffi.gattr(tempPy, PROP_RHS);
          var cPy = Sk.ffi.gattr(nodePy, PROP_RHS);
          return Sk.ffi.callsim(mod[nameOne], aPy, Sk.ffi.callsim(mod[nameOne], bPy, cPy));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(ASSOC_R);
      }
    }
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(ASSOC_R);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(ASSOC_R);
  });
}, ASSOC_R, []);
/**
 *
 */
};
}).call(this);
