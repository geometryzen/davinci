var $builtinmodule = function(name) {
  var mod = {};
  Sk.builtin.defineEasel(mod, createjs, BLADE);
  return mod;
}
