Sk.e3ga = Sk.e3ga || {};
/**
 * @const
 * @type {string}
 */
Sk.e3ga.EUCLIDEAN_3                = "Euclidean3";
/**
 * @const
 * @type {string}
 */
Sk.e3ga.SCALAR_E3                  = "ScalarE3";
/**
 * @const
 * @type {string}
 */
Sk.e3ga.VECTOR_E3                  = "VectorE3";
/**
 * @const
 * @type {string}
 */
Sk.e3ga.BIVECTOR_E3                = "BivectorE3";
/**
 * @const
 * @type {string}
 */
Sk.e3ga.PSEUDOSCALAR_E3            = "PseudoscalarE3";

(function() {
Sk.builtin.defineEuclidean3 = function(mod, THREE, BLADE) {
Sk.ffi.checkFunctionArgs("defineEuclidean3", arguments, 3, 3);
/**
 * Define the dependencies of Euclidean3.
 * This now includes THREE.Vector3 and THREE.Quaternion.
 */
Sk.builtin.defineVector3(mod, THREE);
Sk.builtin.defineQuaternion(mod, THREE);
/**
 * @const
 * @type {string}
 */
var VECTOR_3                   = "Vector3";
/**
 * @const
 * @type {string}
 */
var QUATERNION                 = "Quaternion";
/**
 * @const
 * @type {string}
 */
var DIMENSIONS                 = "Dimensions";
/**
 * @const
 * @type {string}
 */
var RATIONAL                   = "Rational";
/**
 * @const
 * @type {string}
 */
var PROP_VECTOR                = "vector";
/**
 * @const
 * @type {string}
 */
var PROP_QUATERNION            = "quaternion";
/**
 * @const
 * @type {string}
 */
var PROP_MUTABLE               = "mutable";
/**
 * @const
 * @type {string}
 */
var PROP_W                     = "w";
/**
 * @const
 * @type {string}
 */
var PROP_X                     = "x";
/**
 * @const
 * @type {string}
 */
var PROP_Y                     = "y";
/**
 * @const
 * @type {string}
 */
var PROP_Z                     = "z";
/**
 * @const
 * @type {string}
 */
var PROP_XY                    = "xy";
/**
 * @const
 * @type {string}
 */
var PROP_YZ                    = "yz";
/**
 * @const
 * @type {string}
 */
var PROP_ZX                    = "zx";
/**
 * @const
 * @type {string}
 */
var PROP_XYZ                   = "xyz";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD                 = "add";
/**
 * @const
 * @type {string}
 */
var METHOD_APPLY_EULER         = "applyEuler";
/**
 * @const
 * @type {string}
 */
var METHOD_APPLY_MATRIX_3      = "applyMatrix3";
/**
 * @const
 * @type {string}
 */
var METHOD_APPLY_MATRIX_4      = "applyMatrix4";
/**
 * @const
 * @type {string}
 */
var METHOD_CLIFFORD_CONJUGATE  = "cliffordConjugate";
/**
 * @const
 * @type {string}
 */
var METHOD_CLONE               = "clone";
/**
 * @const
 * @type {string}
 */
var METHOD_CROSS               = "cross";
/**
 * @const
 * @type {string}
 */
var METHOD_DISTANCE_TO         = "distanceTo";
/**
 * @const
 * @type {string}
 */
var METHOD_DISTANCE_TO_SQUARED = "distanceToSquared";
/**
 * @const
 * @type {string}
 */
var METHOD_DOT                 = "dot";
/**
 * @const
 * @type {string}
 */
var METHOD_COPY                = "copy";
/**
 * @const
 * @type {string}
 */
var METHOD_CONSTANTIFY         = "constantify";
/**
 * @const
 * @type {string}
 */
var METHOD_DIVIDE_SCALAR       = "divideScalar";
/**
 * @const
 * @type {string}
 */
var METHOD_MAGNITUDE           = "magnitude";
/**
 * @const
 * @type {string}
 */
var METHOD_MULTIPLY_SCALAR     = "multiplyScalar";
/**
 * @const
 * @type {string}
 */
var METHOD_NORMALIZE           = "normalize";
/**
 * @const
 * @type {string}
 */
var METHOD_SET                 = "set";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_X               = "setX";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_Y               = "setY";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_Z               = "setZ";
/**
 * @const
 * @type {string}
 */
var METHOD_SQRT                = "sqrt";
/**
 * @const
 * @type {string}
 */
var METHOD_SUB                 = "sub";
/**
 * @const
 * @type {string}
 */
var METHOD_GET_COMPONENT       = "getComponent";
/**
 * @const
 * @type {string}
 */
var METHOD_SET_COMPONENT       = "setComponent";
/**
 * @const
 * @type {string}
 */
var OP_ADD                     = "add";
/**
 * @const
 * @type {string}
 */
var OP_SUB                     = "subtract";
/**
 * @const
 * @type {string}
 */
var OP_MUL                     = "multiply";
/**
 * @const
 * @type {string}
 */
var OP_DIV                     = "divide";
/**
 * @const
 * @type {string}
 */
var OP_EQ                      = "equal";
/**
 * @const
 * @type {string}
 */
var ARG_INDEX                  = "index";
/**
 * @const
 * @type {string}
 */
var ARG_OTHER                  = "other";
/**
 * @const
 * @type {string}
 */
var ARG_S                      = "s";
/**
 * @const
 * @type {string}
 */
var ARG_SELF                   = "self";
/**
 * @const
 * @type {string}
 */
var ARG_VALUE                  = "value";
/**
 * @const
 * @type {string}
 */
var ONE_NAME                   = Sk.builtin.numberToFloatStringJs(1, 10, true);
/**
 * @const
 * @type {string}
 */
var UNIT_VECTOR_NAME_E1       = "e1";
/**
 * @const
 * @type {string}
 */
var UNIT_VECTOR_NAME_E2       = "e2";
/**
 * @const
 * @type {string}
 */
var UNIT_VECTOR_NAME_E3       = "e3";
/**
 * @const
 * @type {string}
 */
var PSEUDOSCALAR_NAME         = "I";
/**
 * @const
 * @type {string}
 */
var UNIT_BIVECTOR_NAME_E12    = "e12";
/**
 * @const
 * @type {string}
 */
var UNIT_BIVECTOR_NAME_E23    = "e23";
/**
 * @const
 * @type {string}
 */
var UNIT_BIVECTOR_NAME_E31    = "e31";
/**
 * @constructor
 * @param {boolean} pseudo Indicates whether the numeric components are scalars or pseudoscalars.
 * @param {Object} vector The vector components.
 * @param {Object} quaternion The bivector and scalar components.
 * @param {number} xyz The pseudoscalar component.
 * @param {boolean} mutable Determines whether this quantity can be changed.
 */
THREE.Euclidean3 = function(pseudo, vector, quaternion, xyz, mutable)
{
  goog.asserts.assertBoolean(pseudo, "pseudo must be a boolean");
  if (typeof vector !== 'object') {throw new Error("43a75b65-8614-4836-9829-377eaeee7cfe");}
  if (typeof quaternion !== 'object') {throw new Error("89fb1d18-dc26-4149-913d-58f192c161d7");}
  goog.asserts.assertNumber(xyz, "xyz must be a number");

  this.vector     = vector;
  this.quaternion = quaternion;
  // The underscore in the properties is to deconflict with the use of get/set.
  this._xyz       = xyz;
  this._pseudo    = pseudo;
  this._mutable   = (typeof mutable === 'boolean') ? mutable : true;
};
THREE.Euclidean3.prototype =
{
  constructor: THREE.Euclidean3,
  get w () {return this.quaternion.w;},
  set w (value) {this.checkMutable(); this.quaternion.w = value;},
  get x () {return this.vector.x;},
  set x (value) {this.checkMutable(); this.vector.x = value;},
  get y () {return this.vector.y;},
  set y (value) {this.checkMutable(); this.vector.y = value;},
  get z () {return this.vector.z;},
  set z (value) {this.checkMutable(); this.vector.z = value;},
  get xy () {return -this.quaternion.z;},
  set xy (value) {this.checkMutable(); this.quaternion.z = -value;},
  get yz () {return -this.quaternion.x;},
  set yz (value) {this.checkMutable(); this.quaternion.x = -value;},
  get zx () {return -this.quaternion.y;},
  set zx (value) {this.checkMutable(); this.quaternion.y = -value;},

  get xyz () {return this._xyz;},
  set xyz (value) {this.checkMutable(); this._xyz = value;},

  get pseudo () {return this._pseudo;},
  set pseudo (value) {this.checkMutable(); this._pseudo = value;},

  get mutable () {return this._mutable;},
  set mutable (value) {this._mutable = value;},

  checkMutable: function()
  {
    if (!this._mutable)
    {
      throw Sk.ffi.assertionError("Quantity is not mutable");
    }
  }
};

function isNumber(x)    {return typeof x === 'number';}
function isEuclidean3Py(valuePy) {return Sk.ffi.isInstance(valuePy, Sk.e3ga.EUCLIDEAN_3);}
/**
 * @param {boolean} pseudo
 * @param {number} w
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xy
 * @param {number} yz
 * @param {number} zx
 * @param {number} xyz
 * @param {boolean=} mutable
 */
function coordsJsToE3Py(pseudo, w, x, y, z, xy, yz, zx, xyz, mutable) {
  goog.asserts.assertBoolean(pseudo, "coordsJsToE3Py(...), pseudo must be a boolean.");
  var wPy   = Sk.ffi.numberToFloatPy(w);
  var xPy   = Sk.ffi.numberToFloatPy(x);
  var yPy   = Sk.ffi.numberToFloatPy(y);
  var zPy   = Sk.ffi.numberToFloatPy(z);
  var xyPy  = Sk.ffi.numberToFloatPy(xy);
  var yzPy  = Sk.ffi.numberToFloatPy(yz);
  var zxPy  = Sk.ffi.numberToFloatPy(zx);
  var xyzPy = Sk.ffi.numberToFloatPy(xyz);
  var mutablePy = Sk.ffi.booleanToPy(mutable);
  return Sk.ffi.callsim(mod[Sk.e3ga.EUCLIDEAN_3], wPy, xPy, yPy, zPy, xyPy, yzPy, zxPy, xyzPy, mutablePy);
}

function stringFromCoordinates(coordinates, labels)
{
  var append, i, _i, _ref;
  /**
   * @const
   */
  var sb = [];
  append = function(number, label)
  {
    var n;
    if (number !== 0)
    {
      if (number >= 0)
      {
        if (sb.length > 0)
        {
          sb.push("+");
        }
      }
      else
      {
        sb.push("-");
      }
      n = Math.abs(number);
      if (n === 1)
      {
        return sb.push(label);
      }
      else
      {
        // We indicate that we want to retain the sign, even though we already have the absolute value.
        sb.push(Sk.builtin.numberToFloatStringJs(n, 10, true));
        if (label !== ONE_NAME)
        {
          sb.push("*");
          return sb.push(label);
        }
      }
    }
  };
  for (i = _i = 0, _ref = coordinates.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i)
  {
    append(coordinates[i], labels[i]);
  }
  if (sb.length > 0)
  {
    return sb.join("");
  }
  else
  {
    return Sk.builtin.numberToFloatStringJs(0, 10, true);
  }
}

/**
 * @param {number} a000
 * @param {number} a001
 * @param {number} a010
 * @param {number} a011
 * @param {number} a100
 * @param {number} a101
 * @param {number} a110
 * @param {number} a111
 * @param {number} b000
 * @param {number} b001
 * @param {number} b010
 * @param {number} b011
 * @param {number} b100
 * @param {number} b101
 * @param {number} b110
 * @param {number} b111
 * @param {*} dst
 * @param {function(boolean, number, number, number, number, number, number, number, number, boolean=):*} pack
 */
function divide(a000, a001, a010, a011, a100, a101, a110, a111, b000, b001, b010, b011, b100, b101, b110, b111, dst, pack)
{
  // WARNING! mulE2 uses w,x,y,z,xy,yz,zx,xyz representation. Notice the ordering and sign change.
  // TODO: Move everything to the more systematic bitmap representation.
  // r = ~b = reverse(b)
  var r000 = +b000; // w,   grade 0(+)
  var r001 = +b001; // x,   grade 1(+)
  var r010 = +b010; // y,   grade 1(+)
  var r011 = -b011; // xy,  grade 2(-)
  var r100 = +b100; // z,   grade 1(+)
  var r101 = -b101; // yz,  grade 2(-)
  var r110 = -b110; // yz,  grade 2(-)
  var r111 = -b111; // xyz, grade 3(-)
  // m = b * r = b * (~b)
  // The grade 2 and grade 3 components evaluate to zero.
  var m000 =  BLADE.bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 0);
  var m001 =  BLADE.bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 1);
  var m010 =  BLADE.bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 2);
  var m011 =  0;
  var m100 =  BLADE.bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 3);
  var m101 =  0;
  var m110 =  0;
  var m111 =  0;
  // c = cliffordConjugate(m)
  var c000 = +m000; // w,   grade 0(+)
  var c001 = -m001; // x,   grade 1(-)
  var c010 = -m010; // y,   grade 1(-)
  var c011 = -m011; // xy,  grade 2(-)
  var c100 = -m100; // z,   grade 1(-)
  var c101 = -m101; // -zx, grade 2(-)
  var c110 = -m110; // yz,  grade 2(-)
  var c111 = +m111; // xyz, grade 3(+)
  // s = r * c
  // TODO: Presumably there is some simplified computation on account of the c's being sparse.
  var s000 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 0);
  var s001 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 1);
  var s010 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 2);
  var s011 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 4);
  var s100 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 3);
  var s101 = -BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 6);
  var s110 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 5);
  var s111 =  BLADE.bladeASM.mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 7);
  // k = b * s
  var k000 =  BLADE.bladeASM.mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, s000, s001, s010, s100, s011, s110, -s101, s111, 0);
  // i = inverse(b)
  var i000 = s000/k000;
  var i001 = s001/k000;
  var i010 = s010/k000;
  var i011 = s011/k000;
  var i100 = s100/k000;
  var i101 = s101/k000;
  var i110 = s110/k000;
  var i111 = s111/k000;
  // x = a * inverse(b)
  var x000 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 0);
  var x001 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 1);
  var x010 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 2);
  var x011 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 4);
  var x100 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 3);
  var x101 = -BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 6);
  var x110 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 5);
  var x111 =  BLADE.bladeASM.mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 7);
  // translate bitmap representation to Cartesian.
  var w   =  x000;
  var x   =  x001;
  var y   =  x010;
  var z   =  x100;
  var xy  =  x011;
  var yz  =  x110;
  var zx  = -x101;
  var xyz =  x111;
  // return or populate the optional dst parameter.
  if (typeof dst !== 'undefined')
  {
    dst.w   = w;
    dst.x   = x;
    dst.y   = y;
    dst.z   = z;
    dst.xy  = xy;
    dst.yz  = yz;
    dst.zx  = zx;
    dst.xyz = xyz;
  }
  else
  {
    return pack(false, w, x, y, z, xy, yz, zx, xyz);
  }
}

