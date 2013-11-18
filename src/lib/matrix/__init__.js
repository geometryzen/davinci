var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineMatrix(mod);
  return mod;
};