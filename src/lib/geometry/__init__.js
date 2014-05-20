var $builtinmodule = function(moduleNamePy) {
  var mod = {};
  Sk.stdlib.defineThree(mod, BLADE);
  Sk.builtin.defineGeometry(mod, THREE, Sk.ffi.remapToJs(moduleNamePy));
  Sk.builtin.defineProbeE3(mod, THREE);
  return mod;
};
