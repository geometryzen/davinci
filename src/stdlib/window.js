Sk.builtin.buildWindowClass = function(mod) {
  /**
   * @const
   * @type {string}
   */
  var DOCUMENT_CLASS                        = "Document";
  /**
   * @const
   * @type {string}
   */
  var EVENT                                 = "Event";
  /**
   * @const
   * @type {string}
   */
  var JS_WRAP_CLASS                         = "JavaScriptWrapper";
  /**
   * @const
   * @type {string}
   */
  var WINDOW_CLASS                          = "Window";
  /**
   * @const
   * @type {string}
   */
  var PROP_ANIMATION_TIME                   = "animationTime";
  /**
   * @const
   * @type {string}
   */
  var PROP_DOCUMENT                         = "document";
  /**
   * @const
   * @type {string}
   */
  var PROP_DEVICE_PIXEL_RATIO               = "devicePixelRatio";
  /**
   * @const
   * @type {string}
   */
  var PROP_INNER_WIDTH                      = "innerWidth";
  /**
   * @const
   * @type {string}
   */
  var PROP_INNER_HEIGHT                     = "innerHeight";
  /**
   * @const
   * @type {string}
   */
  var METHOD_ADD_EVENT_LISTENER             = "addEventListener";
  /**
   * @const
   * @type {string}
   */
  var METHOD_ALERT                          = "alert";
  /**
   * @const
   * @type {string}
   */
  var METHOD_CANCEL_ANIMATION_FRAME         = "cancelAnimationFrame";
  /**
   * @const
   * @type {string}
   */
  var METHOD_CLOSE                          = "close";
  /**
   * @const
   * @type {string}
   */
  var METHOD_CONFIRM                        = "confirm";
  /**
   * @const
   * @type {string}
   */
  var METHOD_OPEN                           = "open";
  /**
   * @const
   * @type {string}
   */
  var METHOD_PROMPT                         = "prompt";
  /**
   * @const
   * @type {string}
   */
  var METHOD_REMOVE_EVENT_LISTENER          = "removeEventListener";
  /**
   * @const
   * @type {string}
   */
  var METHOD_REQUEST_ANIMATION_FRAME        = "requestAnimationFrame";
  /**
   * @const
   * @type {string}
   */
  var METHOD_SET_TIMEOUT                    = "setTimeout";

  // We must be able to track the JavaScript listener functions.
  // TODO: This should include both the type and the useCapture flag.
  var winListeners = {};

  function defaultGetAttribute(mod, selfJs, name, className) {
    var propJs = selfJs[name];
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
          if (name.length > 1 && (name[0] === name[0].toUpperCase())) {
            // Create a new object that inherits from the constructor's prototype.
            var that = Object.create(propJs.prototype);
            // Invoke the constructor function, binding this to the new object.
            var other = propJs.apply(that, argumentsJs);
            // If the return value isn't an object, substitute the new object.
            var valueJs = (typeof other === 'object' && other) || that;
            return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(valueJs, name));
          }
          else {
            var valueJs = propJs.apply(selfJs, argumentsJs);
            switch(typeof valueJs) {
              case 'number': {
                return Sk.ffi.numberToFloatPy(valueJs);
              }
              case 'boolean': {
                return Sk.ffi.booleanToPy(valueJs);
              }
              case 'object': {
                return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(valueJs, JS_WRAP_CLASS));
              }
              default: {
                throw Sk.ffi.err.attribute(typeof valueJs).isNotGetableOnType(name);
              }
            }
          }
        });
      }
      break;
      case 'object': {
        return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(propJs, JS_WRAP_CLASS));
      }
      case 'number': {
        return Sk.ffi.numberToFloatPy(propJs);
      }
      case 'boolean': {
        return Sk.ffi.booleanToPy(propJs);
      }
      case 'string': {
        return Sk.ffi.stringToPy(propJs);
      }
      case 'undefined': {
        return Sk.ffi.none.None;
      }
      default: {
        throw Sk.ffi.err.attribute(typeof propJs).isNotGetableOnType(className);
      }
    }
  }

  mod[JS_WRAP_CLASS] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy, elementPy) {
      Sk.ffi.checkMethodArgs(JS_WRAP_CLASS, arguments, 1, 1);
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(elementPy), elementPy.tp$name, undefined, selfPy);
    });
    $loc.__add__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var lhs = Sk.ffi.remapToJs(selfPy);
      var rhs = Sk.ffi.remapToJs(otherPy);
      var resultJs = lhs.add(rhs);
      return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(resultJs, JS_WRAP_CLASS));
    });
    $loc.__sub__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var lhs = Sk.ffi.remapToJs(selfPy);
      var rhs = Sk.ffi.remapToJs(otherPy);
      var resultJs = lhs.sub(rhs);
      return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(resultJs, JS_WRAP_CLASS));
    });
    $loc.__mul__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var lhs = Sk.ffi.remapToJs(selfPy);
      var rhs = Sk.ffi.remapToJs(otherPy);
      var resultJs = lhs.mul(rhs);
      return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(resultJs, JS_WRAP_CLASS));
    });
    $loc.__div__ = Sk.ffi.functionPy(function(selfPy, otherPy) {
      var lhs = Sk.ffi.remapToJs(selfPy);
      var rhs = Sk.ffi.remapToJs(otherPy);
      var resultJs = lhs.div(rhs);
      return Sk.ffi.callsim(mod[JS_WRAP_CLASS], Sk.ffi.referenceToPy(resultJs, JS_WRAP_CLASS));
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(selfPy, name) {
      return defaultGetAttribute(mod, Sk.ffi.remapToJs(selfPy), name, JS_WRAP_CLASS);
    });
    $loc.__setattr__ = Sk.ffi.functionPy(function(selfPy, name, valuePy) {
      var selfJs = Sk.ffi.remapToJs(selfPy);
      var propJs = selfJs[name];
      switch(name) {
        default: {
          switch(typeof propJs) {
            case 'number': {
              selfJs[name] = Sk.ffi.remapToJs(valuePy);
            }
            break;
            default: {
              throw Sk.ffi.err.attribute(typeof propJs).isNotSetableOnType(JS_WRAP_CLASS);
            }
          }
        }
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(selfPy) {
      var selfJs = Sk.ffi.remapToJs(selfPy);
      return Sk.ffi.stringToPy(selfJs.toString());
    })
    $loc.__repr__ = Sk.ffi.functionPy(function(selfPy) {
      return Sk.ffi.stringToPy(JS_WRAP_CLASS);
    })
  }, JS_WRAP_CLASS, []);

  mod[WINDOW_CLASS] = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    $loc.__init__ = Sk.ffi.functionPy(function(selfPy, windowPy) {
      Sk.ffi.checkMethodArgs(WINDOW_CLASS, arguments, 1, 1);
      Sk.ffi.referenceToPy(Sk.ffi.remapToJs(windowPy), WINDOW_CLASS, undefined, selfPy);
    });
    $loc.__getattr__ = Sk.ffi.functionPy(function(windowPy, name) {
      var windowJs = Sk.ffi.remapToJs(windowPy);
      switch(name) {
        case PROP_ANIMATION_TIME: {
          return Sk.ffi.numberToFloatPy(windowJs[PROP_ANIMATION_TIME]);
        }
        case PROP_DOCUMENT: {
          return Sk.ffi.callsim(mod[DOCUMENT_CLASS], Sk.ffi.referenceToPy(windowJs.document, DOCUMENT_CLASS));
        }
        case PROP_INNER_HEIGHT: {
          return Sk.ffi.numberToIntPy(windowJs[PROP_INNER_HEIGHT]);
        }
        case PROP_INNER_WIDTH: {
          return Sk.ffi.numberToIntPy(windowJs[PROP_INNER_WIDTH]);
        }
        case PROP_DEVICE_PIXEL_RATIO: {
          return Sk.ffi.numberToIntPy(windowJs[PROP_DEVICE_PIXEL_RATIO]);
        }
        case METHOD_ADD_EVENT_LISTENER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_ADD_EVENT_LISTENER;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listenerPy, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = function(event) {
                var eventPy = Sk.misceval.callsim(mod[EVENT], Sk.ffi.referenceToPy(event, EVENT));
                Sk.misceval.callsim(listenerPy, eventPy);
              };
              winListeners[type] = listener;
              windowJs[METHOD_ADD_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_ADD_EVENT_LISTENER, []));
        }
        case METHOD_ALERT: {
          return Sk.ffi.callableToPy(mod, METHOD_ALERT, function(methodPy, messagePy) {
            Sk.ffi.checkMethodArgs(METHOD_ALERT, arguments, 0, 1);
            windowJs[METHOD_ALERT](Sk.ffi.remapToJs(messagePy));
          });
        }
        case METHOD_REMOVE_EVENT_LISTENER: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_REMOVE_EVENT_LISTENER;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, typePy, listener, useCapture) {
              var type = Sk.ffi.remapToJs(typePy);
              var listener = winListeners[type];
              delete winListeners[type];
              windowJs[METHOD_REMOVE_EVENT_LISTENER](type, listener, useCapture);
            });
          }, METHOD_REMOVE_EVENT_LISTENER, []));
        }
        case METHOD_CANCEL_ANIMATION_FRAME: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_CANCEL_ANIMATION_FRAME;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, requestID) {
              if (requestID) {
                windowJs[METHOD_CANCEL_ANIMATION_FRAME](Sk.ffi.remapToJs(requestID));
              }
            });
          }, METHOD_CANCEL_ANIMATION_FRAME, []));
        }
        case METHOD_CLOSE: {
          return Sk.ffi.callableToPy(mod, METHOD_CLOSE, function(methodPy) {
            Sk.ffi.checkMethodArgs(METHOD_CLOSE, arguments, 0, 0);
            windowJs[METHOD_CLOSE]();
          });
        }
        case METHOD_CONFIRM: {
          return Sk.ffi.callableToPy(mod, METHOD_CONFIRM, function(methodPy, messagePy) {
            Sk.ffi.checkMethodArgs(METHOD_CONFIRM, arguments, 0, 1);
            return Sk.ffi.booleanToPy(windowJs[METHOD_CONFIRM](Sk.ffi.remapToJs(messagePy)));
          });
        }
        case METHOD_OPEN: {
          return Sk.ffi.callableToPy(mod, METHOD_OPEN, function(methodPy, urlPy, namePy, specsPy, replacePy) {
            Sk.ffi.checkMethodArgs(METHOD_OPEN, arguments, 0, 4);
            if (Sk.ffi.isDefined(urlPy)) {
              Sk.ffi.checkArgType("URL", Sk.ffi.PyType.STR, Sk.ffi.isStr(urlPy), urlPy);
            }
            if (Sk.ffi.isDefined(namePy)) {
              Sk.ffi.checkArgType("name", Sk.ffi.PyType.STR, Sk.ffi.isStr(namePy), namePy);
            }
            if (Sk.ffi.isDefined(specsPy)) {
              Sk.ffi.checkArgType("specs", Sk.ffi.PyType.STR, Sk.ffi.isStr(specsPy), specsPy);
            }
            if (Sk.ffi.isDefined(replacePy)) {
              Sk.ffi.checkArgType("replace", Sk.ffi.PyType.BOOL, Sk.ffi.isBool(replacePy), replacePy);
            }
            var w = windowJs[METHOD_OPEN](Sk.ffi.remapToJs(urlPy), Sk.ffi.remapToJs(namePy), Sk.ffi.remapToJs(specsPy), Sk.ffi.remapToJs(replacePy));
            return Sk.ffi.callsim(mod[WINDOW_CLASS], Sk.ffi.referenceToPy(w, WINDOW_CLASS));
          });
        }
        case METHOD_PROMPT: {
          return Sk.ffi.callableToPy(mod, METHOD_PROMPT, function(methodPy, textPy, valuePy) {
            Sk.ffi.checkMethodArgs(METHOD_PROMPT, arguments, 0, 2);
            return Sk.ffi.stringToPy(windowJs[METHOD_PROMPT](Sk.ffi.remapToJs(textPy), Sk.ffi.remapToJs(valuePy)));
          });
        }
        case METHOD_REQUEST_ANIMATION_FRAME: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_REQUEST_ANIMATION_FRAME;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, callback) {
              var requestID = windowJs[METHOD_REQUEST_ANIMATION_FRAME](function(timestamp) {
                Sk.misceval.callsim(callback, Sk.ffi.numberToFloatPy(timestamp));
              });
              return Sk.ffi.numberToFloatPy(requestID);
            });
          }, METHOD_REQUEST_ANIMATION_FRAME, []));
        }
        case METHOD_SET_TIMEOUT: {
          return Sk.misceval.callsim(Sk.misceval.buildClass(mod, function($gbl, $loc) {
            $loc.__init__ = Sk.ffi.functionPy(function(self) {
              self.tp$name = METHOD_SET_TIMEOUT;
            });
            $loc.__call__ = Sk.ffi.functionPy(function(self, funcPy, delayPy, paramsPy) {
              var delay = Sk.ffi.remapToJs(delayPy);
              var params = Sk.ffi.remapToJs(paramsPy);
              var timeoutID = windowJs[METHOD_SET_TIMEOUT](function() {
                Sk.misceval.callsim(funcPy);
              }, delay, params);
              return Sk.ffi.numberToFloatPy(timeoutID);
            });
          }, METHOD_SET_TIMEOUT, []));
        }
        default: {
          return defaultGetAttribute(mod, windowJs, name, WINDOW_CLASS);
        }
      }
    });
    $loc.__str__ = Sk.ffi.functionPy(function(self) {
      return Sk.ffi.stringToPy(WINDOW_CLASS)
    })
    $loc.__repr__ = Sk.ffi.functionPy(function(self, arg) {
      return Sk.ffi.stringToPy(WINDOW_CLASS)
    })
  }, WINDOW_CLASS, []);

  return mod[WINDOW_CLASS];
};
