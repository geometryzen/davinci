/**
 * Convenience function for incorporating a Euclidean3 class into a module.
 *
 * Usage:
 *
 * Sk.builtin.defineEuclidean3(mod);
 */
(function() {
this.BLADE = this.BLADE || {};
var BLADE = this.BLADE;
Sk.builtin.defineEuclidean3 = function(mod) {
  /**
   * @const
   * @type {string}
   */
  var EUCLIDEAN_3                = "Euclidean3";
  /**
   * @const
   * @type {string}
   */
  var SCALAR_E3                  = "ScalarE3";
  /**
   * @const
   * @type {string}
   */
  var VECTOR_E3                  = "VectorE3";
  /**
   * @const
   * @type {string}
   */
  var BIVECTOR_E3                = "BivectorE3";
  /**
   * @const
   * @type {string}
   */
  var PSEUDOSCALAR_E3            = "PseudoscalarE3";
  /**
   * @const
   * @type {string}
   */
  var UNIT                       = "Unit";
  /**
   * @const
   * @type {string}
   */
  var MEASURE                    = "Measure";
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
   * @type {!Array.<Sk.ffi.PyType>}
   */
  var NUMBER                     = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
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
  var METHOD_DOT                 = "dot";
  /**
   * @const
   * @type {string}
   */
  var METHOD_EXP                 = "exp";
  /**
   * @const
   * @type {string}
   */
  var METHOD_LENGTH              = Sk.ffi.mangleName("length");
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

  function isNumber(x)    { return typeof x === 'number'; }

  function stringFromCoordinates(coordinates, labels) {
    var append, i, sb, str, _i, _ref;
    sb = [];
    append = function(number, label) {
      var n;
      if (number !== 0) {
        if (number >= 0) {
          if (sb.length > 0) {
            sb.push("+");
          }
        } else {
          sb.push("-");
        }
        n = Math.abs(number);
        if (n === 1) {
          return sb.push(label);
        } else {
          sb.push(n.toString());
          if (label !== "1") {
            sb.push("*");
            return sb.push(label);
          }
        }
      }
    };
    for (i = _i = 0, _ref = coordinates.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      append(coordinates[i], labels[i]);
    }
    if (sb.length > 0) {
      str = sb.join("");
    } else {
      str = "0";
    }
    return str;
  }

  function mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
      }
      break;
      case 1: {
        x = +(a0 * b1 + a1 * b0 - a2 * b4 + a3 * b6 + a4 * b2 - a5 * b7 - a6 * b3 - a7 * b5);
      }
      break;
      case 2: {
        x = +(a0 * b2 + a1 * b4 + a2 * b0 - a3 * b5 - a4 * b1 + a5 * b3 - a6 * b7 - a7 * b6);
      }
      break;
      case 3: {
        x = +(a0 * b3 - a1 * b6 + a2 * b5 + a3 * b0 - a4 * b7 - a5 * b2 + a6 * b1 - a7 * b4);
      }
      break;
      case 4: {
        x = +(a0 * b4 + a1 * b2 - a2 * b1 + a3 * b7 + a4 * b0 - a5 * b6 + a6 * b5 + a7 * b3);
      }
      break;
      case 5: {
        x = +(a0 * b5 + a1 * b7 + a2 * b3 - a3 * b2 + a4 * b6 + a5 * b0 - a6 * b4 + a7 * b1);
      }
      break;
      case 6: {
        x = +(a0 * b6 - a1 * b3 + a2 * b7 + a3 * b1 - a4 * b5 + a5 * b4 + a6 * b0 + a7 * b2);
      }
      break;
      case 7: {
        x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }

  function extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0);
      }
      break;
      case 1: {
        x = +(a0 * b1 + a1 * b0);
      }
      break;
      case 2: {
        x = +(a0 * b2           + a2 * b0);
      }
      break;
      case 3: {
        x = +(a0 * b3                     + a3 * b0);
      }
      break;
      case 4: {
        x = +(a0 * b4 + a1 * b2 - a2 * b1           + a4* b0);
      }
      break;
      case 5: {
        x = +(a0 * b5           + a2 * b3 - a3 * b2           + a5 * b0);
      }
      break;
      case 6: {
        x = +(a0 * b6 - a1 * b3           + a3 * b1                     + a6 * b0);
      }
      break;
      case 7: {
        x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }

  function lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
      }
      break;
      case 1: {
        x = +(a0 * b1           - a2 * b4 + a3 * b6           - a5 * b7);
      }
      break;
      case 2: {
        x = +(a0 * b2 + a1 * b4           - a3 * b5                     - a6 * b7);
      }
      break;
      case 3: {
        x = +(a0 * b3 - a1 * b6 + a2 * b5           - a4 * b7);
      }
      break;
      case 4: {
        x = +(a0 * b4                     + a3 * b7);
      }
      break;
      case 5: {
        x = +(a0 * b5 + a1 * b7);
      }
      break;
      case 6: {
        x = +(a0 * b6           + a2 * b7);
      }
      break;
      case 7: {
        x = +(a0 * b7);
      }
      break;
      default: {
      }
    }
    return +x;
  }

  function rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index|0;
    var x = 0.0;
    switch(~(~index)) {
      case 0: {
        x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
      }
      break;
      case 1: {
        x = +(        + a1 * b0                     + a4 * b2           - a6 * b3 - a7 * b5);
      }
      break;
      case 2: {
        x = +(                  + a2 * b0           - a4 * b1 + a5 * b3           - a7 * b6);
      }
      break;
      case 3: {
        x = +(                            + a3 * b0           - a5 * b2 + a6 * b1 - a7 * b4);
      }
      break;
      case 4: {
        x = +(                                      + a4 * b0                     + a7 * b3);
      }
      break;
      case 5: {
        x = +(                                                + a5 * b0           + a7 * b1);
      }
      break;
      case 6: {
        x = +(                                                          + a6 * b0 + a7 * b2);
      }
      break;
      case 7: {
        x = +(                                                                    + a7 * b0);
      }
      break;
      default: {
      }
    }
    return +x;
  }

  function divide(a000, a001, a010, a011, a100, a101, a110, a111, b000, b001, b010, b011, b100, b101, b110, b111, dst) {
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
    var m000 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 0);
    var m001 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 1);
    var m010 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 2);
    var m011 =  0;//mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 4);
    var m100 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 3);
    var m101 =  0;//-mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 6);
    var m110 =  0;//mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 5);
    var m111 =  0;//mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, r000, r001, r010, r100, r011, r110, -r101, r111, 7);
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
    var s000 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 0);
    var s001 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 1);
    var s010 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 2);
    var s011 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 4);
    var s100 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 3);
    var s101 = -mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 6);
    var s110 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 5);
    var s111 =  mulE3(r000, r001, r010, r100, r011, r110, -r101, r111, c000, c001, c010, c100, c011, c110, -c101, c111, 7);
    // k = b * s
    var k000 =  mulE3(b000, b001, b010, b100, b011, b110, -b101, b111, s000, s001, s010, s100, s011, s110, -s101, s111, 0);
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
    var x000 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 0);
    var x001 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 1);
    var x010 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 2);
    var x011 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 4);
    var x100 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 3);
    var x101 = -mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 6);
    var x110 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 5);
    var x111 =  mulE3(a000, a001, a010, a100, a011, a110, -a101, a111, i000, i001, i010, i100, i011, i110, -i101, i111, 7);
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
    if (typeof dst !== 'undefined') {
      dst.w   = w;
      dst.x   = x;
      dst.y   = y;
      dst.z   = z;
      dst.xy  = xy;
      dst.yz  = yz;
      dst.zx  = zx;
      dst.xyz = xyz;
    }
    else {
      return coordsJsToE3Py(w, x, y, z, xy, yz, zx, xyz);
    }
  }

  function coordsJsToE3Py(w, x, y, z, xy, yz, zx, xyz) {
    w   = Sk.ffi.numberToFloatPy(w);
    x   = Sk.ffi.numberToFloatPy(x);
    y   = Sk.ffi.numberToFloatPy(y);
    z   = Sk.ffi.numberToFloatPy(z);
    xy  = Sk.ffi.numberToFloatPy(xy);
    yz  = Sk.ffi.numberToFloatPy(yz);
    zx  = Sk.ffi.numberToFloatPy(zx);
    xyz = Sk.ffi.numberToFloatPy(xyz);
    return Sk.ffi.callsim(mod[EUCLIDEAN_3], w, x, y, z, xy, yz, zx, xyz);
  }

  function coord(mv, index) {
    switch(index) {
      case 0: {
        return mv.w;
      }
      case 1: {
        return mv.x;
      }
      case 2: {
        return mv.y;
      }
      case 3: {
        return mv.z;
      }
      case 4: {
        return mv.xy;
      }
      case 5: {
        return mv.yz;
      }
      case 6: {
        return mv.zx;
      }
      case 7: {
        return mv.xyz;
      }
      default: {
        throw Sk.ffi.assertionError("" + index + " is not a valid multivector coordinate index");
      }
    }
  }

  function compute(f, a, b, coord, pack) {
    var a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, x0, x1, x2, x3, x4, x5, x6, x7;
    a0 = a.w;
    a1 = a.x;
    a2 = a.y;
    a3 = a.z;
    a4 = a.xy;
    a5 = a.yz;
    a6 = a.zx;
    a7 = a.xyz;
    b0 = b.w;
    b1 = b.x;
    b2 = b.y;
    b3 = b.z;
    b4 = b.xy;
    b5 = b.yz;
    b6 = b.zx;
    b7 = b.xyz;
    x0 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    x1 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    x2 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    x3 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    x4 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    x5 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    x6 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    x7 = f(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
    return pack(x0, x1, x2, x3, x4, x5, x6, x7);
  }

  mod[SCALAR_E3] = Sk.ffi.functionPy(function(w) {
    Sk.ffi.checkFunctionArgs(SCALAR_E3, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_W, NUMBER, Sk.ffi.isNumber(w), w);
    w = Sk.ffi.numberToJs(w);
    return coordsJsToE3Py(w, 0, 0, 0, 0, 0, 0, 0);
  });

  mod[VECTOR_E3] = Sk.ffi.functionPy(function(x, y, z) {
    Sk.ffi.checkFunctionArgs(VECTOR_E3, arguments, 3, 3);
    Sk.ffi.checkArgType(PROP_X, NUMBER, Sk.ffi.isNumber(x), x);
    Sk.ffi.checkArgType(PROP_Y, NUMBER, Sk.ffi.isNumber(y), y);
    Sk.ffi.checkArgType(PROP_Z, NUMBER, Sk.ffi.isNumber(z), z);
    x = Sk.ffi.numberToJs(x);
    y = Sk.ffi.numberToJs(y);
    z = Sk.ffi.numberToJs(z);
    return coordsJsToE3Py(0, x, y, z, 0, 0, 0, 0);
  });

  mod[BIVECTOR_E3] = Sk.ffi.functionPy(function(xy, yz, zx) {
    Sk.ffi.checkFunctionArgs(BIVECTOR_E3, arguments, 3, 3);
    Sk.ffi.checkArgType(PROP_XY, NUMBER, Sk.ffi.isNumber(xy), xy);
    Sk.ffi.checkArgType(PROP_YZ, NUMBER, Sk.ffi.isNumber(yz), yz);
    Sk.ffi.checkArgType(PROP_ZX, NUMBER, Sk.ffi.isNumber(zx), zx);
    xy = Sk.ffi.numberToJs(xy);
    yz = Sk.ffi.numberToJs(yz);
    zx = Sk.ffi.numberToJs(zx);
    return coordsJsToE3Py(0, 0, 0, 0, xy, yz, zx, 0);
  });

  mod[PSEUDOSCALAR_E3] = Sk.ffi.functionPy(function(xyz) {
    Sk.ffi.checkFunctionArgs(PSEUDOSCALAR_E3, arguments, 1, 1);
    Sk.ffi.checkArgType(PROP_XYZ, NUMBER, Sk.ffi.isNumber(xyz), xyz);
    xyz = Sk.ffi.numberToJs(xyz);
    return coordsJsToE3Py(0, 0, 0, 0, 0, 0, 0, xyz);
  });

  mod[EUCLIDEAN_3] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(self, w, x, y, z, xy, yz, zx, xyz) {
      Sk.ffi.checkMethodArgs(EUCLIDEAN_3, arguments, 1, 8);
      switch(Sk.ffi.getType(w)) {
        case Sk.ffi.PyType.FLOAT:
        case Sk.ffi.PyType.INT: {
          Sk.ffi.checkMethodArgs(EUCLIDEAN_3, arguments, 8, 8);
          Sk.ffi.checkArgType(PROP_W,    NUMBER, Sk.ffi.isNumber(w), w);
          Sk.ffi.checkArgType(PROP_X,    NUMBER, Sk.ffi.isNumber(x), x);
          Sk.ffi.checkArgType(PROP_Y,    NUMBER, Sk.ffi.isNumber(y), y);
          Sk.ffi.checkArgType(PROP_Z,    NUMBER, Sk.ffi.isNumber(z), z);
          Sk.ffi.checkArgType(PROP_XY,   NUMBER, Sk.ffi.isNumber(xy), xy);
          Sk.ffi.checkArgType(PROP_YZ,   NUMBER, Sk.ffi.isNumber(yz), yz);
          Sk.ffi.checkArgType(PROP_ZX,   NUMBER, Sk.ffi.isNumber(zx), zx);
          Sk.ffi.checkArgType(PROP_XYZ,  NUMBER, Sk.ffi.isNumber(xyz), xyz);
          w   = Sk.ffi.remapToJs(w);
          x   = Sk.ffi.remapToJs(x);
          y   = Sk.ffi.remapToJs(y);
          z   = Sk.ffi.remapToJs(z);
          xy  = Sk.ffi.remapToJs(xy);
          yz  = Sk.ffi.remapToJs(yz);
          zx  = Sk.ffi.remapToJs(zx);
          xyz = Sk.ffi.remapToJs(xyz);
          Sk.ffi.referenceToPy(new BLADE.Euclidean3(w, x, y, z, xy, yz, zx, xyz), EUCLIDEAN_3, undefined, self);
        }
        break;
        case Sk.ffi.PyType.CLASS: {
          Sk.ffi.checkMethodArgs(EUCLIDEAN_3, arguments, 1, 1);
          Sk.ffi.referenceToPy(Sk.ffi.remapToJs(w), EUCLIDEAN_3, undefined, self);
        }
        break;
        default: {
          throw new Sk.builtin.AssertionError("Ouch " + Sk.ffi.getType(w));
        }
      }
    });
    $loc.__add__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return coordsJsToE3Py(a.w + b, a.x, a.y, a.z, a.xy, a.yz, a.zx, a.xyz);
      }
      else {
        var w = a.w + b.w;
        var x = a.x + b.x;
        var y = a.y + b.y;
        var z = a.z + b.z;
        var xy = a.xy + b.xy;
        var yz = a.yz + b.yz;
        var zx = a.zx + b.zx;
        var xyz = a.xyz + b.xyz;
        return coordsJsToE3Py(w, x, y, z, xy, yz, zx, xyz);
      }
    });
    $loc.__radd__ = Sk.ffi.functionPy(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return coordsJsToE3Py(a + b.w, b.x, b.y, b.z, b.xy, b.yz, b.zx, b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__iadd__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var self = Sk.ffi.remapToJs(selfPy);
      var other = Sk.ffi.remapToJs(otherPy);
      if (isNumber(other)) {
        self.w += other;
      }
      else {
        self.w += other.w;
        self.x += other.x;
        self.y += other.y;
        self.z += other.z;
        self.xy += other.xy;
        self.yz += other.yz;
        self.zx += other.zx;
        self.xyz += other.xyz;
      }
      return selfPy;
    });
    $loc.__sub__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return coordsJsToE3Py(a.w - b, a.x, a.y, a.z, a.xy, a.yz, a.zx, a.xyz);
      }
      else {
        var w = a.w - b.w;
        var x = a.x - b.x;
        var y = a.y - b.y;
        var z = a.z - b.z;
        var xy = a.xy - b.xy;
        var yz = a.yz - b.yz;
        var zx = a.zx - b.zx;
        var xyz = a.xyz - b.xyz;
        return coordsJsToE3Py(w, x, y, z, xy, yz, zx, xyz);
      }
    });
    $loc.__rsub__ = Sk.ffi.functionPy(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return coordsJsToE3Py(a - b.w, -b.x, -b.y, -b.z, -b.xy, -b.yz, -b.zx, -b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
      }
    });
    $loc.__isub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var self = Sk.ffi.remapToJs(selfPy);
      var other = Sk.ffi.remapToJs(otherPy);
      if (isNumber(other)) {
        self.w -= other;
      }
      else {
        self.w   -= other.w;
        self.x   -= other.x;
        self.y   -= other.y;
        self.z   -= other.z;
        self.xy  -= other.xy;
        self.yz  -= other.yz;
        self.zx  -= other.zx;
        self.xyz -= other.xyz;
      }
      return selfPy;
    });
    $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      switch(Sk.ffi.getType(otherPy)) {
        case Sk.ffi.PyType.CLASS: {
          switch(Sk.ffi.typeName(otherPy)) {
            case EUCLIDEAN_3: {
              var lhs = Sk.ffi.remapToJs(selfPy);
              var rhs = Sk.ffi.remapToJs(otherPy);
              return compute(mulE3, lhs, rhs, coord, coordsJsToE3Py);
            }
            case UNIT: {
              return Sk.ffi.callsim(mod[MEASURE], selfPy, otherPy);
            }
            default: {
              throw new Sk.builtin.AssertionError(EUCLIDEAN_3 + " (__mul__) typeName(otherPy) => " + Sk.ffi.typeName(otherPy));
            }
          }
        }
        case Sk.ffi.PyType.FLOAT:
        case Sk.ffi.PyType.INT:
        case Sk.ffi.PyType.LONG: {
          var a = Sk.ffi.remapToJs(selfPy);
          var b = Sk.ffi.remapToJs(otherPy);
          return coordsJsToE3Py(a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
        }
        default: {
          throw Sk.ffi.err.argument('other').inFunction('*(' + EUCLIDEAN_3 + ', other)').mustHaveType([EUCLIDEAN_3, NUMBER, UNIT]);
        }
      }
    });
    $loc.__rmul__ = Sk.ffi.functionPy(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return coordsJsToE3Py(a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
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
      a.w   = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      switch(Sk.ffi.getType(otherPy)) {
        case Sk.ffi.PyType.CLASS: {
          switch(Sk.ffi.typeName(otherPy)) {
            case EUCLIDEAN_3: {
              var a = Sk.ffi.remapToJs(selfPy);
              var b = Sk.ffi.remapToJs(otherPy);
              return divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b.w, b.x, b.y, b.xy, b.z, -b.zx, b.yz, b.xyz, undefined);
            }
            case UNIT: {
              var quantityPy = selfPy;
              var unit = Sk.ffi.remapToJs(otherPy);
              var zero = new BLADE[RATIONAL](0, 1);
              var one = new BLADE[UNIT](1, new BLADE[DIMENSIONS](zero, zero, zero, zero), unit.labels);
              return Sk.ffi.callsim(mod[MEASURE], quantityPy, Sk.ffi.callsim(mod[UNIT], Sk.ffi.referenceToPy(one.div(unit), UNIT)));
            }
            default: {
              throw new Sk.builtin.AssertionError(EUCLIDEAN_3 + " (__mul__) typeName(otherPy) => " + Sk.ffi.typeName(otherPy));
            }
          }
        }
        case Sk.ffi.PyType.FLOAT:
        case Sk.ffi.PyType.INT:
        case Sk.ffi.PyType.LONG: {
          var a = Sk.ffi.remapToJs(selfPy);
          var b = Sk.ffi.remapToJs(otherPy);
          return divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b, 0, 0, 0, 0, 0, 0, 0, undefined);
        }
        default: {
          throw Sk.ffi.err.argument('other').inFunction('*(' + EUCLIDEAN_3 + ', other)').mustHaveType([EUCLIDEAN_3, NUMBER, UNIT]);
        }
      }
    });
    $loc.__rdiv__ = Sk.ffi.functionPy(function(rhs, lhs) {
      lhs = Sk.ffi.remapToJs(lhs);
      rhs = Sk.ffi.remapToJs(rhs);
      if (isNumber(lhs)) {
        return divide(lhs, 0, 0, 0, 0, 0, 0, 0, rhs.w, rhs.x, rhs.y, rhs.xy, rhs.z, -rhs.zx, rhs.yz, rhs.xyz, undefined);
      }
      else {
        throw new Sk.builtin.AssertionError("" + JSON.stringify(lhs, null, 2) + " / " + JSON.stringify(rhs, null, 2));
      }
    });
    $loc.__idiv__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var a = Sk.ffi.remapToJs(selfPy);
      var b = Sk.ffi.remapToJs(otherPy);
      if (isNumber(b)) {
        divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b, 0, 0, 0, 0, 0, 0, 0, a);
        return selfPy;
      }
      else {
        divide(a.w, a.x, a.y, a.xy, a.z, -a.zx, a.yz, a.xyz, b.w, b.x, b.y, b.xy, b.z, -b.zx, b.yz, b.xyz, a);
        return selfPy;
      }
    });
    $loc.__xor__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return coordsJsToE3Py(a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      else {
        return compute(extE3, a, b, coord, coordsJsToE3Py);
      }
    });
    $loc.__rxor__ = Sk.ffi.functionPy(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return coordsJsToE3Py(a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
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
      a.w   = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__lshift__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return coordsJsToE3Py(a.w * b, 0, 0, 0, 0, 0, 0, 0);
      }
      else {
        return compute(lcoE3, a, b, coord, coordsJsToE3Py);
      }
    });
    $loc.__rlshift__ = Sk.ffi.functionPy(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return coordsJsToE3Py(a * b.w, a * b.x, a * b.y, a * b.z, a * b.xy, a * b.yz, a * b.zx, a * b.xyz);
      }
      else {
        throw new Sk.builtin.AssertionError();
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
      a.w   = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__rshift__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(b)) {
        return coordsJsToE3Py(a.w * b, a.x * b, a.y * b, a.z * b, a.xy * b, a.yz * b, a.zx * b, a.xyz * b);
      }
      else {
        return compute(rcoE3, a, b, coord, coordsJsToE3Py);
      }
    });
    $loc.__rrshift__ = Sk.ffi.functionPy(function(b, a) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      if (isNumber(a)) {
        return coordsJsToE3Py(a * b.w, 0, 0, 0, 0, 0, 0, 0);
      }
      else {
        throw new Sk.builtin.AssertionError();
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
      a.w   = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
      a.x   = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
      a.y   = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
      a.z   = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
      a.xy  = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
      a.yz  = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
      a.zx  = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
      a.xyz = rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
      return selfPy;
    });
    $loc.__pos__ = Sk.ffi.functionPy(function(selfPy) {
      return selfPy;
    });
    $loc.__neg__ = Sk.ffi.functionPy(function(selfPy) {
      var mv = Sk.ffi.remapToJs(selfPy);
      return coordsJsToE3Py(-mv.w, -mv.x, -mv.y, -mv.z, -mv.xy, -mv.yz, -mv.zx, -mv.xyz);
    });
    $loc.__invert__ = Sk.ffi.functionPy(function(selfPy) {
      var mv = Sk.ffi.remapToJs(selfPy);
      return coordsJsToE3Py(mv.w, mv.x, mv.y, mv.z, -mv.xy, -mv.yz, -mv.zx, -mv.xyz);
    });
    $loc.__eq__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      return a.w === b.w && a.x === b.x && a.y === b.y && a.z === b.z && a.xy === b.xy && a.yz === b.yz && a.zx === b.zx && a.xyz === b.xyz;
    });
    $loc.__ne__ = Sk.ffi.functionPy(function(a, b) {
      a = Sk.ffi.remapToJs(a);
      b = Sk.ffi.remapToJs(b);
      return a.w !== b.w || a.x !== b.x || a.y !== b.y || a.z !== b.z || a.xy !== b.xy || a.yz !== b.yz || a.zx !== b.zx || a.xyz !== b.xyz;
    });
    $loc.__getitem__ = Sk.ffi.functionPy(function(mv, index) {
      mv = Sk.ffi.remapToJs(mv);
      index = Sk.builtin.asnum$(index);
      switch(index) {
        case 0: {
          return coordsJsToE3Py(mv.w, 0, 0, 0, 0, 0, 0, 0);
        }
        case 1: {
          return coordsJsToE3Py(0, mv.x, mv.y, mv.z, 0, 0, 0, 0);
        }
        case 2: {
          return coordsJsToE3Py(0, 0, 0, 0, mv.xy, mv.yz, mv.zx, 0);
        }
        case 3: {
          return coordsJsToE3Py(0, 0, 0, 0, 0, 0, 0, mv.xyz);
        }
      }
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(mvPy, name) {
      var mv = Sk.ffi.remapToJs(mvPy);
      switch(name) {
        case PROP_W: {
          return Sk.ffi.numberToFloatPy(mv.w);
        }
        case PROP_X: {
          return Sk.ffi.numberToFloatPy(mv.x);
        }
        case PROP_Y: {
          return Sk.ffi.numberToFloatPy(mv.y);
        }
        case PROP_Z: {
          return Sk.ffi.numberToFloatPy(mv.z);
        }
        case PROP_XY: {
          return Sk.ffi.numberToFloatPy(mv.xy);
        }
        case PROP_YZ: {
          return Sk.ffi.numberToFloatPy(mv.yz);
        }
        case PROP_ZX: {
          return Sk.ffi.numberToFloatPy(mv.zx);
        }
        case PROP_XYZ: {
          return Sk.ffi.numberToFloatPy(mv.xyz);
        }
        case METHOD_ADD: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, arg) {
              arg  = Sk.ffi.remapToJs(arg);
              mv.w += arg.w;
              mv.x += arg.x;
              mv.y += arg.y;
              mv.z += arg.z;
              mv.xy += arg.xy;
              mv.yz += arg.yz;
              mv.zx += arg.zx;
              mv.xyz += arg.xyz;
              return mvPy;
            });
          }, METHOD_ADD, []));
        }
        case METHOD_CROSS: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, vectorPy) {
              var vectorJs  = Sk.ffi.remapToJs(vectorPy);
              return Sk.ffi.callsim(mod[EUCLIDEAN_3], Sk.ffi.remapToPy(mv.cross(vectorJs), EUCLIDEAN_3));
            });
          }, METHOD_CROSS, []));
        }
        case METHOD_DOT: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, vPy) {
              var v  = Sk.ffi.remapToJs(vPy);
              return Sk.ffi.numberToFloatPy(mv.dot(v));
            });
          }, METHOD_DOT, []));
        }
        case METHOD_EXP: {
          return Sk.ffi.callableToPy(mod, METHOD_EXP, function(methodPy) {
            Sk.ffi.checkMethodArgs(METHOD_EXP, arguments, 0, 0);
            var angle = Math.sqrt(mv.xy * mv.xy + mv.yz * mv.yz + mv.zx * mv.zx);
            var c = Math.cos(angle);
            var s = Math.sin(angle);
            var k = s / angle;
            return coordsJsToE3Py(c, 0, 0, 0, k * mv.xy, k * mv.yz, k * mv.zx, 0);
          });
        }
        case METHOD_SET_X: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, x) {
              x  = Sk.ffi.remapToJs(x);
              mv[METHOD_SET_X](x);
              return mvPy;
            });
          }, METHOD_SET_X, []));
        }
        case METHOD_SET_Y: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, y) {
              y  = Sk.ffi.remapToJs(y);
              mv[METHOD_SET_Y](y);
              return mvPy;
            });
          }, METHOD_SET_Y, []));
        }
        case METHOD_SET_Z: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, z) {
              z  = Sk.ffi.remapToJs(z);
              mv[METHOD_SET_Z](z);
              return mvPy;
            });
          }, METHOD_SET_Z, []));
        }
        case METHOD_GET_COMPONENT: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, index) {
              index  = Sk.ffi.remapToJs(index);
              return Sk.ffi.numberToFloatPy(mv[METHOD_GET_COMPONENT](index));
            });
          }, METHOD_GET_COMPONENT, []));
        }
        case METHOD_SET_COMPONENT: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, index, value) {
              index  = Sk.ffi.remapToJs(index);
              value  = Sk.ffi.remapToJs(value);
              mv[METHOD_SET_COMPONENT](index, value);
              return mvPy;
            });
          }, METHOD_SET_COMPONENT, []));
        }
        case METHOD_SET: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, x, y, z) {
              x  = Sk.ffi.remapToJs(x);
              y  = Sk.ffi.remapToJs(y);
              z  = Sk.ffi.remapToJs(z);
              mv[METHOD_SET](x, y, z);
              return mvPy;
            });
          }, METHOD_SET, []));
        }
        case METHOD_CLONE: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self) {
              return coordsJsToE3Py(mv.w, mv.x, mv.y, mv.z, mv.xy, mv.yz, mv.zx, mv.xyz);
            });
          }, METHOD_CLONE, []));
        }
        case METHOD_LENGTH: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self) {
              return Sk.ffi.numberToFloatPy(mv.length());
            });
          }, METHOD_LENGTH, []));
        }
        case METHOD_NORMALIZE: {
          return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self) {
              mv[METHOD_NORMALIZE]();
              return mvPy;
            });
          }, METHOD_NORMALIZE, []));
        }
        default: {
          throw Sk.ffi.err.attribute(name).isNotGetableOnType(EUCLIDEAN_3);
        }
      }
    });
    $loc.__setattr__ = Sk.ffi.functionPy(function(mv, name, value) {
      mv = Sk.ffi.remapToJs(mv);
      value = Sk.ffi.remapToJs(value);
      switch(name) {
        case PROP_W: {
          mv.w = value;
        }
        break;
        case PROP_X: {
          mv.x = value;
        }
        break;
        case PROP_Y: {
          mv.y = value;
        }
        break;
        case PROP_Z: {
          mv.z = value;
        }
        break;
        case PROP_XY: {
          mv.xy = value;
        }
        break;
        case PROP_YZ: {
          mv.yz = value;
        }
        break;
        case PROP_ZX: {
          mv.zx = value;
        }
        break;
        case PROP_XYZ: {
          mv.xyz = value;
        }
        break;
        default: {
          throw Sk.ffi.err.attribute(name).isNotSetableOnType(EUCLIDEAN_3);
        }
      }
    });
    $loc.__exp__ = Sk.ffi.functionPy(function(selfPy) {
      Sk.ffi.checkMethodArgs(METHOD_EXP, arguments, 0, 0);
      var mv = Sk.ffi.remapToJs(selfPy);
      var angle = Math.sqrt(mv.xy * mv.xy + mv.yz * mv.yz + mv.zx * mv.zx);
      var c = Math.cos(angle);
      var s = Math.sin(angle);
      var k = s / angle;
      return coordsJsToE3Py(c, 0, 0, 0, k * mv.xy, k * mv.yz, k * mv.zx, 0);
    });
    $loc.__repr__ = Sk.ffi.functionPy(function(m) {
      m = Sk.ffi.remapToJs(m);
      var grade0 = m.w !== 0;
      var grade1 = m.x !== 0 || m.y != 0 || m.z !== 0;
      var grade2 = m.xy !== 0 || m.yz !== 0 || m.zx !== 0;
      var grade3 = m.xyz !== 0;
      if (grade0 && !grade1 && !grade2 && !grade3) {
        var args = [m.w];
        return Sk.ffi.stringToPy(SCALAR_E3 + "(" + args.join(", ") + ")");
      }
      else if (!grade0 && grade1 && !grade2 && !grade3) {
        var args = [m.x, m.y, m.z];
        return Sk.ffi.stringToPy(VECTOR_E3 + "(" + args.join(", ") + ")");
      }
      else if (!grade0 && !grade1 && grade2 && !grade3) {
        var args = [m.xy, m.yz, m.zx];
        return Sk.ffi.stringToPy(BIVECTOR_E3 + "(" + args.join(", ") + ")");
      }
      else if (!grade0 && !grade1 && !grade2 && grade3) {
        var args = [m.xyz];
        return Sk.ffi.stringToPy(PSEUDOSCALAR_E3 + "(" + args.join(", ") + ")");
      }
      else {
        var args = [m.w, m.x, m.y, m.z, m.xy, m.yz, m.zx, m.xyz];
        return Sk.ffi.stringToPy(EUCLIDEAN_3 + "(" + args.join(", ") + ")");
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(mv) {
      mv = Sk.ffi.remapToJs(mv);
      return Sk.ffi.stringToPy(stringFromCoordinates([mv.w, mv.x, mv.y, mv.z, mv.xy, mv.yz, mv.zx, mv.xyz], ["1", "i", "j", "k", "ij", "jk", "ki", "I"]));
    });
  }, EUCLIDEAN_3, []);
};
}).call(this);
