var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineWorkbench(mod);
  return mod;
}
