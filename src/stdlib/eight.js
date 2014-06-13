(function()
{
  Sk.stdlib.defineEight = function(mod, BLADE)
  {
    Sk.ffi.checkFunctionArgs("defineEight", arguments, 2, 2);
    Sk.builtin.defineNode(mod);
  }
}).call(this);