/**
 * @param {{w:number, x:number, y:number, z:number, xy:number, yz:number, zx:number, xyz:number}} mv
 * @param {number} index
 * @return {number}
 */
function coord(mv, index)
{
  switch(index)
  {
    case 0:
    {
      return mv.w;
    }
    case 1:
    {
      return mv.x;
    }
    case 2:
    {
      return mv.y;
    }
    case 3:
    {
      return mv.z;
    }
    case 4:
    {
      return mv.xy;
    }
    case 5:
    {
      return mv.yz;
    }
    case 6:
    {
      return mv.zx;
    }
    case 7:
    {
      return mv.xyz;
    }
    default:
    {
      throw Sk.ffi.assertionError("" + index + " is not a valid multivector coordinate index");
    }
  }
}

/**
 * @param {function(number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number):number} f
 * @param {{w:number, x:number, y:number, z:number, xy:number, yz:number, zx:number, xyz:number}} a
 * @param {{w:number, x:number, y:number, z:number, xy:number, yz:number, zx:number, xyz:number}} b
 * @param {function(boolean, number, number, number, number, number, number, number, number, boolean=):*} pack
 */
function compute(f, a, b, coord, pack)
{
  var a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, x0, x1, x2, x3, x4, x5, x6, x7;
  a0 = a.quaternion.w;
  a1 = a.vector.x;
  a2 = a.vector.y;
  a3 = a.vector.z;
  a4 = -a.quaternion.z;
  a5 = -a.quaternion.x;
  a6 = -a.quaternion.y;
  a7 = a.xyz;
  b0 = b.quaternion.w;
  b1 = b.vector.x;
  b2 = b.vector.y;
  b3 = b.vector.z;
  b4 = -b.quaternion.z;
  b5 = -b.quaternion.x;
  b6 = -b.quaternion.y;
  b7 = b.xyz;
  x0 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
  x1 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
  x2 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
  x3 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
  x4 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
  x5 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
  x6 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
  x7 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
  return pack(false, x0, x1, x2, x3, x4, x5, x6, x7);
}

