var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineUnits(mod, BLADE);
  return mod;
};