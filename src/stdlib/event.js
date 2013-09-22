Sk.builtin.defineEvent = function(mod) {
/**
 * @const
 * @type {string}
 */
var EVENT                                 = "Event";
/**
 * @const
 * @type {string}
 */
var PROP_ALT_KEY                          = "altKey";
/**
 * @const
 * @type {string}
 */
var PROP_BUBBLES                          = "bubbles";
/**
 * @const
 * @type {string}
 */
var PROP_BUTTON                           = "button";
/**
 * @const
 * @type {string}
 */
var PROP_CANCELABLE                       = "cancelable";
/**
 * @const
 * @type {string}
 */
var PROP_CLIENT_X                         = "clientX";
/**
 * @const
 * @type {string}
 */
var PROP_CLIENT_Y                         = "clientY";
/**
 * @const
 * @type {string}
 */
var PROP_CTRL_KEY                         = "ctrlKey";
/**
 * @const
 * @type {string}
 */
var PROP_DEFAULT_PREVENTED                = "defaultPrevented";
/**
 * @const
 * @type {string}
 */
var PROP_KEY_CODE                         = "keyCode";
/**
 * @const
 * @type {string}
 */
var PROP_SCREEN_X                         = "screenX";
/**
 * @const
 * @type {string}
 */
var PROP_SCREEN_Y                         = "screenY";
/**
 * @const
 * @type {string}
 */
var PROP_SHIFT_KEY                        = "shiftKey";
/**
 * @const
 * @type {string}
 */
var PROP_TARGET                           = "target";
/**
 * @const
 * @type {string}
 */
var PROP_TYPE                             = "type";
/**
 * @const
 * @type {string}
 */
var METHOD_ADD_EVENT_LISTENER             = "addEventListener";
/**
 * @const
 * @type {string}
 */
var METHOD_PREVENT_DEFAULT                = "preventDefault";
/**
 * @const
 * @type {string}
 */
var METHOD_STOP_IMMEDIATE_PROPAGATION     = "stopImmediatePropagation";
/**
 * @const
 * @type {string}
 */
var METHOD_STOP_PROPAGATION               = "stopPropagation";
/**
 * Event
 */
mod[EVENT] = Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy, eventRefPy) {
    Sk.ffi.referenceToPy(Sk.ffi.remapToJs(eventRefPy), EVENT, undefined, selfPy);
  });
  $loc.__getattr__ = Sk.ffi.functionPy(function(eventPy, name) {
    var event = Sk.ffi.remapToJs(eventPy);
    switch(name) {
      case PROP_ALT_KEY: {
        return Sk.ffi.booleanToPy(event[PROP_ALT_KEY]);
      }
      case PROP_BUBBLES: {
        return Sk.ffi.booleanToPy(event[PROP_BUBBLES]);
      }
      case PROP_BUTTON: {
        return Sk.ffi.numberToIntPy(event[PROP_BUTTON]);
      }
      case PROP_CANCELABLE: {
        return Sk.ffi.booleanToPy(event[PROP_CANCELABLE]);
      }
      case PROP_CLIENT_X: {
        return Sk.ffi.numberToIntPy(event[PROP_CLIENT_X]);
      }
      case PROP_CLIENT_Y: {
        return Sk.ffi.numberToIntPy(event[PROP_CLIENT_Y]);
      }
      case PROP_CTRL_KEY: {
        return Sk.ffi.booleanToPy(event[PROP_CTRL_KEY]);
      }
      case PROP_DEFAULT_PREVENTED: {
        return Sk.ffi.booleanToPy(event[PROP_DEFAULT_PREVENTED]);
      }
      case PROP_KEY_CODE: {
        return Sk.ffi.numberToIntPy(event[PROP_KEY_CODE]);
      }
      case PROP_SCREEN_X: {
        return Sk.ffi.numberToIntPy(event[PROP_SCREEN_X]);
      }
      case PROP_SCREEN_Y: {
        return Sk.ffi.numberToIntPy(event[PROP_SCREEN_Y]);
      }
      case PROP_SHIFT_KEY: {
        return Sk.ffi.booleanToPy(event[PROP_SHIFT_KEY]);
      }
      case PROP_TARGET: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
            // TODO: Do we need some kind of Variant class?
            Sk.ffi.referenceToPy(event.target, PROP_TARGET, undefined, selfPy);
          });
          $loc.__getattr__ = Sk.ffi.functionPy(function(targetPy, name) {
            // TODO: Do we need some kind of Variant class?
            return Sk.ffi.remapToPy(event.target[name], "")
          })
          $loc.__setattr__ = Sk.ffi.functionPy(function(targetPy, name, valuePy) {
            event.target[name] = Sk.ffi.remapToJs(valuePy);
          })
          $loc.__str__ = Sk.ffi.functionPy(function(targetPy) {
            var target = Sk.ffi.remapToJs(targetPy);
            return Sk.ffi.stringToPy("" + target)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(targetPy) {
            var target = Sk.ffi.remapToJs(targetPy);
            return Sk.ffi.stringToPy("" + target)
          })
        }, PROP_TARGET, []));
      }
      case PROP_TYPE: {
        return Sk.ffi.stringToPy(event[PROP_TYPE]);
      }
      case METHOD_ADD_EVENT_LISTENER: {
        return Sk.builtin.addEventListener(mod, event);
      }
      case METHOD_PREVENT_DEFAULT: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_PREVENT_DEFAULT;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            event[METHOD_PREVENT_DEFAULT]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_PREVENT_DEFAULT)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_PREVENT_DEFAULT)
          })
        }, METHOD_PREVENT_DEFAULT, []));
      }
      case METHOD_STOP_IMMEDIATE_PROPAGATION: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_STOP_IMMEDIATE_PROPAGATION;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            event[METHOD_STOP_IMMEDIATE_PROPAGATION]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_STOP_IMMEDIATE_PROPAGATION)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_STOP_IMMEDIATE_PROPAGATION)
          })
        }, METHOD_STOP_IMMEDIATE_PROPAGATION, []));
      }
      case METHOD_STOP_PROPAGATION: {
        return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
          $loc.__init__ = Sk.ffi.functionPy(function(self) {
            self.tp$name = METHOD_STOP_PROPAGATION;
          });
          $loc.__call__ = Sk.ffi.functionPy(function(self) {
            event[METHOD_STOP_PROPAGATION]();
          });
          $loc.__str__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_STOP_PROPAGATION)
          })
          $loc.__repr__ = Sk.ffi.functionPy(function(self) {
            return Sk.ffi.stringToPy(METHOD_STOP_PROPAGATION)
          })
        }, METHOD_STOP_PROPAGATION, []));
      }
      default: {
        // TODO: Do we need some kind of Variant class?
        return Sk.ffi.remapToPy(event[name], "");
      }
    }
  });
  $loc.__str__ = Sk.ffi.functionPy(function(eventPy) {
    var event = Sk.ffi.remapToJs(eventPy);
    return Sk.ffi.stringToPy("" + event)
  })
  $loc.__repr__ = Sk.ffi.functionPy(function(eventPy) {
    var event = Sk.ffi.remapToJs(eventPy);
    return Sk.ffi.stringToPy("" + event)
  })
}, EVENT, []);
};

