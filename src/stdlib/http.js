(function() {
  Sk.builtin.defineHttp = function(mod) {
    Sk.ffi.checkFunctionArgs("defineHttp", arguments, 1, 1);

    var XML_HTTP_REQUEST   = "XMLHttpRequest";
    var METHOD_OPEN        = "open";
    var METHOD_SEND        = "send";
    var PROP_ONLOAD        = "onload";
    var PROP_RESPONSE_TYPE = "responseType";

    mod[XML_HTTP_REQUEST] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
      $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
        var requestJs = new XMLHttpRequest();
        Sk.ffi.referenceToPy(requestJs, XML_HTTP_REQUEST, undefined, selfPy);
      });
      $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
        var requestJs = Sk.ffi.remapToJs(selfPy);
        switch(name) {
          case METHOD_OPEN: {
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(mPy) {
                Sk.ffi.referenceToPy(null, METHOD_OPEN, null, mPy);
              });
              $loc.__call__ = Sk.ffi.functionPy(function(mPy, methodPy, urlPy, asyncPy, userPy, passwordPy) {
                Sk.ffi.checkMethodArgs(METHOD_OPEN, arguments, 2, 5);
                Sk.ffi.checkArgType("method", [Sk.ffi.PyType.STR],  Sk.builtin.isStringPy(methodPy), methodPy);
                Sk.ffi.checkArgType("url",    [Sk.ffi.PyType.STR],  Sk.builtin.isStringPy(urlPy),    urlPy);
                Sk.ffi.checkArgType("async",  [Sk.ffi.PyType.BOOL], Sk.ffi.isBool(asyncPy), asyncPy);
                var method = Sk.builtin.stringToJs(methodPy);
                var url = Sk.builtin.stringToJs(urlPy);
                var async = Sk.ffi.remapToJs(asyncPy);
                requestJs.open(method, url, async);
              });
            }, METHOD_OPEN, []));
          }
          case METHOD_SEND: {
            return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
              $loc.__init__ = Sk.ffi.functionPy(function(mPy) {
                Sk.ffi.referenceToPy(null, METHOD_SEND, null, mPy);
              });
              $loc.__call__ = Sk.ffi.functionPy(function(mPy, dataPy) {
                Sk.ffi.checkMethodArgs(METHOD_SEND, arguments, 0, 1);
                requestJs.send();
              });
            }, METHOD_SEND, []));
          }
          default: {
            throw Sk.ffi.err.attribute(name).isNotGetableOnType(XML_HTTP_REQUEST);
          }
        }
      });
      $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
        var requestJs = Sk.ffi.remapToJs(selfPy);
        switch(name) {
          case PROP_ONLOAD: {
            Sk.ffi.checkArgType(name, [Sk.ffi.PyType.FUNCTION], Sk.ffi.isFunction(valuePy), valuePy);
            requestJs.onload = Sk.ffi.remapToJs(valuePy);
          }
          break;
          case PROP_RESPONSE_TYPE: {
            Sk.ffi.checkArgType(name, [Sk.ffi.PyType.STR], Sk.builtin.isStringPy(valuePy), valuePy);
            requestJs.responseType = Sk.ffi.remapToJs(valuePy);
          }
          break;
          default: {
            throw Sk.ffi.err.attribute(name).isNotSetableOnType(XML_HTTP_REQUEST);
          }
        }
      });
      $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        return Sk.builtin.stringToPy(XML_HTTP_REQUEST);
      })
      $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
        var selfJs = Sk.ffi.remapToJs(selfPy);
        return Sk.builtin.stringToPy(XML_HTTP_REQUEST+'()');
      })
    }, XML_HTTP_REQUEST, []);
  };
}).call(this);
