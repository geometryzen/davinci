/**
 * The 'geometry' module is a superset of the 'three' module.
 *
 * David Holmes (david.geo.holmes@gmail.com)
 */
var $builtinmodule = function(moduleNamePy) {
  var mod = {};
  Sk.builtin.defineThree(mod, THREE);
  Sk.builtin.defineGeometry(mod, THREE, Sk.ffi.remapToJs(moduleNamePy));
  return mod;
}