Sk.builtin.addEventListener = function (mod, eventTarget) {
var EVENT                                 = "Event";
var METHOD_ADD_EVENT_LISTENER             = "addEventListener";
return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.referenceToPy(eventTarget[METHOD_ADD_EVENT_LISTENER], METHOD_ADD_EVENT_LISTENER, undefined, selfPy);
  });
  $loc.__call__ = Sk.ffi.functionPy(function(selfPy, typePy, listenerPy, useCapturePy) {
    var type = Sk.ffi.remapToJs(typePy);
    var listenerJs = function(event) {
      var eventPy = Sk.ffi.callsim(mod[EVENT], Sk.ffi.referenceToPy(event, EVENT));
      Sk.ffi.callsim(listenerPy, eventPy);
    };
    var useCapture = Sk.ffi.remapToJs(useCapturePy);
    eventTarget[METHOD_ADD_EVENT_LISTENER](type, listenerJs, useCapture);
  });
}, METHOD_ADD_EVENT_LISTENER, []));
};

Sk.builtin.removeEventListener = function (mod, eventTarget) {
var EVENT                                 = "Event";
var METHOD_REMOVE_EVENT_LISTENER          = "removeEventListener";
return Sk.ffi.callsim(Sk.ffi.buildClass(mod, function($gbl, $loc) {
  $loc.__init__ = Sk.ffi.functionPy(function(selfPy) {
    Sk.ffi.referenceToPy(eventTarget[METHOD_REMOVE_EVENT_LISTENER], METHOD_REMOVE_EVENT_LISTENER, undefined, selfPy);
  });
  $loc.__call__ = Sk.ffi.functionPy(function(selfPy, typePy, listenerPy, useCapturePy) {
    var type = Sk.ffi.remapToJs(typePy);
    var listenerJs = function(event) {
      var eventPy = Sk.ffi.callsim(mod[EVENT], Sk.ffi.referenceToPy(event, EVENT));
      Sk.ffi.callsim(listenerPy, eventPy);
    };
    var useCapture = Sk.ffi.remapToJs(useCapturePy);
    eventTarget[METHOD_REMOVE_EVENT_LISTENER](type, listenerJs, useCapture);
  });
}, METHOD_REMOVE_EVENT_LISTENER, []));
};
