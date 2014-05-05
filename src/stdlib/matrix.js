Sk.matrix = Sk.matrix || {};
/**
 * @const
 * @type {string}
 */
Sk.matrix.MATRIX_2x1 = "Matrix2x1";
/**
 * @const
 * @type {string}
 */
Sk.matrix.MATRIX_2x2 = "Matrix2x2";
/**
 * @const
 * @type {string}
 */
Sk.matrix.MATRIX_1x2 = "Matrix1x2";

(function() {
Sk.builtin.defineMatrix = function(mod) {
Sk.ffi.checkFunctionArgs("defineMatrix", arguments, 1, 1);
/**
 * @const
 * @type {string}
 */
var ARG_OTHER = "other";
/**
 * @const
 * @type {string}
 */
var ARG_INDEX = "index";
/**
 * @const
 * @type {string}
 */
var NUMBER = "Number";
/**
 * @const
 * @type {string}
 */
var OP_MUL = "*";
/**
 * @const
 * @type {string}
 */
var METHOD_CONJUGATE = "conjugate";
/**
 * @const
 * @type {string}
 */
var METHOD_TRANSPOSE = "transpose";
/**
 * @const
 * @type {string}
 */
var LPAREN = "(";
/**
 * @const
 * @type {string}
 */
var RPAREN = ")";
/**
 * @const
 * @type {string}
 */
var LSQB = "[";
/**
 * @const
 * @type {string}
 */
var RSQB = "]";
/**
 * @const
 * @type {string}
 */
var NEWLINE = "\n";
/**
 * @const
 * @type {string}
 */
var COMMA = ",";
/**
 * @const
 * @type {string}
 */
var SPACE = " ";
/**
 * Matrix2x1
 */
mod[Sk.matrix.MATRIX_2x1] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, onePy, twoPy) {
    Sk.ffi.checkMethodArgs(Sk.matrix.MATRIX_2x1, arguments, 2, 2);
    Sk.ffi.referenceToPy({"elements":[onePy, twoPy]}, Sk.matrix.MATRIX_2x1, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var rhs = Sk.ffi.remapToJs(otherPy).elements;
    var onePy = Sk.ffh.add(lhs[0], rhs[0]);
    var twoPy = Sk.ffh.add(lhs[1], rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], onePy, twoPy);
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var rhs = Sk.ffi.remapToJs(otherPy).elements;
    var onePy = Sk.ffh.subtract(lhs[0], rhs[0]);
    var twoPy = Sk.ffh.subtract(lhs[1], rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], onePy, twoPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    if (Sk.ffi.isInstance(otherPy, Sk.matrix.MATRIX_2x1)) {
      throw Sk.ffi.assertionError("multiplication with 2x1 is not supported.");
    }
    else {
      var lhs = Sk.ffi.remapToJs(selfPy).elements;
      var onePy = Sk.ffh.multiply(lhs[0], otherPy);
      var twoPy = Sk.ffh.multiply(lhs[1], otherPy);
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], onePy, twoPy);
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var rhs = Sk.ffi.remapToJs(selfPy).elements;
    var onePy = Sk.ffh.multiply(otherPy, rhs[0]);
    var twoPy = Sk.ffh.multiply(otherPy, rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], onePy, twoPy);
  });
  $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var onePy = Sk.ffh.divide(lhs[0], otherPy);
    var twoPy = Sk.ffh.divide(lhs[1], otherPy);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], onePy, twoPy);
  });
  $loc.__conjugate__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_CONJUGATE, arguments, 0, 0);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], Sk.ffh.conjugate(Sk.ffh.getitem(selfPy, 0)), Sk.ffh.conjugate(Sk.ffh.getitem(selfPy, 1)));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var matrix = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_TRANSPOSE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(selfPy, 1));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.matrix.MATRIX_2x1);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.matrix.MATRIX_2x1);
      }
    }
  });
  $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
    Sk.ffi.checkMethodArgs("[]", arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_INDEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(indexPy), indexPy);
    var index  = Sk.ffi.remapToJs(indexPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var xs = self.elements;
    switch(index) {
      case 0: {
        return xs[0];
      }
      case 1: {
        return xs[1];
      }
    }
  });
  /**
   * The 2x1 matrix will be rendered to look like a n-tuple.
   *
   * The presence of commas and the parenthesis should indicate that it is not a row vector.
   */
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var x = self.elements;
    var args = [x[0], x[1]].map(function(xPy) {
      return Sk.ffi.remapToJs(Sk.ffh.str(xPy));
    }).join(COMMA + SPACE);
    return Sk.builtin.stringToPy(LPAREN + args + RPAREN);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var x = self.elements;
    var args = [x[0], x[1]].map(function(xPy) {
      return Sk.ffi.remapToJs(Sk.ffh.repr(xPy));
    }).join(COMMA + SPACE);
    return Sk.builtin.stringToPy(Sk.matrix.MATRIX_2x1 + LPAREN + args + RPAREN);
  });
}, Sk.matrix.MATRIX_2x1, []);
/**
 * Matrix1x2
 */
