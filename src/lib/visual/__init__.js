/**
 * The 'visual' module is a superset of the 'three' module.
 *
 * The 'visual' module contains additional helper functions for Physicists.
 *
 * David Holmes (david.geo.holmes@gmail.com)
 */
var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineThree(mod, THREE);
  Sk.builtin.defineVisual(mod, THREE);
  return mod;
}
