var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineEuclidean3(mod, THREE, BLADE);
  return mod;
}
