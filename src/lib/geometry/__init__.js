var $builtinmodule = function(moduleNamePy) {
  var mod = {};
  Sk.builtin.defineThree(mod, THREE, BLADE);
  Sk.builtin.defineGeometry(mod, THREE, Sk.ffi.remapToJs(moduleNamePy));
  Sk.builtin.defineProbeE3(mod, THREE);
  return mod;
}