mod[Sk.matrix.MATRIX_1x2] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, onePy, twoPy) {
    Sk.ffi.checkMethodArgs(Sk.matrix.MATRIX_1x2, arguments, 2, 2);
    Sk.ffi.referenceToPy({"elements":[onePy, twoPy]}, Sk.matrix.MATRIX_1x2, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var rhs = Sk.ffi.remapToJs(otherPy).elements;
    var onePy = Sk.ffh.add(lhs[0], rhs[0]);
    var twoPy = Sk.ffh.add(lhs[1], rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], onePy, twoPy);
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var rhs = Sk.ffi.remapToJs(otherPy).elements;
    var onePy = Sk.ffh.subtract(lhs[0], rhs[0]);
    var twoPy = Sk.ffh.subtract(lhs[1], rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], onePy, twoPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    if (Sk.ffi.isInstance(otherPy, Sk.matrix.MATRIX_2x1)) {
      return Sk.ffh.add(Sk.ffh.multiply(Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(otherPy, 0)), Sk.ffh.multiply(Sk.ffh.getitem(selfPy, 1), Sk.ffh.getitem(otherPy, 1)));
    }
    else if (Sk.ffi.isInstance(otherPy, Sk.matrix.MATRIX_1x2)) {
      throw Sk.ffi.assertionError("multiplication with 2x1 is not supported.");
    }
    else {
      var lhs = Sk.ffi.remapToJs(selfPy).elements;
      var onePy = Sk.ffh.multiply(lhs[0], otherPy);
      var twoPy = Sk.ffh.multiply(lhs[1], otherPy);
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], onePy, twoPy);
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var rhs = Sk.ffi.remapToJs(selfPy).elements;
    var onePy = Sk.ffh.multiply(otherPy, rhs[0]);
    var twoPy = Sk.ffh.multiply(otherPy, rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], onePy, twoPy);
  });
  $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var onePy = Sk.ffh.divide(lhs[0], otherPy);
    var twoPy = Sk.ffh.divide(lhs[1], otherPy);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], onePy, twoPy);
  });
  $loc.__conjugate__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_CONJUGATE, arguments, 0, 0);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_1x2], Sk.ffh.conjugate(Sk.ffh.getitem(selfPy, 0)), Sk.ffh.conjugate(Sk.ffh.getitem(selfPy, 1)));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var matrix = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_TRANSPOSE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(selfPy, 1));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.matrix.MATRIX_1x2);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.matrix.MATRIX_1x2);
      }
    }
  });
  $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
    Sk.ffi.checkMethodArgs("[]", arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_INDEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(indexPy), indexPy);
    var index  = Sk.ffi.remapToJs(indexPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var xs = self.elements;
    switch(index) {
      case 0: {
        return xs[0];
      }
      case 1: {
        return xs[1];
      }
    }
  });
  /**
   * The 1x2 matrix will be rendered to look like an array.
   *
   * The presence of square braces and the absence of commas should indicate that it is row vector.
   */
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(selfPy, 1)].map(function(xPy) {
      return Sk.ffi.remapToJs(Sk.ffh.str(xPy));
    }).join(SPACE);
    return Sk.builtin.stringToPy(LSQB + args + RSQB);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(selfPy, 1)].map(function(xPy) {
      return Sk.ffi.remapToJs(Sk.ffh.repr(xPy));
    }).join(COMMA + SPACE);
    return Sk.builtin.stringToPy(Sk.matrix.MATRIX_1x2 + LPAREN + args + RPAREN);
  });
}, Sk.matrix.MATRIX_1x2, []);
/**
 * Matrix2x2
 */
