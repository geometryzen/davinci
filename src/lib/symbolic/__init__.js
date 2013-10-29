var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineSymbolic(mod, "symbolic");
  return mod;
};
