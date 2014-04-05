(function() {
  Sk.builtin.defineJXG = function(mod) {
    Sk.ffi.checkFunctionArgs("defineJXG", arguments, 1, 1);
    /**
     * @const
     * @type {string}
     */
    var JS_WRAP_CLASS                         = "JavaScriptWrapper";

    mod[JS_WRAP_CLASS] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = Sk.ffi.functionPy(function(selfPy, elementPy) {
        Sk.ffi.checkMethodArgs(JS_WRAP_CLASS, arguments, 1, 1);
        Sk.ffi.referenceToPy(Sk.ffi.remapToJs(elementPy), JS_WRAP_CLASS, undefined, selfPy);
      });
      $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        var propJs = selfJs[name];
        switch(name) {
          default: {
            switch(typeof propJs) {
              case 'function': {
                return Sk.ffi.callableToPy(mod, name, function(methodPy) {
                  Sk.ffi.checkFunctionArgs(name, arguments, 1);
                  var argumentsPy = Array.prototype.slice.call(arguments, 1);
                  var argumentsJs = [];
                  for (var i = 0; i < argumentsPy.length; ++i)
                  {
                      argumentsJs.push(Sk.ffi.remapToJs(argumentsPy[i]));
                  }
                  var valueJs = propJs.apply(selfJs, argumentsJs);
                  switch(typeof valueJs) {
                    case 'number': {
                      return Sk.ffi.numberToFloatPy(valueJs);
                    }
                    case 'object': {
                      return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(valueJs, JS_WRAP_CLASS));
                    }
                    default: {
                      throw Sk.ffi.err.attribute(typeof valueJs).isNotGetableOnType(JS_WRAP_CLASS);
                    }
                  }
                });
              }
              break;
              case 'object': {
                return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(propJs, JS_WRAP_CLASS));
              }
              default: {
                throw Sk.ffi.err.attribute(typeof propJs).isNotGetableOnType(JS_WRAP_CLASS);
              }
            }
          }
        }
      });
      $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
        switch(name) {
          default: {
            throw Sk.ffi.err.attribute(name).isNotSetableOnType(JS_WRAP_CLASS);
          }
        }
      });
      $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
        return Sk.ffi.stringToPy(JS_WRAP_CLASS)
      })
      $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
        return Sk.ffi.stringToPy(JS_WRAP_CLASS)
      })
    }, JS_WRAP_CLASS, []);

    mod['JSXGraph'] = Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(JXG.JSXGraph, JS_WRAP_CLASS));

    mod['require'] = Sk.ffi.functionPy(function(namePy) {
      Sk.ffi.checkFunctionArgs("require", arguments, 1, 1);
      Sk.ffi.checkArgType("name", Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
      return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(window[Sk.ffi.remapToJs(namePy)], JS_WRAP_CLASS));
    });

  };
}).call(this);
