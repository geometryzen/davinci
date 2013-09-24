var $builtinmodule = function(namePy) {
  var mod = {};
  Sk.builtin.defineThree(mod, THREE, BLADE);
  Sk.builtin.defineGeometry(mod, THREE, Sk.ffi.remapToJs(namePy));
  return mod;
}
