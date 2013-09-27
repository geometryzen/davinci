(function() {
Sk.builtin.defineProbeE3 = function(mod, THREE) {
Sk.ffi.checkFunctionArgs("defineProbeE3", arguments, 2, 2);
/**
 * @const
 * @type {string}
 */
var PROBE_E3                        = "ProbeE3";
/**
 * @const
 * @type {string}
 */
var PROBE_BUILDER_E3                = "ProbeBuilderE3";
/**
 * @const
 * @type {string}
 */
var ARROW_BUILDER                   = "ArrowBuilder";
/**
 * @const
 * @type {string}
 */
var CUBE_BUILDER                    = "CubeBuilder";
/**
 * @const
 * @type {string}
 */
var SPHERE_BUILDER                  = "SphereBuilder";
/**
 * @const
 * @type {string}
 */
var VORTEX_BUILDER                  = "VortexBuilder";
/**
 * @const
 * @type {string}
 */
var EUCLIDEAN_3                     = "Euclidean3";
/**
 * @const
 * @type {string}
 */
var QUATERNION                      = "Quaternion";
/**
 * @const
 * @type {!Array.<Sk.ffi.PyType>}
 */
var NUMBER                          = [Sk.ffi.PyType.FLOAT, Sk.ffi.PyType.INT, Sk.ffi.PyType.LONG];
/**
 * @const
 * @type {string}
 */
var PROP_QUANTITY                   = "quantity";
/**
 * @const
 * @type {string}
 */
var PROP_GRADE_0                    = "grade0";
/**
 * @const
 * @type {string}
 */
var PROP_GRADE_1                    = "grade1";
/**
 * @const
 * @type {string}
 */
var PROP_GRADE_2                    = "grade2";
/**
 * @const
 * @type {string}
 */
var PROP_GRADE_3                    = "grade3";
/**
 * @const
 * @type {string}
 */
var METHOD_BUILD                    = "build";
/**
 * ProbeE3
 */
mod[PROBE_E3] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, grade0, grade1, grade2, grade3) {
    Sk.ffi.checkMethodArgs(PROBE_E3, arguments, 4, 4);
    var probe = {};
    probe[PROP_GRADE_0]  = grade0;
    probe[PROP_GRADE_1]  = grade1;
    probe[PROP_GRADE_2]  = grade2;
    probe[PROP_GRADE_3]  = grade3;
    probe[PROP_QUANTITY] = Sk.ffi.none.None;
    Sk.ffi.referenceToPy(probe, PROBE_E3, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var probe = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_GRADE_0: {
        return probe[PROP_GRADE_0];
      }
      case PROP_GRADE_1: {
        return probe[PROP_GRADE_1];
      }
      case PROP_GRADE_2: {
        return probe[PROP_GRADE_2];
      }
      case PROP_GRADE_3: {
        return probe[PROP_GRADE_3];
      }
      case PROP_QUANTITY: {
        return probe[PROP_QUANTITY];
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(PROBE_E3);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var probe = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case PROP_QUANTITY: {
        Sk.ffi.checkArgType(PROP_QUANTITY, EUCLIDEAN_3, Sk.ffi.isClass(valuePy, EUCLIDEAN_3), valuePy);
        /**
         * Compute the Quaternion required to rotate (0,0,1) to (x,y,z).
         *
         * @param {number} x
         * @param {number} y
         * @param {number} z
         */
        function quaternion(x, y, z) {
          if (z !== -1) {
            var scale = 1 / Math.sqrt(2 * (1 + z));
            var xy =  0;
            var yz = +scale * y;
            var zx = -scale * x;
            return new THREE[QUATERNION](-yz, -zx, -xy, scale * (1 + z));
          }
          else {
            return new THREE[QUATERNION](1, 0, 0, 0);
          }
        }
        var value = Sk.ffi.remapToJs(valuePy);
        var w   = value.w;
        var x   = value.x;
        var y   = value.y;
        var z   = value.z;
        var xy  = value.xy;
        var yz  = value.yz;
        var zx  = value.zx;
        var xyz = value.xyz;

        var grade0 = Sk.ffi.remapToJs(probe[PROP_GRADE_0]);
        var s0 = Math.abs(w);
        grade0.scale.set(s0, s0, s0);

        var grade1 = Sk.ffi.remapToJs(probe[PROP_GRADE_1]);
        var s1 = Math.sqrt(x * x + y * y + z * z);
        grade1.scale.set(s1, s1, s1);
        grade1.quaternion = quaternion(x/s1, y/s1, z/s1);

        var grade2 = Sk.ffi.remapToJs(probe[PROP_GRADE_2]);
        var norm2 = Math.sqrt(xy * xy + yz * yz + zx * zx);
        var s2 = Math.pow(norm2, 1/2);
        grade2.scale.set(s2, s2, s2);
        grade2.quaternion = quaternion(yz/norm2, zx/norm2, xy/norm2);

        var grade3 = Sk.ffi.remapToJs(probe[PROP_GRADE_3]);
        var s3 = Math.pow(Math.abs(xyz), 1/3);
        grade3.scale.set(s3, s3, s3);

        probe[PROP_QUANTITY] = valuePy;
      }
      break;
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(PROBE_E3);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PROBE_E3);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PROBE_E3);
  })
}, PROBE_E3, []);
/**
 * ProbeBuilderE3
 */
mod[PROBE_BUILDER_E3] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.checkMethodArgs(PROBE_BUILDER_E3, arguments, 0, 0);
    Sk.ffi.referenceToPy({}, PROBE_BUILDER_E3, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
    var probe = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      case METHOD_BUILD: {
        return Sk.ffi.callableToPy(mod, name, function(methodPy) {
          var builderNames = [SPHERE_BUILDER, ARROW_BUILDER, VORTEX_BUILDER, CUBE_BUILDER];
          var meshes = builderNames.map(function(builderName) {
            var builderPy = Sk.ffi.callsim(mod[builderName]);
            return Sk.ffi.callsim(Sk.ffi.gattr(builderPy, METHOD_BUILD));
          });
          return Sk.ffi.callsim(mod[PROBE_E3], meshes[0], meshes[1], meshes[2], meshes[3]);
        });
      }
      default: {
        throw Sk.ffi.err.attribute(name).isNotGetableOnType(PROBE_BUILDER_E3);
      }
    }
  });
  $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
    var probe = Sk.ffi.remapToJs(selfPy);
    switch(name) {
      default: {
        throw Sk.ffi.err.attribute(name).isNotSetableOnType(PROBE_BUILDER_E3);
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PROBE_BUILDER_E3);
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
    return Sk.ffi.stringToPy(PROBE_BUILDER_E3);
  })
}, PROBE_BUILDER_E3, []);
/**
 *
 */
};
}).call(this);