mod[Sk.e3ga.SCALAR_E3] = Sk.ffi.functionPy(function(wPy, mutablePy)
{
  Sk.ffi.checkFunctionArgs(Sk.e3ga.SCALAR_E3, arguments, 1, 2);
  Sk.ffi.checkArgType(PROP_W, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(wPy), wPy);
  if (Sk.ffi.isDefined(mutablePy))
  {
    Sk.ffi.checkArgType(PROP_MUTABLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(mutablePy), mutablePy);
  }
  return coordsJsToE3Py(false, Sk.ffi.numberToJs(wPy), 0, 0, 0, 0, 0, 0, 0, Sk.ffi.remapToJs(mutablePy));
});

mod[Sk.e3ga.VECTOR_E3] = Sk.ffi.functionPy(function(xPy, yPy, zPy, mutablePy)
{
  Sk.ffi.checkFunctionArgs(Sk.e3ga.VECTOR_E3, arguments, 3, 4);
  Sk.ffi.checkArgType(PROP_X, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xPy), xPy);
  Sk.ffi.checkArgType(PROP_Y, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(yPy), yPy);
  Sk.ffi.checkArgType(PROP_Z, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(zPy), zPy);
  if (Sk.ffi.isDefined(mutablePy))
  {
    Sk.ffi.checkArgType(PROP_MUTABLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(mutablePy), mutablePy);
  }
  var x = Sk.ffi.numberToJs(xPy);
  var y = Sk.ffi.numberToJs(yPy);
  var z = Sk.ffi.numberToJs(zPy);
  return coordsJsToE3Py(false, 0, x, y, z, 0, 0, 0, 0, Sk.ffi.remapToJs(mutablePy));
});

mod[Sk.e3ga.BIVECTOR_E3] = Sk.ffi.functionPy(function(xy, yz, zx, mutablePy)
{
  Sk.ffi.checkFunctionArgs(Sk.e3ga.BIVECTOR_E3, arguments, 3, 4);
  Sk.ffi.checkArgType(PROP_XY, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xy), xy);
  Sk.ffi.checkArgType(PROP_YZ, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(yz), yz);
  Sk.ffi.checkArgType(PROP_ZX, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(zx), zx);
  if (Sk.ffi.isDefined(mutablePy))
  {
    Sk.ffi.checkArgType(PROP_MUTABLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(mutablePy), mutablePy);
  }
  xy = Sk.ffi.numberToJs(xy);
  yz = Sk.ffi.numberToJs(yz);
  zx = Sk.ffi.numberToJs(zx);
  return coordsJsToE3Py(false, 0, 0, 0, 0, xy, yz, zx, 0, Sk.ffi.remapToJs(mutablePy));
});

mod[Sk.e3ga.PSEUDOSCALAR_E3] = Sk.ffi.functionPy(function(xyz, mutablePy)
{
  Sk.ffi.checkFunctionArgs(Sk.e3ga.PSEUDOSCALAR_E3, arguments, 1, 2);
  Sk.ffi.checkArgType(PROP_XYZ, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xyz), xyz);
  if (Sk.ffi.isDefined(mutablePy))
  {
    Sk.ffi.checkArgType(PROP_MUTABLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(mutablePy), mutablePy);
  }
  xyz = Sk.ffi.numberToJs(xyz);
  return coordsJsToE3Py(false, 0, 0, 0, 0, 0, 0, 0, xyz, Sk.ffi.remapToJs(mutablePy));
});

