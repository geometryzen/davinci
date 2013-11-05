var $builtinmodule = function(namePy) {
  var mod = {};
  Sk.stdlib.defineThree(mod, BLADE);
  Sk.builtin.defineGeometry(mod, THREE, Sk.ffi.remapToJs(namePy));
  return mod;
}
