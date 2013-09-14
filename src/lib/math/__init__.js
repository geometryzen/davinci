var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineMath(mod);
  return mod;
};