mod[Sk.e3ga.EUCLIDEAN_3] = Sk.ffi.buildClass(mod, function($gbl, $loc)
{
  $loc.__init__ = Sk.ffi.functionPy(function(self, w, x, y, z, xy, yz, zx, xyz, mutablePy)
  {
    Sk.ffi.checkMethodArgs(Sk.e3ga.EUCLIDEAN_3, arguments, 1, 9);
    switch(Sk.ffi.getType(w))
    {
      case Sk.ffi.PyType.FLOAT:
      case Sk.ffi.PyType.INT:
      {
        Sk.ffi.checkMethodArgs(Sk.e3ga.EUCLIDEAN_3, arguments, 8, 9);
        Sk.ffi.checkArgType(PROP_W,    Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(w), w);
        Sk.ffi.checkArgType(PROP_X,    Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(x), x);
        Sk.ffi.checkArgType(PROP_Y,    Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(y), y);
        Sk.ffi.checkArgType(PROP_Z,    Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(z), z);
        Sk.ffi.checkArgType(PROP_XY,   Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xy), xy);
        Sk.ffi.checkArgType(PROP_YZ,   Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(yz), yz);
        Sk.ffi.checkArgType(PROP_ZX,   Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(zx), zx);
        Sk.ffi.checkArgType(PROP_XYZ,  Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xyz), xyz);
        if (Sk.ffi.isDefined(mutablePy))
        {
          Sk.ffi.checkArgType(PROP_MUTABLE, Sk.ffi.PyType.BOOL, Sk.ffi.isBool(mutablePy), mutablePy);
        }
        w   = Sk.ffi.remapToJs(w);
        x   = Sk.ffi.remapToJs(x);
        y   = Sk.ffi.remapToJs(y);
        z   = Sk.ffi.remapToJs(z);
        xy  = Sk.ffi.remapToJs(xy);
        yz  = Sk.ffi.remapToJs(yz);
        zx  = Sk.ffi.remapToJs(zx);
        xyz = Sk.ffi.remapToJs(xyz);
        var mutable = Sk.ffi.isDefined(mutablePy) ? Sk.ffi.remapToJs(mutablePy) : true;
        var vector = new THREE[VECTOR_3](x,y,z);
        var quaternion = new THREE.Quaternion(-yz, -zx, -xy, w);
        Sk.ffi.referenceToPy(new THREE.Euclidean3(false, vector, quaternion, xyz, mutable), Sk.e3ga.EUCLIDEAN_3, undefined, self);
      }
      break;
      case Sk.ffi.PyType.INSTANCE:
      {
        Sk.ffi.checkMethodArgs(Sk.e3ga.EUCLIDEAN_3, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(w), Sk.e3ga.EUCLIDEAN_3, undefined, self);
      }
      break;
      default:
      {
        throw new Sk.builtin.AssertionError("09eaed05-6d9d-4ded-a499-e4c480a9ed68, getType(w) => " + Sk.ffi.getType(w));
      }
    }
  });
  $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    var b = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy))
    {
      return coordsJsToE3Py(false, quaternion.w + b, vector.x, vector.y, vector.z, -quaternion.z, -quaternion.x, -quaternion.y, self.xyz);
    }
    else if (Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3))
    {
      var w = quaternion.w + b.quaternion.w;
      var x = vector.x + b.vector.x;
      var y = vector.y + b.vector.y;
      var z = vector.z + b.vector.z;
      var xy = -(quaternion.z + b.quaternion.z);
      var yz = -(quaternion.x + b.quaternion.x);
      var zx = -(quaternion.y + b.quaternion.y);
      var xyz = self.xyz + b.xyz;
      return coordsJsToE3Py(false, w, x, y, z, xy, yz, zx, xyz);
    }
    else
    {
      return undefined;
    }
  });
  $loc.__radd__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    var a = Sk.ffi.remapToJs(otherPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    if (Sk.ffi.isNum(otherPy))
    {
      return coordsJsToE3Py(false, a + quaternion.w, vector.x, vector.y, vector.z, -quaternion.z, -quaternion.x, -quaternion.y, self.xyz);
    }
    else
    {
      return undefined;
    }
  });
  $loc.__iadd__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    var self = Sk.ffi.remapToJs(selfPy);
    var vs = self.vector;
    var qs = self.quaternion;
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy))
    {
      qs.w += other;
    }
    else if (isEuclidean3Py(otherPy))
    {
      var vo = other.vector;
      var qo = other.quaternion;
      qs.w     += qo.w;
      vs.x     += vo.x;
      vs.y     += vo.y;
      vs.z     += vo.z;
      qs.z     += qo.z;
      qs.x     += qo.x;
      qs.y     += qo.y;
      self.xyz += other.xyz;
    }
    else
    {
      return undefined;
    }
    return selfPy;
  });
  $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    var self = Sk.ffi.remapToJs(selfPy);
    var vs = self.vector;
    var qs = self.quaternion;
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy))
    {
      return coordsJsToE3Py(false, qs.w - other, vs.x, vs.y, vs.z, -qs.z, -qs.x, -qs.y, self.xyz);
    }
    else if (Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3))
    {
      var vo = other.vector;
      var qo = other.quaternion;
      var w = qs.w - qo.w;
      var x = vs.x - vo.x;
      var y = vs.y - vo.y;
      var z = vs.z - vo.z;
      var xy = -(qs.z - qo.z);
      var yz = -(qs.x - qo.x);
      var zx = -(qs.y - qo.y);
      var xyz = self.xyz - other.xyz;
      return coordsJsToE3Py(false, w, x, y, z, xy, yz, zx, xyz);
    }
    else
    {
      throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_SUB).mustHaveType([Sk.ffi.PyType.FLOAT, Sk.e3ga.EUCLIDEAN_3]);
    }
  });
  $loc.__rsub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var other = Sk.ffi.remapToJs(otherPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var vs = self.vector;
    var qs = self.quaternion;
    if (Sk.ffi.isNum(otherPy)) {
      return coordsJsToE3Py(false, other - qs.w, -vs.x, -vs.y, -vs.z, qs.z, qs.x, qs.y, -self.xyz);
    }
    else {
      throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_SUB).mustHaveType([Sk.ffi.PyType.FLOAT, Sk.e3ga.EUCLIDEAN_3]);
    }
  });
  $loc.__isub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var vs = self.vector;
    var qs = self.quaternion;
    var other = Sk.ffi.remapToJs(otherPy);
    if (Sk.ffi.isNum(otherPy)) {
      qs.w -= other;
    }
    else if (isEuclidean3Py(otherPy)) {
      var vo = other.vector;
      var qo = other.quaternion;
      qs.w     -= qo.w;
      vs.x     -= vo.x;
      vs.y     -= vo.y;
      vs.z     -= vo.z;
      qs.z     -= qo.z;
      qs.x     -= qo.x;
      qs.y     -= qo.y;
      self.xyz -= other.xyz;
    }
    else {
      throw Sk.ffi.err.operand(ARG_OTHER).toOperation(OP_SUB).mustHaveType([Sk.ffi.PyType.FLOAT, Sk.e3ga.EUCLIDEAN_3]);
    }
    return selfPy;
  });
  $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy))
        {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var lhs = Sk.ffi.remapToJs(selfPy);
            var rhs = Sk.ffi.remapToJs(otherPy);
            return compute(BLADE.bladeASM.mulE3, lhs, rhs, coord, coordsJsToE3Py);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var self = Sk.ffi.remapToJs(selfPy);
        var vector = self.vector;
        var quaternion = self.quaternion;
        var b = Sk.ffi.remapToJs(otherPy);
        return coordsJsToE3Py(false, quaternion.w * b, vector.x * b, vector.y * b, vector.z * b, -quaternion.z * b, -quaternion.x * b, -quaternion.y * b, self.xyz * b);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__rmul__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    if (Sk.ffi.isNum(otherPy))
    {
      var a = Sk.ffi.remapToJs(otherPy);
      return coordsJsToE3Py(false, a * quaternion.w, a * vector.x, a * vector.y, a * vector.z, -a * quaternion.z, -a * quaternion.x, -a * quaternion.y, a * self.xyz);
    }
    else
    {
      return undefined;
    }
  });
  $loc.__imul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    var a0 = a.w;
    var a1 = a.x;
    var a2 = a.y;
    var a3 = a.z;
    var a4 = a.xy;
    var a5 = a.yz;
    var a6 = a.zx;
    var a7 = a.xyz;
    var b0, b1, b2, b3, b4, b5, b6, b7;
    if (isNumber(b)) {
      b0 = b;
      b1 = 0;
      b2 = 0;
      b3 = 0;
      b4 = 0;
      b5 = 0;
      b6 = 0;
      b7 = 0;
    }
    else {
      b0 = b.w;
      b1 = b.x;
      b2 = b.y;
      b3 = b.z;
      b4 = b.xy;
      b5 = b.yz;
      b6 = b.zx;
      b7 = b.xyz;
    }
    a.w   = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    a.x   = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    a.y   = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    a.z   = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    a.xy  = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    a.yz  = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    a.zx  = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    a.xyz = BLADE.bladeASM.mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
    return selfPy;
  });
  $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy))
        {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var self = Sk.ffi.remapToJs(selfPy);
            var vs = self.vector;
            var qs = self.quaternion;
            var other = Sk.ffi.remapToJs(otherPy);
            var vo = other.vector;
            var qo = other.quaternion;
            return divide(qs.w, vs.x, vs.y, -qs.z, vs.z, qs.y, -qs.x, self.xyz, qo.w, vo.x, vo.y, -qo.z, vo.z, qo.y, -qo.x, other.xyz, undefined, coordsJsToE3Py);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var self = Sk.ffi.remapToJs(selfPy);
        var vs = self.vector;
        var qs = self.quaternion;
        var other = Sk.ffi.remapToJs(otherPy);
        return divide(qs.w, vs.x, vs.y, -qs.z, vs.z, qs.y, -qs.x, self.xyz, other, 0, 0, 0, 0, 0, 0, 0, undefined, coordsJsToE3Py);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__rdiv__ = Sk.ffi.functionPy(function(rhs, lhs)
  {
    lhs = Sk.ffi.remapToJs(lhs);
    rhs = Sk.ffi.remapToJs(rhs);
    if (isNumber(lhs))
    {
      return divide(lhs, 0, 0, 0, 0, 0, 0, 0, rhs.w, rhs.x, rhs.y, rhs.xy, rhs.z, -rhs.zx, rhs.yz, rhs.xyz, undefined, coordsJsToE3Py);
    }
    else
    {
      throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " / " + JSON.stringify(rhs, null, 2));
    }
  });
  $loc.__idiv__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    if (isNumber(b))
    {
      divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b, 0, 0, 0, 0, 0, 0, 0, a, coordsJsToE3Py);
      return selfPy;
    }
    else
    {
      divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b.w, b.x, b.y, b.xy, b.z, -b.zx, b.yz, b.xyz, a, coordsJsToE3Py);
      return selfPy;
    }
  });
  $loc.__or__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy)) {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var a = Sk.ffi.remapToJs(selfPy);
            var b = Sk.ffi.remapToJs(otherPy);
            return coordsJsToE3Py(false, a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z - a.xy * b.xy - a.yz * b.yz - a.zx * b.zx - a.xyz * b.xyz, 0, 0, 0, 0, 0, 0, 0);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var a = Sk.ffi.remapToJs(selfPy);
        var b = Sk.ffi.remapToJs(otherPy);
        return coordsJsToE3Py(false, a.w * b, 0, 0, 0, 0, 0, 0, 0);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__xor__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy)) {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var a = Sk.ffi.remapToJs(selfPy);
            var b = Sk.ffi.remapToJs(otherPy);
            return compute(BLADE.bladeASM.extE3, a, b, coord, coordsJsToE3Py);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var a = Sk.ffi.remapToJs(selfPy);
        var b = Sk.ffi.remapToJs(otherPy);
        return coordsJsToE3Py(false, a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__rxor__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    if (Sk.ffi.isNum(otherPy))
    {
      var a = Sk.ffi.remapToJs(otherPy);
      var b = Sk.ffi.remapToJs(selfPy);
      return coordsJsToE3Py(false, a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
    }
    else
    {
      return undefined;
    }
  });
  $loc.__ixor__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    var a0 = a.w;
    var a1 = a.x;
    var a2 = a.y;
    var a3 = a.z;
    var a4 = a.xy;
    var a5 = a.yz;
    var a6 = a.zx;
    var a7 = a.xyz;
    var b0, b1, b2, b3, b4, b5, b6, b7;
    if (isNumber(b)) {
      b0 = b;
      b1 = 0;
      b2 = 0;
      b3 = 0;
      b4 = 0;
      b5 = 0;
      b6 = 0;
      b7 = 0;
    }
    else {
      b0 = b.w;
      b1 = b.x;
      b2 = b.y;
      b3 = b.z;
      b4 = b.xy;
      b5 = b.yz;
      b6 = b.zx;
      b7 = b.xyz;
    }
    a.w   = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    a.x   = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    a.y   = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    a.z   = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    a.xy  = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    a.yz  = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    a.zx  = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    a.xyz = BLADE.bladeASM.extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
    return selfPy;
  });
  $loc.__lshift__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy)) {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var a = Sk.ffi.remapToJs(selfPy);
            var b = Sk.ffi.remapToJs(otherPy);
            return compute(BLADE.bladeASM.lcoE3, a, b, coord, coordsJsToE3Py);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var a = Sk.ffi.remapToJs(selfPy);
        var b = Sk.ffi.remapToJs(otherPy);
        return coordsJsToE3Py(false, a.w * b, 0, 0, 0, 0, 0, 0, 0);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__rlshift__ = Sk.ffi.functionPy(function(b, a)
  {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    if (isNumber(a))
    {
      return coordsJsToE3Py(false, a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
    }
    else
    {
      return undefined;
    }
  });
  $loc.__ilshift__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    var a0 = a.w;
    var a1 = a.x;
    var a2 = a.y;
    var a3 = a.z;
    var a4 = a.xy;
    var a5 = a.yz;
    var a6 = a.zx;
    var a7 = a.xyz;
    var b0, b1, b2, b3, b4, b5, b6, b7;
    if (isNumber(b)) {
      b0 = b;
      b1 = 0;
      b2 = 0;
      b3 = 0;
      b4 = 0;
      b5 = 0;
      b6 = 0;
      b7 = 0;
    }
    else {
      b0 = b.w;
      b1 = b.x;
      b2 = b.y;
      b3 = b.z;
      b4 = b.xy;
      b5 = b.yz;
      b6 = b.zx;
      b7 = b.xyz;
    }
    a.w   = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    a.x   = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    a.y   = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    a.z   = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    a.xy  = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    a.yz  = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    a.zx  = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    a.xyz = BLADE.bladeASM.lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
    return selfPy;
  });
  $loc.__rshift__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy)) {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var a = Sk.ffi.remapToJs(selfPy);
            var b = Sk.ffi.remapToJs(otherPy);
            return compute(BLADE.bladeASM.rcoE3, a, b, coord, coordsJsToE3Py);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var a = Sk.ffi.remapToJs(selfPy);
        var b = Sk.ffi.remapToJs(otherPy);
        return coordsJsToE3Py(false, a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__rrshift__ = Sk.ffi.functionPy(function(b, a)
  {
    a = Sk.ffi.remapToJs(a);
    b = Sk.ffi.remapToJs(b);
    if (isNumber(a))
    {
      return coordsJsToE3Py(false, a * b.w, 0, 0, 0, 0, 0, 0, 0);
    }
    else
    {
      return undefined;
    }
  });
  $loc.__irshift__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    var a = Sk.ffi.remapToJs(selfPy);
    var b = Sk.ffi.remapToJs(otherPy);
    var a0 = a.w;
    var a1 = a.x;
    var a2 = a.y;
    var a3 = a.z;
    var a4 = a.xy;
    var a5 = a.yz;
    var a6 = a.zx;
    var a7 = a.xyz;
    var b0, b1, b2, b3, b4, b5, b6, b7;
    if (isNumber(b)) {
      b0 = b;
      b1 = 0;
      b2 = 0;
      b3 = 0;
      b4 = 0;
      b5 = 0;
      b6 = 0;
      b7 = 0;
    }
    else {
      b0 = b.w;
      b1 = b.x;
      b2 = b.y;
      b3 = b.z;
      b4 = b.xy;
      b5 = b.yz;
      b6 = b.zx;
      b7 = b.xyz;
    }
    a.w   = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    a.x   = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    a.y   = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    a.z   = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    a.xy  = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    a.yz  = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    a.zx  = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    a.xyz = BLADE.bladeASM.rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
    return selfPy;
  });
  $loc.__pow__ = Sk.ffi.functionPy(function(selfPy, otherPy)
  {
    switch(Sk.ffi.getType(otherPy))
    {
      case Sk.ffi.PyType.INSTANCE:
      {
        switch(Sk.ffi.typeName(otherPy)) {
          case Sk.e3ga.EUCLIDEAN_3:
          {
            var a = Sk.ffi.remapToJs(selfPy);
            var b = Sk.ffi.remapToJs(otherPy);
            // TODO: generalize.
            return coordsJsToE3Py(false, Math.pow(a.w, b.w), 0, 0, 0, 0, 0, 0, 0);
          }
          default:
          {
            return undefined;
          }
        }
      }
      case Sk.ffi.PyType.INT:
      case Sk.ffi.PyType.FLOAT:
      {
        var a = Sk.ffi.remapToJs(selfPy);
        var b = Sk.ffi.remapToJs(otherPy);
        // TODO: generalize.
        return coordsJsToE3Py(false, Math.pow(a.w, b), 0, 0, 0, 0, 0, 0, 0);
      }
      default:
      {
        return undefined;
      }
    }
  });
  $loc.__len__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.numberToIntPy(8);
  });
  $loc.__pos__ = Sk.ffi.functionPy(function(selfPy) {
    return selfPy;
  });
  $loc.__neg__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    return coordsJsToE3Py(false, -quaternion.w, -vector.x, -vector.y, -vector.z, quaternion.z, quaternion.x, quaternion.y, -self.xyz);
  });
  $loc.__invert__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    return coordsJsToE3Py(false, quaternion.w,vector.x,vector.y,vector.z,quaternion.z,quaternion.x,quaternion.y,-self.xyz);
  });
  $loc.__eq__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    if (Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3)) {
      var self = Sk.ffi.remapToJs(selfPy);
      var va = self.vector;
      var qa = self.quaternion;
      var other = Sk.ffi.remapToJs(otherPy);
      var vb = other.vector;
      var qb = other.quaternion;
      return va.equals(vb) && qa.equals(qb) && self.xyz === other.xyz;
    }
    else {
      return Sk.ffi.bool.False;
    }
  });
  $loc.__ne__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
    if (Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3)) {
      var self = Sk.ffi.remapToJs(selfPy);
      var va = self.vector;
      var qa = self.quaternion;
      var other = Sk.ffi.remapToJs(otherPy);
      var vb = other.vector;
      var qb = other.quaternion;
      return !va.equals(vb) || !qa.equals(qb) || self.xyz !== other.xyz;
    }
    else {
      return Sk.ffi.bool.True;
    }
  });
  $loc.__getitem__ = Sk.ffi.functionPy(function(selfPy, indexPy) {
    Sk.ffi.checkMethodArgs("[]", arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_INDEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(indexPy), indexPy);
    var index  = Sk.ffi.remapToJs(indexPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    switch(index) {
      case 0: {
        return coordsJsToE3Py(false, quaternion.w, 0, 0, 0, 0, 0, 0, 0);
      }
      case 1: {
        return coordsJsToE3Py(false, 0, vector.x, vector.y, vector.z, 0, 0, 0, 0);
      }
      case 2: {
        return coordsJsToE3Py(false, 0, 0, 0, 0, -quaternion.z, -quaternion.x, -quaternion.y, 0);
      }
      case 3: {
        return coordsJsToE3Py(false, 0, 0, 0, 0, 0, 0, 0, self.xyz);
      }
    }
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    switch(name) {
      case PROP_W: {
        return Sk.ffi.numberToFloatPy(self.w);
      }
      case PROP_X: {
        return Sk.ffi.numberToFloatPy(self.x);
      }
      case PROP_Y: {
        return Sk.ffi.numberToFloatPy(self.y);
      }
      case PROP_Z: {
        return Sk.ffi.numberToFloatPy(self.z);
      }
      case PROP_XY: {
        return Sk.ffi.numberToFloatPy(self.xy);
      }
      case PROP_YZ: {
        return Sk.ffi.numberToFloatPy(self.yz);
      }
      case PROP_ZX: {
        return Sk.ffi.numberToFloatPy(self.zx);
      }
      case PROP_XYZ: {
        return Sk.ffi.numberToFloatPy(self.xyz);
      }
      case PROP_MUTABLE: {
        return Sk.ffi.booleanToPy(self.mutable);
      }
      case PROP_VECTOR: {
        return Sk.ffi.callsim(mod[VECTOR_3], Sk.ffi.referenceToPy(self.vector, VECTOR_3));
      }
      case PROP_QUATERNION: {
        return Sk.ffi.callsim(mod[QUATERNION], Sk.ffi.referenceToPy(self.quaternion, QUATERNION));
      }
      case METHOD_ADD: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, otherPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3), otherPy);
          var other  = Sk.ffi.remapToJs(otherPy);
          quaternion.w += other.quaternion.w;
          vector.x += other.vector.x;
          vector.y += other.vector.y;
          vector.z += other.vector.z;
          quaternion.x += other.quaternion.x;
          quaternion.y += other.quaternion.y;
          quaternion.z += other.quaternion.z;
          self.xyz += other.xyz;
          return selfPy;
        });
      }
      case METHOD_APPLY_EULER: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, mPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType("m", Sk.three.MATRIX_3, Sk.ffi.isInstance(mPy, Sk.three.MATRIX_3), mPy);
          vector[name](Sk.ffi.remapToJs(mPy));
          return selfPy;
        });
      }
      case METHOD_APPLY_MATRIX_3: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, mPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType("m", Sk.three.MATRIX_3, Sk.ffi.isInstance(mPy, Sk.three.MATRIX_3), mPy);
          vector[name](Sk.ffi.remapToJs(mPy));
          return selfPy;
        });
      }
      case METHOD_APPLY_MATRIX_4: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, mPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType("m", Sk.three.MATRIX_4, Sk.ffi.isInstance(mPy, Sk.three.MATRIX_4), mPy);
          vector[name](Sk.ffi.remapToJs(mPy));
          return selfPy;
        });
      }
      case METHOD_SUB: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, otherPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3), otherPy);
          var other  = Sk.ffi.remapToJs(otherPy);
          quaternion.w -= other.quaternion.w;
          vector.x -= other.vector.x;
          vector.y -= other.vector.y;
          vector.z -= other.vector.z;
          quaternion.x -= other.quaternion.x;
          quaternion.y -= other.quaternion.y;
          quaternion.z -= other.quaternion.z;
          self.xyz -= other.xyz;
          return selfPy;
        });
      }
      case METHOD_CONSTANTIFY: {
        return Sk.ffi.callableToPy(mod, METHOD_CONSTANTIFY, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_CONSTANTIFY, arguments, 0, 0);
          self.mutable = false;
          return selfPy;
        });
      }
      case METHOD_COPY: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, otherPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3), otherPy);
          var other  = Sk.ffi.remapToJs(otherPy);
          quaternion.w = other.quaternion.w;
          vector.x     = other.vector.x;
          vector.y     = other.vector.y;
          vector.z     = other.vector.z;
          quaternion.x = other.quaternion.x;
          quaternion.y = other.quaternion.y;
          quaternion.z = other.quaternion.z;
          self.xyz     = other.xyz;
          return selfPy;
        });
      }
      case METHOD_CROSS:
      {
        // This is a generalized cross product: A x B = -I * (A ^ B)
        return Sk.ffi.callableToPy(mod, METHOD_CROSS, function(methodPy, otherPy)
        {
          Sk.ffi.checkMethodArgs(METHOD_CROSS, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3), otherPy);
          var other  = Sk.ffi.remapToJs(otherPy);
          var Aw   = self.w;
          var Ax   = self.x;
          var Ay   = self.y;
          var Az   = self.z;
          var Axy  = self.xy;
          var Ayz  = self.yz;
          var Azx  = self.zx;
          var Axyz = self.xyz;
          var Bw   = other.w;
          var Bx   = other.x;
          var By   = other.y;
          var Bz   = other.z;
          var Bxy  = other.xy;
          var Byz  = other.yz;
          var Bzx  = other.zx;
          var Bxyz = other.xyz;
          var Cw   = Aw * Bw + Ax * Byz + Ay * Bzx + Az * Bxy + Axy * Bz + Ayz * Bx + Azx * By;
          var Cx   = Aw * Bx + Ax * Bw + Ay * Bz - Az * By;
          var Cy   = Aw * By + Ay * Bw + Az * Bx - Ax * Bz;
          var Cz   = Aw * Bz + Az * Bw + Ax * By - Ay * Bx;
          var Cxy  = Aw * Bxy + Axy * Bw;
          var Cyz  = Aw * Byz + Ayz * Bw;
          var Czx  = Aw * Bzx + Azx * Bw;
          var Cxyz = Aw * Bxyz + Axyz * Bw;
          return coordsJsToE3Py(true, Cw, Cx, Cy, Cz, Cxy, Cyz, Czx, Cxyz);
        });
      }
      case METHOD_DISTANCE_TO: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, pointPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(pointPy, Sk.e3ga.EUCLIDEAN_3), pointPy);
          var point  = Sk.ffi.remapToJs(pointPy);
          return Sk.ffi.numberToFloatPy(vector[METHOD_DISTANCE_TO](point.vector));
        });
      }
      case METHOD_DISTANCE_TO_SQUARED: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, pointPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(pointPy, Sk.e3ga.EUCLIDEAN_3), pointPy);
          var point  = Sk.ffi.remapToJs(pointPy);
          return Sk.ffi.numberToFloatPy(vector[METHOD_DISTANCE_TO_SQUARED](point.vector));
        });
      }
      case METHOD_DIVIDE_SCALAR:
      {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, sPy)
        {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_S, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(sPy), sPy);
          var s  = Sk.ffi.remapToJs(sPy);
          quaternion.w /= s;
          vector.x     /= s;
          vector.y     /= s;
          vector.z     /= s;
          quaternion.x /= s;
          quaternion.y /= s;
          quaternion.z /= s;
          self.xyz     /= s;
          return selfPy;
        });
      }
      case METHOD_DOT:
      {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, otherPy)
        {
          Sk.ffi.checkMethodArgs(METHOD_DOT, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_OTHER, Sk.e3ga.EUCLIDEAN_3, Sk.ffi.isInstance(otherPy, Sk.e3ga.EUCLIDEAN_3), otherPy);
          var other  = Sk.ffi.remapToJs(otherPy);
          var Aw   = self.w;
          var Ax   = self.x;
          var Ay   = self.y;
          var Az   = self.z;
          var Axy  = self.xy;
          var Ayz  = self.yz;
          var Azx  = self.zx;
          var Axyz = self.xyz;
          var Bw   = other.w;
          var Bx   = other.x;
          var By   = other.y;
          var Bz   = other.z;
          var Bxy  = other.xy;
          var Byz  = other.yz;
          var Bzx  = other.zx;
          var Bxyz = other.xyz;
          var Cw   = Aw * Bw + Ax * Bx + Ay * By + Az * Bz - Axy * Bxy - Ayz * Byz - Azx * Bzx - Axyz * Bxyz;
          var Cx   = Az * Bzx - Ay * Bxy - Bz * Azx + By * Axy;
          var Cy   = Ax * Bxy - Az * Byz - Bx * Axy + Bz * Ayz;
          var Cz   = Ay * Byz - Ax * Bzx - By * Ayz + Bx * Azx;
          var Cxy  = Az * Bxyz + Bz * Axyz;
          var Cyz  = Ax * Bxyz + Bx * Axyz;
          var Czx  = Ay * Bxyz + By * Axyz;
          var Cxyz = Axyz * Bw + Bxyz * Aw;
          return coordsJsToE3Py(false, Cw, Cx, Cy, Cz, Cxy, Cyz, Czx, Cxyz);
        });
      }
      case METHOD_MULTIPLY_SCALAR: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy, sPy) {
          Sk.ffi.checkMethodArgs(name, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_S, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(sPy), sPy);
          var s  = Sk.ffi.remapToJs(sPy);
          quaternion.w *= s;
          vector.x     *= s;
          vector.y     *= s;
          vector.z     *= s;
          quaternion.x *= s;
          quaternion.y *= s;
          quaternion.z *= s;
          self.xyz     *= s;
          return selfPy;
        });
      }
      case METHOD_SET_X: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_X, function(methodPy, xPy) {
          Sk.ffi.checkMethodArgs(METHOD_SET_X, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_X, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xPy), xPy);
          self[PROP_X] = Sk.ffi.remapToJs(xPy);
          return selfPy;
        });
      }
      case METHOD_SET_Y: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_Y, function(methodPy, yPy) {
          Sk.ffi.checkMethodArgs(METHOD_SET_Y, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_Y, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(yPy), yPy);
          self[PROP_Y] = Sk.ffi.remapToJs(yPy);
          return selfPy;
        });
      }
      case METHOD_SET_Z: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_Z, function(methodPy, zPy) {
          Sk.ffi.checkMethodArgs(METHOD_SET_Z, arguments, 1, 1);
          Sk.ffi.checkArgType(PROP_Z, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(zPy), zPy);
          self[PROP_Z] = Sk.ffi.remapToJs(zPy);
          return selfPy;
        });
      }
      case METHOD_GET_COMPONENT: {
        return Sk.ffi.callableToPy(mod, METHOD_GET_COMPONENT, function(methodPy, indexPy) {
          Sk.ffi.checkMethodArgs(METHOD_GET_COMPONENT, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_INDEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(indexPy), indexPy);
          var index  = Sk.ffi.remapToJs(indexPy);
          return Sk.ffi.numberToFloatPy(vector[METHOD_GET_COMPONENT](index));
        });
      }
      case METHOD_SET_COMPONENT: {
        return Sk.ffi.callableToPy(mod, METHOD_SET_COMPONENT, function(methodPy, indexPy, valuePy) {
          Sk.ffi.checkMethodArgs(METHOD_SET_COMPONENT, arguments, 1, 1);
          Sk.ffi.checkArgType(ARG_INDEX, Sk.ffi.PyType.INT, Sk.ffi.isInt(indexPy), indexPy);
          Sk.ffi.checkArgType(ARG_VALUE, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(valuePy), valuePy);
          var index = Sk.ffi.remapToJs(indexPy);
          var value = Sk.ffi.remapToJs(valuePy);
          vector[METHOD_SET_COMPONENT](index, value);
          return selfPy;
        });
      }
      case METHOD_SET: {
        return Sk.ffi.callableToPy(mod, METHOD_SET, function(methodPy, xPy, yPy, zPy) {
          Sk.ffi.checkMethodArgs(METHOD_SET, arguments, 3, 3);
          Sk.ffi.checkArgType(PROP_X, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(xPy), xPy);
          Sk.ffi.checkArgType(PROP_Y, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(yPy), yPy);
          Sk.ffi.checkArgType(PROP_Z, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(zPy), zPy);
          var x = Sk.ffi.remapToJs(xPy);
          var y = Sk.ffi.remapToJs(yPy);
          var z = Sk.ffi.remapToJs(zPy);
          vector[METHOD_SET](x, y, z);
          return selfPy;
        });
      }
      case METHOD_CLONE: {
        return Sk.ffi.callableToPy(mod, METHOD_CLONE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_CLONE, arguments, 0, 0);
          return coordsJsToE3Py(false, quaternion.w, vector.x, vector.y, vector.z, -quaternion.z, -quaternion.x, -quaternion.y, self.xyz);
        });
      }
      case METHOD_MAGNITUDE: {
        return Sk.ffi.callableToPy(mod, METHOD_MAGNITUDE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_MAGNITUDE, arguments, 0, 0);
          return Sk.ffi.numberToFloatPy(vector.length());
        });
      }
      case METHOD_NORMALIZE: {
        return Sk.ffi.callableToPy(mod, METHOD_NORMALIZE, function(methodPy) {
          Sk.ffi.checkMethodArgs(METHOD_NORMALIZE, arguments, 0, 0);
          vector[METHOD_NORMALIZE]();
          return selfPy;
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(Sk.e3ga.EUCLIDEAN_3);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    // We don't normally check the self argument for performance reasons.
    // I'm doing it here to prove the implementation and because we expect coordinate-mutation to be rare.
    Sk.ffi.checkArgType(ARG_SELF, Sk.e3ga.EUCLIDEAN_3, isEuclidean3Py(selfPy), selfPy);
    var self = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_W:
      case PROP_X:
      case PROP_Y:
      case PROP_Z:
      case PROP_XY:
      case PROP_YZ:
      case PROP_ZX:
      case PROP_XYZ: {
        Sk.ffi.checkArgType(name, Sk.ffi.PyType.FLOAT, Sk.ffi.isNum(valuePy), valuePy);
        try {
          self[name] = Sk.ffi.remapToJs(valuePy);
        }
        catch(e) {
          throw Sk.ffi.assertionError(e.message);
        }
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(Sk.e3ga.EUCLIDEAN_3);
      }
    }
  });
  $loc.__cliffordConjugate__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs(METHOD_CLIFFORD_CONJUGATE, arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, self.w, -self.x, -self.y, -self.z, -self.xy, -self.yz, -self.zx, self.xyz);
  });
  $loc.__cos__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("cos", arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, Sk.math.cos(self.w), 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__sin__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("sin", arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, Sk.math.sin(self.w), 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__tan__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("tan", arguments, 0, 0);
    return Sk.ffh.div(Sk.ffh.sin(selfPy), Sk.ffh.cos(selfPy))
  });
  $loc.__acos__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("acos", arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, Math.acos(self.w), 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__asin__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("asin", arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, Math.asin(self.w), 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__atan__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("atan", arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, Math.atan(self.w), 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__exp__ = Sk.ffi.functionPy(function(selfPy)
  {
    Sk.ffi.checkMethodArgs("exp", arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    var quaternion = self.quaternion;
    var xy = -quaternion.z;
    var yz = -quaternion.x;
    var zx = -quaternion.y;
    if (xy === 0 && yz === 0)
    {
      var c = Sk.math.cos(zx);
      var s = Sk.math.sin(zx);
      return coordsJsToE3Py(false, c, 0, 0, 0, 0, 0, s, 0);
    }
    else if (yz === 0 && zx === 0)
    {
      var c = Sk.math.cos(xy);
      var s = Sk.math.sin(xy);
      return coordsJsToE3Py(false, c, 0, 0, 0, s, 0, 0, 0);
    }
    else if (zx === 0 && xy === 0)
    {
      var c = Sk.math.cos(yz);
      var s = Sk.math.sin(yz);
      return coordsJsToE3Py(false, c, 0, 0, 0, 0, s, 0, 0);
    }
    else
    {
      var angle = Math.sqrt(xy * xy + yz * yz + zx * zx);
      var c = Sk.math.cos(angle);
      var s = Sk.math.sin(angle);
      var k = s / angle;
      return coordsJsToE3Py(false, c, 0, 0, 0, k * xy, k * yz, k * zx, 0);
    }
  });
  $loc.__abs__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.gattr(Sk.ffh.sqrt(Sk.ffh.quadrance(selfPy)), PROP_W);
  });
  $loc.__magnitude__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffh.sqrt(Sk.ffh.quadrance(selfPy));
  });
  $loc.__quadrance__ = Sk.ffi.functionPy(function(selfPy) {
    var s = Sk.ffi.remapToJs(selfPy);
    var w   = s.w;
    var x   = s.x;
    var y   = s.y;
    var z   = s.z;
    var xy  = s.xy;
    var yz  = s.yz;
    var zx  = s.zx;
    var xyz = s.xyz;
    return coordsJsToE3Py(false, w * w + x * x + y * y + z * z + xy * xy + yz * yz + zx * zx + xyz * xyz, 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__sqrt__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(METHOD_SQRT, arguments, 0, 0);
    var self = Sk.ffi.remapToJs(selfPy);
    return coordsJsToE3Py(false, Math.sqrt(self.w), 0, 0, 0, 0, 0, 0, 0);
  });
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    var self = Sk.ffi.remapToJs(selfPy);
    var vector = self.vector;
    var quaternion = self.quaternion;
    var w = quaternion.w;
    var x = vector.x;
    var y = vector.y;
    var z = vector.z;
    var xy = -quaternion.z;
    var yz = -quaternion.x;
    var zx = -quaternion.y;
    var xyz = self.xyz;
    var grade0 = w !== 0;
    var grade1 = x !== 0 || y != 0 || z !== 0;
    var grade2 = xy !== 0 || yz !== 0 || zx !== 0;
    var grade3 = xyz !== 0;
    if (grade0 && !grade1 && !grade2 && !grade3) {
      var args = [w];
      return Sk.builtin.stringToPy(Sk.e3ga.SCALAR_E3 + "(" + args.join(", ") + ")");
    }
    else if (!grade0 && grade1 && !grade2 && !grade3) {
      var args = [x, y, z];
      return Sk.builtin.stringToPy(Sk.e3ga.VECTOR_E3 + "(" + args.join(", ") + ")");
    }
    else if (!grade0 && !grade1 && grade2 && !grade3) {
      var args = [xy, yz, zx];
      return Sk.builtin.stringToPy(Sk.e3ga.BIVECTOR_E3 + "(" + args.join(", ") + ")");
    }
    else if (!grade0 && !grade1 && !grade2 && grade3) {
      var args = [xyz];
      return Sk.builtin.stringToPy(Sk.e3ga.PSEUDOSCALAR_E3 + "(" + args.join(", ") + ")");
    }
    else {
      var args = [w, x, y, z, xy, yz, zx, xyz];
      return Sk.builtin.stringToPy(Sk.e3ga.EUCLIDEAN_3 + "(" + args.join(", ") + ")");
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs("__str__", arguments, 0, 0);
    Sk.ffi.checkFunctionArgs("str", arguments, 1, 1);
    Sk.ffi.checkArgType(ARG_SELF, Sk.e3ga.EUCLIDEAN_3, isEuclidean3Py(selfPy), selfPy);
    var self = Sk.ffi.remapToJs(selfPy);
    var w   = self.w;
    var x   = self.x;
    var y   = self.y;
    var z   = self.z;
    var xy  = self.xy;
    var yz  = self.yz;
    var zx  = self.zx;
    var xyz = self.xyz;
    return Sk.builtin.stringToPy(stringFromCoordinates([w, x, y, z, xy, yz, zx, xyz], [ONE_NAME, UNIT_VECTOR_NAME_E1, UNIT_VECTOR_NAME_E2, UNIT_VECTOR_NAME_E3, UNIT_BIVECTOR_NAME_E12, UNIT_BIVECTOR_NAME_E23, UNIT_BIVECTOR_NAME_E31, PSEUDOSCALAR_NAME]));
  });
}, Sk.e3ga.EUCLIDEAN_3, []);
/*
 *
 */
};
}).call(this);
