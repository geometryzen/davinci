/**
 * Geometric Algebra (e3ga) module.
 *
 * David Holmes (david.geo.holmes@gmail.com)
 */
var $builtinmodule = function(name) {

  var mod = {};

  function vectorJs(x, y, z) {
    if (THREE) {
      if (THREE.Vector3) {
        return new THREE.Vector3(x, y, z);
      }
      else {
        throw Sk.ffi.assertionError("e8f590a3-5537-4d09-9466-00c9ec48f62b");
      }
    }
    else {
      throw Sk.ffi.assertionError("1ebfe824-fd90-4006-b125-393969afd814");
    }
  }
  function quaternionJs(x, y, z, w) {return new THREE.Quaternion(x, y, z, w);}

  Sk.builtin.defineEuclidean3(mod, {"vector": vectorJs, "quaternion": quaternionJs}, "Euclidean3");
  Sk.builtin.defineUnits(mod);

  return mod;
}
