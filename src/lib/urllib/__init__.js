var $builtinmodule = function(name)
{
  var mod = {};
  Sk.builtin.defineUrlLib(mod);
  return mod;
};
