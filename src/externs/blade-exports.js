/**
 * blade.js exports.
 * For use with Google's closure compiler.
 */
var BLADE = {};

BLADE.bladeASM = {};
BLADE.bladeASM.mulE3 = function(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {};
BLADE.bladeASM.extE3 = function(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {};
BLADE.bladeASM.lcoE3 = function(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {};
BLADE.bladeASM.rcoE3 = function(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {};

/**
 * @constructor
 *
 * @param {number} w
 * @param {number} x
 * @param {number} y
 * @param {number} xy
 */
BLADE.Euclidean2 = function(w, x, y, xy) {};

/**
 * @constructor
 */
BLADE.Rational = function(n, d) {};
/**
 * @type {number}
 */
BLADE.Rational.prototype.numer;
/**
 * @type {number}
 */
BLADE.Rational.prototype.denom;

/**
 * @constructor
 *
 */
BLADE.Dimensions = function(mass, length, time, charge, temperature, amount, intensity) {};
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.M;
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.L;
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.T;
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.Q;
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.temperature;
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.amount;
/**
 * @type {BLADE.Rational}
 */
BLADE.Dimensions.prototype.intensity;
BLADE.Dimensions.prototype.dimensionless = function() {};

/**
 * @constructor
 */
BLADE.Unit = function(scale, dimensions, labels) {};
/**
 * @type {number}
 */
BLADE.Unit.prototype.scale;
/**
 * @type {BLADE.Dimensions}
 */
BLADE.Unit.prototype.dimensions;
/**
 * @type {Array.<string>}
 */
BLADE.Unit.prototype.labels;
BLADE.Unit.prototype.compatible = function() {};

/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_DIMLESS;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_KILOGRAM;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_METER;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_SECOND;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_AMPERE;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_COULOMB;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_KELVIN;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_MOLE;
/**
 * @const
 * @type {BLADE.Unit}
 */
BLADE.UNIT_CANDELA;
