var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineNumPy(mod);
  return mod;
};
