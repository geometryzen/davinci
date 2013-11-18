Sk.units = Sk.units || {};

(function() {
Sk.builtin.defineUnits = function(mod, BLADE) {
Sk.ffi.checkFunctionArgs("defineUnits", arguments, 2, 2);
/**
 * Prefixes.
 */
mod.yocto = Sk.ffi.numberToFloatPy(1e-24);
mod.zepto = Sk.ffi.numberToFloatPy(1e-21);
mod.atto  = Sk.ffi.numberToFloatPy(1e-18);
mod.femto = Sk.ffi.numberToFloatPy(1e-15);
mod.pico  = Sk.ffi.numberToFloatPy(1e-12);
mod.nano  = Sk.ffi.numberToFloatPy(1e-9);
mod.micro = Sk.ffi.numberToFloatPy(1e-6);
mod.milli = Sk.ffi.numberToFloatPy(1e-3);
mod.centi = Sk.ffi.numberToFloatPy(1e-2);
mod.deci  = Sk.ffi.numberToFloatPy(1e-1);
mod.deka  = Sk.ffi.numberToFloatPy(1e+1);
mod.hecto = Sk.ffi.numberToFloatPy(1e+2);
mod.kilo  = Sk.ffi.numberToFloatPy(1e+3);
mod.mega  = Sk.ffi.numberToFloatPy(1e+6);
mod.giga  = Sk.ffi.numberToFloatPy(1e+9);
mod.tera  = Sk.ffi.numberToFloatPy(1e+12);
mod.peta  = Sk.ffi.numberToFloatPy(1e+15);
mod.exa   = Sk.ffi.numberToFloatPy(1e+18);
mod.zetta = Sk.ffi.numberToFloatPy(1e+21);
mod.yotta = Sk.ffi.numberToFloatPy(1e+24);
/**
 * @const
 * @type {string}
 */
var DIMENSIONS        = "Dimensions";
/**
 * @const
 * @type {string}
 */
var MEASURE           = "Measure";
/**
 * @const
 * @type {string}
 */
var RATIONAL          = "Rational";
/**
 * @const
 * @type {string}
 */
var UNIT              = "Unit";
/**
 * @const
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUMBER            = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {string}
 */
var PROP_QUANTITY     = "quantity";
/**
 * @const
 * @type {string}
 */
var PROP_UOM          = "uom";
/**
 * @const
 * @type {string}
 */
var PROP_SCALE        = "scale";
/**
 * @const
 * @type {string}
 */
var PROP_DIMENSIONS   = "dimensions";
/**
 * @const
 * @type {string}
 */
var PROP_LABELS       = "labels";
/**
 * @const
 * @type {string}
 */
var PROP_M            = "M";
/**
 * @const
 * @type {string}
 */
var PROP_L            = "L";
/**
 * @const
 * @type {string}
 */
var PROP_T            = "T";
/**
 * @const
 * @type {string}
 */
var PROP_Q            = "Q";
/**
 * @const
 * @type {string}
 */
var METHOD_COMPATIBLE = "compatible";
/**
 * @const
 * @type {string}
 */
var METHOD_COS        = "cos";
/**
 * @const
 * @type {string}
 */
var METHOD_EXP        = "exp";
/**
 * @const
 * @type {string}
 */
var METHOD_SIN        = "sin";
/**
 * @const
 * @type {string}
 */
var OP_ADD            = "add";
/**
 * @const
 * @type {string}
 */
var OP_SUB            = "subtract";
/**
 * @const
 * @type {string}
 */
var OP_MUL            = "multiply";
/**
 * @const
 * @type {string}
 */
var OP_DIV            = "divide";
/**
 * @const
 * @type {string}
 */
var OP_EQ             = "equal";
/**
 * @const
 * @type {string}
 */
var ARG_OTHER         = "other";
/**
 * @const
 * @type {string}
 */
var GRAM              = "gram";
/**
 * @const
 * @type {string}
 */
var KILOGRAM          = "kilogram";
/**
 * @const
 * @type {string}
 */
var METER             = "meter";
/**
 * @const
 * @type {string}
 */
var CM                = "cm";
/**
 * @const
 * @type {string}
 */
var SECOND            = "second";
/**
 * @const
 * @type {string}
 */
var COULOMB           = "coulomb";
/**
 * @const
 * @type {!Array.<string>}
 */
var SI_LABELS         = ["kg", "m", "s", "C"];
/**
 * @const
 * @type {string}
 */
var NEWTON            = "newton";
/**
 * @const
 * @type {string}
 */
var JOULE             = "joule";
/**
 * @const
 * @type {string}
 */
var WATT              = "watt";
/**
 * @const
 * @type {string}
 */
var AMPERE            = "ampere";
/**
 * @const
 * @type {string}
 */
var VOLT              = "volt";
/**
 * @const
 * @type {string}
 */
var TESLA             = "tesla";

var isMeasurePy    = function(valuePy) {return Sk.ffi.isInstance(valuePy, MEASURE);};
var isDimensionsPy = function(valuePy) {return Sk.ffi.isInstance(valuePy, DIMENSIONS);};
var isUnitPy       = function(valuePy) {return Sk.ffi.isInstance(valuePy, UNIT);};

Sk.builtin.defineFractions(mod, RATIONAL, function(n, d) {return new BLADE.Rational(n, d)});

mod[DIMENSIONS] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, M, L, T, Q) {
    Sk.ffi.checkMethodArgs(DIMENSIONS, arguments, 1, 4);
    Sk.ffi.checkArgType(PROP_M, RATIONAL, Sk.ffi.isInstance(M, RATIONAL) || Sk.ffi.isInstance(M, DIMENSIONS), M);
    switch(Sk.ffi.typeName(M)) {
      case RATIONAL: {
        Sk.ffi.checkMethodArgs(DIMENSIONS, arguments, 4, 4);
        Sk.ffi.checkArgType(PROP_L, RATIONAL, Sk.ffi.isInstance(L, RATIONAL), L);
        Sk.ffi.checkArgType(PROP_T, RATIONAL, Sk.ffi.isInstance(T, RATIONAL), T);
        Sk.ffi.checkArgType(PROP_Q, RATIONAL, Sk.ffi.isInstance(Q, RATIONAL), Q);
        Sk.ffi.referenceToPy(new BLADE.Dimensions(Sk.ffi.remapToJs(M), Sk.ffi.remapToJs(L), Sk.ffi.remapToJs(T), Sk.ffi.remapToJs(Q)), DIMENSIONS, undefined, selfPy);
      }
      break;
      case DIMENSIONS: {
        Sk.ffi.checkMethodArgs(DIMENSIONS, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(M), DIMENSIONS, undefined, selfPy);
      }
      break;
      default: {
        throw Sk.ffi.err.argument(PROP_M).inFunction(DIMENSIONS).mustHaveType([RATIONAL, DIMENSIONS]);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(dimensionsPy, name) {
    var dimensions = Sk.ffi.remapToJs(dimensionsPy);
    switch(name) {
      case PROP_M: {
        return Sk.ffi.callsim(mod[RATIONAL], Sk.ffi.referenceToPy(dimensions[PROP_M], RATIONAL));
      }
      case PROP_L: {
        return Sk.ffi.callsim(mod[RATIONAL], Sk.ffi.referenceToPy(dimensions[PROP_L], RATIONAL));
      }
      case PROP_T: {
        return Sk.ffi.callsim(mod[RATIONAL], Sk.ffi.referenceToPy(dimensions[PROP_T], RATIONAL));
      }
      case PROP_Q: {
        return Sk.ffi.callsim(mod[RATIONAL], Sk.ffi.referenceToPy(dimensions[PROP_Q], RATIONAL));
      }
    }
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkRhsOperandType(OP_MUL, DIMENSIONS, isDimensionsPy(otherPy), otherPy);
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    var c = a.mul(b);
    return Sk.ffi.callsim(mod[DIMENSIONS], Sk.ffi.referenceToPy(c.M, RATIONAL), Sk.ffi.referenceToPy(c.L, RATIONAL), Sk.ffi.referenceToPy(c.T, RATIONAL), Sk.ffi.referenceToPy(c.Q, RATIONAL));
  });
  $loc.__div__ = Sk.ffi.functionPy(function(aPy, bPy) {
    var a = Sk.ffi.remapToJs(aPy);
    var b = Sk.ffi.remapToJs(bPy);
    var c = a.div(b);
    return Sk.ffi.callsim(mod[DIMENSIONS], Sk.ffi.referenceToPy(c.M, RATIONAL), Sk.ffi.referenceToPy(c.L, RATIONAL), Sk.ffi.referenceToPy(c.T, RATIONAL, Sk.ffi.referenceToPy(c.Q, RATIONAL)));
  });
  $loc.__pow__ = Sk.ffi.functionPy(function(basePy, exponentPy) {
    Sk.ffi.checkFunctionArgs("**", arguments, 2, 2);
    var base = Sk.ffi.remapToJs(basePy);
    var exponent = Sk.ffi.remapToJs(exponentPy);
    var x = base.pow(exponent);
    return Sk.ffi.callsim(mod[DIMENSIONS], Sk.ffi.referenceToPy(x.M, RATIONAL), Sk.ffi.referenceToPy(x.L, RATIONAL), Sk.ffi.referenceToPy(x.T, RATIONAL, Sk.ffi.referenceToPy(x.Q, RATIONAL)));
  });
  $loc.__str__ = Sk.ffi.functionPy(function(dimensionsPy) {
    var dimensions = Sk.ffi.remapToJs(dimensionsPy);
    return Sk.ffi.stringToPy("" + dimensions);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(dimensionsPy) {
    var names = [PROP_M, PROP_L, PROP_T, PROP_Q];
    var attrs = names.map(function(name) { return Sk.ffi.gattr(dimensionsPy, name); });
    var reprs = attrs.map(function(attr) { return Sk.ffi.remapToJs(Sk.ffi.callsim(attr["__repr__"], attr)); });
    return Sk.ffi.stringToPy(DIMENSIONS + "(" + reprs.join(" , ")  + ")");
  });
}, DIMENSIONS, []);

mod[UNIT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, scalePy, dimensionsPy, labelsPy) {
    Sk.ffi.checkMethodArgs(UNIT, arguments, 1, 3);
    switch(Sk.ffi.getType(scalePy)) {
      case Sk.ffi.PyType.FLOAT:
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.LONG: {
        Sk.ffi.checkMethodArgs(UNIT, arguments, 3, 3);
        var scale = Sk.ffi.remapToJs(scalePy);
        var dimensions = Sk.ffi.remapToJs(dimensionsPy);
        var labels = Sk.ffi.remapToJs(labelsPy);
        Sk.ffi.referenceToPy(new BLADE.Unit(scale, dimensions, labels), UNIT, undefined, selfPy);
      }
      break;
      case Sk.ffi.PyType.INSTANCE: {
        Sk.ffi.checkMethodArgs(UNIT, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(scalePy), UNIT, undefined, selfPy);
      }
      break;
      default: {
        throw new Error(UNIT + " (__init__) " + Sk.ffi.getType(scalePy));
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(unitPy, name) {
    var unit = Sk.ffi.remapToJs(unitPy);
    switch(name) {
      case PROP_SCALE: {
        return Sk.ffi.numberToFloatPy(unit[PROP_SCALE]);
      }
      case PROP_DIMENSIONS: {
        return Sk.ffi.callsim(mod[DIMENSIONS], Sk.ffi.referenceToPy(unit[PROP_DIMENSIONS], DIMENSIONS));
      }
      case PROP_LABELS: {
        return Sk.ffi.remapToPy(unit[PROP_LABELS]);
      }
      case METHOD_COMPATIBLE: {
        return Sk.ffi.callableToPy(mod, METHOD_COMPATIBLE, function(methodPy, otherPy) {
          Sk.ffi.checkMethodArgs(METHOD_COMPATIBLE, arguments, 1, 1);
          Sk.ffi.checkArgType("other", UNIT, isUnitPy(otherPy), otherPy);
          var other = Sk.ffi.remapToJs(otherPy);
          try {
            unit.compatible(other);
          }
          catch(e) {
            throw Sk.ffi.assertionError(e.message)
          }
          return unitPy;
        });
      }
      case METHOD_COS: {
        return Sk.ffi.callableToPy(mod, METHOD_COS, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_COS, arguments, 0, 0);
          var angle = unit.scale;
          var dimensions = unit.dimensions;
          var labels = unit.labels;
          var cosAngle = new BLADE[UNIT](Sk.math.cos(angle), dimensions, labels);
          return Sk.ffi.callsim(mod[UNIT], Sk.ffi.referenceToPy(cosAngle, UNIT));
        });
      }
      case METHOD_SIN: {
        return Sk.ffi.callableToPy(mod, METHOD_SIN, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_SIN, arguments, 0, 0);
          var angle = unit.scale;
          var dimensions = unit.dimensions;
          var labels = unit.labels;
          var cosAngle = new BLADE[UNIT](Sk.math.sin(angle), dimensions, labels);
          return Sk.ffi.callsim(mod[UNIT], Sk.ffi.referenceToPy(cosAngle, UNIT));
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(UNIT);
      }
    }
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    try {
      var c = lhs.add(rhs);
      return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(c.scale), Sk.ffi.referenceToPy(c.dimensions, DIMENSIONS), Sk.ffi.remapToPy(c.labels));
    }
    catch(e) {
      throw Sk.ffi.assertionError(e.message)
    }
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    try {
      var c = lhs.sub(rhs);
      return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(c.scale), Sk.ffi.referenceToPy(c.dimensions, DIMENSIONS), Sk.ffi.remapToPy(c.labels));
    }
    catch(e) {
      throw Sk.ffi.assertionError(e.message)
    }
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkRhsOperandType(OP_MUL, UNIT, isUnitPy(otherPy), otherPy);
    var lhs = Sk.ffi.remapToJs(selfPy);
    var rhs = Sk.ffi.remapToJs(otherPy);
    var c = lhs.mul(rhs);
    return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(c.scale), Sk.ffi.referenceToPy(c.dimensions, DIMENSIONS), Sk.ffi.remapToPy(c.labels));
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkLhsOperandType(OP_MUL, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    var lhs = Sk.ffi.remapToJs(otherPy);
    var rhs = Sk.ffi.remapToJs(selfPy);
    return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(lhs * rhs.scale), Sk.ffi.referenceToPy(rhs.dimensions, DIMENSIONS), Sk.ffi.remapToPy(rhs.labels));
  });
  $loc.__div__ = Sk.ffi.functionPy(function(lhsPy, rhsPy) {
    var lhs = Sk.ffi.remapToJs(lhsPy);
    var rhs = Sk.ffi.remapToJs(rhsPy);
    var c = lhs.div(rhs);
    return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(c.scale), Sk.ffi.referenceToPy(c.dimensions, DIMENSIONS), Sk.ffi.remapToPy(c.labels));
  });
  $loc.__rdiv__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkLhsOperandType(OP_MUL, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    var other = Sk.ffi.remapToJs(otherPy);
    var rhs = Sk.ffi.remapToJs(selfPy);
    var scale = other / rhs.scale;
    // TODO: Unary minus or negate() for Rational.
    // TODO: Reciprocal or inverse() for Dimensions.
    var M = new BLADE[RATIONAL](-rhs.dimensions.M.numer, rhs.dimensions.M.denom);
    var L = new BLADE[RATIONAL](-rhs.dimensions.L.numer, rhs.dimensions.L.denom);
    var T = new BLADE[RATIONAL](-rhs.dimensions.T.numer, rhs.dimensions.T.denom);
    var Q = new BLADE[RATIONAL](-rhs.dimensions.Q.numer, rhs.dimensions.Q.denom);
    var dimensions = new BLADE[DIMENSIONS](M, L, T, Q);
    var labels = rhs.labels;
    return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(scale), Sk.ffi.referenceToPy(dimensions, DIMENSIONS), Sk.ffi.remapToPy(labels));
  });
  $loc.__pow__ = Sk.ffi.functionPy(function(lhsPy, rhsPy) {
    var lhs = Sk.ffi.remapToJs(lhsPy);
    var rhs = Sk.ffi.remapToJs(rhsPy);
    var c = lhs.pow(rhs);
    return Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(c.scale), Sk.ffi.referenceToPy(c.dimensions, DIMENSIONS), Sk.ffi.remapToPy(c.labels));
  });
  $loc.__str__ = Sk.ffi.functionPy(function(unitPy) {
    var unit = Sk.ffi.remapToJs(unitPy);
    return Sk.ffi.stringToPy("" + unit);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(unitPy) {
    var props = [{"name":PROP_DIMENSIONS, "kind":"__repr__"}];
    var attrs = props.map(function(prop) { return {"value": Sk.ffi.gattr(unitPy, prop.name), "prop":prop}; });
    var reprs = attrs.map(function(attr) { return Sk.ffi.remapToJs(Sk.ffi.callsim(attr.value[attr.prop.kind], attr.value)); });
    var unit = Sk.ffi.remapToJs(unitPy);
    var scale = "" + unit.scale;
    var dimensions = reprs[0];
    var labels = "[" + unit.labels.map(function(label) {return "'" + label + "'";}).join(" , ") + "]";
    return Sk.ffi.stringToPy(UNIT + "(" + [scale, dimensions, labels].join(" , ") + ")");
  });
}, UNIT, []);

