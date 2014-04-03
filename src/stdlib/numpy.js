(function() {
  Sk.builtin.defineNumPy = function(mod) {
    Sk.ffi.checkFunctionArgs("defineNumPy", arguments, 1, 1);

    mod['array'] = Sk.ffi.functionPy(function() {
      Sk.ffi.checkFunctionArgs("array", arguments, 1, 3);
    });

    mod['empty'] = Sk.ffi.functionPy(function(shapePy, dtypePy, orderPy) {
      Sk.ffi.checkFunctionArgs("empty", arguments, 1, 3);
    });

    mod['sqrt'] = Sk.ffi.functionPy(function() {
      Sk.ffi.checkFunctionArgs("sqrt", arguments, 1, 1);
    });

    mod['zeros'] = Sk.ffi.functionPy(function() {
      Sk.ffi.checkFunctionArgs("zeros", arguments, 1, 2);
    });
  };
}).call(this);
