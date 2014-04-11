var $builtinmodule = function(name)
{
  var mod = {};
  Sk.builtin.defineHttp(mod);
  return mod;
};