mod[Sk.matrix.MATRIX_2x2] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, onePy, twoPy) {
    Sk.ffi.checkMethodArgs(Sk.matrix.MATRIX_2x2, arguments, 2, 2);
    Sk.ffi.checkArgType("one", Sk.matrix.MATRIX_2x1, Sk.ffi.isInstance(onePy, Sk.matrix.MATRIX_2x1), onePy);
    Sk.ffi.checkArgType("two", Sk.matrix.MATRIX_2x1, Sk.ffi.isInstance(twoPy, Sk.matrix.MATRIX_2x1), twoPy);
    Sk.ffi.referenceToPy({"elements":[onePy, twoPy]}, Sk.matrix.MATRIX_2x2, undefined, selfPy);
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var rhs = Sk.ffi.remapToJs(otherPy).elements;
    var onePy = Sk.ffh.add(lhs[0], rhs[0]);
    var twoPy = Sk.ffh.add(lhs[1], rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var rhs = Sk.ffi.remapToJs(otherPy).elements;
    var onePy = Sk.ffh.subtract(lhs[0], rhs[0]);
    var twoPy = Sk.ffh.subtract(lhs[1], rhs[1]);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a00 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 0), 0);
    var a01 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 0), 1);
    var a10 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 1), 0);
    var a11 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 1), 1);
    if (Sk.ffi.isInstance(otherPy, Sk.matrix.MATRIX_2x2)) {
      var b00 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 0), 0);
      var b01 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 0), 1);
      var b10 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 1), 0);
      var b11 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 1), 1);

      var x00 = Sk.ffh.add(Sk.ffh.multiply(a00, b00), Sk.ffh.multiply(a10, b01));
      var x01 = Sk.ffh.add(Sk.ffh.multiply(a01, b00), Sk.ffh.multiply(a11, b01));
      var x10 = Sk.ffh.add(Sk.ffh.multiply(a00, b10), Sk.ffh.multiply(a10, b11));
      var x11 = Sk.ffh.add(Sk.ffh.multiply(a01, b10), Sk.ffh.multiply(a11, b11));
      var onePy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x00, x01);
      var twoPy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x10, x11);
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
    }
    else if (Sk.ffi.isInstance(otherPy, Sk.matrix.MATRIX_2x1)) {
      var b0 = Sk.ffh.getitem(otherPy, 0);
      var b1 = Sk.ffh.getitem(otherPy, 1);

      var onePy = Sk.ffh.add(Sk.ffh.multiply(a00, b0), Sk.ffh.multiply(a10, b1));
      var twoPy = Sk.ffh.add(Sk.ffh.multiply(a01, b0), Sk.ffh.multiply(a11, b1));
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], onePy, twoPy);
    }
    else {
      var x00 = Sk.ffh.multiply(a00, otherPy);
      var x01 = Sk.ffh.multiply(a01, otherPy);
      var x10 = Sk.ffh.multiply(a10, otherPy);
      var x11 = Sk.ffh.multiply(a11, otherPy);

      var onePy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x00, x01);
      var twoPy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x10, x11);
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a00 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 0), 0);
    var a01 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 0), 1);
    var a10 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 1), 0);
    var a11 = Sk.ffh.getitem(Sk.ffh.getitem(selfPy, 1), 1);
    if (Sk.ffi.isInstance(otherPy, Sk.matrix.MATRIX_1x2)) {
      var b00 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 0), 0);
      var b01 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 0), 1);
      var b10 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 1), 0);
      var b11 = Sk.ffh.getitem(Sk.ffh.getitem(otherPy, 1), 1);

      var x00 = Sk.ffh.add(Sk.ffh.multiply(a00, b00), Sk.ffh.multiply(a10, b01));
      var x01 = Sk.ffh.add(Sk.ffh.multiply(a01, b00), Sk.ffh.multiply(a11, b01));
      var x10 = Sk.ffh.add(Sk.ffh.multiply(a00, b10), Sk.ffh.multiply(a10, b11));
      var x11 = Sk.ffh.add(Sk.ffh.multiply(a01, b10), Sk.ffh.multiply(a11, b11));
      var onePy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x00, x01);
      var twoPy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x10, x11);
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
    }
    else {
      var x00 = Sk.ffh.multiply(otherPy, a00);
      var x01 = Sk.ffh.multiply(otherPy, a01);
      var x10 = Sk.ffh.multiply(otherPy, a10);
      var x11 = Sk.ffh.multiply(otherPy, a11);

      var onePy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x00, x01);
      var twoPy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], x10, x11);
      return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
    }
  });
  $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy).elements;
    var onePy = Sk.ffh.divide(lhs[0], otherPy);
    var twoPy = Sk.ffh.divide(lhs[1], otherPy);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
  });
  $loc.__conjugate__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_CONJUGATE, arguments, 0, 0);
    return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], Sk.ffh.conjugate(Sk.ffh.getitem(selfPy, 0)), Sk.ffh.conjugate(Sk.ffh.getitem(selfPy, 1)));
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var matrix = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_TRANSPOSE: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 0, 0);
          var c0 = Sk.ffh.getitem(selfPy, 0);
          var c1 = Sk.ffh.getitem(selfPy, 1);
          var onePy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], Sk.ffh.getitem(c0, 0),  Sk.ffh.getitem(c1, 0));
          var twoPy = Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x1], Sk.ffh.getitem(c0, 1),  Sk.ffh.getitem(c1, 1));
          return Sk.ffi.callsim(mod[Sk.matrix.MATRIX_2x2], onePy, twoPy);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.matrix.MATRIX_2x2);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.matrix.MATRIX_2x2);
      }
    }
  });
  $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
    Sk.ffi.checkMethodArgs("[]", arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_INDEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(indexPy), indexPy);
    var index  = Sk.ffi.remapToJs(indexPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var xs = self.elements;
    switch(index) {
      case 0: {
        return xs[0];
      }
      case 1: {
        return xs[1];
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(selfPy, 1)].map(function(xPy) {
      return Sk.ffi.remapToJs(Sk.ffh.str(xPy));
    }).join(SPACE);
    return Sk.builtin.stringToPy(LSQB + args + RSQB);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var args = [Sk.ffh.getitem(selfPy, 0), Sk.ffh.getitem(selfPy, 1)].map(function(xPy) {
      return Sk.ffi.remapToJs(Sk.ffh.repr(xPy));
    }).join(COMMA + SPACE);
    return Sk.builtin.stringToPy(Sk.matrix.MATRIX_2x2 + LPAREN + args + RPAREN);
  });
}, Sk.matrix.MATRIX_2x2, []);

};
}).call(this);