mod[MEASURE] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  var QTY_PY = "qtyPy";
  var UOM_PY = "uomPy";
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, qtyPy, uomPy) {
    Sk.ffi.checkMethodArgs(MEASURE, arguments, 1, 2);
    Sk.ffi.checkArgType(PROP_QUANTITY, "Quantity", Sk.ffi.isInstance(qtyPy), qtyPy);
    if (Sk.ffi.typeName(qtyPy) === MEASURE) {
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(qtyPy), MEASURE, qtyPy.custom, selfPy);
    }
    else {
      var scalePy = Sk.ffi.gattr(uomPy, PROP_SCALE);
      if (Sk.ffi.remapToJs(scalePy) === 1) {
        var measure = {};
        measure[QTY_PY] = qtyPy;
        measure[UOM_PY] = uomPy;
        Sk.ffi.referenceToPy(measure, MEASURE, undefined, selfPy);
      }
      else {
        var measure = {};
        measure[QTY_PY] = Sk.ffh.multiply(qtyPy, scalePy);
        measure[UOM_PY] = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.gattr(uomPy, PROP_DIMENSIONS), Sk.ffi.gattr(uomPy, PROP_LABELS));
        Sk.ffi.referenceToPy(measure, MEASURE, undefined, selfPy);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(measurePy, name) {
    var measure = Sk.ffi.remapToJs(measurePy);
    switch(name) {
      case PROP_QUANTITY: {
        return measure[QTY_PY];
      }
      case PROP_UOM: {
        return measure[UOM_PY];
      }
      case METHOD_EXP: {
        return Sk.ffi.callableToPy(mod, METHOD_EXP, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_EXP, arguments, 0, 0);
          return Sk.ffi.callsim(mod[MEASURE], Sk.ffi.callsim(Sk.ffi.gattr(measure[QTY_PY], METHOD_EXP)), measure[UOM_PY]);
        });
      }
    }
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkArgType(ARG_OTHER, MEASURE, isMeasurePy(otherPy), otherPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.add(self[QTY_PY], other[QTY_PY]), Sk.ffi.callsim(Sk.ffi.gattr(self[UOM_PY], METHOD_COMPATIBLE), other[UOM_PY]));
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    Sk.ffi.checkArgType(ARG_OTHER, MEASURE, isMeasurePy(otherPy), otherPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var other = Sk.ffi.remapToJs(otherPy);
    return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.subtract(self[QTY_PY], other[QTY_PY]), Sk.ffi.callsim(Sk.ffi.gattr(self[UOM_PY], METHOD_COMPATIBLE), other[UOM_PY]));
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    if (isMeasurePy(otherPy)) {
      var other = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.multiply(self[QTY_PY], other[QTY_PY]), Sk.ffh.multiply(self[UOM_PY], other[UOM_PY]));
    }
    else if (Sk.ffi.isNum(otherPy)) {
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.multiply(self[QTY_PY], otherPy), self[UOM_PY]);
    }
    else {
      Sk.ffi.checkArgType(ARG_OTHER, [MEASURE, NUMBER], false, otherPy);
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    Sk.ffi.checkArgType(ARG_OTHER, NUMBER, Sk.ffi.isNum(otherPy), otherPy);
    return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.multiply(self[QTY_PY], otherPy), self[UOM_PY]);
  });
  $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    if (isMeasurePy(otherPy)) {
      var other = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.divide(self[QTY_PY], other[QTY_PY]), Sk.ffh.divide(self[UOM_PY], other[UOM_PY]));
    }
    else if (Sk.ffi.isNum(otherPy)) {
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.divide(self[QTY_PY], otherPy), self[UOM_PY]);
    }
    else if (isUnitPy(otherPy)) {
      return Sk.ffi.callsim(mod[MEASURE], self[QTY_PY], Sk.ffh.divide(self[UOM_PY], otherPy));
    }
    else {
      Sk.ffi.checkArgType(ARG_OTHER, [MEASURE, NUMBER, UNIT], false, otherPy);
    }
  });
  $loc.__xor__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    if (isMeasurePy(otherPy)) {
      var other = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.xor(self[QTY_PY], other[QTY_PY]), Sk.ffh.multiply(self[UOM_PY], other[UOM_PY]));
    }
    else if (Sk.ffi.isNum(otherPy)) {
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.xor(self[QTY_PY], otherPy), self[UOM_PY]);
    }
    else {
      Sk.ffi.checkArgType(ARG_OTHER, [MEASURE, NUMBER], false, otherPy);
    }
  });
  $loc.__lshift__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    if (isMeasurePy(otherPy)) {
      var other = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.lshift(self[QTY_PY], other[QTY_PY]), Sk.ffh.multiply(self[UOM_PY], other[UOM_PY]));
    }
    else if (Sk.ffi.isNum(otherPy)) {
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.lshift(self[QTY_PY], otherPy), self[UOM_PY]);
    }
    else {
      Sk.ffi.checkArgType(ARG_OTHER, [MEASURE, NUMBER], false, otherPy);
    }
  });
  $loc.__rshift__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    if (isMeasurePy(otherPy)) {
      var other = Sk.ffi.remapToJs(otherPy);
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.rshift(self[QTY_PY], other[QTY_PY]), Sk.ffh.multiply(self[UOM_PY], other[UOM_PY]));
    }
    else if (Sk.ffi.isNum(otherPy)) {
      return Sk.ffi.callsim(mod[MEASURE], Sk.ffh.rshift(self[QTY_PY], otherPy), self[UOM_PY]);
    }
    else {
      Sk.ffi.checkArgType(ARG_OTHER, [MEASURE, NUMBER], false, otherPy);
    }
  });
  $loc.__pos__ = Sk.ffi.functionPy(function(selfPy) {
    var quantityPy = Sk.ffh.positive(Sk.ffi.gattr(selfPy, PROP_QUANTITY));
    var uomPy      = Sk.ffi.gattr(selfPy, PROP_UOM);
    return Sk.ffi.callsim(mod[MEASURE], quantityPy, uomPy);
  });
  $loc.__neg__ = Sk.ffi.functionPy(function(selfPy) {
    var quantityPy = Sk.ffh.negative(Sk.ffi.gattr(selfPy, PROP_QUANTITY));
    var uomPy      = Sk.ffi.gattr(selfPy, PROP_UOM);
    return Sk.ffi.callsim(mod[MEASURE], quantityPy, uomPy);
  });
  $loc.__invert__ = Sk.ffi.functionPy(function(selfPy) {
    var quantityPy = Sk.ffh.invert(Sk.ffi.gattr(selfPy, PROP_QUANTITY));
    var uomPy      = Sk.ffi.gattr(selfPy, PROP_UOM);
    return Sk.ffi.callsim(mod[MEASURE], quantityPy, uomPy);
  });
  $loc.__exp__ = Sk.ffi.functionPy(function(selfPy) {
    var quantityPy = Sk.ffh.exp(Sk.ffi.gattr(selfPy, PROP_QUANTITY));
    var uomPy      = Sk.ffi.gattr(selfPy, PROP_UOM);
    return Sk.ffi.callsim(mod[MEASURE], quantityPy, uomPy);
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var qtyStr = Sk.ffi.remapToJs(Sk.ffh.str(self[QTY_PY]));
    var uomStr = Sk.ffi.remapToJs(Sk.ffh.str(self[UOM_PY]));
    return Sk.ffi.stringToPy("" + qtyStr + " " + uomStr);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var qtyRepr = Sk.ffi.remapToJs(Sk.ffh.repr(self[QTY_PY]));
    var uomRepr = Sk.ffi.remapToJs(Sk.ffh.repr(self[UOM_PY]));
    return Sk.ffi.stringToPy(MEASURE + "(" + qtyRepr + ", " + uomRepr + ")");
  });
}, MEASURE, []);

mod[KILOGRAM] = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 0, 0, 0),  DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[METER]    = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(0, 1, 0, 0),  DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[SECOND]   = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(0, 0, 1, 0),  DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[COULOMB]  = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(0, 0, 0, 1),  DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));

mod[GRAM]     = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(0.001), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 0, 0, 0),  DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[CM]       = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(0.01),  Sk.ffi.referenceToPy(new BLADE.Dimensions(0, 1, 0, 0),  DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));

mod[NEWTON]   = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 1, -2,  0), DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[JOULE]    = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 2, -2,  0), DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[WATT]     = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 2, -3,  0), DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[AMPERE]   = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(0, 0, -1,  1), DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[VOLT]     = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 2, -2, -1), DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
mod[TESLA]    = Sk.ffi.callsim(mod[UNIT], Sk.ffi.numberToFloatPy(1), Sk.ffi.referenceToPy(new BLADE.Dimensions(1, 1, -2, -1), DIMENSIONS), Sk.ffi.remapToPy(SI_LABELS));
};
}).call(this);
